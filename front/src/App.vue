<template>
  <div id="app">
    <menu-bar></menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from './components/header/MenuBar.vue'
export default {
  name: 'app',
  components:{
    MenuBar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
