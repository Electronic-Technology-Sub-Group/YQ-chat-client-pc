<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
<script setup lang="ts">
import YqContainer from '@/components/base/Container/container.vue'
import YqAside from '@/components/base/Container/aside.vue'
import YqMain from '@/components/base/Container/main.vue'
import ChatMenu from './components/layout-menu.vue'
import ConfigMenu from './components/layout-menu.vue'
import { ChatMenuList, ConfigMenuList } from '@/config'
</script>

<template>
  <YqContainer class="h-screen bg-[#F2F2F2]">
    <YqAside width="400px">
      <YqContainer class="h-full">
        <YqAside width="100px" class="flex flex-col h-full">
          <div class="text-center text-gray-500 p-[10px]">内测版</div>
          <div class="w-[70px] h-[70px] rounded-full mx-auto overflow-hidden">
            <img src="/src/assets/avatar.jpg" class="w-full h-full" />
          </div>
          <!-- TODO: 在线状态开发 -->
          <!-- ----------------- -->
          <div class="flex flex-1 flex-col justify-between">
            <ChatMenu :menuList="ChatMenuList" defaultActive="chat" />
            <ConfigMenu :menuList="ConfigMenuList" hoverType="plain" />
          </div>
        </YqAside>
        <YqMain class="bg-[#FFFFFF]">会话列表</YqMain>
      </YqContainer>
    </YqAside>
    <YqMain>
      <router-view></router-view>
    </YqMain>
  </YqContainer>
</template>

<style scoped></style>
