import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'
import { ElMessage } from 'element-plus'
import type { ResultData } from './interface'

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:5323/api',
  timeout: 3000,
}

class HttpRequest {
  service: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    // 请求拦截器
    this.service.interceptors.request.use(
      (config) => {
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )

    // 响应拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data
      },
      (error: AxiosError) => {
        const status = error.response?.status
        if (status) {
          switch (status) {
            case 404:
              ElMessage.error('请求的资源不存在')
              break
            case 500:
              ElMessage.error('服务器内部错误')
              break
            default:
              ElMessage.error('请求失败，请重试')
          }
        }
        return Promise.reject(error)
      },
    )
  }

  // 支持泛型
  get<T = any>(
    url: string,
    params?: object,
    _object = {},
  ): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }

  post<T = any>(
    url: string,
    params?: object,
    _object = {},
  ): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }

  put<T = any>(
    url: string,
    params?: object,
    _object = {},
  ): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }

  delete<T = any>(
    url: string,
    params?: any,
    _object = {},
  ): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }

  patch<T = any>(
    url: string,
    params?: object,
    _object = {},
  ): Promise<ResultData<T>> {
    return this.service.patch(url, params, _object)
  }
}

export default new HttpRequest(config)
