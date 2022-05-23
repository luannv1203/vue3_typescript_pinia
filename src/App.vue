<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

export default defineComponent({
  setup() {
    provide('message', 'Message From App')
  },
  created() {
    if (this.$route?.meta?.title) {
      const title: string = this.$route.meta.title + ' | Nguyen Van Luan'
      console.log(title);
      document.title = title
    }
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
