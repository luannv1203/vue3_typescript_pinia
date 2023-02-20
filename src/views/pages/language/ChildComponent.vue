<template>
  <div class="child">
    <slot>
      This is the fallback content {{message}}
    </slot>
    {{num}}
    <button @click="num++">Click</button>
  </div>
</template>
<script lang="ts">
export default {
  name: "ChildComponent",
  inject: ['message'],
  data() {
    return {
      num: 0
    }
  },
  activated() {
    console.log('Actived');
  },
  deactivated() {
    console.log('Deactived');
  }
}
</script>