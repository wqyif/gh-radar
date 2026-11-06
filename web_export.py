"""把 SQLite 里的分析结果导出成前端要的 JSON。"""

import json
from datetime import date
from pathlib import Path

import config
from radar import enrich, score, store

OUT = Path("web/data.json")


def collect_items(conn, today):
    scored = []
    for repo, payload in conn.execute("SELECT repo, payload FROM analyses").fetchall():
        analysis = json.loads(payload)
        if analysis.get("_model") != enrich.CACHE_KEY:
            continue          # 旧模型或旧 prompt 的结论不导出
        meta = store.load_repo(conn, repo)
        if not meta or not meta.get("created_at"):
            continue
        try:
            age = (today - date.fromisoformat(meta["created_at"])).days
        except ValueError:
            continue
        bucket = config.bucket_for(age)
        if not bucket:
            continue
        meta["bucket"] = bucket["key"]
        scored.append(score.evaluate(meta, analysis, None, today))
    return scored


def flatten(item, picked):
    repo, a = item["repo"], item["analysis"]
    return {
        "repo": repo["full_name"],
        "url": repo["url"],
        "what": a["what"],
        "why": a["why_now"],
        "theme": a["theme"],
        "theme_title": config.THEMES[a["theme"]],
        "bucket": repo["bucket"],
        "category": item["category"],
        "total": item["total"],
        "stars": repo["stars"],
        "created_at": repo["created_at"],
        "language": repo["language"],
        "runnable": a["runnable"],
        "concepts": a["teaching"]["concepts"],
        "assignment": a["teaching"]["assignment"],
        "hype": a["hype_flags"],
        "picked": picked,
    }


def main():
    conn = store.connect("data/radar.db")
    today = date.today()
    scored = collect_items(conn, today)

    items = []
    for bucket in config.BUCKETS:
        in_bucket = [it for it in scored if it["repo"]["bucket"] == bucket["key"]]
        chosen, _ = score.pick(in_bucket)
        picked_ids = {id(it) for it in chosen}
        items += [flatten(it, id(it) in picked_ids) for it in in_bucket]

    buckets = [{
        "key": b["key"],
        "title": b["title"],
        "min_age": b["min_age"],
        "max_age": b["max_age"],
        "count": sum(1 for it in items if it["bucket"] == b["key"]),
    } for b in config.BUCKETS]

    items.sort(key=lambda it: -it["total"])
    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps({
        "generated": today.isoformat(),
        "buckets": buckets,
        "themes": config.THEMES,
        "items": items,
    }, ensure_ascii=False, indent=1)
    OUT.write_text(payload, encoding="utf-8")
    # 同时写一份 JS，双击 index.html 也能直接打开（file:// 下 fetch 会被拦）
    (OUT.parent / "data.js").write_text(f"window.RADAR = {payload};", encoding="utf-8")
    print(f"导出 {len(items)} 条到 {OUT}，其中精选 {sum(it['picked'] for it in items)} 条")


if __name__ == "__main__":
    main()
