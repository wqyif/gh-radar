"""离线假数据：--mock 时整体替换 fetch 和 LLM，主流程不用改。"""

from datetime import date, timedelta

import config
from radar import enrich

RAW = [
    {
        "full_name": "demo/PixelFarm", "age": 0, "theme": "play",
        "description": "用 Python 写的像素农场小游戏，带昼夜循环和存档",
        "stars": 310, "forks": 41, "open_issues": 6, "language": "Python",
        "topics": ["game", "pygame"], "license": "MIT", "stars_today": 120,
    },
    {
        "full_name": "demo/LocalChat", "age": 1, "theme": "ai_app",
        "description": "能在 8G 显存笔记本上跑的本地聊天客户端，支持 Ollama",
        "stars": 4200, "forks": 410, "open_issues": 37, "language": "Python",
        "topics": ["llm", "ollama", "gui"], "license": "MIT", "stars_today": 620,
    },
    {
        "full_name": "demo/TinyAgent", "age": 2, "theme": "learn",
        "description": "200 行代码实现的 agent 循环，用来讲清楚 ReAct 到底在做什么",
        "stars": 980, "forks": 96, "open_issues": 12, "language": "Python",
        "topics": ["agents", "education"], "license": "MIT", "stars_today": 210,
    },
    {
        "full_name": "demo/TermClock", "age": 5, "theme": "tool",
        "description": "终端里的番茄钟，带 ASCII 进度条和声音提醒",
        "stars": 820, "forks": 74, "open_issues": 9, "language": "Rust",
        "topics": ["cli", "tui"], "license": "MIT", "stars_today": 60,
    },
    {
        "full_name": "demo/QuantKit", "age": 6, "theme": "runtime",
        "description": "把 7B 模型量化到 4bit 并导出 GGUF 的命令行工具",
        "stars": 3100, "forks": 290, "open_issues": 44, "language": "Python",
        "topics": ["quantization", "gguf"], "license": "Apache-2.0", "stars_today": 90,
    },
    {
        "full_name": "demo/WordCountLab", "age": 6, "theme": "learn",
        "description": "用 30 行 Python 做文本统计的练习项目，附带讲解",
        "stars": 320, "forks": 61, "open_issues": 3, "language": "Python",
        "topics": ["teaching", "python"], "license": "MIT", "stars_today": 12,
    },
    {
        "full_name": "demo/ArtGen", "age": 15, "theme": "visual",
        "description": "把一段文字变成可以打印的生成艺术海报",
        "stars": 5400, "forks": 430, "open_issues": 28, "language": "JavaScript",
        "topics": ["generative-art"], "license": "MIT", "stars_today": 150,
    },
    {
        "full_name": "demo/MegaRAG", "age": 20, "theme": "ai_app",
        "description": "企业级 RAG 平台，支持百亿级向量检索与多租户",
        "stars": 15600, "forks": 180, "open_issues": 0, "language": "Go",
        "topics": ["rag", "enterprise"], "license": "", "stars_today": 5200,
    },
    {
        "full_name": "demo/Esp32Pet", "age": 25, "theme": "play",
        "description": "用 ESP32 和一块圆屏做的电子宠物，能喂食、能联网打工",
        "stars": 2100, "forks": 190, "open_issues": 15, "language": "C++",
        "topics": ["arduino", "esp32", "toy"], "license": "MIT", "stars_today": 40,
    },
    {
        "full_name": "demo/DataVizKit", "age": 45, "theme": "visual",
        "description": "把 CSV 一键变成可交互图表的命令行工具",
        "stars": 8900, "forks": 720, "open_issues": 61, "language": "TypeScript",
        "topics": ["visualization"], "license": "MIT", "stars_today": 30,
    },
    {
        "full_name": "demo/Serverless", "age": 60, "theme": "infra",
        "description": "自托管的函数计算平台，支持冷启动优化和多租户隔离",
        "stars": 7600, "forks": 640, "open_issues": 88, "language": "Go",
        "topics": ["serverless"], "license": "Apache-2.0", "stars_today": 10,
    },
    {
        "full_name": "demo/PromptMuseum", "age": 80, "theme": "tool",
        "description": "三万条提示词大全，持续更新",
        "stars": 8800, "forks": 120, "open_issues": 0, "language": "",
        "topics": ["prompt"], "license": "", "stars_today": 1900,
    },
]

