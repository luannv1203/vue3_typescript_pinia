import { defineStore } from 'pinia';
import { notification } from 'ant-design-vue'

export const useCommonStore = defineStore('common', {
  state: () => ({}),
  actions: {
    showSuccessMess(message: String) {
      notification.success({
        message: message
      })
    },
    showErrorMess(message: String) {
      notification.error({
        message: message
      })
    },
  },
  getters: {},
})
