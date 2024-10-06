/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import { defineStore } from 'pinia'

import Cookies from 'js-cookie'

export const useMainStore = defineStore('main', {
  state: () => ({
    example: 0, // 示例数据

    token: Cookies.get('Authorization') || '',

    userInfo: null,
  }),

  getters: {
    // 示例计算属性
    doubleExample(state) {
      return state.example * 2
    },
  },
  actions: {
    // 示例方法
    incrementExample() {
      this.example++
    },
    setToken(token: string) {
      Cookies.set('Authorization', token)
      this.token = token
    },
  },
})
