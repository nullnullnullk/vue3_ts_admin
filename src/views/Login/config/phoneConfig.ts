export const rules = {
  num: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[1]([3-9])[0-9]{9}$/,
      message: '手机号不符合规范',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码必须是6位数字',
      trigger: 'blur'
    }
  ]
}
