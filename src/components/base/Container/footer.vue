/* * @Author: 一勺 * @Date: 2022-07 * @LastEditors: 一勺 * @LastEditTime:
2024-09 * @Description: 布局容器-Footer */
<script setup lang="ts">
import { computed } from 'vue'
import type { IPropsFooter } from '../interface/index.ts'
import type { CSSProperties } from 'vue'

const props = withDefaults(defineProps<IPropsFooter>(), {
  height: '100px',
})

const style = computed(
  () => (props.height ? { height: props.height } : {}) as CSSProperties,
)
</script>

<template>
  <footer class="yq-footer" :style="style">
    <slot></slot>
  </footer>
</template>

<style scoped>
.yq-footer {
  padding: 15px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 100px;
}
</style>
