<script setup lang="ts">
import YqContainer from "@/components/base/Container/container.vue"
import YqAside from "@/components/base/Container/aside.vue"
import YqMain from '@/components/base/Container/main.vue'
</script>

<template>
  <YqContainer class="h-screen bg-[#F2F2F2]">
    <YqAside>
      <YqContainer class="h-full">
        <YqAside width="80px"></YqAside>
        <YqMain class="bg-[#FFFFFF]"></YqMain>
      </YqContainer>
    </YqAside>
    <YqMain></YqMain>
  </YqContainer>
</template>

<style scoped></style>
