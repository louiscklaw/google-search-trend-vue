import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use( VueRouter )
const router = new VueRouter( {
  routes: Routes,
  mode: 'history'
} )

import VueMeta from 'vue-meta'
Vue.use( VueMeta )

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use( Buefy )

import fa_init from './js_inc/fa_init'
fa_init.faInit()

Vue.config.productionTip = false

export const bus = new Vue();

new Vue( {
  render: h => h( App ),
  router: router,
} ).$mount( '#app' )
