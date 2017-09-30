import Vue from 'vue'
import Router from 'vue-router'


import Welcome from '../components/welcome/Welcome.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    }
  ],
  mode: "history"
})
