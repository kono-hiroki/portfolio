import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import top from '@/components/top'
import profile from '@/components/profile'
import skill from '@/components/skill'
import hobby from '@/components/hobby'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/skill',
      component: skill
    },
    {
      path: '/hobby',
      component: hobby
    }
  ]
})
