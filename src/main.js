import Vue from 'vue'
import App from './App.vue'
import { bar } from './to-be-shaked'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(bar())
