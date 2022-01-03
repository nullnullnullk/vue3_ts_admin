import XKRequest from './request'

const xkRequest = new XKRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_TIMEOUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      console.log('发送成功', config)
      const token = ''
      if (token) {
        config.headers.Authorization = 'ad' + token
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('发送失败', error)
    },
    responseInterceptor: (res) => {
      console.log('响应成功', res)
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败', error)
    }
  }
})

export default xkRequest
