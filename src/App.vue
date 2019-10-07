<template>
  <div id="app">
    <HelloWorld msg="LembreSee"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
  background-color: green;
  background-image: url("./assets/btop.jpg");
  background-size: 100% 100%;
  
  /* margin-top: 60px; */
}

.navbar-brand {
    /* background:transparent; */
}

.bg-light {
    background-color: transparent;
}


</style>
