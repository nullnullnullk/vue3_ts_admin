<template>
  <div class="home">
    <el-container class="home-content">
      <el-aside width="210px">
        <NavMenu />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavMenu from '@/components/NavMenu/index.vue'
export default defineComponent({
  name: 'Home',
  components: {
    NavMenu
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.home-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100% -48px);
}
.el-header {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
  height: 48px !important;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
