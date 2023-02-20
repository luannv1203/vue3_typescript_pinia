<template>
  <div class="info">
    <div class="info-icon" :style="{background: color}">
      <font-awesome-icon  :icon="classIcon" />
    </div>
    <div class="info-content">
      <div>{{title}}</div>
      <div>{{value}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DashboardInfo',
  props: {
    title: String,
    classIcon: Array,
    value: String,
    color: String
  },
  setup() {
    
  },
  methods: {
    updateTitle() {
      this.$emit('update:title', 'Nguyen Van Luan')
    }
  }
})
</script>
