import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { XKRequestInterceptors, XKRequestConfig } from './type'

class XKRequest {
  instance: AxiosInstance
  interceptors?: XKRequestInterceptors
  constructor(config: XKRequestConfig) {
    //创建实例
    this.instance = axios.create(config)
    //拦截器
    this.interceptors = config.interceptors
    //设置请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    //设置响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default XKRequest
