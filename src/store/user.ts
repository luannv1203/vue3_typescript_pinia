import { User } from '@/model/user';
import { defineStore } from 'pinia';
import UserService from '../api/UserService';
interface UserState {
  listUser: User[]
}
export const useUserStore = defineStore('user',{
  state: (): UserState => ({
    listUser: []
  }),
  getters: {
    getListUser: (state): User[] => state.listUser as User[]
  },
  actions: {
    async fetchListUser(data?: Map<string, any>) {
      const rs = await UserService.getUsers(data)
      if(rs && rs.status) {
        this.listUser = rs.data.map((item: any) => new User(item))
      }
    }
  }
})
