# gh-radar

每三天一份中文简报，按**时间**分成四段（最近三天 / 这周内 / 这个月 / 近三个月），
每段再按**主题**归类（游戏与玩物 / 开发工具 / 学习教程 / 可视化创意 / AI 应用 /
模型与运行时 / 基础设施），告诉你哪些值得看一眼。

不是又一个 GitHub 日报：它按**使用者身份**排序，而不是按 star 排序。身份写在 `config.py` 的
`PROFILE` 里，改那段文字就能改变筛选口吻。

## 用法

```bash
pip install -r requirements.txt
cp .env.example .env        # 填 LLM_API_KEY，可选填 GITHUB_TOKEN

# 离线跑通全流程（不需要网络，不需要 API Key）
python main.py --mock

# 真实抓取
python main.py --archive-only    # 只存快照，不调 LLM
python main.py                   # 出简报
python main.py --bucket 0        # 只跑「最近三天」这一桶
```

`.env` 已被 git 忽略，key 不会进版本库。需要走本地代理时把 `USE_PROXY` 改成 1。

结果写到 `reports/YYYY-MM-DD.md`。

## 它怎么判断

```
总分 = 热度 0.25 + 可运行性 0.30 + 教学价值 0.20 + 身份贴合 0.15 + 可信度 0.10
```

- **热度**：优先用跨天 star 增量，没有历史才退回总量
- **可运行性 / 教学价值 / 身份贴合**：LLM 读 README 打分
- **可信度**：纯客观信号扣分 —— fork/star 过低、零 issue、无 license、两天三万星

每个时间桶最多出 3 条，同一主题每桶最多 2 条，被判为低价值的项目只进末尾的"未入选"。

## 时间桶与星数门槛

| 桶 | 创建时间 | 星数下限 |
|---|---|---|
| 最近三天 | 0-3 天 | 30 |
| 这周内 | 4-7 天 | 100 |
| 这个月 | 8-30 天 | 500 |
| 近三个月 | 31-90 天 | 2000 |

互斥分桶：一个项目只会出现在一段里。门槛随窗口放大，避免长窗口被海量低星项目淹没。
改 `config.py` 的 `BUCKETS` 就能调整。

## 前端

`web/` 是一个不需要构建的静态页面：时间轴选段、主题筛选、卡片流。

```bash
python web_export.py           # 从 SQLite 导出 web/data.json 和 data.js
```

直接双击 `web/index.html` 就能看（数据以 JS 内联，file:// 下也能用），
或 `python -m http.server 8000 -d web`。`python main.py` 跑完会自动刷新这份数据。

## 自动运行

`.github/workflows/radar.yml` 每天 06:37 抓一次存进 SQLite 并 commit 回仓库，
第 3 天整除时出简报。需要在仓库 Settings → Secrets 里配置 `LLM_API_KEY`，
可选 `LLM_BASE_URL` / `LLM_MODEL`。

## 已知限制

- 本机系统代理 7890 时常失效，默认直连；需要代理时设 `USE_PROXY=1`
- GitHub Trending 页面结构可能改版，正则集中在 `radar/fetch.py`，失败只跳过该源
- LLM 结果按仓库名缓存，README 变了不会自动重算（删掉 `data/radar.db` 里的 `analyses` 那行即可）
