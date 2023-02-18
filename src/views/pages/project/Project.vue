<template>
  <div>
    <div v-for="(item, index) in listProject" :key="index">{{item.name}}</div>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue'
import { useProjectStore } from '../../../store/project'
export default {
  setup() {
    const storeProject = useProjectStore()
    let listProject = computed(() => storeProject.fetchListProject())
    
    const fetchData = () => {
      return storeProject.fetchListProject()
    }
    return {
      listProject,
      fetchData,
    }
  },
  created() {
    this.fetchData()
  },
}
</script>