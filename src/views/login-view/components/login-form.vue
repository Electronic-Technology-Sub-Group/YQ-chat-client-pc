<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
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
      <el-button @click="login">登入</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { ILoginParams } from '../../../api/interface/user'
import { login as loginApi } from '../../../api/modules/user'
import { useMainStore } from '../../../store'

const router = useRouter()

const mainStore = useMainStore()

const loginForm = reactive<ILoginParams>({
  email: '123@lingshulian.com',
  password: '123456',
})

const login = () => {
  loginApi(loginForm).then((res) => {
    if (res.code === 200) {
      mainStore.setToken(res.data.token)
      router.push('/')
    }
  })
}
</script>

<style></style>
