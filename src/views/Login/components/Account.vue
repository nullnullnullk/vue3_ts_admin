<template>
  <el-form label-width="80px" :rules="rules" :model="user" ref="formRef">
    <el-form-item label="账号" prop="name">
      <el-input v-model.trim="user.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model.trim="user.password" show-password></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import type { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/accountConfig'
import localCache from '@/utils/cache'
export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const user = reactive({
      name: localCache.getCache('user')?.name ?? '',
      password: localCache.getCache('user')?.password ?? ''
    })
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //1:判断是否需要记住密码
          if (isKeepPassword) {
            //本地缓存
            localCache.setCache('user', user)
          } else {
            localCache.deleteCache('user')
          }
          //2：开始登录验证
          //  1登录的逻辑（网络请求，拿到数据后的处理）
          //  2数据的保存到某一个位置
          //  3发送其他请求（请求当前用户的信息）
          //  4拿到用户的菜单
          //  5跳到首页
          store.dispatch('login/accountLoginAction', { ...user })
        }
      })
    }
    return {
      user,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
