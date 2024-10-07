<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import enrollForm from './components/enroll-form.vue'
import loginForm from './components/login-form.vue'
import resetForm from './components/reset-form.vue'

interface IConfigFormTitle {
  title?: string
  type?: string
  subTitle?: string
  action?: string
  actionKey?: string
}

const theme = ref('light')
const configFormTitle = reactive<IConfigFormTitle[]>([
  {
    title: 'YQ Chat',
    subTitle: '还没有注册账户吗?',
    action: '在此注册',
    actionKey: 'enroll',
    type: 'login',
  },
  {
    title: '创建您的账户',
    subTitle: '已经有账户了?',
    action: '在此登入',
    actionKey: 'login',
    type: 'enroll',
  },
  {
    title: '忘记密码?',
    subTitle:
      '输入您的注册邮箱, 我们为您发送一封包含验证码的邮件, 在此输入以重置您的密码',
    type: 'reset',
  },
])
const currentForm = ref('login')

const change = (type: string) => {
  currentForm.value = type
}
</script>

<template>
  <div
    class="flex flex-col w-screen h-screen bg-[url('@/assets/login-bg.svg')] bg-no-repeat bg-center bg-cover bg-fixed"
  >
    <!-- 顶部区域 -->
    <div class="flex justify-between items-center w-full h-[60px] px-10">
      <div class="flex gap-4 items-center">
        <img src="@/assets/logo-y.svg" alt="logo-y" class="w-[30px]" />
        <img src="@/assets/logo-q.svg" alt="logo-q" class="w-[30px]" />
      </div>
      <div class="flex gap-4 items-center">
        <el-switch
          v-model="theme"
          style="--el-switch-on-color: #000; --el-switch-off-color: #fff"
          inline-prompt
          size="large"
          active-icon="x"
          inactive-icon="y"
        />
        <img src="@/assets/lang-cn.svg" alt="lang-cn" class="w-[30px]" />
      </div>
    </div>

    <!-- 主体区域 -->
    <div class="flex-1 flex">
      <!-- 左侧区域 -->
      <div class="flex-1 flex justify-center items-center">
        <img
          src="@/assets/login-left.svg"
          alt="login-left"
          class="w-full h-2/3 ml-[300px]"
        />
      </div>

      <!-- 右侧区域 -->
      <div class="flex-1 flex justify-center items-center">
        <div
          class="w-[500px] h-[600px] bg-white rounded-[10px] p-5 backdrop-blur-md bg-opacity-10"
        >
          <!-- 表单可控标题 -->
          <div class="text-center">
            <template v-for="item in configFormTitle" :key="item.type">
              <div v-if="item.type === currentForm">
                <h2
                  class="animate_animated text-center mb-5 text-3xl font-bold"
                >
                  {{ item.title }}
                </h2>
                <span class="text-gray-500">{{ item.subTitle }}</span>
                <span
                  class="text-blue-500 cursor-pointer font-bold px-1"
                  @click="change(item.actionKey)"
                  v-if="item.actionKey"
                >
                  {{ item.action }}
                </span>
              </div>
            </template>
            <div class="flex items-center my-10">
              <hr class="flex-1 border-t border-gray-500" />
              <span class="mx-10 text-gray-400">OR</span>
              <hr class="flex-1 border-t border-gray-500" />
            </div>
          </div>
          <!-- 表单控件 -->
          <loginForm v-if="currentForm === 'login'"></loginForm>
          <enrollForm v-if="currentForm === 'enroll'"></enrollForm>
          <resetForm v-if="currentForm === 'reset'"></resetForm>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-switch__action) {
  background: #ccc;
}
</style>
