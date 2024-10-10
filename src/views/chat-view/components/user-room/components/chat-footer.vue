<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center px-4 py-[15px]">
      <div class="flex gap-3">
        <img class="w-[30px]" src="/src/assets/emoji.svg" alt="" />
        <img class="w-[30px]" src="/src/assets/screenshot.svg" alt="" />
        <img class="w-[30px]" src="/src/assets/file.svg" alt="" />
        <img class="w-[30px]" src="/src/assets/image.svg" alt="" />
        <img class="w-[30px]" src="/src/assets/envelope.svg" alt="" />
        <img class="w-[30px]" src="/src/assets/video.svg" alt="" />
      </div>
      <img class="w-[30px]" src="/src/assets/history.svg" alt="" />
    </div>
    <el-input type="textarea" resize="none" class="h-[238px]"></el-input>
  </div>
</template>

<style scoped>
:deep(.el-textarea__inner) {
  box-shadow: none;
  height: 100%;
}
</style>
