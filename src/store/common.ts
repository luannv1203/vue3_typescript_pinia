import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus';

export const useCommonStore = defineStore('common', {
  state: () => ({}),
  actions: {
    showSuccessMess(message: String) {
      ElNotification({
        message: `${message}`,
        type: 'success',
      })
    },
    showErrorMess(message: String) {
      ElNotification({
        message: `${message}`,
        type: 'error',
      })
    },
  },
  getters: {},
})
