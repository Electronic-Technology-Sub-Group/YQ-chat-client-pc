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
import layoutMenu from './components/layout-menu.vue'

import { layoutMenuList } from '@/config'
</script>

<template>
  <YqContainer class="h-screen bg-[#F2F2F2]">
    <YqAside>
      <YqContainer class="h-full">
        <YqAside width="100px">
          <div class="text-center text-gray-500 p-[10px]">内测版</div>
          <div
            class="w-[65px] h-[65px] rounded-full bg-purple-300 mx-auto"
          ></div>
          <!-- TODO: 在线状态开发 -->
          <!-- ----------------- -->
          <layoutMenu :></layoutMenu>
        </YqAside>
        <YqMain class="bg-[#FFFFFF]"></YqMain>
      </YqContainer>
    </YqAside>
    <YqMain>
      <router-view></router-view>
    </YqMain>
  </YqContainer>
</template>

<style scoped></style>
