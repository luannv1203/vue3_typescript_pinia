<template>
  ahihihihi
  <ul>
    <li v-for="(user, index) in listUsers" :key="index">{{user.fullName}}</li>
  </ul>
</template>
<script lang="ts">
import { computed } from 'vue'
import { useUserStore } from '../../store/user'
export default {
  setup() {
    const store = useUserStore()
    let listUsers = computed(() => store.getListUser)
    const fetchUsers = function () {
      store.fetchListUser()
    }
    return {
      store,
      listUsers,
      fetchUsers
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>