import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

fastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
