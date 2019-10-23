import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import bootstrap from 'bootstrap'
import './assets/app.scss'
import store from './store/store'


Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  axios,store,bootstrap,
  render: h => h(App),
  data () {
    return {
      info: null
    }
  },
})


