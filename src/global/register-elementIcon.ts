//elementPlus的icon要单独下载，并且每一个icon都是一个组件，这里只做icon的按需引入
//其他组件则不需要，插件会自动按需引入
import { Apple, Aim, Calendar } from '@element-plus/icons-vue'
import type { App } from 'vue'

const ElIcons = [Apple, Aim, Calendar]

export default function (app: App): void {
  for (const component of ElIcons) {
    app.component(component.name, component)
  }
}
