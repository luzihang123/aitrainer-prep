# 题库目录

> 结构化的题目数据。每道题是一个 Markdown 文件（YAML frontmatter + 可选正文）。

## 目录结构

```
data/
├── raw/             # 原始未处理题目（粗糙的 OCR、手录、回忆）
└── questions/       # 处理完成的题目，按考试结构组织
    ├── 1.1/         # 第一部分 Python（与 1.2 二选一抽题）
    ├── 1.2/         # 第一部分 理论
    ├── 2.1/         # 第二部分 数据预处理
    ├── 2.2/         # 第二部分 建模
    ├── 3.1/         # 第三部分 Excel
    ├── 3.2/         # 第三部分 图像识别
    ├── 4.1/         # 第四部分 理论
    └── 4.2/         # 第四部分 理论
```

## 文件命名

```
data/questions/{部分号}/{部分号}.{三位题号}.md
```

例：`data/questions/2.1/2.1.001.md`、`data/questions/3.2/3.2.012.md`

## 题目样板

参见 [`data/questions/2.1/2.1.001.md`](./questions/2.1/2.1.001.md) 作为完整结构样板。

## 数据结构

参见 [产品设计文档第 5.3 节](../docs/about/design.md#_5-3-题目数据结构)。

简言之，每道题有两层字段：

- **基础层**：`id`、`type`、`question`、`options`、`answer`、`oneliner`、`explanation`、`context`、`mnemonic`、`diagram`
- **深度层**：`exam_design`、`elimination`、`related`

## 入库流程

详见 [`prompts/README.md`](../prompts/README.md)。
