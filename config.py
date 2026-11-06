"""所有可调参数集中在这里，改这个文件不需要动代码。"""

import os


def _load_env(path=".env"):
    """极简 .env 读取，避免把密钥写进代码或命令行历史。"""
    if not os.path.exists(path):
        return
    with open(path, encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip("'\""))


_load_env()

# 身份画像：原样进入 LLM 的 prompt，决定"什么值得推给我"。
PROFILE = """
我是中国的一名大二学生，正在带三名零基础的大一新生学 Python（一个月速成基础）。
我自己用 Windows 笔记本，显卡一般（8G 显存），已经装了 Ollama 跑本地模型。
每天能折腾新东西的时间不超过一小时。

我关心：能不能在我这台机器上跑起来、能不能当作教学素材讲给新生听、
以及这东西本身够不够好玩（小游戏、终端玩具、可视化、奇怪的硬件项目都算）。
我不关心：需要多卡集群的、纯论文复现的、企业级基础设施、需要长期运维的。
""".strip()

# 五项权重相加 = 1.0
WEIGHTS = {
    "heat": 0.25,       # 窗口内的 star 增量
    "runnable": 0.30,   # 能不能今晚就跑起来（权重最高）
    "teaching": 0.20,   # 能不能当例子讲给新生
    "identity": 0.15,   # 和我的兴趣是否对路
    "trust": 0.10,      # 排除刷星和营销仓库
}

# 时间分桶：互斥，按"今天 - 创建时间"的年龄落桶
BUCKETS = [
    {"key": "d3", "min_age": 0, "max_age": 3, "title": "最近三天", "min_stars": 30},
    {"key": "w1", "min_age": 4, "max_age": 7, "title": "这周内", "min_stars": 100},
    {"key": "m1", "min_age": 8, "max_age": 30, "title": "这个月", "min_stars": 500},
    {"key": "m3", "min_age": 31, "max_age": 90, "title": "近三个月", "min_stars": 2000},
]

# 主题分类：固定 7 类，由 LLM 判断项目"最重要的属性"
THEMES = {
    "play": "游戏与玩物",
    "tool": "开发工具",
    "learn": "学习教程",
    "visual": "可视化创意",
    "ai_app": "AI 应用",
    "runtime": "模型与运行时",
    "infra": "基础设施",
}

# 每桶最多分析几个、最多出几条、同主题最多几条
ANALYZE_PER_BUCKET = 8
QUOTA_PER_BUCKET = 3
MAX_PER_THEME_PER_BUCKET = 2

# Trending 榜单只收这个年龄以内的项目
MAX_AGE_DAYS = BUCKETS[-1]["max_age"]

# 搜索参数
SEARCH_TOPICS = ["llm", "ai-agents", "agents", "llm-agent", "rag", "mcp"]
PER_QUERY = 100

# LLM：任何 OpenAI 兼容接口都行（DeepSeek / 通义 / 本地 Ollama）
LLM_BASE_URL = os.getenv("LLM_BASE_URL", "https://api.deepseek.com/v1")
LLM_MODEL = os.getenv("LLM_MODEL", "deepseek-chat")
LLM_API_KEY = os.getenv("LLM_API_KEY") or os.getenv("DEEPSEEK_API_KEY") or ""
LLM_TIMEOUT = 120

# 本机系统代理 7890 时常失效，默认直连；需要走代理时设 USE_PROXY=1
USE_PROXY = os.getenv("USE_PROXY", "0") == "1"


def bucket_for(age_days):
    """按项目年龄找到所属的时间桶，找不到（太老）返回 None。"""
    for bucket in BUCKETS:
        if bucket["min_age"] <= age_days <= bucket["max_age"]:
            return bucket
    return None
