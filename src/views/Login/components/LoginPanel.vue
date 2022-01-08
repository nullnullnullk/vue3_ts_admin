<template>
  <div class="login-register">
    <h2>vue3后台管理系统</h2>
    <!-- <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><Calendar /></el-icon>Route
          </span>
        </template>
        Route
      </el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LoginRegister',
  setup() {
    return {}
  }
})
</script>

<style scoped>
.login-register h2 {
  text-align: center;
}
</style>
