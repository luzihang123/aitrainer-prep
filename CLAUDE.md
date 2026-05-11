# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```bash
npm run dev        # 本地开发服务器，访问 http://localhost:5173
npm run build      # 生产构建 → docs/.vitepress/dist/
npm run preview    # 本地预览生产构建结果
npm run typecheck  # 仅做 Vue/TS 类型检查
npm run check      # typecheck + build，提交前运行
```

部署：推送到 `main` 分支会自动触发 `.github/workflows/deploy.yml`，构建后部署到 GitHub Pages（`https://luzihang123.github.io/aitrainer-prep/`）。

## 架构概览

### 两层独立结构

**1. 站点内容层**（`docs/`）— VitePress 静态站

- `docs/.vitepress/config.ts` — 所有导航、侧边栏、站点元数据都在这里；新增页面必须手动加到 `sidebar` 和 `nav`
- `docs/.vitepress/theme/` — 继承 DefaultTheme；自定义 Vue 组件在 `theme/index.ts` 注册
- 内容页是普通 Markdown；`data/` 目录尚未接入站点渲染管线，内容目前手写

**2. 题库数据层**（`data/`）— 结构化题库（尚未接入站点渲染）

```
data/
├── raw/           # 未处理的 OCR / 回忆录原稿
└── questions/
    ├── 1.1/  1.2/     # 第一部分：Python 或理论（抽题二选一）
    ├── 2.1/  2.2/     # 第二部分：数据预处理 + 建模
    ├── 3.1/  3.2/     # 第三部分：Excel + 图像识别
    └── 4.1/  4.2/     # 第四部分：理论简答
```

每道题是一个 `.md` 文件，YAML frontmatter 承载所有字段。命名规则：`{模块}/{模块}.{NNN}.md`（如 `2.1/2.1.001.md`）。字段规范见 `data/questions/2.1/2.1.001.md`（样板题）和 `docs/about/design.md` §5.3。

字段分两层：
- **基础层**（必填）：`id`、`type`、`question`、`options`、`answer`、`oneliner`、`explanation`、`context`、`mnemonic`、`diagram`
- **深度层**（差异化）：`exam_design`、`elimination`、`related`

### 内容生产工作流（`prompts/`）

`prompts/` 下是带 `{ TASK_INPUT }` 占位符的 Claude prompt 模板，每个模板对应一个 frontmatter 字段。用于批量填充题目文件。

两种运行模式：
- **MVP 单 pass**：所有基础层 + 深度层模板一次跑完（省钱、快）
- **质量爬坡**：先跑基础层，再跑 `exam-design.md` + `elimination.md`，最后跑 `related.md`

生成内容必须人工 review 后才能提交；输出中的 `[待核实]` 标签表示 Claude 无法确认，需人工核对后再入库。

### 导航注册规则

VitePress 不自动发现页面。新增 `.md` 文件时：
1. 在 `config.ts` 的对应 `sidebar` key 里加 `{ text, link }` 条目
2. 如需出现在顶部导航或下拉菜单，同步更新 `nav` 数组

`base` 为 `/aitrainer-prep/`（GitHub Pages 子路径）。所有内部链接用根相对路径（如 `/about/why`），不用相对路径。

## 内容约定

- `oneliner` 字段：≤ 30 个汉字，口语化，专为听题模式 TTS 朗读设计
- 题目答案需双来源交叉验证后才能进 `data/questions/`；未验证的草稿放 `data/raw/`
- 站点当前以上海版三级考试为主；其他城市版本放独立顶层目录（`docs/shanghai/`、`docs/shenzhen/`）
