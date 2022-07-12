import Home from '~/views/home/index.vue'
import Mine from '~/views/mine/index.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    meta: {
      title: '我的',
      keepAlive: false
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
