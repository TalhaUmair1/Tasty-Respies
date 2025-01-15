import pages from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import { isLogin, user } from '../utils/pocketClient'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [...pages],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from) => {
  if (to.path.includes('dashboard') && !user.value && !isLogin.value) {
    return { path: '/login' }
  }
  return true
})

export default router