_CANNED = {
    "demo/PixelFarm": {
        "what": "用 Python 写的像素农场小游戏，带昼夜循环和存档。",
        "why_now": "pygame 教学里少见的完整小项目，代码量适合一周讲完。",
        "category": "run_now", "ai_layer": "other",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "pip"},
        "teaching": {"python_used": True, "concepts": ["类", "字典", "游戏循环"],
                     "assignment": "让学生加一种作物，并让它有生长阶段"},
        "scores": {"runnable": 0.95, "teaching": 0.85, "identity": 0.9},
        "hype_flags": [],
    },
    "demo/LocalChat": {
        "what": "能在 8G 显存的 Windows 笔记本上跑的本地聊天客户端，接 Ollama。",
        "why_now": "本地推理生态在提速，这类壳子终于做到开箱即用。",
        "category": "run_now", "ai_layer": "app",
        "runnable": {"windows": True, "gpu_required": True, "vram_gb": 6, "install": "installer"},
        "teaching": {"python_used": True, "concepts": ["asyncio", "http 请求"],
                     "assignment": "加一个清空对话按钮并持久化历史"},
        "scores": {"runnable": 0.9, "teaching": 0.5, "identity": 0.9},
        "hype_flags": [],
    },
    "demo/TinyAgent": {
        "what": "200 行的 agent 循环实现，专门用来教学。",
        "why_now": "agent 概念泛滥，但能一屏读完的实现很少。",
        "category": "teaching", "ai_layer": "agent_framework",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "pip"},
        "teaching": {"python_used": True, "concepts": ["while 循环", "字典", "API 调用"],
                     "assignment": "把工具集从 2 个扩展到 4 个，观察模型如何选择"},
        "scores": {"runnable": 0.85, "teaching": 0.95, "identity": 0.85},
        "hype_flags": [],
    },
    "demo/TermClock": {
        "what": "终端里的番茄钟，带 ASCII 进度条和声音提醒。",
        "why_now": "单文件 Rust 项目，适合看一个 CLI 是怎么从零搭起来的。",
        "category": "run_now", "ai_layer": "other",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "installer"},
        "teaching": {"python_used": False, "concepts": [], "assignment": ""},
        "scores": {"runnable": 0.9, "teaching": 0.2, "identity": 0.7},
        "hype_flags": [],
    },
    "demo/QuantKit": {
        "what": "把 7B 模型量化到 4bit 并导出 GGUF 的命令行工具。",
        "why_now": "本地模型的显存门槛还在降，这类工具是入口。",
        "category": "save", "ai_layer": "runtime",
        "runnable": {"windows": False, "gpu_required": True, "vram_gb": 16, "install": "pip"},
        "teaching": {"python_used": True, "concepts": ["argparse", "文件读写"], "assignment": ""},
        "scores": {"runnable": 0.4, "teaching": 0.3, "identity": 0.7},
        "hype_flags": [],
    },
    "demo/WordCountLab": {
        "what": "30 行 Python 的文本统计练习项目，带讲解。",
        "why_now": "适合第一周课程的练手材料。",
        "category": "teaching", "ai_layer": "other",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "source"},
        "teaching": {"python_used": True, "concepts": ["字符串", "字典", "for 循环"],
                     "assignment": "统计词频并输出前 10 名"},
        "scores": {"runnable": 0.9, "teaching": 0.9, "identity": 0.75},
        "hype_flags": [],
    },
    "demo/ArtGen": {
        "what": "把一段文字变成可以打印的生成艺术海报。",
        "why_now": "生成艺术里少见的能直接出成品的工具，适合展示给学生看效果。",
        "category": "save", "ai_layer": "other",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "docker"},
        "teaching": {"python_used": False, "concepts": [], "assignment": ""},
        "scores": {"runnable": 0.6, "teaching": 0.4, "identity": 0.85},
        "hype_flags": [],
    },
    "demo/MegaRAG": {
        "what": "企业级 RAG 平台，主打百亿级向量检索。",
        "why_now": "三天涨了一万五千星，但没有任何可下载产物。",
        "category": "run_now", "ai_layer": "app",
        "runnable": {"windows": False, "gpu_required": True, "vram_gb": 40, "install": "unknown"},
        "teaching": {"python_used": False, "concepts": [], "assignment": ""},
        "scores": {"runnable": 0.05, "teaching": 0.0, "identity": 0.05},
        "hype_flags": ["零 issue", "无 release 产物", "README 全是营销话术"],
    },
    "demo/Esp32Pet": {
        "what": "ESP32 加一块圆屏做的电子宠物，能喂食、能联网打工。",
        "why_now": "硬件里少见的完整可复刻项目，物料清单和固件都给了。",
        "category": "save", "ai_layer": "other",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "source"},
        "teaching": {"python_used": False, "concepts": [], "assignment": ""},
        "scores": {"runnable": 0.5, "teaching": 0.5, "identity": 0.8},
        "hype_flags": [],
    },
    "demo/DataVizKit": {
        "what": "把 CSV 一键变成可交互图表的命令行工具。",
        "why_now": "数据分析课可以直接用的现成工具。",
        "category": "save", "ai_layer": "other",
        "runnable": {"windows": True, "gpu_required": False, "vram_gb": None, "install": "pip"},
        "teaching": {"python_used": True, "concepts": ["pandas", "命令行参数"], "assignment": ""},
        "scores": {"runnable": 0.75, "teaching": 0.6, "identity": 0.7},
        "hype_flags": [],
    },
    "demo/Serverless": {
        "what": "自托管的函数计算平台，支持冷启动优化和多租户隔离。",
        "why_now": "基础设施项目，和我的日常使用场景无关。",
        "category": "skip", "ai_layer": "other",
        "runnable": {"windows": False, "gpu_required": False, "vram_gb": None, "install": "docker"},
        "teaching": {"python_used": False, "concepts": [], "assignment": ""},
        "scores": {"runnable": 0.1, "teaching": 0.1, "identity": 0.05},
        "hype_flags": [],
    },
    "demo/PromptMuseum": {
        "what": "三万条提示词合集。",
        "why_now": "两天八千星，但 fork 比例异常低。",
        "category": "skip", "ai_layer": "other",
        "runnable": {"windows": False, "gpu_required": False, "vram_gb": None, "install": "unknown"},
        "teaching": {"python_used": False, "concepts": [], "assignment": ""},
        "scores": {"runnable": 0.0, "teaching": 0.0, "identity": 0.1},
        "hype_flags": ["纯合集仓库"],
    },
}


