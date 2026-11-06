"""数据源：GitHub Search API（新项目）+ Trending 页面（当下热点）+ README。"""

import html
import re
import sys
import time

import config
from radar.http import get, get_html

API = "https://api.github.com"


def _search_once(q, per_query):
    """搜索接口每秒/每分钟都有配额，撞上限流就等重置再试一次。"""
    params = {"q": q, "sort": "stars", "order": "desc", "per_page": per_query}
    resp = get(f"{API}/search/repositories", params=params)
    if resp.status_code in (403, 429):
        reset = int(resp.headers.get("X-RateLimit-Reset", 0))
        wait = max(0, min(65, reset - int(time.time()) + 1))
        if wait:
            print(f"      限流，等待 {wait}s", file=sys.stderr)
            time.sleep(wait)
            resp = get(f"{API}/search/repositories", params=params)
    return resp


def _trim(item):
    return {
        "full_name": item["full_name"],
        "url": item["html_url"],
        "description": (item.get("description") or "").strip(),
        "stars": item["stargazers_count"],
        "forks": item["forks_count"],
        "open_issues": item["open_issues_count"],
        "language": item.get("language") or "",
        "topics": item.get("topics") or [],
        "license": (item.get("license") or {}).get("spdx_id") or "",
        "created_at": item["created_at"][:10],
        "pushed_at": item["pushed_at"][:10],
        "stars_today": 0,
        "source": "search",
    }


def search(since, min_stars=config.MIN_STARS, per_query=config.PER_QUERY):
    """按 topic 和关键词各搜一遍，按仓库名去重。"""
    queries = [f"topic:{t} created:>{since} stars:>{min_stars}" for t in config.SEARCH_TOPICS]
    queries += [f'"{k}" in:name,description created:>{since} stars:>{min_stars}'
                for k in config.SEARCH_KEYWORDS]

    found = {}
    for q in queries:
        try:
            resp = _search_once(q, per_query)
        except Exception as exc:
            print(f"  [跳过] {q[:40]} -> {exc}", file=sys.stderr)
            continue
        if resp.status_code != 200:
            print(f"  [跳过] {q[:40]} -> HTTP {resp.status_code}", file=sys.stderr)
            continue
        items = resp.json().get("items", [])
        for item in items:
            found.setdefault(item["full_name"], _trim(item))
        print(f"  {q[:46]:<48} +{len(items)}")
        time.sleep(2)   # 搜索接口每分钟 10 次，慢一点更稳

    return list(found.values())


_ARTICLE = re.compile(r'<article class="Box-row">(.*?)</article>', re.S)
_REPO = re.compile(r'href="/([^"/]+/[^"/]+)/stargazers"')
_TODAY = re.compile(r'([\d,]+)\s+stars (?:today|this week|this month)')
_LANG = re.compile(r'itemprop="programmingLanguage">\s*([^<]+?)\s*<')
_DESC = re.compile(r'<p[^>]*class="[^"]*col-9[^"]*"[^>]*>(.*?)</p>', re.S)
_STARS = re.compile(r'/stargazers"[^>]*>.*?</svg>\s*([\d,]+)\s*</a>', re.S)
_TAG = re.compile(r"<[^>]+>")


def _num(text):
    return int(text.replace(",", "")) if text else 0


def trending():
    """解析 github.com/trending，返回字段不全的仓库（缺的部分后面补齐）。"""
    resp = get_html("https://github.com/trending?since=daily")
    if resp.status_code != 200:
        print(f"  [Trending] HTTP {resp.status_code}，跳过该源", file=sys.stderr)
        return []

    out = []
    for block in _ARTICLE.findall(resp.text):
        repo = _REPO.search(block)
        if not repo:
            continue
        desc = _DESC.search(block)
        stars = _STARS.search(block)
        today = _TODAY.search(block)
        lang = _LANG.search(block)
        out.append({
            "full_name": repo.group(1),
            "url": f"https://github.com/{repo.group(1)}",
            "description": html.unescape(_TAG.sub("", desc.group(1))).strip() if desc else "",
            "stars": _num(stars.group(1)) if stars else 0,
            "forks": 0,
            "open_issues": 0,
            "language": lang.group(1) if lang else "",
            "topics": [],
            "license": "",
            "created_at": "",
            "pushed_at": "",
            "stars_today": _num(today.group(1)) if today else 0,
            "source": "trending",
        })
    print(f"  Trending 页面解析到 {len(out)} 条")
    return out


def hydrate(repo):
    """Trending 的条目缺 fork/issue/license，补一次仓库详情。"""
    if repo["source"] != "trending":
        return repo
    resp = get(f"{API}/repos/{repo['full_name']}")
    if resp.status_code != 200:
        return repo
    d = resp.json()
    repo.update({
        "description": repo["description"] or (d.get("description") or "").strip(),
        "stars": d.get("stargazers_count", repo["stars"]),
        "forks": d.get("forks_count", 0),
        "open_issues": d.get("open_issues_count", 0),
        "language": repo["language"] or (d.get("language") or ""),
        "topics": d.get("topics") or [],
        "license": (d.get("license") or {}).get("spdx_id") or "",
        "created_at": (d.get("created_at") or "")[:10],
        "pushed_at": (d.get("pushed_at") or "")[:10],
    })
    return repo


RAW_NAMES = ["README.md", "readme.md", "README.MD", "README.markdown", "README.rst"]


def readme(full_name, limit=4000):
    """先走 raw 域名（不占 API 配额），拿不到再回退到 API。"""
    for name in RAW_NAMES:
        try:
            resp = get(f"https://raw.githubusercontent.com/{full_name}/HEAD/{name}")
        except Exception:
            break
        if resp.status_code == 200:
            return resp.text[:limit]
    resp = get(f"{API}/repos/{full_name}/readme",
               headers={"Accept": "application/vnd.github.raw"})
    return resp.text[:limit] if resp.status_code == 200 else ""
