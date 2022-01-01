import 'element-plus/theme-chalk/base.css'
import { ElButton, ElInput, ElForm } from 'element-plus'
import type { App } from 'vue'

const components = [ElButton, ElInput, ElForm]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
