"""命令行入口：抓取 -> 存档 -> 分析 -> 打分 -> 出简报。"""

import argparse
import sys
from datetime import date, timedelta
from pathlib import Path

import config
from radar import enrich, fetch, mock_data, render, score, store


def collect(args, since, today, conn):
    """抓候选仓库：Search API 找新项目，Trending 补充当下热点。"""
    repos = fetch.search(since.isoformat())
    known = {r["full_name"]: r for r in repos}

    for item in fetch.trending():
        if item["full_name"] in known:
            known[item["full_name"]]["stars_today"] = item["stars_today"]
        else:
            repos.append(item)

    cutoff = today - timedelta(days=config.MAX_AGE_DAYS)
    kept, dropped, unknown = [], 0, 0
    for item in repos:
        if item["source"] == "trending":
            if not item["created_at"]:
                cached = store.load_meta(conn, item["full_name"])
                if cached:
                    item.update(cached)
            if not item["created_at"]:
                fetch.hydrate(item)
                if item["created_at"]:
                    store.save_meta(conn, item["full_name"], today.isoformat(), item)
            if not item["created_at"]:
                unknown += 1      # 拿不到创建时间就无法判断新旧，宁可丢掉
                continue
            try:
                if date.fromisoformat(item["created_at"]) < cutoff:
                    dropped += 1
                    continue
            except ValueError:
                unknown += 1
                continue
        kept.append(item)

    if dropped or unknown:
        print(f"      丢弃 {dropped} 个超过 {config.MAX_AGE_DAYS} 天的老项目、{unknown} 个无法确认年份的")
    return kept


def main():
    parser = argparse.ArgumentParser(description="GitHub 新项目情报工具")
    parser.add_argument("--days", type=int, default=3, help="回看天数")
    parser.add_argument("--mock", action="store_true", help="用假数据离线跑通")
    parser.add_argument("--archive-only", action="store_true", help="只存快照，不调 LLM")
    parser.add_argument("--limit", type=int, default=0, help="最多分析多少个仓库")
    parser.add_argument("--db", default="", help="SQLite 路径")
    args = parser.parse_args()

    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    today = date.today()
    since = today - timedelta(days=args.days)
    db_path = args.db or ("data/radar-mock.db" if args.mock else "data/radar.db")
    conn = store.connect(db_path)

    print(f"[1/4] 抓取 {since} 之后的候选项目")
    if args.mock:
        repos = mock_data.repos()
    else:
        repos = collect(args, since, today, conn)
    # Search 源是"这三天新创建的"，优先分析；Trending 多为老项目回锅，排在后面
    repos.sort(key=lambda r: (0 if r["source"] == "search" else 1, -r["stars"]))
    store.record(conn, repos, today.isoformat())
    print(f"      共 {len(repos)} 个候选，已写入 {db_path}")

    if args.archive_only:
        print("[2/4] archive-only：跳过分析与出稿")
        return 0

    limit = args.limit or config.MAX_ANALYZE
    print(f"[2/4] 分析前 {min(limit, len(repos))} 个仓库")
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
        delta = store.star_delta(conn, repo["full_name"], since.isoformat())
        items.append(score.evaluate(repo, cached, delta, today))

    print("[3/4] 打分与配额选取")
    chosen, leftovers = score.select(items)

    print("[4/4] 生成简报")
    text = render.render(chosen, leftovers, args.days, today.isoformat(), len(repos))
    name = f"mock-{today.isoformat()}.md" if args.mock else f"{today.isoformat()}.md"
    out = Path("reports") / name
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(text, encoding="utf-8")

    for category, picked in chosen.items():
        print(f"      {config.CATEGORY_TITLES[category]}: {len(picked)} 条")
    print(f"      已写入 {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
