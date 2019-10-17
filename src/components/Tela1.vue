<template>
  <div>
    <button class="btn btn-light shadow-none" @click="postStuff">+</button>
    <div class="tela1">
      <div id="lop" v-for="item in this.$store.state.info.data" :key="item.id">
        <card :id="item.id" :nome="item.nome" :desc="item.desc"></card>
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
      info: this.$store.state.info.data
    };
  },
  methods: {
    getAll() {
      this.axios
        .get("http://localhost:8080/")
        .then(response => (this.$store.state.info = response));
      // .then(() => console.log(this.$store.state.info.data));
    },
    postStuff() {
      this.axios
        .post("http://localhost:8080/", {
          nome: "",
          desc: ""
        })
        .then(() => this.getAll());
    },
    mountedOne() {
      let x;
      this.axios
        .get("http://localhost:8080/")
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
.tela1 {
  /* border: 1px solid red; */
  min-height: 750px;
  max-width: 100%;

  display: flex;
  flex-wrap: wrap;
}

#lop {
  height: 300px;
}
</style>