<template>
  <div id="app">
    <HelloWorld :flag="flag"></HelloWorld>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: "App",
  data() {
    return {
      flag: true
    }
  },
  methods: {
    toggle() {
      this.flag = !this.flag
    }
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
