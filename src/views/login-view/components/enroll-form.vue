<script setup lang="ts"></script>

<template>
  <el-form>
    <el-form-item label="邮箱">
      <el-input placeholder="请正确输入你的邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请正确输入你的密码"></el-input>
    </el-form-item>
    <el-form-item label="重复密码">
      <el-input placeholder="请再次正确输入你的密码"></el-input>
    </el-form-item>
    <el-form-item label="验证码">
      <el-input placeholder="请正确输入你的验证码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox>
        <span>我同意</span>
        <span class="px-1 text-blue-600">服务条款</span>
      </el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button>创建账户</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
