
<template>
  <div id="app">
    <img class="img" src="./assets/IMG_0114.png">
    <router-view></router-view>
    <hello msg="true"></hello>
  </div>
</template>

<script>
import hello from './components/Hello'
export default {
  name: 'app',
  components: {
    hello
  }
}
</script>
<style src="./assets/1.css">

</style>
<style src="./assets/daily.css">

</style>

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
