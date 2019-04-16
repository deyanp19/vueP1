<template>
  <div class="create">
   <!-- Below is the   Add button for recipe maker -->
    <div class="createRecipe">
      <h4 class="title">List of Recipes</h4>
      <div class="createRecipe-display">
        <recipeMaker/>
      </div>
       
      <button @click="addRecipe" class="btnAdd">Add</button>
    </div>
    <!-- Below is the buttonf for products -->
    <div class="list-products">
      <h4 class="title">Products </h4>
      <div class="list-products-display">
        <forList/>
      </div>
      
      <button @click="addProd"    class="btnAdd">Add</button>
    </div>

  <!--  <div v-show="instructions"  class="product">
      <div    class="addProduct"> 
            <p>You can click on the Add button in the next section Products to add new type of procusts</p>
            <p>If you need to add a new recipe press the Add button at the seciton List of recipes and click on the products to add  </p>
         </div> -->
      <div  v-show="addRecipeView"   class="addProduct">
        <br>
        <h4  class="title">Add Products</h4>
         
        <placement placeholder1="Enter Product" placeholder2="Quantity"/>
      </div>
<!-- Below is the component with save recipe -->
      <div  v-show="addProdView" class="addRecipeProducts addProduct">
        <br />
         <h4 class="title">Add Products</h4>
           <input  ref="my_input4" placeholder="Title of Recipe" type="text" v-model="titleOfRecipeInput" class="titleOfRecipe"  style="text" />
          <recipeSaver  placeholder4="Title"/>
        <button class="btnAdd" @click="saveRecipe" >Save</button>
      </div>
      <div class="recipeDisplay">
          <br />
         <h4 class="title">Ingredients</h4>
        <recipeDisplay />
      </div>
    </div>
  
</template>

<script>
import forList from "../components/forList.vue";
import recipeMaker from "../components/recipeMaker.vue";
import placement from "../components/placement.vue";
import recipeSaver from "../components/recipeSaver.vue";
import recipeDisplay from "../components/recipeDisplay.vue"

export default {
  components: {
    placement,
    forList,
    recipeMaker,
    recipeSaver,
    recipeDisplay
  },
  data() {
    return {
      // Enter if needed
      titleOfRecipeInput:"",
      addProdView:true,
      addRecipeView:false,
     // instructions:true
    }
  },

  props:{},
  methods: {   
       saveRecipe: function() {    
    //saveRecipe(state,{recipeTitle,recipeSaver})  
         var recipeTitle = this.titleOfRecipeInput;
         
          this.$store.commit('saveRecipe',{recipeTitle});
          this.titleOfRecipeInput="";
          this.$refs.my_input4.focus();  
        return ; 
    },
    greetingView: function() {
        return false;
    },
     addRecipe: function() {
      console.log('add Recipe is pressed')
      console.log(this.addRecipeView)
      this.addRecipeView = !this.addRecipeView
      this.addProdView = !this.addProdView
      //this. instructions=false
      console.log(this.addRecipeView)
      return  this.addRecipeView;
    },
    addProd:function() {
      console.log('add Product is pressed')
      console.log(this.addProdView)
      this.addProdView = !this.addProdView
      this.addRecipeView = !this.addRecipeView
       //this. instructions=false
      console.log(this.addProdView)
      return  this.addProdView;
    }
  }
}
</script>

<style>
 .recipeDisplay {
  box-sizing: border-box;
  float: left;
  padding-top: 15px;
  margin: 0px 0px 0px 0px;
  background-color: rgba(219, 224, 149, 0.376);
  border-radius: 10px;
  width: 100%;
  /*height: 350px; */
  margin-bottom: 70px; 
}

.titleOfRecipe {
  float: left;
  clear: both;
  margin: -35px 0px -4px 70px;
}
.list-products-display {
  
  height: 230px;
  overflow-y: auto;
  margin: 50px 20px 0px 20px;
  background-color: rgb(72, 187, 170);
  border-radius: 10px;
}
.list-products {
  box-sizing: border-box;
  position: relative;
  float: left;
  padding-top: 15px;
  width: 35%;
  height: 350px;
  margin: 50px 25px 0px 25px;
  background-color: rgba(219, 224, 149, 0.376);
  border-radius: 10px;
  margin-bottom: 70px; /* delivers the content to lay above the footer -- important improvement */
}
.createRecipe-display {
  padding: 0px 10px;
  margin: 50px 25px 0px 25px;
  background-color: rgb(72, 187, 170);
  border-radius: 10px;
  height: 230px;
  overflow-y: auto;
  
}
.createRecipe {
  box-sizing: border-box;
  float: left;
  padding-top: 15px;
  margin: 50px 0px 0px 0px;
  background-color: rgba(219, 224, 149, 0.376);
  border-radius: 10px;
  width: 35%;
  height: 350px;
  margin-bottom: 70px; 
}

.addProduct {
  box-sizing: border-box;
  margin: 50px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 25%;
  height: 350px;
  float: left;
  background-color: rgba(219, 224, 149, 0.376);
  border-radius: 10px;
   margin-bottom: 70px; 
}
.inputComp {
  margin: 50px 10px;
}
li {
  font-size: 14px;
  font-weight: 700;
  list-style-position: inside;
  list-style-type: circle;
  margin: -10px 2px;
  text-align: left;
  background-color: rgba(255, 166, 0, 0.897);
  border-radius: 16px;
  padding: 5px;
  color: rgb(10, 7, 7);
  box-shadow: 2px 5px 3px grey;
  border-radius: 6px;
}
</style>
