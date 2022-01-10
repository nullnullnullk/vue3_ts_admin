class LocalCache {
  //设置localstorage
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  //获取localstorage
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  //删除localstorage
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  //清除缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
