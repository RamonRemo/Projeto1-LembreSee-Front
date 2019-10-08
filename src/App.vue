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
  },
  data(){
    return{
      images:[
        {img: '"./assets/img1.jpg"'},
        {img: '"./assets/img2.jpg"'},
        {img: '"./assets/img3.jpg"'},
        {img: '"./assets/img4.jpg"'},
        {img: '"./assets/img5.jpg"'},
        {img: '"./assets/img6.jpg"'},
      ]
    }
  },
  methods:{
    changeBackgroundImage() {
      // console.log(this.images)
      // console.log( Math.floor(Math.random() * this.images.length))

      var item = this.images[Math.floor(Math.random() * this.images.length)].img
      console.log(item)
      // document.body.style.backgroundImage = "url(" + item + ")"
      document.body.style.backgroundImage = "url('./assets/img6.jpg')";
      // document.body.style.background= 'red'



      // console.log(document.body.style.backgroundImage = "url(" + this.images[i].img + ")")
    },
  },
  created: function(){
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
  padding-top: 6%;
  
  /* margin-top: 60px; */
}


</style>
