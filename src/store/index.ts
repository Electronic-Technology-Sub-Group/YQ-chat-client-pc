import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => ({
    example: 0,
  }),
  getters: {
    doubleCount(state) {
      return state.example * 2
    },
  },
  actions: {
    increment() {
      this.example++
    },
  },
  persist: {
    key: 'main',
    storage: localStorage,
  },
})
