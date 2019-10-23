<template>
  <div id="app">
    <NavBar msg="LembreSee"/>
    <tela1/>
    <Sobre/>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NavBar2 from './components/NavBar2.vue'
import Tela1 from './components/Tela1.vue'
import Sobre from './components/Sobre.vue'

export default {
  name: 'app',
  components: {
    NavBar,NavBar2,Tela1,Sobre
  },
  data(){
    return{
      item: String, 
      images:[
        "./assets/img1.jpg",
        "./assets/img8.jpeg",
        "./assets/img11.jpeg",
        "./assets/img12.jpeg",
        "./assets/img13.jpeg",
        "./assets/img14.jpeg",
        "./assets/img17.jpeg",
        "./assets/img18.jpeg",
        "./assets/img24.jpeg",
        "./assets/img27.jpeg",
        "./assets/img29.jpeg",

      ],
      //isso aki tem uso?
      data : this.$store.state.info.data,
    }
  },
  methods:{
    changeBackgroundImage() {
      this.item = this.images[Math.floor(Math.random() * this.images.length)]
      document.body.style.backgroundImage= 'url(' + require(`${this.item}`) + ')'
      document.body.style.backgroundSize  =  '100%'
      console.log(this.item)
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
  /* min-height: 70px; */
  text-align: center;
  /* color: #ffffff; */
  width: auto;
  padding-top: 5%;
  /* background-image: url("./assets/img4.jpg"); */
  /* background-size: 100% 100%; */
  /* background-position: 50% 50%; */
  /* margin-top: 60px; */
}


</style>
