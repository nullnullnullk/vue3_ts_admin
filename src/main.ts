import { createApp } from 'vue'
import { globalRegisterApp } from './global'
import router from './router'
import store from './store'
import App from './App.vue'
import xkRequest from './service'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(globalRegisterApp)
app.use(router)
app.use(store)
app.mount('#app')

interface DateType {
  data: any
  returnCode: string
  success: boolean
}

xkRequest
  .request<DateType>({
    method: 'GET',
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

// xkRequest.request({
//   method: 'GET',
//   url: '/home/multidata',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求拦截')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应拦截')
//       return res
//     }
//   }
// })
