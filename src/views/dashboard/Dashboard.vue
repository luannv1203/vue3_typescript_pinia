<template>
  <div class="dashboard">
    {{ state.title }}
    <div class="dashboard-info">
      <DashboardInfo
        v-model:title="state.title"
        :value="'10 %'"
        :class-icon="['fas', 'gear']"
        :color="'#17a2b8'"
      />
      <DashboardInfo
        title="Like"
        :value="'41,410'"
        :class-icon="['fas', 'thumbs-up']"
        :color="'#dc3545'"
      />
      <DashboardInfo
        :title="'Sales'"
        :value="'760'"
        :class-icon="['fas', 'cart-shopping']"
        :color="'#28a745'"
      />
      <DashboardInfo
        :title="'New Members'"
        :value="'2,000'"
        :class-icon="['fas', 'gear']"
        :color="'#ffc107'"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
// import { useUserStore } from '../../store/user'
import LogOutButton from './components/LogOutButton.vue'
import SlotExample from './components/SlotExample.vue'
import { useBus } from '../../utils/EventBus'
import DashboardInfo from './components/DashboardInfo.vue'

export default defineComponent({
  components: {
    LogOutButton,
    SlotExample,
    DashboardInfo
  },
  setup() {
    const {bus} = useBus()
    // const storeUser = useUserStore()

    const state = reactive({
      a1: 10,
      a2: 20,
      toggleSide: false,
      title: 'CPU Traffic'
    });
    
    // const fetchData = () => {
    //   return storeUser.fetchListUser()
    // }
    let a3 = computed(() => state.a1 + state.a2, {
      onTrack(e) {
        console.log(`OnTrack ${e.oldValue}`);
      },
      onTrigger(e) {
        console.log(`OnTrigger ${e.oldValue}`);
      }
    })

    const eventBus = () => {
      state.toggleSide = !state.toggleSide
      bus.emit('toggle', state.toggleSide);
    }
    const changea1 = () => {
      state.a1 += 10
    }
    const changea2 = () => {
      state.a2 += 5
    }
    return {
      state,
      a3,
      eventBus,
      changea1,
      changea2
    }
  },
  async created() {
    // this.fetchData()
  },
  updated() {
    console.log('Updated')
  },
})
</script>