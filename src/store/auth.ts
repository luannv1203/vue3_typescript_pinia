import { defineStore } from 'pinia'
import LocalStorage from '../utils/LocalStorage'
import AuthService from '../api/AuthService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    counter: 0,
    isLoggedIn: false
  }),
  getters: {
    getCounter: (state) => state.counter,
    getIsLoggedIn: (state) => state.isLoggedIn
  },
  actions: {
    async login(data: Map<string, any>) {
      try {
        const res = await AuthService.login(data)
        this.isLoggedIn  = true
        LocalStorage.setToken('ahihihihihihii')
        return res;
      } catch (error) {
        console.log(error);
      }
    }
  }
})
