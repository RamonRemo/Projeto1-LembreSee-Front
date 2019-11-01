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
      urlH: 'https://lembreseetestee.herokuapp.com/'
    };
  },
  methods: {
    getAll() {
      this.axios
        // .get(`${this.urlH}`)
        .get(`${this.urlL}`)
        .then(response => (this.$store.state.info = response));
      // .then(() => console.log(this.$store.state.info.data));
    },
    postStuff() {
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
  }
};
</script>

<style>
.tela1main {
  padding-top: 0%; 
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