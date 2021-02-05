import axios from 'axios'

const instance = axios.create({
  timeout: 10000,
  withCredentials: true,
  crossDomain: true
})

instance.interceptors.request.use((config) => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(({ data }) => {
  if (data.status === 200) {
    return data.data
  } else {
    return Promise.reject(data.msg)
  }
}, (error) => {
  return Promise.reject(error)
})

export default instance
