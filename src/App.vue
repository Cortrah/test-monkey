<template>
  <div id="app">
    <hello></hello>
    <props-msg></props-msg>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import PropsMsg from './components/PropsMsg.vue'

export default {
  components: {
    Hello, PropsMsg
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
