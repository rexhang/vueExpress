import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Better from '@/components/Better'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Indexshow',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      name: 'IndexDef',
      component: Index
    },
    {
      path: '/Better',
      name: 'Better',
      component: Better
    }
  ]
})
