<template>
  <div id="app">
    <NavBar msg="LembreSee"/>
    <button class="btn btn-light" @click="postStuff">+</button>
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
        "./assets/img3.jpg",
        "./assets/img5.jpg",
        "./assets/img6.jpg",
      ],
      data : this.$store.state.info.data
    }
  },
  methods:{
    changeBackgroundImage() {
      this.item = this.images[Math.floor(Math.random() * this.images.length)]
      document.body.style.backgroundImage= 'url(' + require(`${this.item}`) + ')'
      document.body.style.backgroundSize  =  '100% 100%'
    },
    getAll() {
      this.axios
        .get("http://localhost:8080/")
        .then(response => (this.$store.state.info = response))
        .then(() => console.log(this.$store.state.info.data));
    },
     postStuff() {
      this.axios.post("http://localhost:8080/", {
        nome: "Fred",
        desc: "Flintstone"
      }).then(() => this.getAll())
    },
  },
  mounted: function(){
    this.changeBackgroundImage()
    this.getAll();
  },
  watch: {
    data(n, o) {
      if( n != o){
        this.getAll()
        console.log('test')
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  /* background-color: verdo; */
  /* background-image: url("./assets/img4.jpg"); */
  min-height: 1000px;
  width: auto;
  background-size: 100% 100%;
  padding-top: 5%;
  
  /* margin-top: 60px; */
}


</style>
