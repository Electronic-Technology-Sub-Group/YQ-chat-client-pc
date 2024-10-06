<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
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
