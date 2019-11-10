import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Buefy from 'buefy'


import Routes from './routes'

import 'buefy/dist/buefy.css'



Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VueMeta)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

export const bus = new Vue();


new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
