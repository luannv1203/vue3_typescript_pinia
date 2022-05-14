<template>
  <div>Login Page</div>
  <button v-if="!store.getIsLoggedIn" @click="login">Login</button>
  <div>{{store.getCounter}}</div>
</template>
<script lang="ts">
import LocalStorage from '../../utils/LocalStorage'
import { defineComponent } from 'vue'
import { useAuthStore } from '../../store/auth'

export default defineComponent({
  setup() {
    const store = useAuthStore()
    return {
      store
    }
  },
  computed: {
    isLoggedIn() {
      return LocalStorage.getToken()
    }
  },
  mounted() {
    if (this.isLoggedIn) this.$router.push({name: 'Home'})
  },
  methods: {
    async login() {
      let data = new Map<string, any>([
        ['email', 'ahihihi@gmail.com'],
        ['password', '123456'],
      ])
      await this.store.login(data)
      this.$router.push({name: 'Home'})
    }
  }
})
</script>
