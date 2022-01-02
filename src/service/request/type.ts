import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XKRequestInterceptors {
  //请求成功hook
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  //请求失败hook
  requestInterceptorCatch?: (error: any) => any
  //响应成功hook
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  //响应失败hook
  responseInterceptorCatch?: (error: any) => any
}

//继承AxiosRequestConfig,扩展属性类型
export interface XKRequestConfig extends AxiosRequestConfig {
  interceptors?: XKRequestInterceptors
}
