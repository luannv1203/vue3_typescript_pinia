<template>
  <div class="header">
    <div class="header-left">
      <button class="toggle-menu">
        <font-awesome-icon  :icon="['fas', 'bars']" />
      </button>
      <router-link :to="{name: 'language'}" class="link">Home</router-link>
      <router-link :to="{name: 'language'}" class="link">Contact</router-link>
    </div>
    <div class="header-right">
      <ul>
        <li><font-awesome-icon  :icon="['fas', 'magnifying-glass']" /></li>
        <li><font-awesome-icon  :icon="['far', 'comments']" /></li>
        <li><font-awesome-icon  :icon="['far', 'bell']" /></li>
        <!-- <li><font-awesome-icon  :icon="['far', 'arrows-maximize']" /></li> -->
        <li><font-awesome-icon  :icon="['fas', 'table-cells-large']" /></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  setup() {
  },
  created() {
    console.log(this.$route);
  }
}
</script>
