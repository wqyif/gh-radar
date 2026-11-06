"""把打分结果渲染成中文 Markdown 简报：时间为主轴，主题为分组。"""

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


def _entry(index, item, theme_label=""):
    repo, a = item["repo"], item["analysis"]
    delta = item["delta"]
    suffix = f" · {theme_label}" if theme_label else ""
    lines = [f"#### {index}. [{repo['full_name']}]({repo['url']}){suffix}  ·  总分 {item['total']}", ""]
    lines.append(f"> {a['what']}")
    lines.append("")
    if a["why_now"]:
        lines.append(f"- **为什么值得看**：{a['why_now']}")
    heat = f"{_num(repo['stars'])} 星"
    if delta:
        heat += f"（+{_num(delta)}）"
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


def render(results, today, scanned):
    """results: [{"bucket": BUCKET, "chosen": [...], "leftovers": [...]}]"""
    span = max((r["bucket"]["max_age"] for r in results), default=config.MAX_AGE_DAYS)
    lines = [f"# GitHub 好玩项目 · 近 {span} 天", ""]
    lines.append(f"扫描 {scanned} 个候选仓库，按创建时间分段，每段挑出最值得看的几个。")
    lines.append("")

    index = 1
    all_leftovers = []
    for result in results:
        bucket, chosen = result["bucket"], result["chosen"]
        all_leftovers += [(bucket, it) for it in result["leftovers"]]

        lines.append(f"## {bucket['title']}")
        lines.append("")
        if not chosen:
            lines.append("（这段时间没有符合的项目）")
            lines.append("")
            continue

        grouped = {}
        for item in chosen:
            theme = item["analysis"]["theme"]
            grouped.setdefault(theme, []).append(item)

        # 桶里只有一个主题时不加小标题，直接内联标注；有多个主题就统一按主题分组，
        # 顺序固定按 THEMES 定义，保证每期结构一致
        multi = len(grouped) > 1
        for theme in (t for t in config.THEMES if t in grouped):
            items = grouped[theme]
            if multi:
                lines.append(f"### {config.THEMES[theme]}")
                lines.append("")
            for item in items:
                label = "" if multi else config.THEMES[theme]
                lines += _entry(index, item, label)
                index += 1

    all_leftovers.sort(key=lambda pair: pair[1]["total"], reverse=True)
    if all_leftovers:
        lines.append("## 未入选")
        lines.append("")
        for bucket, item in all_leftovers[:10]:
            repo, a = item["repo"], item["analysis"]
            reason = "被判为低价值" if item["category"] == "skip" else "同主题名额已满"
            lines.append(f"- {repo['full_name']}（{bucket['title']}）— {a['what'][:40]}"
                         f"（{reason}，{item['total']} 分）")
        lines.append("")

    lines.append("---")
    lines.append(f"生成于 {today} · 配置见 config.py")
    return "\n".join(lines)
