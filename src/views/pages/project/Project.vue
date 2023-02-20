<template>
  <div>
    <div v-for="(item, index) in listProject" :key="index">{{item.getName()}} - {{item.getLanguages().toString()}}</div>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue'
import { useProjectStore } from '../../../store/project'
export default {
  setup() {
    const storeProject = useProjectStore()
    let listProject = computed(() => storeProject.getListProject)
    
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