import { defineConfig } from 'vitepress'

export default defineConfig({
  // ========== 基础信息 ==========
  title: 'AI 训练师备考手册',
  description: '人工智能训练师三级（高级）开源备考手册——系统化、原理化、AI 辅助生成、永久免费。',
  lang: 'zh-CN',

  // GitHub Pages 部署的 base 路径（根据你的仓库名调整）
  // 如果用自定义域名，改为 '/'
  base: '/aitrainer-prep/',

  // 干净的 URL（去掉 .html 后缀）
  cleanUrls: true,

  // ========== HTML head ==========
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/aitrainer-prep/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#1B3A5C' }],
    ['meta', { property: 'og:title', content: 'AI 训练师备考手册' }],
    ['meta', { property: 'og:description', content: '人工智能训练师三级（高级）开源备考手册' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  // ========== Markdown ==========
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  // ========== 主题配置 ==========
  themeConfig: {
    logo: '/logo.svg',

    siteTitle: 'AI 训练师备考手册',

    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      {
        text: '版本',
        items: [
          { text: '版本切换', link: '/versions/' },
          { text: '上海版', link: '/shanghai/' },
          { text: '深圳版', link: '/shenzhen/' },
        ],
      },
      { text: '图谱', link: '/graph/' },
      { text: '考试引入', link: '/intro/' },
      { text: '考点详解', link: '/modules/' },
      { text: '背诵速查', link: '/cram/' },
      { text: '听题模式', link: '/listen/' },
      {
        text: '更多',
        items: [
          { text: '资源汇总', link: '/resources/' },
          { text: '关于本站', link: '/about/' },
          { text: '产品设计', link: '/about/design' },
          { text: '贡献指南', link: 'https://github.com/luzihang123/aitrainer-prep/blob/main/CONTRIBUTING.md' },
        ],
      },
    ],

    // 侧边栏（按路径分组）
    sidebar: {
      '/versions/': [
        {
          text: '版本',
          items: [
            { text: '版本切换', link: '/versions/' },
            { text: '上海版', link: '/shanghai/' },
            { text: '深圳版', link: '/shenzhen/' },
          ],
        },
      ],

      '/shanghai/': [
        {
          text: '上海版',
          items: [
            { text: '上海版总览', link: '/shanghai/' },
            { text: '考试结构与分值', link: '/intro/structure' },
            { text: '图谱', link: '/graph/' },
          ],
        },
      ],

      '/shenzhen/': [
        {
          text: '深圳版',
          items: [
            { text: '深圳版总览', link: '/shenzhen/' },
            { text: '图谱', link: '/graph/' },
            { text: '考点详解', link: '/modules/' },
          ],
        },
      ],

      '/graph/': [
        {
          text: '图谱',
          items: [
            { text: '思维导图', link: '/graph/#思维导图' },
            { text: '知识图谱', link: '/graph/#知识图谱' },
          ],
        },
      ],

      '/intro/': [
        {
          text: '一、考试引入',
          items: [
            { text: '总览', link: '/intro/' },
            { text: '人工智能训练师是什么', link: '/intro/profession' },
            { text: '三级考试概览', link: '/intro/overview' },
            { text: '考试结构与分值', link: '/intro/structure' },
            { text: '备考性价比分析', link: '/intro/cost-benefit' },
            { text: '推荐学习路径', link: '/intro/path' },
          ],
        },
      ],

      '/modules/': [
        {
          text: '通用考试策略',
          items: [
            { text: '总览', link: '/modules/' },
            { text: 'import 语句速查', link: '/modules/imports' },
          ],
        },
        {
          text: '⭐ 第三部分 · Excel（15 分）',
          collapsed: false,
          items: [
            { text: 'Excel 高频操作', link: '/modules/excel/' },
          ],
        },
        {
          text: '第二部分 · Python 数据预处理（35 分）',
          collapsed: false,
          items: [
            { text: '总览', link: '/modules/python-prep/' },
            { text: '数据读取', link: '/modules/python-prep/read' },
            { text: '数据理解', link: '/modules/python-prep/understand' },
            { text: '数据生成与转换', link: '/modules/python-prep/transform' },
            { text: '数据计算与分组', link: '/modules/python-prep/groupby' },
            { text: '数据检查与清洗', link: '/modules/python-prep/clean' },
            { text: '条件筛选', link: '/modules/python-prep/filter' },
            { text: '类型转化', link: '/modules/python-prep/cast' },
            { text: '标准化与异常值', link: '/modules/python-prep/scale' },
            { text: '数据集分割与保存', link: '/modules/python-prep/split' },
            { text: '绘图', link: '/modules/python-prep/plot' },
          ],
        },
        {
          text: '第二部分 · Python 建模（20 分）',
          collapsed: false,
          items: [
            { text: '总览', link: '/modules/python-model/' },
            { text: '模型定义与训练', link: '/modules/python-model/train' },
            { text: '预测与样本平衡', link: '/modules/python-model/predict' },
            { text: '模型评估', link: '/modules/python-model/evaluate' },
          ],
        },
        {
          text: '第三部分 · Python 图像识别（20 分）',
          collapsed: false,
          items: [
            { text: '总览', link: '/modules/python-image/' },
            { text: '模型加载', link: '/modules/python-image/load' },
            { text: '图像处理', link: '/modules/python-image/preprocess' },
            { text: '模型应用与输出', link: '/modules/python-image/inference' },
            { text: '结果处理与文件操作', link: '/modules/python-image/postprocess' },
          ],
        },
        {
          text: '理论部分（30 分）',
          collapsed: false,
          items: [
            { text: '总览', link: '/modules/theory/' },
            { text: '1.2.x 问题对策模板', link: '/modules/theory/templates' },
            { text: '4.x 理论考点', link: '/modules/theory/concepts' },
          ],
        },
      ],

      '/cram/': [
        {
          text: '三、背诵速查',
          items: [
            { text: '总览', link: '/cram/' },
            { text: 'import 速查', link: '/cram/imports' },
            { text: 'API 速查表', link: '/cram/api-cheatsheet' },
            { text: '理论模板速查', link: '/cram/theory-templates' },
            { text: '高频考点', link: '/cram/high-frequency' },
            { text: '易混淆概念', link: '/cram/confusables' },
            { text: '考前一天 checklist', link: '/cram/checklist' },
          ],
        },
      ],

      '/listen/': [
        {
          text: '四、听题模式',
          items: [
            { text: '听题入口', link: '/listen/' },
          ],
        },
      ],

      '/about/': [
        {
          text: '关于',
          items: [
            { text: '关于本站', link: '/about/' },
            { text: '产品设计', link: '/about/design' },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/luzihang123/aitrainer-prep' },
    ],

    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '展开详情',
            resetButtonTitle: '清除',
            backButtonTitle: '返回',
            noResultsText: '没找到相关内容',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/luzihang123/aitrainer-prep/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // 上次更新
    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' },
    },

    // 文档脚注
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 页脚
    footer: {
      message: '内容采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> 协议 · 代码采用 <a href="https://opensource.org/licenses/MIT">MIT</a> 协议',
      copyright: 'Copyright © 2026 AI Trainer Prep Contributors',
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
