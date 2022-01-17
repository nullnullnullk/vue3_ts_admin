import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/index'
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
export function setupStore() {
  console.log(11)
  store.dispatch('login/loadLocalLogin')
}
export default store
