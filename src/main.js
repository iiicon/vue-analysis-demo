import Vue from 'vue'
import App from './App'

// Vue.component('helloWorld', function (resolve, reject) {
//   // 这个特殊的 require 语法告诉 webpack
//   // 自动将编译后的代码分割成不同的块，
//   // 这些块将通过 Ajax 请求自动下载。
//   require(['./components/HelloWorld.vue'], resolve)
// })

let app = new Vue({
  el: '#app',
  render: h => h(App)
})
