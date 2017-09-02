// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import isJquery from 'jquery'
window.$ = isJquery
window.jQuery = isJquery

require('./lib/rem/rem.js')
require('./lib/sys/sys.js')

import './lib/rex-ui/rex-ui.css'
import './lib/bootstrap-Grid-System/bootstrap-gridSystem.min.css'

import Vue from 'vue'
import App from './App'
import router from './router'

import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue)

import axios from 'axios'
Vue.prototype.$axios = axios

import BScroll from 'better-scroll'
Vue.prototype.$BScroll = BScroll

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

