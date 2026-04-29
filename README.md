<div align="center">

# AI 训练师备考手册

**人工智能训练师三级（高级）· 开源备考手册**

系统化 · 原理优先 · AI 辅助生成 · 永久免费

[📖 在线阅读](https://luzihang123.github.io/aitrainer-prep/) ·
[🎧 听题模式](https://luzihang123.github.io/aitrainer-prep/listen/) ·
[📋 考点速查](https://luzihang123.github.io/aitrainer-prep/cram/) ·
[💬 加入讨论](https://github.com/luzihang123/aitrainer-prep/discussions)

![Code License](https://img.shields.io/badge/code-MIT-blue.svg)
![Content License](https://img.shields.io/badge/content-CC%20BY--SA%204.0-orange.svg)
![Built with VitePress](https://img.shields.io/badge/built%20with-VitePress-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

</div>

---

## 这是什么

这是一份**为人工智能训练师三级（高级）考生设计的开源备考手册**，由一位 2026 年通过考试的考生发起、维护。

> 我考完后发现：资料零散、培训机构靠"背题"、代码题分值高但讲解少。
> 所以我决定把整个备考过程系统化——以**原理**为核心，以**真题**为骨架，
> 让下一个考生不用再走我走过的弯路。

## 在线访问

网站地址：[https://luzihang123.github.io/aitrainer-prep/](https://luzihang123.github.io/aitrainer-prep/)

## 为什么不一样

- 🧠 **原理优先**：每道题都讲"出题人在想什么"、"错误选项是怎么挖坑的"
- 🕸️ **知识图谱**：题目之间的关联可视化，从孤立刷题变成网络化理解
- 🎧 **听题模式**：通勤、洗碗、睡前都能学，把考试装进耳朵里
- 📊 **性价比导向**：明确告诉你哪部分 70 分该重点投入、哪部分 5 分可以战略放弃
- 🤖 **AI 辅助生产**：用 Claude 批量生成解析，人工审核把关，质量与效率兼得
- 🆓 **永久免费**：内容 CC BY-SA 4.0，代码 MIT，欢迎 fork、贡献、二创

## 适合谁

- 准备报考人工智能训练师三级的在职人员、转行者、学生
- 已经报名、苦于资料零散的备考者
- 已经通过考试、想把经验沉淀下来的同行（欢迎 PR）

## 快速开始（读者）

### 我刚知道这个考试
👉 从 [考试引入](docs/intro/) 开始

### 我在系统学习
👉 跟着 [推荐学习路径](docs/intro/path.md) 走

### 我下周就考
👉 直接看 [背诵速查](docs/cram/) + [听题模式](docs/listen/)

## 本地开发（贡献者）

```bash
# 安装依赖
npm install

# 本地预览
npm run dev

# 构建静态站
npm run build
```

需要 Node.js ≥ 18。项目默认使用 npm，pnpm / yarn 也可以。

## 项目结构

```
aitrainer-prep/
├─ docs/              # 站点内容（VitePress 根目录）
│  ├─ intro/          # 一、考试引入
│  ├─ modules/        # 二、考点详解
│  ├─ cram/           # 三、背诵应试
│  ├─ listen/         # 四、听题模式
│  ├─ about/          # 关于本站
│  ├─ public/         # 静态资源
│  └─ .vitepress/     # VitePress 配置
├─ data/              # 结构化题库
│  ├─ raw/            # 原始未处理题目
│  └─ questions/      # 处理完成的题目（按部分组织）
└─ prompts/           # Claude 内容生成 prompt 模板
```

## 内容许可

- **代码**（VitePress 配置、组件、脚本）：[MIT License](./LICENSE)
- **内容**（题目、解析、图解、文档）：[CC BY-SA 4.0](./LICENSE-CONTENT)

简单说：你可以自由使用、修改、分发本项目内容，但必须署名 + 以同样的协议开源。

## 如何贡献

欢迎以任何形式参与——补充一道题、改一个错字、提一个建议都很欢迎。详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 致谢

- 所有提交了 issue 和 PR 的考生
- 设计灵感：VitePress 文档站、MDN Web Docs、阮一峰开源教程

## 联系

- GitHub Issues：[报错与建议](https://github.com/luzihang123/aitrainer-prep/issues)
- GitHub Discussions：[备考讨论](https://github.com/luzihang123/aitrainer-prep/discussions)

---

**⚠️ 内容免责**：本手册由 AI 辅助生成、考生人工审核。如有错误请提 issue。备考最终请以官方教材为准，本站不对考试结果负责。
