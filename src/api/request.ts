import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { message } from 'antd'
import { getToken } from '../utils/utils'

export type ResType = {
  errorCode: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

class Request {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      timeout: 10000,
    })
    this.interceptors(this.instance)
  }

  interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${getToken()}` // jwt 固定格式（Bearer + 空格 + token）
      return config
    })
    instance.interceptors.response.use(
      (response: AxiosResponse<ResType>) => {
        const res = response.data || {}
        const { errorCode, data, msg } = res
        if (errorCode === 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return data as any
        } else {
          message.error(msg)
          return Promise.reject(msg)
        }
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
}

export default Request
