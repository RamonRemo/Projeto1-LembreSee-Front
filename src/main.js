import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import bootstrap from 'bootstrap'
import './assets/app.scss'



Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  axios,bootstrap,
  render: h => h(App),
  data () {
    return {
      info: null
    }
  },
})


