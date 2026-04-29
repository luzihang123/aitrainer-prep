# Prompt 模板库

> 用于 Claude Code 批量生成题目内容的标准 prompt。本目录是项目的差异化资产之一，欢迎 fork 复用。

## 两层结构

### 基础层（每题必跑）

- [`oneliner.md`](./oneliner.md) —— 一句话解释（≤ 30 字，为听题模式设计）
- [`explanation.md`](./explanation.md) —— 详解（只讲正确选项）
- [`context.md`](./context.md) —— 实际工作场景
- [`mnemonic.md`](./mnemonic.md) —— 背诵口诀
- [`diagram-svg.md`](./diagram-svg.md) —— SVG 静态图解
- [`diagram-mermaid.md`](./diagram-mermaid.md) —— Mermaid 流程图

### 深度层（差异化资产）

- [`exam-design.md`](./exam-design.md) —— **出题人视角**（核心考点 / 难度定位 / 干扰策略）
- [`elimination.md`](./elimination.md) —— **排除法解析**（错误选项的陷阱类型）
- [`related.md`](./related.md) —— **知识图谱关联**（同考点 / 易混 / 前置 / 进阶）

## 使用方式

### 方式 1：在 Claude Code 中调用

```bash
# 在仓库根目录
cd aitrainer-prep

# 让 Claude Code 处理一道题
claude code "用 prompts/oneliner.md 为 data/questions/2.1/2.1.001.md 生成 oneliner，写回 frontmatter"
```

### 方式 2：MVP 单 pass 处理（省钱、快）

```bash
claude code "对 data/questions/2.1/2.1.001.md，按 prompts/ 下所有模板生成完整内容"
```

### 方式 3：质量爬坡阶段拆 pass（深度更强）

```bash
# Pass 1：基础层
claude code "用 prompts/oneliner.md, explanation.md, context.md, mnemonic.md 处理 ..."

# Pass 2：深度层
claude code "用 prompts/exam-design.md, elimination.md 处理 ..."

# Pass 3：图谱（题库 > 50 题后启用）
claude code "用 prompts/related.md 为本题建立知识图谱关联"
```

## 风格指南（所有模板共享）

每个 prompt 输出必须满足：

- 用第二人称，口语化，像朋友讲解
- 不用「值得注意的是」「综上所述」「换言之」等套话
- 涉及不确定的事实必须明确标注 `[待核实]`
- 输出纯 markdown / YAML，不要包裹在代码块里

## 质量审核 checklist

每道题入库前必须满足：

**基础项**
- [ ] 答案正确（双来源验证）
- [ ] oneliner 不超过 30 字、口语化、可朗读
- [ ] explanation 解释了"为什么"
- [ ] 至少有一个实际工作场景例子（context）

**深度项**
- [ ] exam_design 三字段填全
- [ ] elimination 覆盖所有错误选项
- [ ] related 至少有 1 条关联

**质量项**
- [ ] 没有 `[待核实]` 残留标签
- [ ] explanation 与 elimination 没有内容重复
