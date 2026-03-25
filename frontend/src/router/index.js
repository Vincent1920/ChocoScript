import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import login from '../auth/login.vue'
import shop from '../pages/shop/shop.vue'
import ProductDetail from '../pages/shop/ProductDetail.vue'
import cart from '../pages/cart/Cart.vue'
import Checkout from '../pages/cart/Checkout.vue'


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
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component:ProductDetail
  },
   {
    path: '/cart',
    name: 'cart',
    component:cart
  },
  {
  path: '/checkout',
  name: 'checkout',
  component: Checkout
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router