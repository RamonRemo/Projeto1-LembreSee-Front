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
    NavBar,Tela1
  },
  data(){
    return{
      item: String, 
      images:[
        "./assets/img1.jpg",
        "./assets/img2.jpg",
        // "./assets/img3.jpg",
        // "./assets/img4.jpg",
        // "./assets/img5.jpg",
        "./assets/img6.jpg",
        "./assets/img7.jpeg",
        "./assets/img8.jpeg",
        "./assets/img9.jpeg",
        "./assets/img10.jpeg",
        "./assets/img11.jpeg",
        "./assets/img12.jpeg",
        "./assets/img13.jpeg",
        "./assets/img14.jpeg",
        "./assets/img15.jpeg",
        "./assets/img16.jpeg",
        "./assets/img17.jpeg",
      ],
      data : this.$store.state.info.data
    }
  },
  methods:{
    changeBackgroundImage() {
      this.item = this.images[Math.floor(Math.random() * this.images.length)]
      document.body.style.backgroundImage= 'url(' + require(`${this.item}`) + ')'
      document.body.style.backgroundSize  =  '100%'
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
  min-height: 750px;
  text-align: center;
  color: #ffffff;
  width: auto;
  padding-top: 5%;
  /* background-image: url("./assets/img4.jpg"); */
  /* background-size: 100% 100%; */
  /* background-position: 50% 50%; */
  /* margin-top: 60px; */
}


</style>
