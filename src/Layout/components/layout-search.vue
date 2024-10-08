<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue'
import { Search, Plus } from '@element-plus/icons-vue'

const showTipsBlock = ref(false)
const tipsBlock = ref<HTMLElement>()

const searchFocus = () => {
  showTipsBlock.value = true
}

const searchBlur = () => {
  setTimeout(() => {
    showTipsBlock.value = false
  }, 300)
}

const intoSearchDetail = () => {
  console.log('进入全局搜索')
}
</script>

<template>
  <div class="relative">
    <div class="flex gap-x-1 pt-5">
      <el-input
        placeholder="搜索"
        :prefix-icon="Search"
        @focus="searchFocus"
        @blur="searchBlur"
      ></el-input>
      <el-button type="plain">
        <el-icon><Plus /></el-icon>
      </el-button>
    </div>
    <div
      class="flex p-5 w-[260px] border-b fixed z-50 bg-white cursor-pointer"
      @click="intoSearchDetail"
      ref="tipsBlock"
      v-if="showTipsBlock"
    >
      <div
        class="flex items-center justify-center bg-blue-500 w-[60px] h-[60px] rounded-full mr-3"
      >
        <el-icon color="#fff" size="24px">
          <Search />
        </el-icon>
      </div>
      <div ref="tipsBlock">
        <p class="mb-2">进入全局搜索</p>
        <p class="text-gray-500 text-[12px] text-nowrap">
          查找好友、群聊、文件等
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-input {
  --el-input-bg-color: #e9e9e9;
}
.el-button {
  --el-button-bg-color: #e9e9e9;
  --el-button-hover-text-color: #4a4646;
  --el-button-hover-bg-color: #e9e9e9;
  --el-button-active-border-color: none;
  --el-button-active-bg-color: #e9e9e9;
  border: none;
}
</style>
