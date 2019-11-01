<template>
  <div class="navBar">
    
    <nav class="navbar fixed-top navbar-light"> 
    <a class="navbar-brand text-center"  @click="$store.state.componente = 'Tela1'" href="#">
      <!-- <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> -->
      🍂 {{msg}}
    </a>
    <!-- <button id="botao" class="btn btn-light my-2 shadow-none my-sm-0" type="submit">
      </button> -->
      <a class="adif" href="#" @click="sobrezudo">Sobre</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Lembresee',
  props: {
    msg: String
  },
  methods: {
    sobrezudo() {
      document.body.style.backgroundImage= 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd9kjJFplympSyoaHpEenIQOI8h1DwoMpIcqCSk49H5UIs3gIw")'

      

      
      // document.body.style.backgroundSize  =  '100%'
      // document.body.style.backgroundRepeat = 'no-repeat'
      document.body.style.backgroundSize = 'cover'
      this.$store.state.componente = 'Sobre'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white !important;
  font-size: 60px;
  font-family: 'Roboto Slab', serif !important;
  /* font-family: 'Abel', sans-serif !important; */
  

}

#botao{
  padding: 0px;
  height: 40px;
  width: 80px;
  
}

.adif{
  /* color: black !important; */
  position: relative;
  font-size: 28px;
  left: 30%;

}
.navbar{
  /* border:1.2px solid white; */
  background-color: rgb(26, 192, 26);
  background:transparent;

  display: flex;
  justify-content: center;
  list-style: none;
  /* opacity: 0.5; */
}

</style>
