<template>
  <div>Login Page</div>
  <button v-if="!isLoggedIn" @click="register">Register</button>
  <button v-if="!isLoggedIn" @click="login">Login</button>
</template>
<script lang="ts">
import LocalStorage from '../../utils/LocalStorage'
import { computed, defineComponent } from 'vue'
import { useAuthStore } from '../../store/auth'
import jwtDecode from 'jwt-decode'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  setup() {
    const store = useAuthStore()
    const isLoggedIn = computed(() => LocalStorage.getToken())
    return {
      store,
      isLoggedIn
    }
  },
  mounted() {
    if (this.isLoggedIn) this.$router.push({name: 'Home'})
  },
  methods: {
    async login() {
      // let data = new Map<string, any>([
      //   ['username', 'luannv'],
      //   ['password', '12345'],
      // ])
      // await this.store.login(data).then((rs: any) => {
      //   const decodeJwt = jwtDecode(rs.data!.accessToken)
      //   this.$cookies.set('jwt', rs.data?.accessToken, 1656354227, '/', 'localhost')
      // })
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, 'nvluan.1203@gmail.com', 'Luan*1203').then(async data => {
        if (data && data.user) {
          const token = await data.user.getIdToken()
          console.log(token);
          localStorage.setItem('jwt', token)
        }
      })
      this.$router.push({name: 'Home'})
    },
    register() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, 'nvluan.1203@gmail.com', 'Luan*1203').then(rs => {
        console.log(rs)
      })
    }
  }
})
</script>
