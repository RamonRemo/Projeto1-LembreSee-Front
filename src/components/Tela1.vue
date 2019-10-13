<template>
  <div>
    <button class="btn btn-light" @click="postStuff">+</button>
    <div onload="print()" class="tela1">
      <!-- <h1>{{this.$store.state.info}}</h1> -->
      <div v-for="item in this.$store.state.info.data" :key="item.id">
        <card :nome="item.nome" :desc="item.desc"></card>
      </div>
    </div>
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
      param: "",
      info: this.$store.state.info.data
    };
  },
  methods: {
    getAll() {
      this.axios
        .get("http://localhost:8080/")
        .then(response => (this.$store.state.info = response))
        .then(() => console.log(this.$store.state.info.data));
    },
     postStuff(nome,desc) {
      this.axios.post("http://localhost:8080/", {
        nome: "",
        desc: ""
      }).then(() => this.getAll())
    },
  },
  created () {
    console.log('juju');
  },
  mounted () {
    console.log('come abacate bb');
    this.getAll();
  },
};
</script>

<style>
.tela1 {
  /* border: 1px solid red; */
  min-height: 800px;
  max-width: 100%;

  display: flex;
  flex-wrap: wrap;
}
</style>