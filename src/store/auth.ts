import { defineStore } from 'pinia'
import LocalStorage from '../utils/LocalStorage'
import AuthService from '../api/AuthService'
import router from '../router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    getCounter: (state) => state.counter,
  },
  actions: {
    async login(data: Map<string, any>) {
      try {
        const res = await AuthService.login(data)
        LocalStorage.setToken(res.data?.access_token)
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      LocalStorage.removeToken()
      router.push({name: 'Login'})
    }
  }
})
