<template>
  <el-form>
    <el-form-item label="邮箱">
      <el-input
        v-model="loginForm.email"
        placeholder="请正确输入你的邮箱"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        v-model="loginForm.password"
        type="password"
        placeholder="请正确输入你的密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox>自动登录</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button>登入</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { ILoginParams } from '@/api/interface/user.ts'

const loginForm = reactive<ILoginParams>({
  email: '',
  password: '',
})
</script>

<style></style>
