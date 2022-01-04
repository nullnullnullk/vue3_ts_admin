import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XKRequestInterceptors<T = AxiosResponse> {
  //请求成功hook
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  //请求失败hook
  requestInterceptorCatch?: (error: any) => any
  //响应成功hook
  responseInterceptor?: (res: T) => T
  //响应失败hook
  responseInterceptorCatch?: (error: any) => any
}

//继承AxiosRequestConfig,扩展属性类型
export interface XKRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XKRequestInterceptors<T>
  showLoading?: Boolean
}
