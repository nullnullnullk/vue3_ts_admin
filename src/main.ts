import { createApp } from 'vue'
import { globalRegisterApp } from './global'
import router from './router'
import store from './store'
import App from './App.vue'
import { setupStore } from './store/index'

import './assets/css/index.less'
import 'normalize.css'
import 'element-plus/theme-chalk/el-loading.css'

const app = createApp(App)

app.use(globalRegisterApp)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')

// interface DateType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// xkRequest
//   .request<DateType>({
//     method: 'GET',
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//     // console.log(res.returnCode)
//     // console.log(res.success)
//   })
