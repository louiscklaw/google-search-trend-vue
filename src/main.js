import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './routes'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(Buefy)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

export const bus = new Vue();


new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
