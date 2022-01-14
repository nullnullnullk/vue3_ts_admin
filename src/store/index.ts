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
export default store
