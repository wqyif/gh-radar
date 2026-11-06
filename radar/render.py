"""把打分结果渲染成中文 Markdown 简报。"""

import config


def _num(n):
    return f"{n:,}" if isinstance(n, int) else str(n)


def _run_line(a):
    r = a["runnable"]
    bits = ["Windows 可跑" if r["windows"] else "未确认 Windows 支持"]
    if r["gpu_required"]:
        bits.append(f"需要约 {r['vram_gb']} GB 显存" if r["vram_gb"] else "需要 GPU")
    else:
        bits.append("无 GPU 要求")
    bits.append({"pip": "pip 安装", "docker": "Docker 部署", "installer": "有安装包",
                 "source": "源码运行", "unknown": "安装方式未确认"}[r["install"]])
    return " · ".join(bits)


def _entry(index, item, days):
    repo, a = item["repo"], item["analysis"]
    delta = item["delta"]
    lines = [f"### {index}. [{repo['full_name']}]({repo['url']})  ·  总分 {item['total']}", ""]
    lines.append(f"> {a['what']}")
    lines.append("")
    if a["why_now"]:
        lines.append(f"- **为什么是现在**：{a['why_now']}")
    heat = f"{_num(repo['stars'])} 星"
    if delta:
        heat += f"（+{_num(delta)} / {days} 天）"
    elif repo.get("stars_today"):
        heat += f"（+{_num(repo['stars_today'])} 今日）"
    ratio = repo["forks"] / repo["stars"] if repo["stars"] else 0
    lines.append(f"- **热度**：{heat} · fork/star {ratio:.1%} · {repo['open_issues']} 个 open issue")
    lines.append(f"- **跑起来**：{_run_line(a)}")
    if a["teaching"]["concepts"] or a["teaching"]["assignment"]:
        teach = "用到 " + "、".join(a["teaching"]["concepts"]) if a["teaching"]["concepts"] else ""
        if a["teaching"]["assignment"]:
            teach += f"；作业想法：{a['teaching']['assignment']}"
        lines.append(f"- **教学**：{teach.strip('；')}")
    if a["hype_flags"]:
        lines.append(f"- **可疑信号**：{'、'.join(a['hype_flags'])}")
    lines.append("")
    return lines


def render(chosen, leftovers, days, today, scanned):
    lines = [f"# GitHub 情报 · 近 {days} 天", ""]
    lines.append(f"扫描 {scanned} 个候选仓库，按「能不能今晚跑起来、能不能当教学素材」筛选。")
    lines.append("")

    index = 1
    for category in ("run_now", "save", "teaching"):
        picked = chosen.get(category) or []
        if not picked:
            continue
        lines.append(f"## {config.CATEGORY_TITLES[category]}")
        lines.append("")
        for item in picked:
            lines += _entry(index, item, days)
            index += 1

    if leftovers:
        lines.append("## 未入选")
        lines.append("")
        for item in leftovers[:8]:
            repo, a = item["repo"], item["analysis"]
            reason = "被判为低价值" if item["category"] == "skip" else "同类名额已满"
            lines.append(f"- {repo['full_name']} — {a['what'][:40]}（{reason}，{item['total']} 分）")
        lines.append("")

    lines.append("---")
    lines.append(f"生成于 {today} · 配置见 config.py")
    return "\n".join(lines)
