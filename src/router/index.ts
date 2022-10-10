import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/views/home/index.vue'
import Mine from '~/views/mine/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home/:id',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: false,
    },
    //  允许在 props 中接受参数
    props: true,
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    meta: {
      title: '我的',
      keepAlive: false,
    },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
