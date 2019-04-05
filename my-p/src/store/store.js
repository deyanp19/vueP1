import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    flavor:["one","two"],
    items:[{product:"Honey",weight:" 3"},{product:"Potato",weight:" 100"}]

  },
  mutations: {
    change(state, flavor) {
      state.flavor.push(flavor)
       },
    changeItem(state,{product,weight}) {
      // create  variables that need to be pushed each itteration
     
    state.items.push({product,weight})
     
      
    }
  },
  getters: {
      flavor: state => state.flavor,
      Recipe: state => state.Recipe,
      getItems: function(state) {
        var productAndWeight = state.items 
        return productAndWeight
      }
      
      // create getter for Recipe title only
  }
})

