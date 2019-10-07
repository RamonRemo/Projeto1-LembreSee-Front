<template>
  <div id="app" >
    <NavBar msg="LembreSee"/>
    <div>

      <input type="text"><br>

      
    </div>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
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
  min-height: 1000px;
  width: auto;
  background-size: 100% 100%;
  padding-top: 10%;
  
  /* margin-top: 60px; */
}


</style>
