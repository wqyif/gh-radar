# gh-radar

每三天一份中文简报，告诉你 GitHub 上最近冒出来的项目里，哪些今晚就能跑、哪些能当教学素材。

不是又一个 GitHub 日报：它按**使用者身份**排序，而不是按 star 排序。身份写在 `config.py` 的
`PROFILE` 里，改那段文字就能改变筛选口吻。

## 用法

```bash
pip install -r requirements.txt
cp .env.example .env        # 填 LLM_API_KEY，可选填 GITHUB_TOKEN

# 离线跑通全流程（不需要网络，不需要 API Key）
python main.py --mock

# 真实抓取
python main.py --days 3 --limit 20 --archive-only   # 只存快照，不调 LLM
python main.py --days 3                             # 出简报
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

出稿按类别配额（3 个马上能玩 + 3 个值得收藏 + 1 个教学素材），不按总分截断。

## 自动运行

`.github/workflows/radar.yml` 每天 06:37 抓一次存进 SQLite 并 commit 回仓库，
第 3 天整除时出简报。需要在仓库 Settings → Secrets 里配置 `LLM_API_KEY`，
可选 `LLM_BASE_URL` / `LLM_MODEL`。

## 已知限制

- 本机系统代理 7890 时常失效，默认直连；需要代理时设 `USE_PROXY=1`
- GitHub Trending 页面结构可能改版，正则集中在 `radar/fetch.py`，失败只跳过该源
- LLM 结果按仓库名缓存，README 变了不会自动重算（删掉 `data/radar.db` 里的 `analyses` 那行即可）
