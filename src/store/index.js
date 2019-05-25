// Created by CunjunWang on 2019-05-25

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

import createLogger from 'vuex/dist/logger'

// 注册Vuex插件
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  // 严格模式, 线下调试使用
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
