import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Cart from '../views/cart/Cart.vue'
import Profile from '../views/profile/Profile.vue'
import Category from '../views/category/Category.vue'

const routes = [
  {
  path: '/',
  redirect: 'Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
  path: '/Cart',
  component: Cart
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
