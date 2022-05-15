import { defineStore } from 'pinia';
import UserService from '../api/UserService';

export const useUserStore = defineStore('user',{
  state: () => ({
    listUser: []
  }),
  getters: {
    getListUser: (state) => state.listUser
  },
  actions: {
    async fetchListUser(data?: Map<string, any>) {
      const rs = await UserService.getUsers(data)
      console.log(rs)
      if(rs && rs.status) {
        this.listUser = rs.data
      }
    }
  }
})
