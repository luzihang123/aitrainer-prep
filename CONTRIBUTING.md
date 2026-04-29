# 贡献指南

欢迎参与！本项目对所有形式的贡献开放，包括但不限于：

- 🐛 报告内容错误（错答案、错解释、错图解）
- ✏️ 改正错别字、改进措辞
- ➕ 补充新题目（尤其是真题回忆版）
- 🎨 改进图解或界面
- 💡 提建议或讨论

## 在开始之前

### 1. 找到合适的方式

| 你想做的事 | 推荐方式 |
|-----------|---------|
| 报告内容错误 | 提 [Issue](https://github.com/luzihang123/aitrainer-prep/issues/new?template=content-error.md) |
| 提一道新题 | 提 [Issue](https://github.com/luzihang123/aitrainer-prep/issues/new?template=new-question.md) 或直接 PR |
| 改错别字 | 直接 PR，无需开 issue |
| 较大改动（新章节、新功能） | 先开 issue 讨论，再 PR |
| 不确定怎么做 | 在 [Discussions](https://github.com/luzihang123/aitrainer-prep/discussions) 问 |

### 2. 阅读项目设计

提交较大改动前，请先看 [产品设计文档](./docs/about/design.md)，了解项目的内容组织方式和设计原则。

## 贡献内容（题目和解析）

### 题目数据结构

每道题是一个独立的 Markdown 文件，存放在 `data/questions/{部分号}/{题号}.md`。文件由 YAML frontmatter（结构化数据）和正文（可选的扩展说明）组成。

最小可用版本：

```yaml
---
id: 2.1.001
type: single                 # single / multi / judge / code / essay
module: 2.1
difficulty: 1                # 1 = 送分, 2 = 区分, 3 = 压轴
tags: [数据预处理, pandas]
question: 题目内容
options:
  A: 选项 A
  B: 选项 B
  C: 选项 C
  D: 选项 D
answer: B
oneliner: 30 字以内的口语化解释
---
```

完整版数据结构（包括 `explanation`、`context`、`exam_design`、`elimination`、`related` 等深度字段）见 [产品设计文档第 5.3 节](./docs/about/design.md)。

### 内容质量标准

每道题在合并前必须满足：

**基础项（必须有）**

- [ ] 答案正确（至少两个来源交叉验证）
- [ ] `oneliner` 不超过 30 字、口语化、可朗读
- [ ] `explanation` 解释了"为什么"，不只是"是什么"
- [ ] 至少有一个实际工作场景例子（`context`）

**深度项（强烈建议有）**

- [ ] `exam_design` 三字段填全：核心考点、难度定位、干扰策略
- [ ] `elimination` 覆盖所有错误选项，每个都有排除类型和理由
- [ ] `related` 至少有 1 条关联

**质量项**

- [ ] 没有 `[待核实]` 残留标签
- [ ] `explanation` 与 `elimination` 没有内容重复

### 用 Claude Code 辅助生成内容

本项目欢迎 AI 辅助贡献，但**必须人工审核后再 PR**。`prompts/` 目录下有标准模板，可直接喂给 Claude Code 使用。

## 贡献代码

### 本地开发

```bash
git clone https://github.com/luzihang123/aitrainer-prep.git
cd aitrainer-prep
npm install
npm run dev
```

### 提 PR 前

- [ ] 跑过 `npm run build`，确保站点能正常构建
- [ ] commit message 写清楚（推荐 [Conventional Commits](https://www.conventionalcommits.org/) 风格）
- [ ] PR 标题简洁，正文说明"做了什么、为什么"

## 行为准则

简单说：**对人友善、对事认真**。

- 不要在 issue / PR 里人身攻击或贴标签
- 即使技术意见不同，也保持讨论的事实导向
- 涉及培训机构或个人的负面评价，限制在 Discussions，不进 issue 和站点内容
- 重复引导加微信、卖课、引流的行为不被接受

## 关于 AI 辅助内容的特别说明

本项目使用 Claude 等 AI 模型辅助生成解析和图解，这是项目设计的一部分。但：

- **AI 生成的内容必须经过人工审核**才能合并
- **事实性内容**（考点定义、API 行为、补贴政策等）必须有可靠出处
- **考试细节**（报名流程、考点信息、当年补贴金额）必须由实际参考过的人维护，AI 不能写

## 致谢

每一位贡献者都会出现在仓库的 Contributors 列表里。如果你的贡献特别突出，欢迎在 [Discussions](https://github.com/luzihang123/aitrainer-prep/discussions) 介绍自己。

谢谢你愿意花时间让这个项目更好。
