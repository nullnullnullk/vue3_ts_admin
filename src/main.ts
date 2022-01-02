import { createApp } from 'vue'
import { globalRegisterApp } from './global'
import router from './router'
import store from './store'
import App from './App.vue'
import xkRequest from './service'

const app = createApp(App)

app.use(globalRegisterApp)
app.use(router)
app.use(store)
app.mount('#app')
xkRequest.request({
  method: 'GET',
  url: '/home/multidata'
})
