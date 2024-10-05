// 请求响应参数
export interface ResultData<T = any> {
  data: T
  code: number
  message: string
}
