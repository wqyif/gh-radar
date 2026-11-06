"""命令行入口：按时间桶抓取 -> 存档 -> 分析 -> 打分 -> 出简报。"""

import argparse
import sys
from datetime import date, timedelta
from pathlib import Path

import config
from radar import enrich, fetch, mock_data, render, score, store


def prepare_trending(today, conn):
    """抓今日榜单，补全创建时间后归桶；超出三个月或时间不明的直接丢掉。"""
    kept = []
    for item in fetch.trending():
        if not item["created_at"]:
            cached = store.load_meta(conn, item["full_name"])
            if cached:
                item.update(cached)
        if not item["created_at"]:
            fetch.hydrate(item)
            if item["created_at"]:
                store.save_meta(conn, item["full_name"], today.isoformat(), item)
        if not item["created_at"]:
            continue
        try:
            age = (today - date.fromisoformat(item["created_at"])).days
        except ValueError:
            continue
        bucket = config.bucket_for(age)
        if not bucket:
            continue
        item["bucket"] = bucket["key"]
        kept.append(item)
    return kept


def collect_bucket(bucket, today, trending):
    since = (today - timedelta(days=bucket["max_age"])).isoformat()
    until = (today - timedelta(days=bucket["min_age"])).isoformat()
    repos = fetch.search_bucket(since, until, bucket["min_stars"], bucket["key"])

    known = {r["full_name"]: r for r in repos}
    for item in trending:
        if item["bucket"] != bucket["key"]:
            continue
        if item["full_name"] in known:
            known[item["full_name"]]["stars_today"] = item["stars_today"]
        else:
            repos.append(item)
    return repos


def analyze_bucket(repos, limit, args, conn, today, since):
    items = []
    for i, repo in enumerate(repos[:limit], 1):
        cached = None if args.mock else store.load_analysis(conn, repo["full_name"])
        if cached and cached.get("_model") != enrich.CACHE_KEY:
            cached = None          # 换了模型或改了 prompt 就重新分析
        if cached is None:
            print(f"      ({i}) {repo['full_name']}")
            if args.mock:
                cached = mock_data.analyze(repo)
            else:
                cached = enrich.analyze(repo, fetch.readme(repo["full_name"]))
                cached["_model"] = enrich.CACHE_KEY
                store.save_analysis(conn, repo["full_name"], today.isoformat(), cached)
        delta = store.star_delta(conn, repo["full_name"], since)
        items.append(score.evaluate(repo, cached, delta, today))
    return items


def main():
    parser = argparse.ArgumentParser(description="GitHub 好玩项目情报工具")
    parser.add_argument("--mock", action="store_true", help="用假数据离线跑通")
    parser.add_argument("--archive-only", action="store_true", help="只存快照，不调 LLM")
    parser.add_argument("--limit", type=int, default=0, help="每桶最多分析几个，默认取配置")
    parser.add_argument("--bucket", type=int, default=-1, help="只跑第 N 个时间桶（0 起）")
    parser.add_argument("--db", default="", help="SQLite 路径")
    args = parser.parse_args()

    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    today = date.today()
    db_path = args.db or ("data/radar-mock.db" if args.mock else "data/radar.db")
    conn = store.connect(db_path)

    buckets = config.BUCKETS
    if 0 <= args.bucket < len(buckets):
        buckets = [buckets[args.bucket]]

    trending = [] if args.mock else prepare_trending(today, conn)
    limit = args.limit or config.ANALYZE_PER_BUCKET

    results, scanned = [], 0
    for bucket in buckets:
        print(f"[{bucket['title']}] 抓取")
        if args.mock:
            repos = [r for r in mock_data.repos() if r["bucket"] == bucket["key"]]
        else:
            repos = collect_bucket(bucket, today, trending)
        repos.sort(key=lambda r: (0 if r["source"] == "search" else 1, -r["stars"]))
        store.record(conn, repos, today.isoformat())
        scanned += len(repos)
        print(f"      候选 {len(repos)} 个")

        if args.archive_only:
            continue

        since = (today - timedelta(days=bucket["max_age"])).isoformat()
        items = analyze_bucket(repos, limit, args, conn, today, since)
        chosen, leftovers = score.pick(items)
        results.append({"bucket": bucket, "chosen": chosen, "leftovers": leftovers})
        print(f"      入选 {len(chosen)} 条")

    if args.archive_only:
        print(f"archive-only：已存 {scanned} 个快照，跳过分析与出稿")
        return 0

    text = render.render(results, today.isoformat(), scanned)
    prefix = "mock-" if args.mock else ""
    suffix = f"-bucket{args.bucket}" if 0 <= args.bucket < len(config.BUCKETS) else ""
    out = Path("reports") / f"{prefix}{today.isoformat()}{suffix}.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(text, encoding="utf-8")
    print(f"已写入 {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
