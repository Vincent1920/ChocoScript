import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import login from '../auth/login.vue'
import shop from '../pages/shop/shop.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:'/shop',
    name:'shop',
    component:shop
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router