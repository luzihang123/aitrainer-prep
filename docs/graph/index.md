<script setup>
import { withBase } from 'vitepress'
</script>

# 图谱

这个页面用于集中展示全站的结构化学习图：当前先放**思维导图**，后续会继续补充题目、考点、API、易错点之间的**知识图谱**。

## 思维导图

先按实战考试前复习的视角组织：一边看考试结构与分值，一边把 Python 与理论题的高频 API、模板和应对策略串起来。

<div class="mindmap-figure">
  <img :src="withBase('/mindmap-ai-trainer-level3.svg')" alt="人工智能训练师三级实战考试前复习思维导图">
</div>

## 知识图谱

后续这里会展示更细的关系网络，例如：

- 题目与考点的对应关系
- API 与典型题型的对应关系
- 错误选项与常见陷阱的对应关系
- 前置知识与后续知识的依赖关系

当前阶段先把思维导图作为总览，知识图谱等题库数据更完整后再接入。
