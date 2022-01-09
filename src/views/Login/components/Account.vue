<template>
  <el-form label-width="80px" :rules="rules" :model="user" ref="formRef">
    <el-form-item label="账号" prop="name">
      <el-input v-model.trim="user.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model.trim="user.password"
        type="password"
        show-password
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import type { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/accountConfig'
export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const user = reactive({
      name: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      console.log(formRef.value)
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录逻辑执行')
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
