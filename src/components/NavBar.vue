<template>
  <div class="navBar">
    
    <nav class="navbar fixed-top navbar-light">
    <a class="navbar-brand" href="#">
      <!-- <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> -->
      🍂 {{msg}}
    </a>
    <button class="btn btn-light my-2 my-sm-0" type="submit">Sobre</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Lembresee',
  props: {
    msg: String
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
}
.navbar{
  border:1.2px solid white;
  background-color: rgb(26, 192, 26);
  background:transparent

  /* opacity: 0.5; */
}

</style>
