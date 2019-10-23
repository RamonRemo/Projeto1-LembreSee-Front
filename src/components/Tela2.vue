<template>
  <div class="container-fluid">
    <button class="btn btn-light shadow-none" @click="postStuff">+</button>
    <div class="tela1">

      <transition-group  name="tutu" class="tela2" mode="out-in" tag="div" 
        enter-active-class="animated jackInTheBox"
        leave-active-class="animated rollOut"
      >
        <div id="lop" v-for="(item,id) in this.$store.state.info.data" :key="item.id">
            <card :id="item.id" :nome="item.nome" :desc="item.desc"></card>
        </div>
      </transition-group>
      
        <button @click="info = !info"> xxxx</button>

        <transition name="fade" appear>
          <h1 show v-if="info">Teste</h1>
        </transition>

        <transition name="slide" appear>
          <h1 class="bounce" show v-if="info">Teste</h1>
        </transition>

        <transition 
        enter-active-class="animated shake"
        leave-active-class="animated bounce"
        >
          <h1 show v-if="info">Teste</h1>
        </transition>

        <button @click="info2 = !info2"> mostrar</button>

        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div v-if="info2" class="caixa"></div>
        </transition>

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
      info: false,
      info2: true,
      hover: false,
      cl: 'animated tada'
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
    },
    beforeEnter(el){
      console.log('beforeEnter')
    },
    enter(el,done){
      console.log('enter')
      done()
    },
    afterEnter(el){
      console.log('afterEnter')

    },
    enterCancelled(){
      console.log('enterCancelled')
    },
    beforeLeave(el){
      console.log('beforeLeave')
    },
    leave(el,done){
      console.log('leave')
      done()
    },
    afterLeave(el){
      console.log('afterLeave')

    },
    leaveCancelled(){
      console.log('leaveCancelled')
    },

  },
  mounted() {
    this.mountedOne();
  }
};
</script>

<style>

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: red;
}

.fade-enter,.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,.fade-leave-active{
  transition: opacity 2s;
}


@keyframes slide-in{
  from {transform: translateY(40px);}
  to { transform: translateY(0);}
}

@keyframes slide-out{
  from {transform: translateY(0);}
  to { transform: translateY(40px);}
}

.slide-enter-active{
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active{
  position: absolute;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,.slide-leave-to{
  opacity: 0;
}

.slide-move, .tutu-move {
  transition: transform 1s;
}

button{
  height: 50px;
}




.tela1 {
  /* border: 1px solid red; */
  min-height: 750px;
  max-width: 100%;

  /* display: flex;
  flex-wrap: wrap; */
}

.tela2{
  display: flex !important;
  flex-wrap: wrap !important;
}

#lop {
  height: 300px;
}
</style>