<script setup lang="ts">
import YqContainer from '@/components/base/Container/container.vue'
import YqHeader from '@/components/base/Container/header.vue'
import YqMain from '@/components/base/Container/main.vue'
import YqFooter from '@/components/base/Container/footer.vue'
import ChatHeader from './components/chat-header.vue'
import ChatFooter from './components/chat-footer.vue'
import ChatList from './components/chat-list.vue'
</script>

<template>
  <YqContainer>
    <YqHeader>
      <chat-header></chat-header>
    </YqHeader>
    <YqMain>
      <chat-list></chat-list>
    </YqMain>
    <YqFooter height="300px">
      <chat-footer></chat-footer>
    </YqFooter>
  </YqContainer>
</template>

<style scoped>
:deep(.yq-main) {
  flex: 1;
}
:deep(.yq-header) {
  padding: 20px 0 20px 0;
  display: flex;
  align-items: center;
}
:deep(.yq-footer) {
  border-top: 1px solid #e8e8e8;
  padding: 0;
}
</style>
