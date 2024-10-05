/* * @Author: 一勺 * @Date: 2022-07 * @LastEditors: 一勺 * @LastEditTime:
2024-09 * @Description: 布局容器-Header */
<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { IPropsHeader } from '../interface/index.ts'

defineOptions({
  name: 'YqHeader',
})

const props = withDefaults(defineProps<IPropsHeader>(), {
  height: '60px',
})

const style = computed(
  () => (props.height ? { height: props.height } : {}) as CSSProperties,
)
</script>

<template>
  <header class="yq-header" :style="style">
    <slot></slot>
  </header>
</template>

<style scoped>
.yq-header {
  padding: 15px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 60px;
}
</style>
