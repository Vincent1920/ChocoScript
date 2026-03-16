import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import login from '../auth/login.vue'


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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router