<template>
  <div>Login Page</div>
  <button v-if="!isLoggedIn" @click="login">Login</button>
  <div>{{store.getCounter}}</div>
</template>
<script lang="ts">
import LocalStorage from '../../utils/LocalStorage'
import { computed, defineComponent } from 'vue'
import { useAuthStore } from '../../store/auth'

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
      let data = new Map<string, any>([
        ['email', 'portal.admin@gmail.com'],
        ['password', 'Portal@123'],
      ])
      await this.store.login(data)
      this.$router.push({name: 'Home'})
    }
  }
})
</script>
