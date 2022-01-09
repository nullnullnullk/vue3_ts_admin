<template>
  <el-form label-width="80px" :rules="rules" :model="phone">
    <el-form-item label="手机号" prop="num">
      <el-input v-model.trim="phone.num"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="get-code">
        <el-input v-model.trim="phone.code"></el-input>
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phoneConfig'
export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped  lang='less'>
.get-code {
  display: flex;
  .get-btn {
    width: 80px;
    margin-left: 10px;
  }
}
</style>
