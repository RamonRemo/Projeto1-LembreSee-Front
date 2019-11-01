<template>
  <div class="tela1main">
    
    <button id="botao2" class="btn btn-light shadow-none" @click="postStuff">+</button>

    <transition-group class="tela1"
      enter-active-class="animated jackInTheBox"
      leave-active-class="animated flipOutX"
        >
      <div id="lop" v-for="item in this.$store.state.info.data" :key="item.id">
        <card :id="item.id" :nome="item.nome" :desc="item.desc"></card>
      </div>
    </transition-group>
    
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
        // "https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=486&q=80",
        "https://wallpaperaccess.com/full/1155088.png",

      ],
      
    };
  },
  methods: {
    changeBackgroundImage() {
      this.item = this.images2[Math.floor(Math.random() * this.images2.length)]
      // document.body.style.backgroundImage= 'url(' + require(`${this.item}`) + ')'
      document.body.style.backgroundImage= 'url(' + `${this.item}` + ')'
      // document.body.style.backgroundImage= 'url("https://i.pinimg.com/564x/94/a2/5e/94a25e17ae123104e5e074729356e29c.jpg")'

      document.body.style.backgroundSize  =  '100%'
      // document.body.style.backgroundRepeat = 'repeat'
    },
    getAll() {
      this.axios
        // .get(`${this.urlH}`)
        .get(`${this.urlL}`)
        .then(response => (this.$store.state.info = response));
      // .then(() => console.log(this.$store.state.info.data));
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
        });
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
  min-height: 750px;
  max-width: 100%;
  padding-top: 5%; 

  display: flex;
  flex-wrap: wrap;
}

#botao2{
  max-height: 38px;
}

#lop {
  height: 300px;
}
</style>