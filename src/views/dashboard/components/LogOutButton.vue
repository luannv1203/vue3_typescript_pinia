<template>
  <button class="btn" @click="logout">
    <slot>Logout</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useAuthStore } from '../../../store/auth'
export default defineComponent({
  setup() {
    const storeAuth = useAuthStore()
    const logout = function () {
      storeAuth.logout()
    }
    return  {
      storeAuth,
      logout,
    }
  },
})
</script>
