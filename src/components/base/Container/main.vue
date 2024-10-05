/* * @Author: 一勺 * @Date: 2022-07 * @LastEditors: 一勺 * @LastEditTime:
2024-09 * @Description: 布局容器-Main */
<script setup lang="ts">
defineOptions({
  name: 'YqMain',
})
</script>

<template>
  <main class="yq-main">
    <slot></slot>
  </main>
</template>

<style scoped>
.yq-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: 20px;
}
</style>
