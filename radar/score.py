"""五维打分 + 去炒作 + 按配额选稿。"""

import math
from datetime import date

import config


def heat(repo, delta):
    """有跨天增量就用增量，否则退回总量。"""
    best = max(delta or 0, repo.get("stars_today") or 0)
    if best > 0:
        return min(1.0, best / 300)
    return min(1.0, math.log10(max(repo["stars"], 1) + 1) / 4.5)


def trust(repo, analysis, today=None):
    """纯客观信号，从 1.0 往下扣。"""
    today = today or date.today()
    score = 1.0
    stars = repo["stars"]
    forks = repo["forks"]
    ratio = forks / stars if stars else 0

    if stars > 500 and ratio < 0.02:
        score -= 0.3          # fork 太少，star 来路可疑
    if stars > 500 and repo["open_issues"] == 0:
        score -= 0.2          # 零 issue，通常是纯营销仓库
    if not repo["license"]:
        score -= 0.1
    try:
        age = (today - date.fromisoformat(repo["created_at"])).days
    except (ValueError, TypeError):
        age = 999
    if age <= 2 and stars > 3000:
        score -= 0.4          # 两天三万星
    elif 0 < age < 365 and stars / age > 1500:
        score -= 0.4          # 日均涨星离谱，基本是刷的
    elif 0 < age < 365 and stars / age > 500:
        score -= 0.25
    score -= 0.15 * len(analysis.get("hype_flags") or [])
    return max(0.0, min(1.0, score))


def evaluate(repo, analysis, delta, today=None):
    parts = {
        "heat": heat(repo, delta),
        "runnable": analysis["scores"]["runnable"],
        "teaching": analysis["scores"]["teaching"],
        "identity": analysis["scores"]["identity"],
        "trust": trust(repo, analysis, today),
    }
    total = sum(parts[k] * config.WEIGHTS[k] for k in config.WEIGHTS)

    category = analysis["category"]
    if category == "run_now":
        if parts["runnable"] < 0.3 or parts["trust"] < 0.4:
            category = "skip"       # 模型说能跑，但客观信号说跑不动或不可信
        elif parts["runnable"] < 0.5:
            category = "save"

    return {
        "repo": repo,
        "analysis": analysis,
        "delta": delta,
        "parts": parts,
        "total": round(total, 3),
        "category": category,
    }


def select(items):
    """按类别配额取稿，名额没满时用高分项目回填。"""
    bucket = {c: [] for c in config.QUOTA}
    for item in sorted(items, key=lambda it: it["total"], reverse=True):
        bucket.setdefault(item["category"], []).append(item)

    chosen = {}
    used = set()
    for category, quota in config.QUOTA.items():
        picked = bucket.get(category, [])[:quota]
        chosen[category] = picked
        used.update(id(it) for it in picked)

    spare = [it for it in items if id(it) not in used and it["category"] != "skip"]
    spare.sort(key=lambda it: it["total"], reverse=True)
    # 只回填"值得收藏"：run_now 有硬门槛，宁可空着也不凑数
    while len(chosen.get("save", [])) < config.QUOTA.get("save", 0) and spare and spare[0]["total"] >= 0.45:
        chosen["save"].append(spare.pop(0))

    picked_ids = {id(it) for picked in chosen.values() for it in picked}
    leftovers = [it for it in items if id(it) not in picked_ids]
    leftovers.sort(key=lambda it: it["total"], reverse=True)
    return chosen, leftovers
