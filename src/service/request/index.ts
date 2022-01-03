import axios from 'axios'
import { ElLoading } from 'element-plus'
import type { AxiosInstance } from 'axios'
import type { XKRequestInterceptors, XKRequestConfig } from './type'

class XKRequest {
  instance: AxiosInstance
  interceptors?: XKRequestInterceptors
  showLoading?: Boolean
  loading: any
  constructor(config: XKRequestConfig) {
    //创建实例对象
    this.instance = axios.create(config)
    //单个对象拦截器
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true
    //设置单个对象请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    //设置单个对象响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0, 0.5)'
          })
        }
        console.log('全局请求请求成功拦截器')
        return config
      },
      (error) => {
        console.log('全局请求请求失败拦截器', error)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        console.log('全局请求响应成功拦截器')
        return res.data
      },
      (error) => {
        this.loading?.close()
        console.log('全局请求响应失败拦截器', error)
      }
    )
  }
  request(config: XKRequestConfig): void {
    //单独一个请求的拦截设置
    //只有调用请求是传入拦截器函数才会调用
    if (config.showLoading === false) {
      this.showLoading = false
    }
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors?.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors?.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default XKRequest
