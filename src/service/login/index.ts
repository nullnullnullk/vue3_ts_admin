import xkRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './types'

export function accountLoginRequest(account: IAccount): any {
  return xkRequest.post<IDataType<ILoginResult>>({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number): any {
  return xkRequest.get<IDataType<any>>({
    url: `/users/${id}`
  })
}

export function getUserMenusById(id: number): any {
  return xkRequest.get<IDataType<any>>({
    url: `/role/${id}/menu`
  })
}
