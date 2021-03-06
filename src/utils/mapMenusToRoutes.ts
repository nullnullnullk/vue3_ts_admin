import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/components/Breadcrumd'

let firstMenu: any = null
export default function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  //1:先加载默认所有的路由
  const allRoutes: RouteRecordRaw[] = []
  //require.context是webpack的一个加载文件的函数
  //第一个参数是要加载的文件夹路径，第二个参数代表是否对文件夹递归查找，第三个参数表示要查找对应文件的正则
  const routeFile = require.context('../router/main', true, /\.ts/)
  console.log(routeFile)
  routeFile.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  //2:根据菜单获取需要的routes
  //userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        //保留第一个菜单
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        recurseGetRoute(menu.children)
      }
    }
  }
  recurseGetRoute(userMenus)
  return routes
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumds?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumds?.push({ name: menu.name }) //拿到面包屑的第一层
        breadcrumds?.push({ name: findMenu.name }) //拿到面包屑的第二层
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
  return breadcrumds
}

export function pathMapBreadcrumds(userMenus: any[], currentPath: string) {
  const breadcrumds: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumds)
  return breadcrumds
}

export { firstMenu }
