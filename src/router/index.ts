import { createRouter, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/cache'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    name: 'Main',
    path: '/main',
    component: () => import('@/views/main/index.vue'),
    children: []
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/notFound/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
