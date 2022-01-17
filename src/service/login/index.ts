import xkRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './types'

export function accountLoginRequest(account: IAccount) {
  return xkRequest.post<IDataType<ILoginResult>>({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return xkRequest.get<IDataType<any>>({
    url: `/users/${id}`
  })
}

export function getUserMenusById(id: number) {
  return xkRequest.get<IDataType<any>>({
    url: `/role/${id}/menu`
  })
}
