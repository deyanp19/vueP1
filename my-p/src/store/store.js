import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    
    items:[{product:"Honey",weight:" 3",units:"kg"},
      {product:"Cofe Robust",weight:" 200",units:"kg"},
      {product:"Honey",weight:" 3",units:"kg"},
      {product:"Cofe",weight:" 100",units:"kg"},
      {product:"Honey",weight:" 3",units:"kg"},
      {product:"Cofe",weight:" 100",units:"kg"}],
    savedRecipes:[
      {title:"Walnuts and honey", products:["honey","walnuts"]},{title:"Walnuts and honey", products:["honey","walnuts"]}]
  },
  mutations: {
    change(state, flavor) {
      state.flavor.push(flavor)
       },
    changeItem(state,{product,weight,units}) {
      // create  variables that need to be pushed each itteration
    state.items.push({product,weight,units})
    },
    moveProducts(state,products) {
      state.savedRecipes.push({products})
    }
  },
  getters: {
      flavor: state => state.flavor,
      Recipe: state => state.Recipe,
      getItems: function(state) {
      var productAndWeight = state.items 
      return productAndWeight 
      },
      getRecipes: function(state) {
        var recipeCreateDisplay = state.savedRecipes
        return recipeCreateDisplay; 
      }
    }
   
  
      // create getter for Recipe title only

})

