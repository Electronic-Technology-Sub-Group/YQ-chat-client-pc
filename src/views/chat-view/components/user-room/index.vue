<script setup lang="ts">
import YqContainer from '@/components/base/Container/container.vue'
import YqHeader from '@/components/base/Container/header.vue'
import YqMain from '@/components/base/Container/main.vue'
import YqFooter from '@/components/base/Container/footer.vue'

</script>

<template>
    <YqContainer>
        <YqHeader>1</YqHeader>
        <YqMain>2</YqMain>
        <YqFooter height="300px">3</YqFooter>
    </YqContainer>
</template>

<style scoped>
:deep(.yq-main) {
    flex: 1;
}
</style>
