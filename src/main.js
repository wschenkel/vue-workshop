import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'

import { routes } from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VeeValidate)

const router = new VueRouter({
  routes : routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// npm install vue-resource@1.0.3 --save
// npm install vue-router@2.1.1 --save