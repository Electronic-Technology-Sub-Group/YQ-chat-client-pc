<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
<script setup lang="ts">
import chatItem from './chat/chat-item.vue'
import userItem from './user/user-item.vue'
</script>

<template>
  <el-scrollbar class="pr-[20px]">
    <chat-item></chat-item>
    <user-item></user-item>
  </el-scrollbar>
</template>

<style scoped></style>
