<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import UserRoom from './components/user-room/index.vue'
import GroupRoom from './components/group-room/index.vue'
import NotChat from '@/components/function/NotFound/not-chat.vue'

const route = useRoute()
const chatType = ref(route.query.type)

watch(() => route.query.type, (newType) => {
    chatType.value = newType
})
</script>

<template>
    <!-- 初始化状态 -->
    <not-chat v-if="!chatType"></not-chat>
    <!-- 单聊 -->
    <user-room v-if="chatType === 'user'"></user-room>
    <!-- 群聊 -->
    <group-room v-if="chatType === 'group'"></group-room>
</template>

<style scoped></style>
