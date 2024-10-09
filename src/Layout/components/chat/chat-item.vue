<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

interface IGroup {
  avatar?: string
  name?: string
  membersNum?: number
  groupId?: number
  lastMessage?: string
  lastUser?: string
}

interface IUser {
  avatar?: string
  name?: string
  userId?: number
  lastMessage?: string
}

interface IChatItemProps {
  group: IGroup
  user: IUser
}

// defineProps<IChatItemProps>()


const toChatRoom = () => {
    router.push({ name: 'chat', query: { type: 'group', id: 1 } })
}
</script>

<template>
  <div class="flex w-full h-[70px] items-center" @click="toChatRoom">
    <div class="w-[50px] h-[50px] rounded-full overflow-hidden">
      <img src="/src/assets/group.png" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-1 flex-col ml-2">
      <p class="flex justify-between gap-1 w-full items-center">
        <span class="truncate w-[140px]">2023级项目组预备组员</span>
        <span class="text-gray-400 text-[12px]">18:16</span>
      </p>
      <p class="text-gray-400 text-[12px] truncate w-[138px]">
        <span>一勺:</span>
        <span>不争眼下的三五年不争眼下的三五年</span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
