import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  // 后期需要自定义组件时在这里注册：
  // enhanceApp({ app }) {
  //   app.component('QuestionCard', QuestionCard)
  // }
}
