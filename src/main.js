// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueYoutube from 'vue-youtube'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { Service } from './Service'
import VueMathjax from 'vue-mathjax'

Vue.use(Vuetify)

Vue.use(VueMathjax)

Vue.config.productionTip = false

Vue.use(VueYoutube)

const EventBus = new Vue()
const service = new Service()

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  },
  $service: {
    get: function () {
      return service
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
