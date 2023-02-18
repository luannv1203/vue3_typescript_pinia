<template>
  <aside class="main-sidebar">
    <a href="#" class="logo">NVL</a>
    <nav class="nav">
      <ul>
        <li v-for="(route, index) in filteredRoutes" :key="index" class="nav-item">
          <template v-if="route.children && route.children.length > 1">
            <div class="nav-item-parent">{{route.meta.title}}</div>
            <ul>
              <li v-for="(child, i) in route.children" :key="i">
                <router-link :to="{name: child.name}">{{child.meta.title}}</router-link>
              </li>
            </ul>
          </template>
          <template v-else>
            <router-link :to="{name: route.name}">{{route.meta.title}}</router-link>
          </template>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
export default {
  setup() {
    
  },
  computed: {
    filteredRoutes() {
      // var result = this.routes.filter(temp => temp.meta.requiresAuth === true && RoleCheckingService.checkRole(this.user, temp))
      // var result = this.$router.options.routes.filter((temp: any) => temp.meta.requiresAuth === true && !temp.hidden);
      var result = this.$router.options.routes.filter((temp: any) => !temp.hidden);
      result.forEach((item: any) => {
        if (item.children?.length > 0) {
          item.children = item.children.filter((temp: any) => !temp.hidden);
        }
      });
      return result;
    },
  },
}
</script>
