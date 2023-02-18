import router from '../router'

const RouterInterceptor = {
  install() {
    router.beforeEach(async (to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        // const tokenObj = VueCookies.VueCookies.get('jwt')
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
