import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [1, 2],
  },
  getters: {
    getCount({ count }) {
      return count * 2
    },
    getList({ list }) {
      return list
    },
    getListLength(state, getters) {
      return getters.getList.length
    },
  },
  mutations: {
    addCount(state) {
      state.count++
    },
  },
})

export default store
