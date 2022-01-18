import { createStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import { useStore as useVuexStore } from 'vuex'
import login from './login/index'
import { Store } from 'element-plus/es/components/table/src/store'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: '',
      age: 0
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login
  }
})
//刷新重载vuex里的用户数据
export function setupStore(): void {
  store.dispatch('login/loadLocalLogin')
}
//解决useStore类型不明问题
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
