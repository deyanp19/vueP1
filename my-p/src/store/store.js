import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products:{
      chese:{title:"Chese bg",weight:" 3",units:"kg"},
      honey:{title:"Honey Herbal",weight:" 3",units:"kg"}
    },
    recipes:{
            tarator:{products:["chese","honey"]},  
            musaka:{products:["code","code"]}
          },
    recipeSaver: ["chese","dought","marinara sauce"],
    stateOfButtons: {
      homePageSlogan:true,
      btnAddProduct:false,
      btnCreateRecipe:false
    }
  },
  mutations: {
    addProduct(state,{title,weight,units}) {
      // create function that will change the name of the property after the state.products 
      var trimTitle = title.trim().replace(/ /g,'');
      // create  variables that need to be pushed each itteration
     Vue.set(state.products, trimTitle, {title,weight,units})
    },
    delProduct(state,index) {
      console.log(state.products[index])
      Vue.set(state.products, index, null)
       delete state.products[index]; 
    },
    moveProducts(state,product) {
      // 1.Gets the value of the clicked element's by pointing at the object products value  and pushes it to an array recipeSaver.
      // 2.The goal is to stage this array for push to the list of recipes(recupeMaker.vue)
      state.recipeSaver.push(product.title);
      console.log(product)
    },
    delRecipes(state, index) {
      Vue.set(state.recipes, index, null)
      delete state.recipes[index];
    },
    delRecipeSaver(state,index) {
      state.recipeSaver.splice(index,1);
    },
    // buttonSwitch(state) {
    //   // if you neeed to use the state as a way to change the showing of the third display
    // },
    saveRecipe(state,{recipeTitle,   recipeSaver}) {
    // create function that will change the name of the property after the state.products 
    
     

    // create  variables that need to be pushed each itteration
    var products = state.recipeSaver;
    Vue.set(state.recipes, recipeTitle, { products});
     
    }

  },
  getters: {
      
      getProducts: function(state) {
      var productsDisplay = state.products 
      return productsDisplay;
      },
      getRecipes: function(state) {
        var recipeDisplay = state.recipes
        return recipeDisplay; 
      },
      getRecipeSaver: function(state) {
        var recipeSaver = state.recipeSaver; 
      return recipeSaver;
      }
    }
})


