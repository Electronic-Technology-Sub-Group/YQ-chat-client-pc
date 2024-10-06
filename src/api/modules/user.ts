import http from '../index.ts'

export const login = (params: any) => {
  return http.post('/login', params)
}
