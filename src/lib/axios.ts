import axios from 'axios'

// 建立一個 axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://example.com/api', // 可以用環境變數，或者預設值
  timeout: 10000, // 請求逾時時間 10秒
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request 攔截器：自動加上 Token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response 攔截器：統一錯誤處理
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error('未授權，請重新登入')
        // 這邊也可以自動跳轉到登入頁之類的
      }
    }
    return Promise.reject(error)
  },
)
