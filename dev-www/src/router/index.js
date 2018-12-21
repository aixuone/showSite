import Vue from 'vue'
import Router from 'vue-router'
import jianli from '@/components/jianli'
import chat from '@/components/socket'
import messageBorad from '@/components/messageBorad'
Vue.use(Router)

export default new Router({
  mode :"history",
  routes: [
    {
      path: '/msg',
      name: 'msg',
      component: messageBorad
    },
    {
      path: '/',
      name: 'jianli',
      component: jianli
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }
  ]
})
