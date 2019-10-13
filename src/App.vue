<template>
  <div id="app">
    <NavBar msg="LembreSee"/>
    <tela1/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Tela1 from './components/Tela1.vue'


export default {
  name: 'app',
  components: {
    NavBar,Tela1,
  },
  data(){
    return{
      item: String, 
      images:[
        "./assets/img1.jpg",
        "./assets/img2.jpg",
        "./assets/img3.jpg",
        "./assets/img4.jpg",
        "./assets/img5.jpg",
        "./assets/img6.jpg",
      ]
    }
  },
  methods:{
    changeBackgroundImage() {
      this.item = this.images[Math.floor(Math.random() * this.images.length)]
      document.body.style.backgroundImage= 'url(' + require(`${this.item}`) + ')'
      document.body.style.backgroundSize  =  '100% 100%'
    },
  },
  mounted: function(){
    this.changeBackgroundImage()
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: verdo; */
  /* background-image: url("./assets/img4.jpg"); */
  min-height: 1000px;
  width: auto;
  background-size: 100% 100%;
  padding-top: 4%;
  
  /* margin-top: 60px; */
}


</style>
