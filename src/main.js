// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import isJquery from 'jquery'
window.$ = isJquery
window.jQuery = isJquery

import BScroll from 'better-scroll'
window.BScroll = BScroll

import axios from 'axios'
window.axios = axios

import './lib/rex-ui/rex-ui.css'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

