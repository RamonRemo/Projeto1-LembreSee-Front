<template>
  <div>
   <button class="btn btn-light" @click="postStuff">+</button>

    <div class="tela1">
    <card></card>
    <card></card>
    <card></card>
    <card></card>

    </div>
  </div>
   
  

</template>

<script>
import Card from './Card.vue'


export default {
  components: {
    Card,
  },
  data() {
    return {
      param: "",
      info: ""
    };
  },
  methods: {
    postStuff() {
      // this.$http.post("http://localhost:8081/", nome);
    this.axios.post('http://localhost:8080/', {
      nome: 'Fred',
      desc: 'Flintstone'
    })
      this.param = ''
    },
    getAll(){
      this.$http.get(url).then(response => (this.info = response));
    }
  }

}
</script>

<style>

.tela1{
  border: 1px solid white;
  min-height: 800px;
  max-width:  100%;

  display: flex ;
  flex-wrap: wrap;
}
</style>