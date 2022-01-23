<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/logo.png" alt="logo" />
    </div>
    <div class="menu-box">
      <el-menu
        default-active="1"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        active-text-color="#0a60bd"
        background-color="#0c2135"
        text-color="#b7bdc3"
      >
        <template v-for="firstMenu in userMenus" :key="firstMenu.id">
          <template v-if="firstMenu.type === 1">
            <el-sub-menu :index="firstMenu.id + ''">
              <template #title>
                <el-icon class="icon">
                  <component :is="firstMenu.icon.split('-')[2]" />
                </el-icon>
                <span>{{ firstMenu.name }}</span>
              </template>
              <template v-if="firstMenu.children">
                <el-menu-item
                  v-for="secondMenu in firstMenu.children"
                  :key="secondMenu.id"
                  :index="secondMenu.id + ''"
                  @click="handleMenu(secondMenu)"
                  >{{ secondMenu.name }}</el-menu-item
                >
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="firstMenu.id + ''">
              {{ firstMenu.name }}
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/index'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
interface IMenuItem {
  children: Array<object>
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}
export default defineComponent({
  name: 'NavMenu',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const userMenus = computed(() => {
      return store.state.login.userMenus
    })
    const handleMenu = (item: IMenuItem) => {
      console.log(item)
      router.push({
        path: item.url
      })
    }
    return {
      userMenus,
      handleMenu
    }
  }
})
</script>

<style scoped lang='less'>
.nav-menu {
  width: 100%;
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
  }
  // .menu-box {
  //   width: 100%;
  //   display: flex;
  //   justify-content: center;
  // }
}
::v-deep.el-menu {
  border-right: none;
}
::v-deep.el-menu--collapse {
  width: 52px;
}
.icon {
  font-size: 16px;
}
</style>
