<template>
  <h1>inventory app</h1>
  <i-inventoty />
</template>

<script>
import IInventoty from './components/i-inventoty.vue'

export default {
  name: 'App',
  components: {IInventoty}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
