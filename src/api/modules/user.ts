import http from '../index.ts'
import type { ILoginParams } from '../interface'

export const login = (params: ILoginParams) => {
  return http.post('/login', params)
}
