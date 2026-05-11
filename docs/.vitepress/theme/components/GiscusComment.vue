<template>
  <div class="giscus-wrapper">
    <Giscus
      repo="luzihang123/aitrainer-prep"
      repo-id="R_kgDOSPbWrQ"
      category="General"
      category-id="DIC_kwDOSPbWrc4C78NS"
      mapping="pathname"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="bottom"
      :theme="giscusTheme"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const giscusTheme = computed(() => isDark.value ? 'dark' : 'light')
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
