//elementPlus的icon要单独下载，并且每一个icon都是一个组件，这里只做icon的按需引入
//其他组件则不需要，插件会自动按需引入
import {
  User,
  Iphone,
  Monitor,
  Setting,
  Goods,
  Fold,
  Expand
} from '@element-plus/icons-vue'
import type { App } from 'vue'

const ElIcons = [User, Iphone, Monitor, Setting, Goods, Fold, Expand]

export default function (app: App): void {
  for (const component of ElIcons) {
    app.component(component.name, component)
  }
}