def repos():
    """生成假仓库，created_at 按各自的 age 相对今天计算，桶也在这里算好。"""
    today = date.today()
    out = []
    for raw in RAW:
        created = today - timedelta(days=raw["age"])
        bucket = config.bucket_for(raw["age"])
        item = {k: v for k, v in raw.items() if k not in ("age", "theme")}
        item["full_name"] = raw["full_name"]
        item["url"] = f"https://github.com/{raw['full_name']}"
        item["created_at"] = created.isoformat()
        item["pushed_at"] = created.isoformat()
        item["source"] = "search"
        item["bucket"] = bucket["key"] if bucket else ""
        out.append(item)
    return out


def analyze(repo):
    """故意让 QuantKit 返回残缺结构，用来压 normalize 的降级分支。"""
    if repo["full_name"] == "demo/QuantKit":
        return enrich.normalize({"category": "不存在的类别", "scores": {"runnable": 7}}, repo)
    name = repo["full_name"]
    canned = dict(_CANNED.get(name, {}))
    raw = RAW_BY_NAME.get(name, {})
    if raw.get("theme") and "theme" not in canned:
        canned["theme"] = raw["theme"]
    return enrich.normalize(canned, repo)


def readme(repo):
    return f"# {repo['full_name']}\n\n{repo['description']}\n"


RAW_BY_NAME = {r["full_name"]: r for r in RAW}
