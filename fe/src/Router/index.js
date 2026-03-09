import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LoginView from '../Auth/LoginView.vue'

const router = createRouter({
  // Baris di bawah ini yang paling penting untuk memperbaiki error merah tadi
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView 
    }
  ]
})

export default router