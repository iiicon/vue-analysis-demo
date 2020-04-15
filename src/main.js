import Vue from 'vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    m: 'hello'
  },
  mounted() {
    console.log(this.m)
  }
})
