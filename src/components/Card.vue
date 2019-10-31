<template>
  <div class="card ">
    <div class="input-group">
      <input maxlength="21" class="form-control shadow-none" type="text" v-model="lnome" @keyup="editStuff()" placeholder="Titulo" >
      <div class="input-group-append">
        <button id="btn1" class="btn shadow-none" type="button" @click="deleteStuff()">x</button>
      </div>
    </div>

    <textarea maxlength="144" cols="30" placeholder="Digite algo..." v-model="ldesc" @keyup="editStuff()"  rows="10"></textarea>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ldesc: this.desc,
      lnome: this.nome
    };
  },
  props: {
    id: Number,
    nome: String,
    desc: String
  },
  methods: {
    editStuff() {
      this.axios.put(`http://localhost:8080/${this.id}`, {
        nome: this.lnome,
        desc: this.ldesc
      });
    },
    deleteStuff(){
      this.axios.delete(`http://localhost:8080/${this.id}`).then(() => this.getAll());
    },
    getAll() {
      this.axios
        .get("http://localhost:8080/")
        .then(response => (this.$store.state.info = response));
      // .then(() => console.log(this.$store.state.info.data));
    },
  }
};
</script>

<style>
.card {
  /* line-height: 1;     */
  width: 240px;
  margin: 15px;
  margin-bottom: 0px;
  min-height: 250px;
  max-height: 250px;
  padding-top: 0px;
  position: relative;
  border: 1px solid #e8e8e8;
  border-top: 60px solid #fdfd86;
  border-bottom-right-radius: 60px 5px;
  display: grid;

  background: #ffff88; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(81%, #ffff88),
    color-stop(82%, #ffff88),
    color-stop(82%, #ffff88),
    color-stop(100%, #ffffc6)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* IE10+ */
  background: linear-gradient(
    135deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); 
  /* IE6-9 fallback on horizontal gradient */
}

.card:after {
  content: "";
  position: absolute;
  z-index: -1;
  right: -0px;
  bottom: 20px;
  width: 200px;
  height: 25px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 15px 5px rgba(0, 0, 0, 0.4);
  -moz-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -o-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -ms-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  transform: matrix(-1, -0.1, 0, 1, 0, 0);
}

input,
textarea {
  font-family: 'Amatic SC', cursive !important;
  /* font-family: "Reenie Beanie" !important; */
  /* font-family: 'Abel', sans-serif !important; */

  resize: none !important;
  overflow:hidden !important;
  background-color: transparent;
  font-size: 24px !important;
  text-align: center;
  color: black !important;
  outline:none;
  box-shadow: inset 0 -1px 0 #ddd;

  border: none;
}

.form-control{
  background-color: transparent !important;
  border-right: none !important;
  outline:none !important;
  /* margin: none !important; */
  /* border: none !important; */
}

#btn1{
  border-bottom: 0.3px ridge rgb(201, 202, 183) !important;
  /* margin: none !important; */
  color: rgb(177, 179, 158) !important;
  /* border: none !important; */
}


/* input {
  top: 100%;
  height: 50px;
  border-bottom: 0.3px ridge rgb(201, 202, 183);
} */
</style>