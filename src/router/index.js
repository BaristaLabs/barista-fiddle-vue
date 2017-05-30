import Vue from 'vue'
import Router from 'vue-router'
import Fiddles from '@/components/Fiddles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fiddles',
      component: Fiddles
    }
  ]
})
