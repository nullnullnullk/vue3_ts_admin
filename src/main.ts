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
app.use(store)
setupStore()
app.use(router)

app.mount('#app')

//刷新时候路由匹配notfont页面的原因分析
// app.use(router) ->
// install() ->
// 获取当前path ->
// router.routes -> 在这一步实际路由已经匹配好了
// notFound ->
// 路由守卫（回调） 此时回调要等我们真正跳转的时候才会执行
// setStore() => 注册动态路由routes
// 路由守卫 的to 已经确认好了是 notfont
