import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutaions from './mutaions'
import getters from './getters'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  state,
  getters,
  mutaions,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
export default store
