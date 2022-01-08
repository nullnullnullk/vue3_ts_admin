import type { App } from 'vue'
import registerElement from './register-elementIcon'

//app.use()使用时，必须传入一个函数，这个函数会自动接收app实例
export function globalRegisterApp(app: App): void {
  app.use(registerElement)
}
