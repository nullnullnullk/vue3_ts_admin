<template>
  <div class="home-header">
    <el-icon class="icon">
      <component :is="isFold ? 'fold' : 'expand'" @click="handleFold" />
    </el-icon>
    <div class="content">
      <div class="breadcrumd">
        <XKBreadcrumd :breadcrumbs="breadcrumbs" />
      </div>
      <div class="user-panel">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
            <span class="user-name">{{ userName }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store/index'
import { useRoute } from 'vue-router'
import XKBreadcrumd, { IBreadcrumb } from '@/components/Breadcrumd/index'
import { pathMapBreadcrumds } from '@/utils/mapMenusToRoutes'
export default defineComponent({
  name: 'HomeHeader',
  components: {
    XKBreadcrumd
  },
  emits: ['handleCollapse'],
  setup(_, { emit }) {
    const store = useStore()
    const route = useRoute()
    const userName = computed<string>(() => {
      return store.state.login.userInfo.name
    })
    const isFold = ref<boolean>(false)
    const handleFold = () => {
      isFold.value = !isFold.value
      emit('handleCollapse', isFold.value)
    }

    //面包屑数据
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumds(userMenus, currentPath)
    })
    return {
      isFold,
      userName,
      handleFold,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang='less'>
.home-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .icon {
    font-size: 24px;
    cursor: pointer;
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .user-panel {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .el-dropdown-link {
      display: flex;
      align-items: center;
      .user-name {
        margin-left: 10px;
      }
    }
  }
}
</style>
