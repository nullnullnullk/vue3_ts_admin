//用户名，密码类型
export interface IAccount {
  name: string
  password: string
}

//登录接口拿到的res.data类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}

//登录接口拿到的res数据类型,拿到的数据不确定使用泛型
export interface IDataType<T = any> {
  code: number
  data: T
}
