<template>
  <div id="app">
    <img src="./assets/logo-fifa-world-cup.png" width="250">
    <GroupResults/>
  </div>
</template>

<script>

import GroupResults from './components/GroupResults'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    GroupResults
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
