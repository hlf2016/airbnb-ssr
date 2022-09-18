import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: '',
}

const axiosInstance = axios.create(defaultConfig)

// 请求拦截
axiosInstance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
axiosInstance.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

// 封装请求
// GET
export const httpRequestGet = (url: string, params: AxiosRequestConfig<any> | undefined) => {
  return axiosInstance.get(url, params).then(res => res.data).catch()
}

// POST
export const httpRequestPost = (url: string, params: Object) => {
  return axiosInstance.post(url, params).then(res => res.data).catch()
}
