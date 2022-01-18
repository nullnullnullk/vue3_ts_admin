<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/logo.png" alt="logo" />
      <span class="title">后台管理</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/index'
import { computed } from 'vue'
export default defineComponent({
  name: 'NavMenu',
  setup() {
    const store = useStore()
    const userMenus = computed(() => {
      return store.state.login.userMenus
    })
    console.log(userMenus)
    return {
      userMenus
    }
  }
})
</script>

<style scoped lang='less'>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .img {
    height: 100%;
    margin: 0 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}
</style>
