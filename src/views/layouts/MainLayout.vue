<template>
  <div class="page-content">
    ahihihiiihih Layout nef
    <div v-for="(route, index) in filteredRoutes" :key="index">
      <router-link :to="{name: route.name}">
        {{route.meta?.title}}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    let num = 0
    return {
      num
    }
  },
  created() {
    console.log(this.$router.options);
    this.num = 10
  },
  mounted() {
    this.$emitter.on('toggle', (e: any) => {
      console.log(e);
    })
    
  },
  computed: {
    filteredRoutes () {
      // var result = this.routes.filter(temp => temp.meta.requiresAuth === true && RoleCheckingService.checkRole(this.user, temp))
      var result = this.$router.options.routes.filter((temp: any) => temp.meta.requiresAuth === true && !temp.hidden)
      result.forEach((item: any) => {
        if (item.children?.length > 0) {
          item.children = item.children.filter((temp: any) => !temp.hidden)
        }
      })
      return result
    },
  }
})
</script>
