<template>
  <div class="user">
    <el-card class="search">
      <XkForm v-bind="formConfig" />
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XkForm, { IForm } from '@/components/Form'
export default defineComponent({
  name: 'User',
  components: {
    XkForm
  },
  setup() {
    const formConfig: IForm = {
      labelWidth: '120px',
      itemLayout: { padding: '10px 30px' },
      colLayout: { span: 8 },
      formItems: [
        {
          type: 'input',
          label: '用户名',
          placehoder: '请输入用户名'
        },
        {
          type: 'password',
          label: '密码',
          placehoder: '请输入密码'
        },
        {
          type: 'select',
          label: '喜欢的运动',
          placehoder: '请输入喜欢的运动',
          options: [
            {
              title: '篮球',
              value: 'basketball'
            },
            {
              title: '足球',
              value: 'football'
            }
          ]
        },
        {
          type: 'datepicker',
          label: '创建时间',
          otherOptions: {
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
            type: 'daterange'
          }
        }
      ]
    }
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
