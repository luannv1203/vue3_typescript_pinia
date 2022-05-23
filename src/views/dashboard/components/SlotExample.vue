<template>
  <div class="sloot-2">
    <slot message="helllo Default nef"></slot>
  </div>
  <div class="sloot-1">
    <slot name="slot-1"></slot>
  </div>
  <div class="sloot-3">
    <slot name="slot-3"></slot>
  </div>
  <div>{{messFromGrand}}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const messFromGrand = inject('message')
    return {
      messFromGrand
    }
  },
})
</script>
