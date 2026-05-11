import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import GiscusComment from './components/GiscusComment.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(GiscusComment),
    })
  },
}
