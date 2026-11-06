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

我关心：能不能在我这台机器上跑起来、能不能当作教学素材讲给新生听。
我不关心：需要多卡集群的、纯论文复现的、企业级基础设施、需要长期运维的。
""".strip()

# 五项权重相加 = 1.0
WEIGHTS = {
    "heat": 0.25,       # 三天内的 star 增量
    "runnable": 0.30,   # 能不能今晚就跑起来（权重最高）
    "teaching": 0.20,   # 能不能当例子讲给新生
    "identity": 0.15,   # 和我的方向是否对路
    "trust": 0.10,      # 排除刷星和营销仓库
}

# 每期各类配额，比单纯按总分截断更能保证多样性
QUOTA = {"run_now": 3, "save": 3, "teaching": 1}

CATEGORY_TITLES = {
    "run_now": "今晚就能玩",
    "save": "值得收藏",
    "teaching": "教学素材",
    "skip": "看看就好",
}

# 抓取参数
SEARCH_TOPICS = ["llm", "ai-agents", "agents", "llm-agent", "rag", "mcp"]
SEARCH_KEYWORDS = ["LLM", "agent"]
MIN_STARS = 50
PER_QUERY = 30

# 每期最多分析多少个仓库（控制 LLM 成本）
MAX_ANALYZE = 60

# Trending 榜单里的老项目（react、vscode 这种）不算"新出现"，超过这个年龄就丢掉
MAX_AGE_DAYS = 365

# LLM：任何 OpenAI 兼容接口都行（DeepSeek / 通义 / 本地 Ollama）
LLM_BASE_URL = os.getenv("LLM_BASE_URL", "https://api.deepseek.com/v1")
LLM_MODEL = os.getenv("LLM_MODEL", "deepseek-chat")
LLM_API_KEY = os.getenv("LLM_API_KEY") or os.getenv("DEEPSEEK_API_KEY") or ""
LLM_TIMEOUT = 120

# 本机系统代理 7890 时常失效，默认直连；需要走代理时设 USE_PROXY=1
USE_PROXY = os.getenv("USE_PROXY", "0") == "1"
