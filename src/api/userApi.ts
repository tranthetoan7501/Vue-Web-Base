import axios from 'axios'
import type { LoginResponse } from '@/types/index'
const API = axios.create({
  baseURL: import.meta.env.VITE_USERS_BASE_URL,
  headers: {
    Authorization: import.meta.env.VITE_USERS_TOKEN
  }
})

export const login = () => {
  return API.post('/NguoiDung/Login', {
    userName: import.meta.env.VITE_USERNAME,
    password: import.meta.env.VITE_PASSWORD,
    lang: 'vn',
    checkFingerprint: true,
    DeviceId: ''
  })
}
export const getContactList = async () => {
  const loginRespon: LoginResponse = await login()
  API.defaults.headers.common['Authorization'] = loginRespon.data.Data.Token
  return API.get('/Office/contacts')
}
