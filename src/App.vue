<template>
  <div id="app">
    <NavBar msg="LembreSee"/>
    <!-- <span>
        <button @click="$store.state.componente = 'Tela1'">Listar Nomes</button>
        <button @click="$store.state.componente = 'Sobre'">Cadastrar Nome</button>
    </span> -->

    <component :is="componente">
      <span slot="conteudo">
        Conteúdo do Componente
        <strong>{{ componente }}</strong>
      </span>
    </component>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Tela1 from './components/Tela1.vue'
import Sobre from './components/Sobre.vue'

export default {
  name: 'app',
  components: {
    NavBar,Tela1,Sobre
  },
  data(){
    return{
      item: String,
      // componente: this.$store.state.componente,
      //isso aki tem uso?
      data : this.$store.state.info.data,
    }
  },
  computed: {
    componente: function () {
      return this.$store.state.componente
    },
}
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
  padding-top: 9.7%;
  /* background-image: url("./assets/img4.jpg"); */
  /* background-size: 100% 100%; */
  /* background-position: 50% 50%; */
  /* margin-top: 60px; */
}


</style>
