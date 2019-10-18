// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/filters'
import qs from 'qs'
import 'lib-flexible'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/index.css'
import './assets/css/normalize.css'

Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false
fastclick.attach(document.body)// body内所有click 300毫秒延迟都将去掉
Vue.prototype.$http = axios
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
