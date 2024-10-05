/* * @Author: 一勺 * @Date: 2022-07 * @LastEditors: 一勺 * @LastEditTime:
2024-09 * @Description: 布局容器-Container */
<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { Component, VNode } from 'vue'
import type { IPropsContainer } from '../interface/index.ts'

defineOptions({
  name: 'YqContainer',
})

const props = defineProps<IPropsContainer>()
const slots = useSlots()

const isVertical = computed(() => {
  if (props.direction === 'vertical') return true
  if (props.direction === 'horizontal') return false

  // 如果存在默认插槽，检查其中是否有header或footer
  const vNodes: VNode[] = slots?.default ? slots.default() : []

  // 有header或者footer的话，就垂直布局
  return vNodes.some((vNode) => {
    const tag = (vNode.type as Component).name
    return tag === 'YqHeader' || tag === 'YqFooter'
  })
})
</script>

<template>
  <section :class="['yq-container', { vertical: isVertical }]">
    <slot></slot>
  </section>
</template>

<style scoped>
.yq-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.vertical {
  flex-direction: column;
}
</style>
