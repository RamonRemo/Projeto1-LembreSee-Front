<template>
  <div class="navBar2">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active " href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Sobre</a>
    </div>
  </div>
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
  /* color: white !important; */
}
.navbar{
  border:1.2px solid white;
  background-color: grey;
  background:transparent;

  /* opacity: 0.5; */
}

</style>
