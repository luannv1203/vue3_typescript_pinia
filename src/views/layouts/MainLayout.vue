<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderComponent/>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <SideBar/>
        </el-aside>
        <el-container>
          <div class="header-bottom">
            <h1>{{$route.meta.title}}</h1>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="(route, index) in $route.matched" :key="index" :to="{ name: route.name }">{{route.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>  

<script lang="ts">
  import { defineComponent } from 'vue'
  import SideBar from '../components/SideBar.vue'
  import HeaderComponent from '../components/Header.vue'
  export default defineComponent({
    setup() {
      let num = 0
      return {
        num,
      }
    },
    provide() {
      return {
        message: 'Nguyen Van Luan'
      }
    },
    created() {
      this.num = 10
    },
    mounted() {
      this.$emitter.on('toggle', (e: any) => {
        console.log(e)
      })
    },
    components: { SideBar, HeaderComponent },
  })
</script>
