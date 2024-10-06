<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
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
