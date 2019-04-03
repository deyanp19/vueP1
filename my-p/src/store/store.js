import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    flavor:["one","two"],
    recepie:["one","two"]
  },
  mutations: {
    change(state, flavor) {
      state.flavor.push(flavor)
       },
    changeRecepie(state, recepie) {
    state.recepie.push(recepie)
      }
  },
  getters: {
      flavor: state => state.flavor,
      recepie: state => state.recepie
      // create getter for recepie title only
  }
})

