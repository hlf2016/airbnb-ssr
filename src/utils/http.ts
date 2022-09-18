import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: '',
}

class Http {
  // 静态私有属性
  private static axiosInstance: AxiosInstance = axios.create(defaultConfig)

  constructor() {
    this.httpRequestInterceptor()
    this.httpResponseInterceptor()
  }

  private httpRequestInterceptor() {
    Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      // 请求拦截器
      return config
    }, (error) => {
      return Promise.reject(error)
    })
  }

  private httpResponseInterceptor() {
    Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      // 响应拦截器
      return response
    }, (error) => {
      return Promise.reject(error)
    })
  }

  httpGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.get(url, params).then(res => res.data).catch()
  }

  httpPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.post(url, params).then(res => res.data).catch()
  }
}

export const http = new Http()
