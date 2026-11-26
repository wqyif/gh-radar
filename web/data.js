window.RADAR = {
 "generated": "2026-11-26",
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
   "count": 14
  },
  {
   "key": "m1",
   "title": "这个月",
   "min_age": 8,
   "max_age": 30,
   "count": 60
  },
  {
   "key": "m3",
   "title": "近三个月",
   "min_age": 31,
   "max_age": 90,
   "count": 14
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
   "repo": "janestreet/agent_skills",
   "url": "https://github.com/janestreet/agent_skills",
   "what": "Jane Street 开源的 AI agent 技能合集，目前只有一个苏格拉底式家教技能，用 SKILL.md 提示词实现。",
   "why": "大厂内部 agent 技能首次外流，纯提示词零依赖，正好配你本地的 Ollama 模型玩教学。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.826,
   "stars": 11844,
   "created_at": "2026-11-03",
   "language": "",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "把 socratic-tutor 的 SKILL.md 粘进 Ollama 的 system prompt，让它用苏格拉底法教你一个你正在学的课程主题，并记录它提问的节奏。",
   "hype": [],
   "picked": true
  },
  {
   "repo": "danielwh2/sprite-stacking",
   "url": "https://github.com/danielwh2/sprite-stacking",
   "what": "把四视图像素画雕刻成体素切片，生成可旋转的伪3D精灵，附带HTML查看器和导出工具。",
   "why": "Agent skill 形态正流行，配合 Claude Code 等工具，一小时就能做出能转的像素小物件。",
   "theme": "visual",
   "theme_title": "可视化创意",
   "bucket": "w1",
   "category": "run_now",
   "total": 0.803,
   "stars": 938,
   "created_at": "2026-11-20",
   "language": "HTML",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "pip"
   },
   "concepts": [
    "列表",
    "字典",
    "NumPy 数组",
    "Pillow 图像处理",
    "命令行参数"
   ],
   "assignment": "用四张自绘像素视图跑通 views_to_slices.py，调整 --slices 与 --round，对比切片数与圆角雕刻对旋转效果的影响。",
   "hype": [],
   "picked": true
  },
  {
   "repo": "n4ze3m/tiny-voca",
   "url": "https://github.com/n4ze3m/tiny-voca",
   "what": "4.5M 参数、18MB 的双音色英文 TTS 模型，从零训练，支持 PyTorch、ONNX 和浏览器运行。",
   "why": "模型极小，CPU 上就能跑到 70 倍实时，8G 显存笔记本毫无压力，一小时就能试听。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.794,
   "stars": 792,
   "created_at": "2026-11-14",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": 0,
    "install": "pip"
   },
   "concepts": [
    "命令行参数",
    "模块导入",
    "文件读写",
    "函数调用"
   ],
   "assignment": "用 tiny_voca.infer.speak_text 写一个脚本，把一段英文文本按句子切分，分别用 F2 和 M2 音色合成并拼成一个 wav 文件。",
   "hype": [],
   "picked": true
  },
  {
   "repo": "hitkeeen/blender-ai-mcp-addon",
   "url": "https://github.com/hitkeeen/blender-ai-mcp-addon",
   "what": "Blender 插件加内置 MCP 服务器，让 AI 通过对话检查场景、建模、改材质并执行多步工作流。",
   "why": "MCP 协议正热，Blender 加本地 Ollama 的组合门槛低，适合一小时内在笔记本上试玩。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.782,
   "stars": 2278,
   "created_at": "2026-11-12",
   "language": "",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [
    "函数",
    "字典",
    "类",
    "异步",
    "HTTP 请求"
   ],
   "assignment": "用 Ollama 本地模型连接插件，让 AI 在 Blender 里生成三个物体并改一次材质，记录工具调用过程。",
   "hype": [],
   "picked": true
  },
  {
   "repo": "iamajmeena/neonclipping",
   "url": "https://github.com/iamajmeena/neonclipping",
   "what": "本地开源视频切片引擎，粘贴链接自动下载音频、用字幕或Whisper转写、按音量与语气挑高光，再用Ollama写标题钩子，输出带字幕的9:16竖屏片段。",
   "why": "OpusClip类云端切片工具要订阅，这个全本地免费，8G显存可跑小模型，两分钟出片，适合当谈资。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "w1",
   "category": "run_now",
   "total": 0.76,
   "stars": 2634,
   "created_at": "2026-11-19",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": 8,
    "install": "installer"
   },
   "concepts": [
    "subprocess",
    "正则表达式",
    "JSON",
    "HTTP请求",
    "文件路径处理"
   ],
   "assignment": "把音频能量打分函数单独抽出来，用一段自己录的音频画出响度曲线并标出前三个峰值时间点。",
   "hype": [
    "创建仅两天即2100+星，增长异常快",
    "README通篇对比营销与求star/关注话术"
   ],
   "picked": true
  },
  {
   "repo": "livliv-dev/player",
   "url": "https://github.com/livliv-dev/player",
   "what": "浏览器端 2.5D 虚拟形象播放器，支持口型同步、摄像头面部追踪，兼容 LivLiv、VRM、PNGTuber 角色。",
   "why": "纯前端 WebGL2 渲染，无需显卡算力，自带 21 个角色，几分钟就能在网页里跑起来。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.731,
   "stars": 1632,
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
   "picked": false
  },
  {
   "repo": "FrigadeHQ/yogurt",
   "url": "https://github.com/FrigadeHQ/yogurt",
   "what": "本地优先的 AI 会议记录桌面应用，用 whisper.cpp 转写、llama.cpp 本地模型生成摘要，数据不出本机。",
   "why": "Granola 类会议笔记工具的免费开源替代，Electron 桌面端已提供 Windows 安装包，隐私卖点清晰。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.712,
   "stars": 3560,
   "created_at": "2026-11-10",
   "language": "TypeScript",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "krisgfx9/Wireless-Device-Battery-Monitor",
   "url": "https://github.com/krisgfx9/Wireless-Device-Battery-Monitor",
   "what": "Windows 任务栏小工具，直接读取罗技、雷蛇、PS/Xbox 等无线外设电量，无需厂商软件。",
   "why": "4715 星、350KB 纯 C++ 托盘程序，装完即用，正好补上你笔记本外设电量看不见的痛点。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.709,
   "stars": 5834,
   "created_at": "2026-11-16",
   "language": "C++",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "Noniv/abyssal-garden",
   "url": "https://github.com/Noniv/abyssal-garden",
   "what": "单文件 97KB 的 WebGPU 浏览器水下世界，代码生成海藻林、沉船、蝠鲼与实时合成音效，可自由游动。",
   "why": "零依赖单 HTML 文件，下载即玩，正好用一小时体验 WebGPU 生成式场景的观感。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.706,
   "stars": 2990,
   "created_at": "2026-11-12",
   "language": "JavaScript",
   "runnable": {
    "windows": true,
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
   "repo": "JuneYaooo/rea-video",
   "url": "https://github.com/JuneYaooo/rea-video",
   "what": "用 AI agent 逐镜头拆解视频，判断是实拍、AI 生成还是代码制作，并输出 VIDEO.md 复刻方案。",
   "why": "短视频与 AI 生成视频爆发，逆向拆解镜头成为创作者和 agent 的新需求，star 已近万。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "save",
   "total": 0.679,
   "stars": 13424,
   "created_at": "2026-10-29",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "pip"
   },
   "concepts": [
    "命令行调用",
    "JSON 解析",
    "子进程",
    "文件读写"
   ],
   "assignment": "用 Python 调用 ffmpeg 把一段短视频按镜头切分，并输出每个镜头的时长与首帧截图。",
   "hype": [],
   "picked": false
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
   "stars": 35968,
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
   "repo": "haziqahmedqasmi/PeakCut",
   "url": "https://github.com/haziqahmedqasmi/PeakCut",
   "what": "自托管长视频与直播切片工具，自动转录、AI 选高光片段、裁成 9:16 竖屏加逐词字幕并发布。",
   "why": "687 星新项目，支持 Ollama 本地模型，无需 API key 也能按响度切片，适合一小时折腾。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "save",
   "total": 0.668,
   "stars": 1944,
   "created_at": "2026-11-14",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "pip"
   },
   "concepts": [
    "异步",
    "子进程",
    "环境变量",
    "HTTP 服务",
    "JSON"
   ],
   "assignment": "用 Ollama 本地模型跑通一次切片，记录 AI 选段与按响度选段的差异。",
   "hype": [],
   "picked": false
  },
  {
   "repo": "siliconjungle/shapeshift-labs-ink-studio",
   "url": "https://github.com/siliconjungle/shapeshift-labs-ink-studio",
   "what": "JavaScript 工具包，用 SDF 雕刻像素风高斯泼溅模型，支持动画、物理与程序化场景，可 CLI 渲染出图。",
   "why": "纯 JS 无运行时依赖，Node 18 即可跑，CPU 渲染不吃显存，适合一小时试玩生成像素 3D 图。",
   "theme": "visual",
   "theme_title": "可视化创意",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.667,
   "stars": 1034,
   "created_at": "2026-11-16",
   "language": "JavaScript",
   "runnable": {
    "windows": true,
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
   "repo": "anefzaoui/misterdownloadmanager",
   "url": "https://github.com/anefzaoui/misterdownloadmanager",
   "what": "纯 Rust 编写的开源下载管理器，支持多线程加速、BT/磁力、m3u8 与 yt-dlp 视频下载，带 egui 界面和浏览器扩展。",
   "why": "star 过万但创建仅三周，更新极快；作为 IDM 免费替代品，普通 Windows 用户可直接装来用。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.664,
   "stars": 18231,
   "created_at": "2026-10-29",
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
    "创建约三周即获 1.1 万 star，与项目体量不匹配",
    "README 通篇对标 IDM 的营销话术（5× faster、free forever）"
   ],
   "picked": false
  },
  {
   "repo": "bookwjitchieni1986/blender-ai-mcp-addon",
   "url": "https://github.com/bookwjitchieni1986/blender-ai-mcp-addon",
   "what": "Blender 插件加内置 MCP 服务器，让 AI 通过对话检查场景、建模、改材质并执行多步任务。",
   "why": "MCP 正成为 AI 连接外部工具的标准，这个项目把本地 Ollama 和 Blender 直接打通，适合动手试。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "w1",
   "category": "save",
   "total": 0.651,
   "stars": 2750,
   "created_at": "2026-11-19",
   "language": "",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [
    "MCP 协议",
    "工具调用",
    "bpy 脚本"
   ],
   "assignment": "用 Ollama 本地模型连接插件，让 AI 在 Blender 里生成一个带材质的立方体并截图验证。",
   "hype": [],
   "picked": true
  },
  {
   "repo": "deepseek-ai/chat-demo",
   "url": "https://github.com/deepseek-ai/chat-demo",
   "what": "DeepSeek 官方静态聊天前端，浏览器直连 API，支持多会话、分支、附件、语音与 Mermaid 渲染。",
   "why": "刚发布一天就 856 星，官方出品，无需后端，双击 index.html 即可体验。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "save",
   "total": 0.648,
   "stars": 5462,
   "created_at": "2026-11-12",
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
   "picked": false
  },
  {
   "repo": "KnifeLemon/Filee",
   "url": "https://github.com/KnifeLemon/Filee",
   "what": "C# 编写的离线文件转换器，拖拽文件到光标处的格式圆环即可转换 263 种格式，无需上传或安装 Office。",
   "why": "26801 star 且登上 Trendshift 周榜第一，近期热度高；但它是 C# 桌面工具，与本地 AI 折腾无关。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m3",
   "category": "save",
   "total": 0.647,
   "stars": 31293,
   "created_at": "2026-09-29",
   "language": "C#",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建时间 2026-09-29 到 2026-11-14 约一个半月积累 26801 star，增速异常",
    "README 通篇营销话术与多语言徽章、Trendshift/HelloGitHub 推荐位"
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
   "bucket": "m3",
   "category": "save",
   "total": 0.645,
   "stars": 61036,
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
   "repo": "DevedevT/FFmpeg-GUI-Editor-Windows",
   "url": "https://github.com/DevedevT/FFmpeg-GUI-Editor-Windows",
   "what": "Windows 上免安装的 FFmpeg 图形界面视频编辑器，支持无损裁剪、压缩、格式转换、字幕和批量处理。",
   "why": "下载 exe 和 libvlc.dll 两个文件即可使用，无需配置环境，适合快速处理视频素材。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "run_now",
   "total": 0.629,
   "stars": 1229,
   "created_at": "2026-11-12",
   "language": "Visual Basic .NET",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "EL4CTEO/fast-anything",
   "url": "https://github.com/EL4CTEO/fast-anything",
   "what": "用 AI 编码代理定位 Python/Node/Ruby 等应用中最慢的少数函数，自动移植成 Rust 并回放真实调用验证等价后热替换。",
   "why": "它把「重写整个项目」缩小成「只重写 5% 热点」，并用录制调用做等价性证明，是当下 agent 工具链里少见的可验证闭环。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "w1",
   "category": "save",
   "total": 0.628,
   "stars": 4033,
   "created_at": "2026-11-21",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [
    "性能分析",
    "函数调用",
    "FFI",
    "边界情况"
   ],
   "assignment": "用 cProfile 找出自己一个小脚本里最耗时的函数，记录它的输入输出样例，再尝试用 Rust 重写并用同样样例对比结果。",
   "hype": [
    "创建两天即 2029 star，增长曲线异常",
    "README 含 Trendshift 徽章与演示 GIF，营销包装较重"
   ],
   "picked": false
  },
  {
   "repo": "zero5122/offline-file-converter-windows",
   "url": "https://github.com/zero5122/offline-file-converter-windows",
   "what": "Windows 离线文件转换桌面应用，用 PySide6 做界面，支持 PDF、文档、图片、音视频批量转换。",
   "why": "隐私焦虑下离线转换有真实需求，但仓库创建与更新同日、star 过千，需警惕刷星。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "save",
   "total": 0.611,
   "stars": 1061,
   "created_at": "2026-11-23",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [
    "类",
    "多线程",
    "文件读写",
    "GUI 事件循环"
   ],
   "assignment": "用 PySide6 写一个批量图片格式转换小工具，支持拖拽选文件并显示进度条。",
   "hype": [
    "创建与最近更新同为 2026-11-23，star 1061 与仓库年龄不匹配",
    "README 通篇营销话术，功能描述含糊未列具体格式"
   ],
   "picked": true
  },
  {
   "repo": "Umbra9179/clipboard-history-manager-windows",
   "url": "https://github.com/Umbra9179/clipboard-history-manager-windows",
   "what": "Windows 剪贴板历史管理器，支持搜索、图片预览、标签、编辑和备份，基于 WinUI 的 C# 桌面应用。",
   "why": "与 AI 无关，但作为日常效率工具能立刻改善复制粘贴体验，装完即用。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "run_now",
   "total": 0.61,
   "stars": 1262,
   "created_at": "2026-11-23",
   "language": "C#",
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
   "repo": "eternity4719/HowToLiveBetter",
   "url": "https://github.com/eternity4719/HowToLiveBetter",
   "what": "一本开源中文生活指南，772 条建议覆盖健康、法律、社保、理财，每条标注成本收益与证据等级，附网页检索和 AI skill。",
   "why": "内容与 AI 无关，但自带 Claude Code/Codex skill，可让本地 Ollama 模型照书回答生活决策问题，一小时能试。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "m3",
   "category": "save",
   "total": 0.598,
   "stars": 77602,
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
   "picked": false
  },
  {
   "repo": "sybil-solutions/inference-optimisation-skill",
   "url": "https://github.com/sybil-solutions/inference-optimisation-skill",
   "what": "一个给 AI agent 用的技能包，按固定流程逐步调优本地 LLM 推理速度，覆盖解码、投机采样、prefill 和 KV 缓存。",
   "why": "本地跑模型的人越来越多，但多数人只会换参数，这个技能把调优过程整理成可复用的方法论。",
   "theme": "runtime",
   "theme_title": "模型与运行时",
   "bucket": "m1",
   "category": "save",
   "total": 0.596,
   "stars": 2717,
   "created_at": "2026-11-16",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": true,
    "vram_gb": 8,
    "install": "source"
   },
   "concepts": [
    "基准测试",
    "子进程调用",
    "配置文件解析",
    "JSON 日志"
   ],
   "assignment": "用 Ollama 跑一个 7B 模型，测出单用户 decode 速度，再按理论带宽上限算出差距百分比。",
   "hype": [],
   "picked": false
  },
  {
   "repo": "DIYgod/pinky",
   "url": "https://github.com/DIYgod/pinky",
   "what": "开源桌面应用，通过 MCP 让 Claude Code 等 AI agent 远程操控真实 iPhone 或安卓手机，关键操作需用户点击批准。",
   "why": "手机自动化 agent 正热，它把审批权留在人手里，防止 agent 乱点支付和转账。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "save",
   "total": 0.586,
   "stars": 2785,
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
   "picked": false
  },
  {
   "repo": "chuanqisun/spaceship",
   "url": "https://github.com/chuanqisun/spaceship",
   "what": "浏览器里的实时文本生成实验台，用旋钮、注意力锁定和未来向量操控 LLM 输出，像开飞船一样驾驭想法。",
   "why": "作者是 MIT Media Lab 研究者，探索 60FPS 交互式 LLM 的新交互范式，社区已有 VSCode 插件等衍生。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "save",
   "total": 0.578,
   "stars": 1048,
   "created_at": "2026-11-16",
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
   "picked": false
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
   "total": 0.56,
   "stars": 43622,
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
   "total": 0.542,
   "stars": 81534,
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
   "repo": "Niko1221/Strata",
   "url": "https://github.com/Niko1221/Strata",
   "what": "C++ 编写的本地推理引擎，一键安装，在消费级硬件上跑 Qwen3.8-Flash-Next 等大模型，提供本地 OpenAI/Anthropic 兼容 API 并支持图像输入。",
   "why": "本地大模型部署正热，它主打一键安装和消费级硬件，但 8G 显存只能跑最低量化档，且 4.3 万星与创建时间严重不符。",
   "theme": "runtime",
   "theme_title": "模型与运行时",
   "bucket": "m3",
   "category": "save",
   "total": 0.537,
   "stars": 48214,
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
   "repo": "linknimiball1974/ai-texture-forge",
   "url": "https://github.com/linknimiball1974/ai-texture-forge",
   "what": "Blender 插件，在视口内用本地或云端扩散模型把文字提示生成无缝 PBR 材质、概念图并做深度投影贴图。",
   "why": "381 星的小众 Blender 插件，更新仅一天，本地跑需 8G 显存以上，对一小时折腾党门槛偏高。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "save",
   "total": 0.525,
   "stars": 685,
   "created_at": "2026-11-11",
   "language": "",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": 8,
    "install": "installer"
   },
   "concepts": [
    "Blender Python API",
    "插件生命周期",
    "HTTP 请求"
   ],
   "assignment": "写一个最小 Blender 插件，在 N 面板加按钮调用本地 Ollama 生成一段文字并写入物体自定义属性。",
   "hype": [
    "topics 堆砌 20 个 dream-textures 变体关键词",
    "README 下载按钮指向 releases 但安装包名与仓库名不一致"
   ],
   "picked": false
  },
  {
   "repo": "libracoder/kiri",
   "url": "https://github.com/libracoder/kiri",
   "what": "Rust 写的轻量容器运行时，兼容 Docker CLI，自带本地域名和 K8s 集群，可替代 Docker Desktop。",
   "why": "11 月新项目两周破万星，主打毫秒级启动和低内存，是 Docker Desktop 的轻量替代品。",
   "theme": "infra",
   "theme_title": "基础设施",
   "bucket": "m1",
   "category": "save",
   "total": 0.522,
   "stars": 13476,
   "created_at": "2026-11-02",
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
    "创建仅 18 天即 11329 star，增速异常",
    "README 通篇营销话术与性能对比数字"
   ],
   "picked": false
  },
  {
   "repo": "bothaggsigym1988/frameglide",
   "url": "https://github.com/bothaggsigym1988/frameglide",
   "what": "把主机 30fps 串流在 Windows 上用 RIFE 实时插帧到 60–120fps，并用 FSR 1 或 RTX VSR 放大画面。",
   "why": "主机画质模式锁 30fps，用现有显卡免费补帧，无需换主机或显示器。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "save",
   "total": 0.521,
   "stars": 967,
   "created_at": "2026-11-18",
   "language": "",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": 8,
    "install": "installer"
   },
   "concepts": [
    "异步",
    "多线程",
    "队列"
   ],
   "assignment": "用 Python 读取一段 30fps 视频，调用 RIFE 模型对相邻帧插一帧，输出 60fps 视频并对比文件大小与耗时。",
   "hype": [
    "创建与更新同日，star 数偏高，疑似刷星",
    "README 通篇营销话术，强调免费、无需账号"
   ],
   "picked": false
  },
  {
   "repo": "jamesondh/chimera-vocal-synth",
   "url": "https://github.com/jamesondh/chimera-vocal-synth",
   "what": "浏览器里的物理建模人声合成器，用 Rust 编译成 WebAssembly，模拟声道发声，可唱、说、打拍子。",
   "why": "近期热度上升，浏览器即可体验，无需显卡，适合快速上手玩一玩。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "save",
   "total": 0.515,
   "stars": 3212,
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
   "picked": false
  },
  {
   "repo": "Lemxy/WinRust",
   "url": "https://github.com/Lemxy/WinRust",
   "what": "用 Rust 重写的 Windows 外壳替代品，包含任务栏、文件管理器、NTFS 搜索、任务管理器和磁盘清理，一个安装器即可完成安装。",
   "why": "443 星的小众项目，最近刚更新；它替换系统外壳，风险高，不适合日常主力机，但适合在虚拟机里体验。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "save",
   "total": 0.515,
   "stars": 1577,
   "created_at": "2026-11-17",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
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
   "total": 0.514,
   "stars": 21787,
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
   "picked": false
  },
  {
   "repo": "erkamyaman/rust-anything",
   "url": "https://github.com/erkamyaman/rust-anything",
   "what": "把现有应用逐模块改写成 Rust，用录制原程序行为做逐步对拍验证，支持多语言调用。",
   "why": "Rust 重写潮正热，它把'行为对拍'做成流程，Prettier 移植案例有说服力。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "save",
   "total": 0.514,
   "stars": 9670,
   "created_at": "2026-11-16",
   "language": "Rust",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅3天却已有5364星，增长异常",
    "README 通篇营销式排版与多语言徽章堆砌"
   ],
   "picked": false
  },
  {
   "repo": "CzzzzzzJ/mdldm-maitian",
   "url": "https://github.com/CzzzzzzJ/mdldm-maitian",
   "what": "面向多平台博主的自媒体发布中控台，用 Chrome 插件批量填写 B站、抖音、小红书等平台，并采集数据、生成大屏和飞书通知。",
   "why": "作者自用工具开源，492 星，Windows 有社区安装脚本，但核心依赖 macOS 常开机器和浏览器登录态。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "save",
   "total": 0.505,
   "stars": 2126,
   "created_at": "2026-11-14",
   "language": "JavaScript",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
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
   "stars": 41600,
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
   "repo": "sourmitocand1987/VividFrame-GPU",
   "url": "https://github.com/sourmitocand1987/VividFrame-GPU",
   "what": "Windows 上的实时视频增强播放器，用 D3D12 管线对本地视频、采集卡和串流画面做超分、降噪、HDR 与插帧。",
   "why": "1017 星但创建当天就更新，C++ 项目无源码语言标注，下载即用型发布包，需先验证真实性。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "save",
   "total": 0.482,
   "stars": 1017,
   "created_at": "2026-11-18",
   "language": "",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": 8,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建与更新同日，star 数偏高",
    "README 通篇营销对比话术",
    "无源码语言信息，仅提供二进制发布包"
   ],
   "picked": false
  },
  {
   "repo": "apex-compute/ANR",
   "url": "https://github.com/apex-compute/ANR",
   "what": "Apex Compute 的神经渲染套件，含帧生成 ANR FG 的 Beta 安装包，以及录制对比 DLSS-G/FSR/XeSS 的 nr-record 工具。",
   "why": "刚发布 Beta，源码未开放，只有安装包和录制工具，适合尝鲜但还谈不上研究。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "save",
   "total": 0.476,
   "stars": 3041,
   "created_at": "2026-11-11",
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
    "创建次日即更新，1501 star 与无源码 Beta 状态不匹配，疑似营销造势"
   ],
   "picked": false
  },
  {
   "repo": "boringmarketer/boring-marketing-skills",
   "url": "https://github.com/boringmarketer/boring-marketing-skills",
   "what": "面向 AI agent 的 32 个免费营销技能包，覆盖调研、定位、文案、SEO、广告和本地商家营销。",
   "why": "agent skills 生态刚起步，这类提示词与工作流合集正被 Claude Code、Codex 用户快速采用。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "save",
   "total": 0.474,
   "stars": 796,
   "created_at": "2026-11-16",
   "language": "Python",
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
   "repo": "Indigo-0167/universal-game-mod-manager",
   "url": "https://github.com/Indigo-0167/universal-game-mod-manager",
   "what": "面向 Windows 的开源游戏 Mod 管理器，用 Rust 和 Tauri 编写，能自动发现 Steam、GOG、Epic 等平台的游戏，",
   "why": "它和 AI 无关，但如果你玩游戏，就能一键安装 Mod；不过它刚创建，发布包和实际可用性都还没验证。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "save",
   "total": 0.465,
   "stars": 1298,
   "created_at": "2026-11-23",
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
    "仓库创建与最近更新为同一天，star 数已达 1298，增长异常",
    "README 强调免费开源，但发布包与功能成熟度尚未验证"
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
   "bucket": "m1",
   "category": "skip",
   "total": 0.463,
   "stars": 4468,
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
   "repo": "joshpuckett/allo",
   "url": "https://github.com/joshpuckett/allo",
   "what": "开源可变字体 Allo，含光学尺寸、字重、圆度三个轴，附 Python 构建脚本与网页字体包。",
   "why": "刚发布 1.0.3 版本，star 过千，适合顺手装到系统里体验可变字体轴调节。",
   "theme": "visual",
   "theme_title": "可视化创意",
   "bucket": "m1",
   "category": "save",
   "total": 0.458,
   "stars": 1590,
   "created_at": "2026-11-15",
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
   "repo": "agentes-chat/agentes-chat",
   "url": "https://github.com/agentes-chat/agentes-chat",
   "what": "开源自托管 Slack 替代品，人和 AI agent 在同一频道协作，agent 可调用 MCP 工具、操作浏览器并需人工审批。",
   "why": "多 agent 协作聊天正热，但需 Linux 服务器和 Docker 部署，Windows 笔记本一小时难搞定。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "save",
   "total": 0.442,
   "stars": 2055,
   "created_at": "2026-11-09",
   "language": "TypeScript",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "docker"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "wheresryan22/anatomy",
   "url": "https://github.com/wheresryan22/anatomy",
   "what": "一个 Claude Code 技能，把技术概念画成可交互的等距 SVG 机械图，可选 WebGL 着色器与 3D 效果。",
   "why": "近期热度很高，但它是给 Claude 等 agent 用的技能包，不是本地模型，8G 显存笔记本用不上。",
   "theme": "visual",
   "theme_title": "可视化创意",
   "bucket": "m3",
   "category": "skip",
   "total": 0.438,
   "stars": 29240,
   "created_at": "2026-10-08",
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
    "创建到更新仅 10 天即 2.7 万 star，增长异常"
   ],
   "picked": false
  },
  {
   "repo": "solv4626/steam-achievement-manager-windows",
   "url": "https://github.com/solv4626/steam-achievement-manager-windows",
   "what": "Windows 桌面版 Steam 成就管理器，可解锁/重置成就、修改游戏统计数据，Rust 编写带 GUI。",
   "why": "与 AI 无关，但作为游戏工具对 Steam 玩家有直接吸引力，且当天创建即破千星需留意。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "d3",
   "category": "skip",
   "total": 0.431,
   "stars": 1058,
   "created_at": "2026-11-23",
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
    "创建与更新同日且 star 破千，疑似刷星",
    "README 通篇营销话术，含下载 exe 引导"
   ],
   "picked": false
  },
  {
   "repo": "Minireel/HGhub",
   "url": "https://github.com/Minireel/HGhub",
   "what": "Rust+Tauri 2 写的跨平台视频播放器，靠导入 JavaScript 插件接入第三方内容源，自带片库与追更。",
   "why": "万星但创建仅半个月、更新极新，插件版仍处早期，Windows 需从源码构建，且不内置任何内容源。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.412,
   "stars": 11943,
   "created_at": "2026-11-03",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建仅约两周即破万星，与独立维护者、早期开发阶段的描述不匹配",
    "不内置内容源、依赖第三方插件，star 增长可能来自内容获取需求而非技术价值"
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
   "bucket": "m1",
   "category": "skip",
   "total": 0.403,
   "stars": 2936,
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
   "repo": "WindGatorRise37/Gemini-Config-Checker-",
   "url": "https://github.com/WindGatorRise37/Gemini-Config-Checker-",
   "what": "一个扫描代理配置的工具，用登录态浏览器实测哪些配置能进 Google AI Studio 和 Gemini，支持链式代理与反 DPI。",
   "why": "近期 AI 服务对出口 IP 审查变严，很多人手里的代理配置失效，这类实测工具因此受关注。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.403,
   "stars": 469,
   "created_at": "2026-11-15",
   "language": "Makefile",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "仓库名与 README 中的作者名不一致（WindGatorRise37 vs MatinSenPai），疑似搬运或改名",
    "创建与更新同日，473 star 但 topics 堆砌大量无关关键词（seo、nextjs、mcp-server）",
    "README 主下载链接指向 Dropbox 的 rar 压缩包，而非 Release 产物",
    "描述与 topics 严重不符，有刷关键词嫌疑"
   ],
   "picked": false
  },
  {
   "repo": "R0Y00/Xbox2Windows",
   "url": "https://github.com/R0Y00/Xbox2Windows",
   "what": "研究把 Xbox Series X|S 的 x64 机器码和 gfx1013 着色器静态重编译到 Windows x64 与 DXIL，公开测试自建输入，无需游戏本体。",
   "why": "GTA VI 相关话题热度高，但项目仅验证了少量着色器和自建测试程序，完整游戏启动尚未验证。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "w1",
   "category": "skip",
   "total": 0.398,
   "stars": 1960,
   "created_at": "2026-11-20",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅3天即1328星，与项目实际完成度不符，疑似蹭GTA VI热度刷星"
   ],
   "picked": false
  },
  {
   "repo": "tangerineturtle1/NX2navi",
   "url": "https://github.com/tangerineturtle1/NX2navi",
   "what": "把 Switch 2 版《塞尔达传说：时之笛》静态重编译成 Windows 原生 x86-64 程序，用 Vulkan 渲染，支持高帧率、宽屏和 DLSS/FSR。",
   "why": "项目刚开源几天就获得三千多星，已可游玩前几个场景，但需要自备游戏文件，且用 C 语言编写。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "skip",
   "total": 0.395,
   "stars": 4365,
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
   "repo": "pengchujin/aerial-tv",
   "url": "https://github.com/pengchujin/aerial-tv",
   "what": "给国产 Android TV 用的 tvOS 风格开源桌面，无广告，可开机自动接管，支持小米、TCL 等品牌。",
   "why": "电视广告桌面太烦，这个项目能一键换掉系统桌面，安装简单，还能讲给家人听。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m3",
   "category": "skip",
   "total": 0.392,
   "stars": 13320,
   "created_at": "2026-10-20",
   "language": "Kotlin",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "xcl-dev/xcl",
   "url": "https://github.com/xcl-dev/xcl",
   "what": "用 Rust 写的 Xbox Series X|S 兼容层，在 Windows 上原生运行已购主机游戏，把 RDNA2 着色器重编译为 DXIL。",
   "why": "近期热度很高，已有几款游戏可玩，但需要自备已解包的游戏文件，门槛不低。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.388,
   "stars": 8348,
   "created_at": "2026-11-20",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅6天即8348星，增速异常"
   ],
   "picked": false
  },
  {
   "repo": "Hut-hzf/ung220z-tool",
   "url": "https://github.com/Hut-hzf/ung220z-tool",
   "what": "针对九联 UNG220Z 中国移动光猫的 Python 脚本，通过 telnet.gch 开 Telnet 后解密配置库，提取 Web、PPPoE、WiFi 和 root 凭据。",
   "why": "与 AI 无关，且依赖特定型号光猫和自家宽带环境，对没有该设备的用户没有可玩性。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.388,
   "stars": 4956,
   "created_at": "2026-11-15",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [
    "标准库",
    "socket",
    "telnetlib",
    "argparse",
    "正则表达式",
    "子进程"
   ],
   "assignment": "用 Python 标准库实现一个 telnet 客户端，连接本地模拟服务并解析返回的 XML 配置。",
   "hype": [
    "创建与更新同日，1790 star 与零 topics、无社区痕迹不匹配，疑似刷星"
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
   "stars": 87313,
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
   "repo": "AIRzZ90/study-materials-fork",
   "url": "https://github.com/AIRzZ90/study-materials-fork",
   "what": "基于 Rust 与 Tauri 2 的跨平台桌面应用实践项目，前端用 React 和 TypeScript，含 HLS 播放组件。",
   "why": "仓库是转载的 fork，README 通篇在讲维护边界和免责声明，技术内容很少，不值得现在花时间。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "m1",
   "category": "skip",
   "total": 0.382,
   "stars": 751,
   "created_at": "2026-11-12",
   "language": "TypeScript",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "转载 fork 却标 499 star，与源库关系不明",
    "README 大量篇幅讲免责与版权，技术信息极少"
   ],
   "picked": false
  },
  {
   "repo": "duwqijlk/muse-protocol",
   "url": "https://github.com/duwqijlk/muse-protocol",
   "what": "用纯 HTTP 复刻 muse.ai 注册与邀请码兑换流程的协议分析客户端，含批量调度与验证码轮询。",
   "why": "项目刚建一天就有一千多星，但本质是批量注册薅邀请码，风险与合规问题明显。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.381,
   "stars": 1825,
   "created_at": "2026-11-14",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "pip"
   },
   "concepts": [
    "requests 会话",
    "正则表达式",
    "JSON 解析",
    "多线程调度",
    "代理池"
   ],
   "assignment": "用 requests 复现一次 OTP 登录流程，并画出各接口的调用顺序图。",
   "hype": [
    "创建次日即 1491 star，增长异常",
    "无 topics、无社区沉淀，疑似刷星",
    "README 含代理节点与批量注册话术"
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
   "bucket": "m3",
   "category": "skip",
   "total": 0.377,
   "stars": 16748,
   "created_at": "2026-10-13",
   "language": "Objective-C",
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
   "repo": "0xkaka/homeport",
   "url": "https://github.com/0xkaka/homeport",
   "what": "一套 Clash 分流规则与一键配置页，把 Claude、Google、Stripe 等敏感站点单独指向固定住宅代理，其余流量仍走机场。",
   "why": "近期 Claude 等站点风控趋严，机房 IP 频繁跳变易触发验证或封号，固定住宅出口成为刚需。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.366,
   "stars": 641,
   "created_at": "2026-11-17",
   "language": "HTML",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建到更新仅两天即 445 star，README 内嵌住宅 IP 购买推广链接"
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
   "bucket": "m3",
   "category": "skip",
   "total": 0.363,
   "stars": 26381,
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
   "repo": "makepad/relax",
   "url": "https://github.com/makepad/relax",
   "what": "用 Rust 编写的 Rust 实时编译器与 JIT 运行时，跳过 rustc 和 LLVM，边运行边编译并热更新函数。",
   "why": "刚开源几天，491 星，演示了保存即热补丁、状态不丢的开发循环，但 Windows 未测试。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.362,
   "stars": 594,
   "created_at": "2026-11-11",
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
   "total": 0.361,
   "stars": 24602,
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
   "repo": "ccch1mneyyy/dsh-Go",
   "url": "https://github.com/ccch1mneyyy/dsh-Go",
   "what": "DeepSeek Harness 的 Android 客户端，用 Flutter 编写，可在手机上本地运行，也能远程遥控电脑上的 DSH。",
   "why": "Trendshift 日榜第一，近两万星，但它是安卓 App，Windows 笔记本上跑不了。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m3",
   "category": "skip",
   "total": 0.36,
   "stars": 32117,
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
   "repo": "NotRexed/Hookshot",
   "url": "https://github.com/NotRexed/Hookshot",
   "what": "把《塞尔达传说：时之笛》Switch 2 版静态重编译成 Windows/Linux 原生程序，用 Vulkan 重建画面，无需模拟器。",
   "why": "7183 星但创建仅 6 天，更新极频繁；需自备游戏本体，实验阶段，多数场景仍有 bug。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "skip",
   "total": 0.359,
   "stars": 8856,
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
   "repo": "leanprover-community/riemann-hypothesis",
   "url": "https://github.com/leanprover-community/riemann-hypothesis",
   "what": "Lean 社区维护的黎曼猜想形式化证明仓库，含独立 Comparator 校验脚本与缓存构建流程。",
   "why": "2026 年新出现的黎曼猜想形式化证明，社区正在清理代码、提升可读性与构建性能。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "w1",
   "category": "skip",
   "total": 0.348,
   "stars": 1294,
   "created_at": "2026-11-20",
   "language": "Lean",
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
   "repo": "HybridRobotics/supermimic",
   "url": "https://github.com/HybridRobotics/supermimic",
   "what": "基于可微世界模型的人形机器人全身动作跟踪训练框架，依赖 mjlab 仿真环境。",
   "why": "仓库刚建一天就 954 星，但需要 GPU 集群级训练，8G 显存笔记本跑不动。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "m1",
   "category": "skip",
   "total": 0.347,
   "stars": 2053,
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
   "repo": "mmdoctor/google-pro-helper",
   "url": "https://github.com/mmdoctor/google-pro-helper",
   "what": "利用浏览器扩展和本地批量控制台，向 Google 账号注入 offer token，以零元开通 Google AI Pro 两年订阅。",
   "why": "仓库创建当天就获得 1701 star，README 明确说明这是批量注册账号来薅取订阅，账号随时可能被封禁。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.347,
   "stars": 2084,
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
   "bucket": "m1",
   "category": "skip",
   "total": 0.345,
   "stars": 2405,
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
   "repo": "Bodila51/gtavi-claudecode",
   "url": "https://github.com/Bodila51/gtavi-claudecode",
   "what": "Claude Code 插件，自动抓取 GTA6 直播流，定位高光时刻并剪成 9:16 竖屏短视频，附带钩子字幕和署名。",
   "why": "GTA6 首发日（11月19日）刚过，抢首发流量窗口，但依赖 Claude Code 和付费剪辑活动。",
   "theme": "ai_app",
   "theme_title": "AI 应用",
   "bucket": "m1",
   "category": "skip",
   "total": 0.343,
   "stars": 949,
   "created_at": "2026-11-18",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建次日即949星，增长异常",
    "通篇赚钱话术与首发日营销",
    "依赖Claude Code付费订阅，非本地Ollama可跑"
   ],
   "picked": false
  },
  {
   "repo": "gylive/google-ultra",
   "url": "https://github.com/gylive/google-ultra",
   "what": "借 Google One 进程调用 BillingClient，自动查询并开通 AI Pro 5TB 免费试用订阅的脚本",
   "why": "仓库创建两天即近 2500 星，但本质是薅 Google 订阅漏洞，随时可能失效或封号",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.342,
   "stars": 2602,
   "created_at": "2026-11-17",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "pip"
   },
   "concepts": [
    "subprocess",
    "命令行参数解析",
    "字符串分割"
   ],
   "assignment": "",
   "hype": [
    "创建两天即 2466 星，增长异常",
    "无描述无 topics，通篇围绕免费试用漏洞",
    "涉及账号密码与银行卡明文输入，风险极高"
   ],
   "picked": false
  },
  {
   "repo": "fxceless/victory-fork",
   "url": "https://github.com/fxceless/victory-fork",
   "what": "Xbox Series 游戏在 Windows 上运行的兼容层分支，用 Rust 重写加载器、D3D12 后端与着色器重编译，需自备游戏文件。",
   "why": "刚更新到可玩状态，但 8G 显存笔记本跑不动，且每半小时显卡掉线，暂时只能围观。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "d3",
   "category": "skip",
   "total": 0.327,
   "stars": 3117,
   "created_at": "2026-11-24",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": 12,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [],
   "picked": false
  },
  {
   "repo": "WyrmClimberManacle/Gemini-Config-Checker-",
   "url": "https://github.com/WyrmClimberManacle/Gemini-Config-Checker-",
   "what": "一个桌面工具，用真实登录浏览器逐条测试代理配置能否访问 Google AI Studio 和 Gemini，支持链式代理与反 DPI。",
   "why": "近期 AI Studio 与 Gemini 对出口 IP 审查变严，很多人手里的代理配置突然失效，需要快速筛出可用线路。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.326,
   "stars": 469,
   "created_at": "2026-11-15",
   "language": "Makefile",
   "runnable": {
    "windows": true,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "仓库名与 README 中引用的上游项目作者不一致（WyrmClimberManacle vs MatinSenPai），疑似搬运或改名仓库",
    "创建与最近更新同为 2026-11-15，单日 473 star，增长曲线异常",
    "topics 堆砌 chatgpt、nextjs、mcp-server、seo-checker 等与功能无关的关键词",
    "README 主下载链接指向 Dropbox 的 rar 压缩包而非 GitHub Releases，存在分发风险"
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
   "bucket": "m3",
   "category": "skip",
   "total": 0.325,
   "stars": 21072,
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
   "repo": "Marvisak/VIctory",
   "url": "https://github.com/Marvisak/VIctory",
   "what": "用 Rust 写的 GTA VI PC 兼容层，在 Windows 上直接运行主机版游戏代码，目前世界场景约 1 帧每秒。",
   "why": "刚创建两天就有一万两千多星，但项目还完全不能玩，属于话题性大于实用性的实验。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "d3",
   "category": "skip",
   "total": 0.323,
   "stars": 12695,
   "created_at": "2026-11-23",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": 12,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建两天即获一万两千多星，与项目实际可用度严重不符",
    "README 自述约 1 帧每秒、尚不可玩，却已高热度传播"
   ],
   "picked": false
  },
  {
   "repo": "rivet-dev/open-orange",
   "url": "https://github.com/rivet-dev/open-orange",
   "what": "把现有 Cloudflare Workers 和 Durable Objects 原样跑在 AWS、GCP、Azure 或自建服务器上的开源运行时，",
   "why": "刚发布一天的小项目，主打零改动迁移和更便宜的账单，但需要 Docker 和集群，与本地 Ollama 折腾无关。",
   "theme": "infra",
   "theme_title": "基础设施",
   "bucket": "m1",
   "category": "skip",
   "total": 0.322,
   "stars": 680,
   "created_at": "2026-11-12",
   "language": "TypeScript",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建次日即更新，441 star 与一天内发布节奏偏快，README 通篇成本对比营销话术"
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
   "bucket": "m1",
   "category": "skip",
   "total": 0.32,
   "stars": 3938,
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
   "repo": "Eynnzerr/TelemetryCleaner",
   "url": "https://github.com/Eynnzerr/TelemetryCleaner",
   "what": "基于 Shizuku 免 Root 检测并卸载国产安卓预装运营商遥测组件（SystemHelper、RegService 等）的 Kotlin 工具。",
   "why": "国产 ROM 预装遥测组件被论文实测上报应用列表，这个工具让普通用户能自查并卸载，最近刚开源。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.319,
   "stars": 3086,
   "created_at": "2026-11-11",
   "language": "Kotlin",
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
   "repo": "Kianuni/Erosion-CN",
   "url": "https://github.com/Kianuni/Erosion-CN",
   "what": "基于 worse_query 的 iOS/iPadOS MobileGestalt 配置研究工具箱，简体中文加固版，可改系统隐藏开关并防白苹果。",
   "why": "iOS 27 越狱圈热门工具，1418 星且刚更新，但只面向 iPhone/iPad，与 Windows 笔记本无关。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.317,
   "stars": 2847,
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
   "bucket": "m1",
   "category": "skip",
   "total": 0.312,
   "stars": 8161,
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
   "repo": "faizfahmi77/ScanDot",
   "url": "https://github.com/faizfahmi77/ScanDot",
   "what": "实验性 Android 应用，用 ARCore 深度相机扫描并保存 3D 点云，附带交互查看器；另有工作站端 FFmpeg+COLMAP 视频重建脚本。",
   "why": "手机端 AR 扫描门槛低、演示直观，但需要支持 ARCore Depth 的安卓机，与 Windows 笔记本无关。",
   "theme": "visual",
   "theme_title": "可视化创意",
   "bucket": "m1",
   "category": "skip",
   "total": 0.31,
   "stars": 545,
   "created_at": "2026-11-13",
   "language": "Kotlin",
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
   "repo": "omonkeyz/xbox-emulator",
   "url": "https://github.com/omonkeyz/xbox-emulator",
   "what": "Rust 写的 Xbox Series X|S 模拟器运行时，用已解密的游戏转储在 PC 上跑主机游戏，目前只到 Fortnite 启动进大厅。",
   "why": "1350 星但创建仅两天、更新两天，进度表显示 3D 场景、输入、音频、玩法全未达成，更像进度记录而非可用模拟器。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.309,
   "stars": 1849,
   "created_at": "2026-11-21",
   "language": "Rust",
   "runnable": {
    "windows": false,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建两天即 1350 星，与项目实际完成度严重不符",
    "README 用大量徽章和进度图营造完成感，但核心功能均未达成"
   ],
   "picked": false
  },
  {
   "repo": "4lwayz/portwatch-vi",
   "url": "https://github.com/4lwayz/portwatch-vi",
   "what": "静态追踪站，汇总社区把 GTA VI 泄露版重编译或模拟到 PC 的进展，按进度条和排行榜打分，每 3 小时自动抓取更新。",
   "why": "GTA VI 热度极高，但项目本身只是数据看板，没有可玩内容，对本地显卡和 Ollama 毫无用处。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.295,
   "stars": 4366,
   "created_at": "2026-11-21",
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
    "创建到更新仅 5 天即 4366 star，增速异常",
    "无 topics，内容为蹭 GTA VI 热点的静态页面"
   ],
   "picked": false
  },
  {
   "repo": "YellowLaborerMarket/Gemini-Config-Checker-",
   "url": "https://github.com/YellowLaborerMarket/Gemini-Config-Checker-",
   "what": "扫描代理配置，用已登录浏览器实测哪些能进入 Google AI Studio 和 Gemini，支持链式代理与反 DPI。",
   "why": "国内访问 Gemini 常被拦，这工具帮你筛出真正可用的代理线路，但依赖代理生态且仅 Windows 实测。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.291,
   "stars": 471,
   "created_at": "2026-11-15",
   "language": "Makefile",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "unknown"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建与更新时间同为 2026-11-15，仓库年龄异常",
    "README 主下载链接指向 Dropbox 的 rar 压缩包而非 Release",
    "topics 含大量 SEO 关键词（lim-seo、seo-checker、ai-search）与项目功能不符",
    "名称与 README 图片链接指向不同作者（YellowLaborerMarket vs MatinSenPai），疑似搬运/刷星"
   ],
   "picked": false
  },
  {
   "repo": "AFK-surf/xnulinux",
   "url": "https://github.com/AFK-surf/xnulinux",
   "what": "把苹果开源的 XNU 内核编译成 Linux 可加载模块，在 arm64 Linux 上原生运行 macOS 用户态程序。",
   "why": "3992 星但创建仅 6 天，热度异常；且只支持 arm64，Windows x86 笔记本完全无法运行。",
   "theme": "runtime",
   "theme_title": "模型与运行时",
   "bucket": "w1",
   "category": "skip",
   "total": 0.288,
   "stars": 3992,
   "created_at": "2026-11-20",
   "language": "C",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建 6 天即近 4000 星，增速异常",
    "README 宣称在 stock Ubuntu 内核上 insmod 即可跑 macOS 桌面，技术声明远超常规可行性"
   ],
   "picked": false
  },
  {
   "repo": "os6/nospeaker",
   "url": "https://github.com/os6/nospeaker",
   "what": "用 macOS 私有框架驱动 MacBook 触控板震动马达，把语音合成变成能听见的触控板声音。",
   "why": "刚发布两天就冲到 1900 星，靠的是触控板发声这个反直觉的玩法，演示视频传播很快。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.285,
   "stars": 1900,
   "created_at": "2026-11-22",
   "language": "Swift",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建两天即 1900 星，增长曲线异常",
    "README 通篇 ASCII 艺术与营销式排版，curl 管道安装"
   ],
   "picked": false
  },
  {
   "repo": "yetanotherbrowser/yab",
   "url": "https://github.com/yetanotherbrowser/yab",
   "what": "macOS 原生浏览器，用 Swift 编写，默认 WebKit 引擎，Apple 芯片可切 Chromium，带 iPhone 伴侣应用和 AI agent 标签页。",
   "why": "近期更新活跃，主打双引擎和 agent 标签页，但仅限 macOS 15.4+，Windows 用户无法体验。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
   "category": "skip",
   "total": 0.285,
   "stars": 763,
   "created_at": "2026-11-14",
   "language": "Swift",
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
   "repo": "Belobug/VIctory-Belobug-AMD",
   "url": "https://github.com/Belobug/VIctory-Belobug-AMD",
   "what": "Xbox Series 游戏在 Windows 上原生运行的兼容层分支，专攻 AMD RDNA3 显卡的帧率优化。",
   "why": "仅单机测试、需自备游戏文件、8G 显存远不够，且项目刚创建一天，尚不成熟。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "d3",
   "category": "skip",
   "total": 0.282,
   "stars": 1671,
   "created_at": "2026-11-25",
   "language": "Rust",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建仅一天即 1671 star，与单机测试、无 README 描述的状态不符"
   ],
   "picked": false
  },
  {
   "repo": "ItsNotRexed/Leonida",
   "url": "https://github.com/ItsNotRexed/Leonida",
   "what": "把 Xbox 版 GTA6 静态重编译到 Windows 的开源项目，含 RDNA2 着色器转 SPIR-V 工具链，游戏本体尚不能启动。",
   "why": "15855 星但创建仅三天、游戏未启动，热度与完成度严重不符，需警惕刷星。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.273,
   "stars": 15855,
   "created_at": "2026-11-20",
   "language": "Python",
   "runnable": {
    "windows": false,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建三天即 15855 星，与项目早期状态不符",
    "游戏尚不能启动却已高热度",
    "README 大量重复的着色器统计与验证链接，疑似堆砌可信度"
   ],
   "picked": false
  },
  {
   "repo": "ubiquitarianism/leonida",
   "url": "https://github.com/ubiquitarianism/leonida",
   "what": "把 Xbox 版 GTA VI 静态重编译到 Windows 运行的开源项目，目前只能启动到加载界面，尚不可玩。",
   "why": "刚接手的续作仓库，两天内涨到两千多星，但项目仍处早期，且需要自备正版游戏文件。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "d3",
   "category": "skip",
   "total": 0.272,
   "stars": 2360,
   "created_at": "2026-11-23",
   "language": "Python",
   "runnable": {
    "windows": true,
    "gpu_required": true,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "创建仅3天即2360星，与项目实际可玩性严重不符",
    "README通篇强调GTA VI移植，但明确说明尚无可玩内容"
   ],
   "picked": false
  },
  {
   "repo": "CocoSgt/riemann-hypothesis-lean",
   "url": "https://github.com/CocoSgt/riemann-hypothesis-lean",
   "what": "数学家 Levent Alpöge 与 Claude 合作声称证明黎曼猜想及 GRH，并给出约 17.4M 行 Lean 形式化代码的镜像仓库。",
   "why": "2026-11-20 刚发布，尚无独立编译验证，是当下数学与 AI 交叉领域最热的话题之一。",
   "theme": "learn",
   "theme_title": "学习教程",
   "bucket": "w1",
   "category": "skip",
   "total": 0.237,
   "stars": 576,
   "created_at": "2026-11-20",
   "language": "Lean",
   "runnable": {
    "windows": false,
    "gpu_required": false,
    "vram_gb": null,
    "install": "source"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "声称证明黎曼猜想但无独立验证",
    "单日创建即获 517 star",
    "175187 个 Lean 文件、17.4M 行代码体量异常"
   ],
   "picked": false
  },
  {
   "repo": "realdody/americas-recomp",
   "url": "https://github.com/realdody/americas-recomp",
   "what": "一个名为 americas-recomp 的仓库，无描述无 README，语言未知，疑似游戏重制或逆向工程类项目。",
   "why": "信息严重不足，无法判断内容与可用性，且创建两天即 520 star，需警惕刷星。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "w1",
   "category": "skip",
   "total": 0.236,
   "stars": 520,
   "created_at": "2026-11-20",
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
    "无 README 无描述却两天内 520 star",
    "创建与更新时间仅隔两天，疑似刷星或占位仓库"
   ],
   "picked": false
  },
  {
   "repo": "0marContreras/gta6recomp",
   "url": "https://github.com/0marContreras/gta6recomp",
   "what": "声称是《GTA VI》PC 版的运行时着色器重编译与性能优化框架，实际是伪造的安装包。",
   "why": "GTA VI 尚未发售，这个仓库创建于 2026 年，内容与事实不符，疑似钓鱼或恶意软件。",
   "theme": "play",
   "theme_title": "游戏与玩物",
   "bucket": "m1",
   "category": "skip",
   "total": 0.187,
   "stars": 670,
   "created_at": "2026-11-18",
   "language": "",
   "runnable": {
    "windows": false,
    "gpu_required": true,
    "vram_gb": null,
    "install": "installer"
   },
   "concepts": [],
   "assignment": "",
   "hype": [
    "游戏尚未发售却声称是 PC 移植",
    "要求运行 Setup.exe 但无源码",
    "README 通篇营销话术与虚构跑分",
    "创建当天即获 670 star"
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
   "bucket": "m1",
   "category": "skip",
   "total": 0.166,
   "stars": 982,
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
   "repo": "l-friedrich64709109/fifa-20",
   "url": "https://github.com/l-friedrich64709109/fifa-20",
   "what": "打着 FIFA 20 旗号的 PowerShell 脚本，诱导用户以管理员权限执行远程代码，与游戏本身无关。",
   "why": "典型供应链投毒样本：README 重复诱导关闭杀毒软件并执行 irm | Invoke-Expression，应立即远离。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
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
   "repo": "DensityApothecary/adobe-substance-3d",
   "url": "https://github.com/DensityApothecary/adobe-substance-3d",
   "what": "名为 Adobe Substance 3D 的预配置环境仓库，实为无 README 的 HTML 页面，疑似伪装成创意软件的安装引导。",
   "why": "创建与更新同日、无 README、topics 堆砌 substance 关键词，典型刷星或钓鱼仓库，不值得花时间。",
   "theme": "tool",
   "theme_title": "开发工具",
   "bucket": "m1",
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