<template>
  ahihihihi
  <LogOutButton>
    hihihi
    bhihihi
  </LogOutButton>
  <SlotExample>
    <template #slot-1>
      <div>Slot-1</div>
    </template>
    <template #default="defaultProps">
      {{defaultProps.message}}
      <div>Default</div>
    </template>
    <template #slot-3>
      <div>Slot-3</div>
    </template>
  </SlotExample>
  <ul>
    <li v-for="(user, index) in listUsers" :key="index">{{user.fullName}}</li>
  </ul>
  <button @click="eventBus">Event Bus</button>
</template>
<script lang="ts">
import { computed } from 'vue'
import { useUserStore } from '../../store/user'
import LogOutButton from './components/LogOutButton.vue'
import SlotExample from './components/SlotExample.vue'
export default {
  components: {
    LogOutButton,
    SlotExample
  },
  setup() {
    const storeUser = useUserStore()
    let listUsers = computed(() => storeUser.getListUser)
    const fetchData = () => {
      return storeUser.fetchListUser()
    }
    let toggleSide = false;
    const ahihi = 'Logout Change'
    return {
      listUsers,
      fetchData,
      toggleSide,
      ahihi
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    eventBus() {
      this.toggleSide = !this.toggleSide
      this.$emitter.emit('toggle', this.toggleSide);
    }
  }
}
</script>