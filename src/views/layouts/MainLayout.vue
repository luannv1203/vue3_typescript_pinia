<template>
  <div class="main-content">
    <SideBar/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '../components/SideBar.vue';
export default defineComponent({
    setup() {
        let num = 0;
        return {
            num
        };
    },
    created() {
        console.log(this.$router.options);
        this.num = 10;
    },
    mounted() {
        this.$emitter.on("toggle", (e: any) => {
            console.log(e);
        });
    },
    components: { SideBar }
})
</script>
