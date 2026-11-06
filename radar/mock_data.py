"""离线假数据：--mock 时整体替换 fetch 和 LLM，主流程不用改。"""

from radar import enrich

REPOS = [
    {
        "full_name": "demo/LocalChat", "url": "https://github.com/demo/LocalChat",
        "description": "一个能在 8G 显存笔记本上跑的本地聊天客户端，支持 Ollama",
        "stars": 4200, "forks": 410, "open_issues": 37, "language": "Python",
        "topics": ["llm", "ollama", "gui"], "license": "MIT",
        "created_at": "2026-10-20", "pushed_at": "2026-11-04",
        "stars_today": 620, "source": "trending",
    },
    {
        "full_name": "demo/TinyAgent", "url": "https://github.com/demo/TinyAgent",
        "description": "200 行代码实现的 agent 循环，用来讲清楚 ReAct 到底在做什么",
        "stars": 980, "forks": 96, "open_issues": 12, "language": "Python",
        "topics": ["agents", "education"], "license": "MIT",
        "created_at": "2026-10-28", "pushed_at": "2026-11-03",
        "stars_today": 210, "source": "search",
    },
    {
        "full_name": "demo/MegaRAG", "url": "https://github.com/demo/MegaRAG",
        "description": "企业级 RAG 平台，支持百亿级向量检索与多租户",
        "stars": 15600, "forks": 180, "open_issues": 0, "language": "Go",
        "topics": ["rag", "enterprise"], "license": "",
        "created_at": "2026-11-02", "pushed_at": "2026-11-02",
        "stars_today": 5200, "source": "trending",
    },
    {
        "full_name": "demo/QuantKit", "url": "https://github.com/demo/QuantKit",
        "description": "把 7B 模型量化到 4bit 并导出 GGUF 的命令行工具",
        "stars": 3100, "forks": 290, "open_issues": 44, "language": "Python",
        "topics": ["quantization", "gguf"], "license": "Apache-2.0",
        "created_at": "2026-09-15", "pushed_at": "2026-11-05",
        "stars_today": 90, "source": "search",
    },
    {
        "full_name": "demo/PromptMuseum", "url": "https://github.com/demo/PromptMuseum",
        "description": "三万条提示词大全，持续更新",
        "stars": 8800, "forks": 120, "open_issues": 0, "language": "",
        "topics": ["prompt"], "license": "",
        "created_at": "2026-11-04", "pushed_at": "2026-11-04",
        "stars_today": 1900, "source": "trending",
    },
    {
        "full_name": "demo/WordCountLab", "url": "https://github.com/demo/WordCountLab",
        "description": "用 30 行 Python 做文本统计的练习项目，附带讲解",
        "stars": 320, "forks": 61, "open_issues": 3, "language": "Python",
        "topics": ["teaching", "python"], "license": "MIT",
        "created_at": "2026-10-10", "pushed_at": "2026-10-30",
        "stars_today": 12, "source": "search",
    },
]

_CANNED = {
    "demo/LocalChat": {
        "what": "能在 8G 显存的 Windows 笔记本上跑的本地聊天客户端，接 Ollama。",
        "why_now": "本地推理生态这三天在提速，这类壳子终于做到开箱即用。",
        "category": "run_now",
        "ai_layer": "app",
        "runnable": {"windows": True, "gpu_required": True, "vram_gb": 6, "install": "installer"},
        "teaching": {"python_used": True, "concepts": ["asyncio", "http 请求"],
                     "assignment": "让学生加一个'清空对话'按钮并持久化历史"},
        "scores": {"runnable": 0.9, "teaching": 0.5, "identity": 0.9},
        "hype_flags": [],
    },
    "demo/TinyAgent": {
        "what": "200 行的 agent 循环实现，专门用来教学。",
        "why_now": "agent 概念泛滥，但能一屏读完的实现很少。",
        "category": "teaching",
        "ai_layer": "agent_framework",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "pip"},
        "teaching": {"python_used": True, "concepts": ["while 循环", "字典", "API 调用"],
                     "assignment": "把工具集从 2 个扩展到 4 个，观察模型如何选择"},
        "scores": {"runnable": 0.85, "teaching": 0.95, "identity": 0.85},
        "hype_flags": [],
    },
    "demo/MegaRAG": {
        "what": "企业级 RAG 平台，主打百亿级向量检索。",
        "why_now": "三天涨了一万五千星，但没有任何可下载产物。",
        "category": "run_now",
        "ai_layer": "app",
        "runnable": {"windows": False, "gpu_required": True, "vram_gb": 40, "install": "unknown"},
        "teaching": {"python_used": False, "concepts": [], "assignment": ""},
        "scores": {"runnable": 0.05, "teaching": 0.0, "identity": 0.05},
        "hype_flags": ["零 issue", "无 release 产物", "README 全是营销话术"],
    },
    "demo/QuantKit": {
        "what": "把 7B 模型量化到 4bit 并导出 GGUF 的命令行工具。",
        "why_now": "本地模型的显存门槛还在降，这类工具是入口。",
        "category": "save",
        "ai_layer": "runtime",
        "runnable": {"windows": False, "gpu_required": True, "vram_gb": 16, "install": "pip"},
        "teaching": {"python_used": True, "concepts": ["argparse", "文件读写"], "assignment": ""},
        "scores": {"runnable": 0.4, "teaching": 0.3, "identity": 0.7},
        "hype_flags": [],
    },
    "demo/PromptMuseum": {
        "what": "三万条提示词合集。",
        "why_now": "两天八千星，但 fork 比例异常低。",
        "category": "skip",
        "ai_layer": "other",
        "runnable": {"windows": False, "gpu_required": False, "vram_gb": None, "install": "unknown"},
        "teaching": {"python_used": False, "concepts": [], "assignment": ""},
        "scores": {"runnable": 0.0, "teaching": 0.0, "identity": 0.1},
        "hype_flags": ["纯合集仓库"],
    },
    "demo/WordCountLab": {
        "what": "30 行 Python 的文本统计练习项目，带讲解。",
        "why_now": "适合第一周课程的练手材料。",
        "category": "teaching",
        "ai_layer": "other",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "source"},
        "teaching": {"python_used": True, "concepts": ["字符串", "字典", "for 循环"],
                     "assignment": "统计词频并输出前 10 名"},
        "scores": {"runnable": 0.9, "teaching": 0.9, "identity": 0.75},
        "hype_flags": [],
    },
}


def repos():
    return [dict(r) for r in REPOS]


def analyze(repo):
    """故意让 QuantKit 返回残缺结构，用来压 normalize 的降级分支。"""
    if repo["full_name"] == "demo/QuantKit":
        return enrich.normalize({"category": "不存在的类别", "scores": {"runnable": 7}}, repo)
    return enrich.normalize(_CANNED.get(repo["full_name"], {}), repo)


def readme(repo):
    return f"# {repo['full_name']}\n\n{repo['description']}\n"
