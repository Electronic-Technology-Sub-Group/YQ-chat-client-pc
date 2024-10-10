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
import LayoutSearch from './components/layout-search.vue'
import LayoutScroll from './components/layout-scroll.vue'
import { ChatMenuList, ConfigMenuList } from '@/config'
</script>

<template>
  <YqContainer class="h-screen bg-[#F2F2F2]">
    <YqAside width="400px">
      <YqContainer class="h-full">
        <YqAside width="100px" class="flex flex-col h-full">
          <div class="flex items-end w-full justify-center py-6 gap-2">
            <div class="w-[20px] h-[20px] rounded-full bg-[#893cb6]"></div>
            <div class="w-[20px] h-[20px] rounded-full bg-[#30b191]"></div>
            <div class="w-[20px] h-[20px] rounded-full bg-[#c03664]"></div>
          </div>
          <div class="w-[70px] h-[70px] rounded-full mx-auto overflow-hidden">
            <img src="/src/assets/avatar.jpg" class="w-full h-full" />
          </div>
          <div class="flex flex-1 flex-col justify-between">
            <ChatMenu :menuList="ChatMenuList" defaultActive="chat" />
            <ConfigMenu :menuList="ConfigMenuList" hoverType="plain" />
          </div>
        </YqAside>
        <YqMain
          class="chat-main bg-[#FFFFFF] flex flex-col border-r-[1px] border-[#E5E5E5]"
        >
          <LayoutSearch />
          <LayoutScroll class="flex-1" />
        </YqMain>
      </YqContainer>
    </YqAside>
    <YqMain class="room-main">
      <router-view></router-view>
    </YqMain>
  </YqContainer>
</template>

<style scoped>
:deep(.chat-main) {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 0;
  padding-right: 0;
}

:deep(.room-main) {
  padding: 0;
}
</style>
