import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusById
} from '@/service/login/index'
import router from '@/router/index'
import type { IAccount } from '@/service/login/types'
import localCache from '@/utils/cache'
import mapMenusToRoutes from '@/utils/mapMenusToRoutes'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //实现登录逻辑

      //1:请求token
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      //vuex保存一份
      commit('CHANGE_TOKEN', token)
      //本地保存一份
      localCache.setCache('token', token)

      //2:请求用户的信息
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('CHANGE_USER_INFO', userInfo)
      localCache.setCache('userInfo', userInfo)

      //3:请求用户菜单
      const userMenusResult = await getUserMenusById(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('CHANGE_USER_MENUS', userMenus)
      localCache.setCache('userMenus', userMenus)

      //4:跳转首页
      router.push('/home')
    },
    loadLocalLogin({ commit }) {
      //用户刷新，从本地继续拿到数据赋值给vuex
      const token = localCache.getCache('token')
      if (token) {
        commit('CHANGE_TOKEN', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('CHANGE_USER_INFO', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('CHANGE_USER_MENUS', userMenus)
      }
    }
  },
  mutations: {
    CHANGE_TOKEN(state, token: string) {
      state.token = token
    },
    CHANGE_USER_INFO(state, userInfo: any) {
      state.userInfo = userInfo
    },
    CHANGE_USER_MENUS(state, userMenus: any) {
      state.userMenus = userMenus
      //再次确定拿到了usermenus
      const routes = mapMenusToRoutes(userMenus)
      //将筛选完成的route一一添加到router
      routes.forEach((route) => {
        router.addRoute('Main', route)
      })
    }
  }
}

export default loginModule
