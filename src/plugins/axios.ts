import axios from 'axios';
import { ResponseData } from 'src/response-data/ResponseData';
import LocalStorage from '../utils/LocalStorage'
import { useCommonStore } from '../store/common'

const http = axios.create({
})

export default http

http.interceptors.request.use(
  async config => {
    const token = LocalStorage.getToken()
    if (token) {
      config.headers!.Authorization = 'Bearer ' + token
    }
    if (config.url?.indexOf('login') === -1) {
      delete config.headers!['Authorization']
    }

    return config
  },
  error => {
    Promise.resolve(false)
  }
)

http.interceptors.response.use(
  response => {
    const commonStore = useCommonStore()
    const _rs: ResponseData = response.data
    if (response.data && response.data.data) _rs.data = response.data.data
    _rs.status = response.data.status === 'Success'
    _rs.status ? commonStore.showSuccessMess(_rs.message) : commonStore.showErrorMess(_rs.message)
    return _rs
  },
  error => {
    return Promise.resolve(false)
  }
)
