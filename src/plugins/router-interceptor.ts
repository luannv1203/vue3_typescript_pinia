import router from '../router'
import { useAuthStore } from '../store/auth'

const RouterInterceptor = {
  install() {
    const authStore = useAuthStore()
    router.beforeEach(async (to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        const tokenObj = localStorage.getItem('jwt')
        if (!tokenObj) {
          next({
            name: 'Login'
          })
        } else {
          next()
        }
      } else {
        next()
      }
    })
  }
}

export default RouterInterceptor
