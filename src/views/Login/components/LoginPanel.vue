<template>
  <div class="login-panel">
    <h2>vue3后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon class="icon"><user /></el-icon>
            <span class="icon">&nbsp;账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon class="icon"><iphone /></el-icon>
            <span class="icon">&nbsp;手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import LoginAccount from './Account.vue'
import LoginPhone from './Phone.vue'
export default defineComponent({
  name: 'LoginRegister',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const handleLogin = () => {
      console.log('handleLogin')
      nextTick(() => {
        console.log(accountRef)
        accountRef.value?.loginAction()
      })
    }
    return {
      isKeepPassword,
      handleLogin,
      accountRef
    }
  }
})
</script>

<style scoped lang='less'>
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  h2 {
    text-align: center;
  }
}
.icon {
  vertical-align: middle;
}
.account-control {
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
}
</style>
