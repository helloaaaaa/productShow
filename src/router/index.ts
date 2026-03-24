import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/hats',
    name: 'Hats',
    component: () => import('@/views/Hats.vue')
  },
  {
    path: '/clothing',
    name: 'Clothing',
    component: () => import('@/views/Clothing.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
