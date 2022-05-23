import axios from 'axios';
import { ResponseData } from '../response-data/ResponseData';
import LocalStorage from '../utils/LocalStorage'
import { useCommonStore } from '../store/common'

const http = axios.create({
})
export default http

http.interceptors.request.use(
  config => {
    config.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const token = LocalStorage.getToken()
    if (token) {
      config.headers!['Authorization'] = `Bearer ${token}`
    }
    
    if (config.url?.indexOf('login') === -1) {
      delete http.defaults.headers.common['Authorization']
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
    response.data.status = response.data.status === 'Success'
    const _rs = response.data
    console.log(_rs);
    
    if (_rs.message) {
      _rs.status ? commonStore.showSuccessMess(_rs.message) : commonStore.showErrorMess(_rs.message)
    }
    return _rs
  },
  error => {
    return Promise.resolve(false)
  }
)
