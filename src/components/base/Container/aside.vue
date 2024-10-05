/* * @Author: 一勺 * @Date: 2022-07 * @LastEditors: 一勺 * @LastEditTime:
2024-09 * @Description: 布局容器-Aside */
<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { IPropsAside } from '../interface/index.ts'

defineOptions({
  name: 'YqAside',
})

const props = withDefaults(defineProps<IPropsAside>(), {
  width: null,
})

const style = computed(
  () => (props.width ? { width: props.width } : {}) as CSSProperties,
)
</script>

<template>
  <aside class="yq-aside">
    <slot></slot>
  </aside>
</template>

<style scoped>
.yq-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
