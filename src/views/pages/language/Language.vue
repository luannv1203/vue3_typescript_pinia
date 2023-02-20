<template>
  <div>
    <p :style="{color: 'white'}">{{count}}</p>
    <button @click="click">Click me</button>
    <div class="parent">
      <h2>This is parent component</h2>
      <keep-alive>
        <ChildComponent>
          <h3>Click {{count}} times</h3>
        </ChildComponent>
      </keep-alive>
    </div>
  </div>
</template>
<script lang="ts">
import ChildComponent from './ChildComponent.vue'
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      count: 1
    }
  },
  beforeCreate() {
    console.log('Before create');
  },
  created() {
    console.log('Created');
  },
  beforeUpdate() {
    console.log('Before Update');
  },
  updated() {
    console.log('Updated')
  },
  beforeMount() {
    console.log('Before mount');
  },
  mounted() {
    console.log('Before mounted');
  },
  beforeUnmount() {
    console.log('Before Unmount');
  },
  unmounted() {
    console.log('Unmounted');
  },
  computed: {
    
  },
  methods: {
    click() {
      this.count++;
    }
  }
}
</script>