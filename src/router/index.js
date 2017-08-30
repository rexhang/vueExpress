import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Better from '@/components/Better'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '*',
      name: 'BetterDef',
      component: Better
    },
    {
      path: '/Better',
      name: 'Better',
      component: Better
    }
  ]
})
