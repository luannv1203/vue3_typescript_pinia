import CONSTANT from '../config/Constant'

const LocalStorage = {
  getItem(name: string) {
    return localStorage.getItem(name)
  },
  setItem(name: string, value: string) {
    return localStorage.setItem(name, value)
  },
  setToken(value: string) {
    return localStorage.setItem(CONSTANT.JWT, value)
  },
  getToken() {
    return localStorage.getItem(CONSTANT.JWT)
  },
  removeItem(key: string) {
    return localStorage.removeItem(key)
  },
  removeToken() {
    return localStorage.removeItem(CONSTANT.JWT)
  }
}

export default LocalStorage
