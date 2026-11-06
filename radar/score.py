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


def pick(items, quota=None, per_theme=None):
    """桶内取稿：按总分降序，同主题有数量上限，skip 一律不进正文。"""
    quota = config.QUOTA_PER_BUCKET if quota is None else quota
    per_theme = config.MAX_PER_THEME_PER_BUCKET if per_theme is None else per_theme

    chosen, theme_count = [], {}
    for item in sorted(items, key=lambda it: it["total"], reverse=True):
        if item["category"] == "skip":
            continue
        theme = item["analysis"]["theme"]
        if theme_count.get(theme, 0) >= per_theme:
            continue
        chosen.append(item)
        theme_count[theme] = theme_count.get(theme, 0) + 1
        if len(chosen) >= quota:
            break

    chosen_ids = {id(it) for it in chosen}
    leftovers = [it for it in items if id(it) not in chosen_ids]
    leftovers.sort(key=lambda it: it["total"], reverse=True)
    return chosen, leftovers
