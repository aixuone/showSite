import Vue from 'vue'
import Router from 'vue-router'
import jianli from '@/components/jianli'

Vue.use(Router)

export default new Router({
  mode :"history",
  routes: [
    {
      path: '/',
      name: 'jianli',
      component: jianli
    }
  ]
})
