import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/chat',
    children: [
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/chat-view/index.vue')
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login-view/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
