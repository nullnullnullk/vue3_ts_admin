import { createRouter, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/cache'
import type { RouteRecordRaw } from 'vue-router'
import { firstMenu } from '@/utils/mapMenusToRoutes'

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
  // 当我们path是main的时候，跳转到默认跳转到第一个匹配到的path
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
