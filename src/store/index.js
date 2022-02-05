import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hello: 'main'
  },
  mutations: {
    CHANGE_HELLO (state) {
      state.hello = 'main be changed'
    }
  },
  actions: {},
  modules: {}
})
