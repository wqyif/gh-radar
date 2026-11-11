window.RADAR = {
 "generated": "2026-11-11",
 "buckets": [
  {
   "key": "d3",
   "title": "最近三天",
   "min_age": 0,
   "max_age": 3,
   "count": 8
  },
  {
   "key": "w1",
   "title": "这周内",
   "min_age": 4,
   "max_age": 7,
   "count": 8
  },
  {
   "key": "m1",
   "title": "这个月",
   "min_age": 8,
   "max_age": 30,
   "count": 8
  },
  {
   "key": "m3",
   "title": "近三个月",
   "min_age": 31,
   "max_age": 90,
   "count": 8
  }
 ],
 "themes": {
  "play": "游戏与玩物",
  "tool": "开发工具",
  "learn": "学习教程",
  "visual": "可视化创意",
  "ai_app": "AI 应用",
  "runtime": "模型与运行时",
  "infra": "基础设施"
 },
 "items": [
  {
   "repo": "livliv-dev/player",
   "url": "https://github.com/livliv-dev/player",
   "what": "浏览器端 2.5D 虚拟形象播放器，支持口型同步、摄像头面部追踪，兼容 LivLiv、VRM、PNGTuber 角色。",
   "why": "纯前端 WebGL2 渲染，无需显卡算力，自带 21 个角色，几分钟就能在网页里跑起来。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "run_now",
   "total": 0.729,
   "stars": 1485,
   "created_at": "2026-11-04",
   "language": "TypeScript",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": true
  },
  {
   "repo": "NandhaKishorM/laya",
   "url": "https://github.com/NandhaKishorM/laya",
   "what": "非自回归决策引擎，单次前向传播对任意文本做分类、打分和是非判断，支持百种语言并按请求路由检查点。",
   "why": "把LLM的推理成本压到33ms一次，适合做本地快速分类和路由，但需要先确认模型体积能否塞进8G显存。",
   "theme": "runtime",
   "theme_title": "模型与运行时",
   "bucket": "m3",
   "category": "save",
   "total": 0.677,
   "stars": 35393,
   "created_at": "2026-09-18",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "pip"
   },
   "concepts": [
    "类",
    "字典",
    "装饰器",
    "异步"
   ],
   "assignment": "用laya对一批中英文短句做零样本情感分类，统计置信度并画出校准曲线。",
   "hype": [
    "3.5万星但创建仅两个月，fork比例与讨论量需核实",
    "README含大量徽章、预印本引用和赞助链接，营销味较重"
   ],
   "picked": true
  },
  {
   "repo": "anywhere-labs/dsh-desktop",
   "url": "https://github.com/anywhere-labs/dsh-desktop",
   "what": "把 DeepSeek Harness 的本地 Web UI、Host 服务和插件系统打包成 Windows/macOS/Linux 原生桌面客户端，桌面本身也是插件。",
   "why": "3.5 万星但创建仅三个月、更新频繁，社区热度高；不过它是独立社区项目，与深度求索无官方关系。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m3",
   "category": "save",
   "total": 0.655,
   "stars": 35724,
   "created_at": "2026-08-13",
   "language": "TypeScript",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建三个月即 3.5 万星，增速异常",
    "README 含赞助商推广与下载引导话术",
    "仓库名与徽章链接指向的仓库名不一致"
   ],
   "picked": true
  },
  {
   "repo": "Gathin23/cleanyourtv",
   "url": "https://github.com/Gathin23/cleanyourtv",
   "what": "通过 Wi-Fi 用 ADB 卸载 Android TV 和 Google TV 的预装臃肿应用，并换成仿 Apple TV 的干净启动器，支持一键恢复。",
   "why": "近期热度极高，登上 GitHub 周榜第一，被多家科技媒体报道；它解决智能电视广告和隐私问题，操作门槛低。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "save",
   "total": 0.645,
   "stars": 56288,
   "created_at": "2026-10-17",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [
    "subprocess",
    "命令行参数解析",
    "网络通信"
   ],
   "assignment": "用 Python 写一个脚本，通过 ADB 连接电视并列出已安装的第三方应用包名。",
   "hype": [
    "创建到更新不足一个月即获 5.6 万星，增长异常迅猛",
    "README 大量引用媒体报道和趋势徽章，营销色彩较重"
   ],
   "picked": true
  },
  {
   "repo": "eternity4719/HowToLiveBetter",
   "url": "https://github.com/eternity4719/HowToLiveBetter",
   "what": "一本开源中文生活指南，772 条建议覆盖健康、法律、社保、理财，每条标注成本收益与证据等级，附网页检索和 AI skill。",
   "why": "内容与 AI 无关，但自带 Claude Code/Codex skill，可让本地 Ollama 模型照书回答生活决策问题，一小时能试。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "m3",
   "category": "save",
   "total": 0.598,
   "stars": 74990,
   "created_at": "2026-09-07",
   "language": "HTML",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": true
  },
  {
   "repo": "deepseek-ai/deepseek-harness",
   "url": "https://github.com/deepseek-ai/deepseek-harness",
   "what": "DeepSeek 开源的 agent harness，基于 Cordis 插件化架构，提供 Web UI 和插件生态。",
   "why": "开发者预览期，迭代快且会破坏兼容；star 数异常高，需谨慎看待。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m3",
   "category": "save",
   "total": 0.578,
   "stars": 278742,
   "created_at": "2026-08-13",
   "language": "TypeScript",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "star 数 27 万与创建仅三个月、开发者预览阶段严重不匹配，疑似刷星或统计异常"
   ],
   "picked": false
  },
  {
   "repo": "DIYgod/pinky",
   "url": "https://github.com/DIYgod/pinky",
   "what": "开源桌面应用，通过 MCP 让 Claude Code 等 AI agent 远程操控真实 iPhone 或安卓手机，关键操作需用户点击批准。",
   "why": "手机自动化 agent 正热，它把审批权留在人手里，防止 agent 乱点支付和转账。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "w1",
   "category": "save",
   "total": 0.576,
   "stars": 1822,
   "created_at": "2026-11-06",
   "language": "Go",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": true
  },
  {
   "repo": "storytold/craft-anything",
   "url": "https://github.com/storytold/craft-anything",
   "what": "纯 Rust 开源引擎，用真实检查工具分析任意网站、应用或游戏，再由编码 agent 复刻出你自己的版本并对比原版迭代。",
   "why": "2.7 万星但创建仅 11 天、状态 early alpha，热度与成熟度严重不匹配，值得先观望。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "save",
   "total": 0.557,
   "stars": 27821,
   "created_at": "2026-10-31",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建 11 天即 2.7 万 star，增速异常",
    "README 以品牌营销和 Discord 社区导流为主，技术细节偏少",
    "early alpha 阶段却已有极高关注度"
   ],
   "picked": true
  },
  {
   "repo": "Niko1221/Strata",
   "url": "https://github.com/Niko1221/Strata",
   "what": "C++ 编写的本地推理引擎，一键安装，在消费级硬件上跑 Qwen3.8-Flash-Next 等大模型，提供本地 OpenAI/Anthropic 兼容 API 并支持图像输入。",
   "why": "本地大模型部署正热，它主打一键安装和消费级硬件，但 8G 显存只能跑最低量化档，且 4.3 万星与创建时间严重不符。",
   "theme": "runtime",
   "theme_title": "模型与运行时",
   "bucket": "m3",
   "category": "save",
   "total": 0.537,
   "stars": 43102,
   "created_at": "2026-09-24",
   "language": "C++",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": 8,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建仅约 7 周即达 4.3 万星，增速异常",
    "README 通篇营销话术与赞助链接",
    "无 topics 标签，社区信息稀薄"
   ],
   "picked": false
  },
  {
   "repo": "storytold/photocraft",
   "url": "https://github.com/storytold/photocraft",
   "what": "用纯 Rust 从零重写的开源 Photoshop 替代品，支持图层、蒙版、调整图层、文字、矢量、笔刷和真实 PSD 文件。",
   "why": "早期 alpha 阶段，78640 星热度很高，但和你的 Ollama 本地模型路线无关，更像一个可以讲给别人听的 Rust 桌面应用案例。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m3",
   "category": "save",
   "total": 0.527,
   "stars": 78640,
   "created_at": "2026-09-30",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建仅约六周即获 7.8 万星，增速异常",
    "README 通篇品牌与社区营销话术"
   ],
   "picked": false
  },
  {
   "repo": "heydamir/unslop",
   "url": "https://github.com/heydamir/unslop",
   "what": "一个 Claude Code/Codex 技能包，先审计出 AI 味 UI 的紫色渐变、发光、emoji 标签等问题，再按设计师红线的节奏逐轮改造成有性格的界面。",
   "why": "AI 生成的界面千篇一律，这个技能把“去 AI 味”变成可复用的提示词流程，还能生成 10 秒改造视频方便分享。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "save",
   "total": 0.503,
   "stars": 14267,
   "created_at": "2026-10-29",
   "language": "JavaScript",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到最近更新仅 10 天即 1.4 万星，增速异常",
    "README 含“Hire the unslopper”付费服务导流"
   ],
   "picked": true
  },
  {
   "repo": "jamesondh/chimera-vocal-synth",
   "url": "https://github.com/jamesondh/chimera-vocal-synth",
   "what": "浏览器里的物理建模人声合成器，用 Rust 编译成 WebAssembly，模拟声道发声，可唱、说、打拍子。",
   "why": "近期热度上升，浏览器即可体验，无需显卡，适合快速上手玩一玩。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "save",
   "total": 0.502,
   "stars": 1856,
   "created_at": "2026-11-05",
   "language": "Rust",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": true
  },
  {
   "repo": "yetone/magpie",
   "url": "https://github.com/yetone/magpie",
   "what": "菜单栏应用加本地网关，把 Claude Code、Codex、Gemini CLI 等 agent 的模型配置集中管理，可一键切换模型和账号。",
   "why": "多 agent 时代每人装好几个 CLI，模型配置分散、额度用完就卡住，统一网关正好解决这个痛点。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m3",
   "category": "save",
   "total": 0.487,
   "stars": 34515,
   "created_at": "2026-09-23",
   "language": "Go",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "README 通篇营销话术与赞助商链接",
    "创建到更新不足两个月即 3.4 万星，增速异常",
    "主仓库无源码仅指向 releases 仓库，star 与 fork 比例可疑"
   ],
   "picked": false
  },
  {
   "repo": "JenkinWoo/sheeridVerify",
   "url": "https://github.com/JenkinWoo/sheeridVerify",
   "what": "Node.js 编写的本地 Web 工作台，用任务队列和浏览器自动化走学生身份验证表单流程。",
   "why": "与本地 AI 无关，且用途涉及身份验证流程，对普通学生没有可玩性或学习价值。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "w1",
   "category": "skip",
   "total": 0.444,
   "stars": 2020,
   "created_at": "2026-11-06",
   "language": "JavaScript",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建与更新同日、无描述无 topics 却有两千星，疑似刷星或短期推广",
    "README 含社区推广草稿与 AI 生成介绍图，营销痕迹明显"
   ],
   "picked": false
  },
  {
   "repo": "Ebony-Vinyl/dsh-our-free-model",
   "url": "https://github.com/Ebony-Vinyl/dsh-our-free-model",
   "what": "dsh 编辑器插件，免登录免 Key 接入 DeepSeek V4.1 Flash、Kimi K3 等免费模型，附本地用量看板与 OpenAI 兼容转发端口。",
   "why": "仓库 6.9 万星、日榜第一，但免费模型依赖上游网关，随时可能失效，且需先装 dsh 宿主。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m3",
   "category": "skip",
   "total": 0.383,
   "stars": 69653,
   "created_at": "2026-09-24",
   "language": "JavaScript",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "6.9 万星与 2026-09 创建时间不匹配，增长异常",
    "README 通篇营销话术，强调免费不限量",
    "依赖第三方免费网关，可用性无保障",
    "EAC 渠道要求登录并 star 仓库才放行"
   ],
   "picked": false
  },
  {
   "repo": "HolyArrs/HolyArrs",
   "url": "https://github.com/HolyArrs/HolyArrs",
   "what": "Go 编写的自托管媒体中心，整合影视音乐下载、整理与 Jellyfin/Plex 式播放，Docker 一键部署。",
   "why": "刚上 Show HN 榜首、更新频繁，但它是家庭影音服务器，跟本地 AI 模型没有关系。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "skip",
   "total": 0.368,
   "stars": 703,
   "created_at": "2026-11-09",
   "language": "Go",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "docker"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅两天、star 已 700+，且 README 大量多语言与营销徽章，增长节奏偏快"
   ],
   "picked": false
  },
  {
   "repo": "deepseek-ai/DeepInfer",
   "url": "https://github.com/deepseek-ai/DeepInfer",
   "what": "DeepSeek 官方开源的大规模推理框架，支持 V4.1-Flash 模型，含优化内核、并行调度与投机解码。",
   "why": "官方生产级推理栈开源，但仅支持 SM100 与昇腾 950，普通显卡无法运行。",
   "theme": "runtime",
   "theme_title": "模型与运行时",
   "bucket": "m1",
   "category": "skip",
   "total": 0.363,
   "stars": 25851,
   "created_at": "2026-10-16",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "tangerineturtle1/NX2navi",
   "url": "https://github.com/tangerineturtle1/NX2navi",
   "what": "把 Switch 2 版《塞尔达传说：时之笛》静态重编译成 Windows 原生 x86-64 程序，用 Vulkan 渲染，支持高帧率、宽屏和 DLSS/FSR。",
   "why": "项目刚开源几天就获得三千多星，已可游玩前几个场景，但需要自备游戏文件，且用 C 语言编写。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.361,
   "stars": 3074,
   "created_at": "2026-11-07",
   "language": "C",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅4天即3074星，增速异常",
    "无描述无topics但星数极高"
   ],
   "picked": false
  },
  {
   "repo": "deepseek-ai/dsh-superagent-prototype",
   "url": "https://github.com/deepseek-ai/dsh-superagent-prototype",
   "what": "DeepSeek 开源的主动式编码 Agent 原型，监听 GitHub/飞书任务，自动开分支干活并提 PR，带 Web 面板。",
   "why": "两万星但创建仅三天、更新两天，热度异常；且需 DeepSeek Harness 与多服务配置，非开箱即用。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "skip",
   "total": 0.349,
   "stars": 22413,
   "created_at": "2026-10-31",
   "language": "TypeScript",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建三天即 2.2 万星，star 增速异常",
    "无 topics、无正式发布，README 自称研究原型",
    "依赖内部 Harness 与飞书等外部服务，普通用户难以复现"
   ],
   "picked": false
  },
  {
   "repo": "seedds/nxnative",
   "url": "https://github.com/seedds/nxnative",
   "what": "把 Switch 游戏包重写成可在 Apple 芯片上原生运行的 Mac 应用或未签名 IPA，用 Metal 重建图形，不是模拟器。",
   "why": "近期热度高，但只支持 Apple 芯片和最新系统，Windows 笔记本完全跑不了。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "skip",
   "total": 0.349,
   "stars": 14713,
   "created_at": "2026-10-13",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "ccch1mneyyy/dsh-Go",
   "url": "https://github.com/ccch1mneyyy/dsh-Go",
   "what": "DeepSeek Harness 的 Android 客户端，用 Flutter 编写，可在手机上本地运行，也能远程遥控电脑上的 DSH。",
   "why": "Trendshift 日榜第一，近两万星，但它是安卓 App，Windows 笔记本上跑不了。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "skip",
   "total": 0.348,
   "stars": 19437,
   "created_at": "2026-10-25",
   "language": "Dart",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅约两周即近两万星，增速异常",
    "README 通篇营销话术与宠物 GIF，并含求 Star 换适配的表述"
   ],
   "picked": false
  },
  {
   "repo": "mmdoctor/google-pro-helper",
   "url": "https://github.com/mmdoctor/google-pro-helper",
   "what": "利用浏览器扩展和本地批量控制台，向 Google 账号注入 offer token，以零元开通 Google AI Pro 两年订阅。",
   "why": "仓库创建当天就获得 1701 star，README 明确说明这是批量注册账号来薅取订阅，账号随时可能被封禁。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "w1",
   "category": "skip",
   "total": 0.342,
   "stars": 1701,
   "created_at": "2026-11-05",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建当天即 1701 star，增长异常",
    "README 通篇是薅羊毛教程和营销话术",
    "涉及批量注册账号、注入 token、绑定支付卡等灰色操作"
   ],
   "picked": false
  },
  {
   "repo": "IainKay/ram-altman",
   "url": "https://github.com/IainKay/ram-altman",
   "what": "一个 bash 脚本，每天把本机闲置内存量写成邮件发给 OpenAI CEO，讽刺他关于 DRAM 分配的言论。",
   "why": "蹭 Sam Altman 内存言论热度的恶搞脚本，纯 Linux 邮件依赖，Windows 上跑不了。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.339,
   "stars": 1882,
   "created_at": "2026-11-05",
   "language": "Shell",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅一天，star 数偏高，疑似蹭热点刷星"
   ],
   "picked": false
  },
  {
   "repo": "NotRexed/Hookshot",
   "url": "https://github.com/NotRexed/Hookshot",
   "what": "把《塞尔达传说：时之笛》Switch 2 版静态重编译成 Windows/Linux 原生程序，用 Vulkan 重建画面，无需模拟器。",
   "why": "7183 星但创建仅 6 天，更新极频繁；需自备游戏本体，实验阶段，多数场景仍有 bug。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.329,
   "stars": 7183,
   "created_at": "2026-11-05",
   "language": "C++",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建 6 天即 7183 星，增速异常",
    "README 自述发布文件被报为木马",
    "需自备游戏本体与密钥，仓库不含可执行文件"
   ],
   "picked": false
  },
  {
   "repo": "Zagitta/gpu-unlock",
   "url": "https://github.com/Zagitta/gpu-unlock",
   "what": "在 Linux 启动阶段解除 GeForce 显卡张量核心 FP16/BF16/TF32 半速限制的内核级补丁工具。",
   "why": "近期热度高，宣称能让 RTX 20/30/40 系列 AI 吞吐翻倍，但仅限 Linux，Windows 用户无法直接使用。",
   "theme": "runtime",
   "theme_title": "模型与运行时",
   "bucket": "m1",
   "category": "skip",
   "total": 0.322,
   "stars": 18662,
   "created_at": "2026-10-18",
   "language": "C",
   "runnable": {
    "windows": false,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "仅支持 Linux 却面向 GeForce 消费级用户宣传",
    "创建到最近更新仅 11 天即获 1.8 万 star，增速异常",
    "标题用“半速”“翻倍”等强营销措辞"
   ],
   "picked": false
  },
  {
   "repo": "HybridRobotics/supermimic",
   "url": "https://github.com/HybridRobotics/supermimic",
   "what": "基于可微世界模型的人形机器人全身动作跟踪训练框架，依赖 mjlab 仿真环境。",
   "why": "仓库刚建一天就 954 星，但需要 GPU 集群级训练，8G 显存笔记本跑不动。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "d3",
   "category": "skip",
   "total": 0.303,
   "stars": 954,
   "created_at": "2026-11-10",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [
    "类",
    "异步"
   ],
   "assignment": "",
   "hype": [
    "创建次日即近千星，fork 比例偏低，疑似刷星"
   ],
   "picked": false
  },
  {
   "repo": "jhaizhou-ops/S2Arm",
   "url": "https://github.com/jhaizhou-ops/S2Arm",
   "what": "把 Switch 游戏代码静态重编译为 ARM64 原生程序，图形直连 Metal，在 iPhone/iPad/Mac 上运行，非模拟器。",
   "why": "项目刚发布数天即获 2500+ 星，主打一键启动器和 AI 代操作，话题性强，但需自备游戏与密钥。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "d3",
   "category": "skip",
   "total": 0.284,
   "stars": 2545,
   "created_at": "2026-11-08",
   "language": "C#",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅3天即2545星，增长异常快",
    "README通篇营销话术与官网导流",
    "核心功能依赖自备游戏与密钥，可验证性低"
   ],
   "picked": false
  },
  {
   "repo": "Kianuni/Erosion-CN",
   "url": "https://github.com/Kianuni/Erosion-CN",
   "what": "基于 worse_query 的 iOS/iPadOS MobileGestalt 配置研究工具箱，简体中文加固版，可改系统隐藏开关并防白苹果。",
   "why": "iOS 27 越狱圈热门工具，1418 星且刚更新，但只面向 iPhone/iPad，与 Windows 笔记本无关。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "skip",
   "total": 0.275,
   "stars": 1418,
   "created_at": "2026-11-10",
   "language": "Swift",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "huamidev/GestaltX",
   "url": "https://github.com/huamidev/GestaltX",
   "what": "iOS 27 的 MobileGestalt 编辑器，可改区域码、开 AI 能力标志、编辑系统字段并备份还原。",
   "why": "两天内涨到近六千星，靠改区域码尝试开启 Apple Intelligence，话题性强但仅限 iOS 27 越狱或侧载环境。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "skip",
   "total": 0.264,
   "stars": 5878,
   "created_at": "2026-11-09",
   "language": "Swift",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建两天即近六千星，增速异常",
    "无 topics 但热度极高，疑似刷星"
   ],
   "picked": false
  },
  {
   "repo": "l-friedrich64709109/fifa-20",
   "url": "https://github.com/l-friedrich64709109/fifa-20",
   "what": "打着 FIFA 20 旗号的 PowerShell 脚本，诱导用户以管理员权限执行远程代码，与游戏本身无关。",
   "why": "典型供应链投毒样本：README 重复诱导关闭杀毒软件并执行 irm | Invoke-Expression，应立即远离。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "skip",
   "total": 0.161,
   "stars": 784,
   "created_at": "2026-11-10",
   "language": "",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "README 重复粘贴同一段安装说明",
    "要求管理员权限执行远程脚本",
    "指导关闭杀毒软件实时保护",
    "仓库名与内容不符，伪装成游戏安装包",
    "创建与更新同日，疑似刷星或一次性投放"
   ],
   "picked": false
  },
  {
   "repo": "seizepupatackle/fl-studio",
   "url": "https://github.com/seizepupatackle/fl-studio",
   "what": "打着 Fl Studio 2026 旗号的预激活安装包，实际用 PowerShell 远程脚本下载执行，与音频软件无关。",
   "why": "典型盗版软件投毒仓库，README 诱导关闭杀毒并以管理员权限运行远程脚本，应立即远离。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "skip",
   "total": 0.16,
   "stars": 747,
   "created_at": "2026-11-08",
   "language": "",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "假冒知名商业软件预激活版",
    "诱导关闭杀毒软件与 SmartScreen",
    "要求管理员权限执行远程 PowerShell 脚本",
    "创建当天即近 750 星，疑似刷星",
    "topics 堆砌 SEO 关键词"
   ],
   "picked": false
  },
  {
   "repo": "DensityApothecary/adobe-substance-3d",
   "url": "https://github.com/DensityApothecary/adobe-substance-3d",
   "what": "名为 Adobe Substance 3D 的预配置环境仓库，实为无 README 的 HTML 页面，疑似伪装成创意软件的安装引导。",
   "why": "创建与更新同日、无 README、topics 堆砌 substance 关键词，典型刷星或钓鱼仓库，不值得花时间。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "skip",
   "total": 0.158,
   "stars": 704,
   "created_at": "2026-11-11",
   "language": "HTML",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建与最近更新同为 2026-11-11，无任何开发历史",
    "无 README 却堆砌大量 substance 相关 topics 蹭搜索",
    "名称冒用 Adobe Substance 3D 品牌，描述含 secure deployment pipeline 等营销话术",
    "704 star 与零内容、零文档严重不匹配"
   ],
   "picked": false
  }
 ]
};