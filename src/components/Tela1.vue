<template>
  <div class="tela1main">
    
    <button id="botao2" class="btn btn-light shadow-none" @click="postStuff">+</button>
<!-- 
    <transition-group v-if="loaded" class="tela1"
      enter-active-class="animated jackInTheBox"
      leave-active-class="animated flipOutX"
        >
      <div id="lop" v-for="item in this.$store.state.info.data" :key="item.id">
        <card :id="item.id" :nome="item.nome" :desc="item.desc"></card>
      </div>
    </transition-group> -->

    <transition >
      <h3 class="tutu text-center animated infinite bounce" >Carregando</h3>
    </transition>  

    
    
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      info: this.$store.state.info.data,
      urlL: 'http://localhost:8080/',
      urlH: 'https://lembreseetestee.herokuapp.com/',
      loaded: false,

      images:[
        "../assets/img11.jpeg",
        // "../assets/img8.jpeg",
        // "../assets/img11.jpeg",
        // "../assets/img12.jpeg",
        // "../assets/img13.jpeg",
        // "../assets/img14.jpeg",
        // "../assets/img17.jpeg",
        // "../assets/img18.jpeg",
        // "../assets/img24.jpeg",
        // "../assets/img27.jpeg",
        // "../assets/img29.jpeg",
      ],
      images2:[
        "https://blog.modernsetups.com/wp-content/uploads/2019/02/orange-grey-iphone-gradient-wallpaper-473x1024.jpg",
        "https://blog.modernsetups.com/wp-content/uploads/2019/02/burnt-orange-black-wallapaper-iphone-473x1024.png",
        "https://wallpaperaccess.com/full/1155088.png",
        "https://blog.modernsetups.com/wp-content/uploads/2019/02/bright-purple-light-pink-gradient-473x1024.png",
        "https://blog.modernsetups.com/wp-content/uploads/2019/02/blue-pink-wallpaper-gradient-473x1024.jpg",
        "https://blog.modernsetups.com/wp-content/uploads/2019/02/dark-gradient-theme.jpg",
        "https://blog.modernsetups.com/wp-content/uploads/2019/02/purple-gradient-wallpaper.png",
        "https://blog.modernsetups.com/wp-content/uploads/2019/02/dark-purple-gradient-1024x576.png",
        "https://wallpapercave.com/wp/VmZHnTO.jpg",
        "https://blog.hdwallsource.com/wp-content/uploads/2014/11/purple-gradient-wallpaper-26053-26738-hd-wallpapers-680x425.jpg",
        "https://blog.hdwallsource.com/wp-content/uploads/2014/11/free-gradient-wallpaper-26032-26717-hd-wallpapers-680x382.jpg",
        "https://blog.hdwallsource.com/wp-content/uploads/2014/11/green-gradient-wallpaper-26051-26736-hd-wallpapers-680x382.jpg",
        "https://blog.hdwallsource.com/wp-content/uploads/2014/11/dark-gradient-wallpaper-26038-26723-hd-wallpapers-680x382.jpg",
        "https://images.wallpaperscraft.com/image/gradient_colorful_background_144460_1920x1080.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd9kjJFplympSyoaHpEenIQOI8h1DwoMpIcqCSk49H5UIs3gIw",

      ],
      
    };
  },
  methods: {
    changeBackgroundImage() {
      this.item = this.images2[Math.floor(Math.random() * this.images2.length)]
      // document.body.style.backgroundImage= 'url(' + require(`${this.item}`) + ')'
      document.body.style.backgroundImage= 'url(' + `${this.item}` + ')'
      // document.body.style.backgroundImage= 'url("https://i.pinimg.com/564x/94/a2/5e/94a25e17ae123104e5e074729356e29c.jpg")'
      console.log(this.item)

      document.body.style.backgroundSize  =  'cover'
      // document.body.style.backgroundRepeat = 'no-repeat'
    },
    getAll() {
      this.axios
        // .get(`${this.urlH}`)
        .get(`${this.urlL}`)
        .then(response => (this.$store.state.info = response))
        // .then(() => (this.loaded = true))
        // .then(() => console.log("cacilds"));
    },
    postStuff() {
      console.log(this.$store.state.componente)
      this.axios
        // .post(`${this.urlH}`, {
        .post(`${this.urlL}`, {
          nome: "",
          desc: ""
        })
        .then(() => this.getAll());
    },
    mountedOne() {
      let x;
      this.axios
        // .get(`${this.urlH}`)
        .get(`${this.urlL}`)
        .then(response => (this.$store.state.info = response))
        .then(() => console.log(this.$store.state.info.data))
        .then(() => (x = this.$store.state.info.data[0]))
        .then(() => {
          if (x == undefined) {
            this.postStuff();
          }
        })
        .then(() => (this.loaded = true))
        .then(() => console.log("cacilds"));
    }
  },
  mounted() {
    this.mountedOne();
    this.changeBackgroundImage()
  },
};
</script>

<style>
.tela1main {
  padding-top: 3.5%; 
}

.tela1 {
  /* border: 1px solid red; */
  min-height: 600px;
  max-width: 100%;
  padding-top: 5%; 

  display: flex;
  flex-wrap: wrap;
}

h3{
  color: white !important;
  font-family: 'Roboto Slab', serif !important;
  font-size: 35px !important;
}

.tutu{
  padding-top: 220px;
  right:30px;
  position: relative;
}

#botao2{
  max-height: 38px;
}

#lop {
  height: 300px;
}
</style>