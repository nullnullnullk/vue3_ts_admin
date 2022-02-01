type ItemType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: ItemType
  label: string
  rules?: any[]
  placehoder?: any
  options?: any[]
  otherOptions?: any
  itemStyle?: Object
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}
