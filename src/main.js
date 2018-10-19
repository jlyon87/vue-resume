import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'

import EventRegistrationApp from './App.vue'
import router from './routes'
import store from './store/store'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(EventRegistrationApp)
})
