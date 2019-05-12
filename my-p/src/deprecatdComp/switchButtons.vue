  <div class="product">
            <div    class="addProduct" v-if="display">
        <br>
        <h4  class="title addProduct">Add Products</h4>
        <placement placeholder1="Enter Product" placeholder2="Quantity"/>
      </div>
      <div ref="homeScreen" v-else-if="home" class="addProduct">
        <br />
         <h4 class="title">Hello Recipe Guy!!!!</h4>
         <div class="list-products-display"> 
            <p>You can click on the Add button in the next section Products to add new type of procusts</p>
            <p>If you need to add a new recipe press the Add button at the seciton List of recipes and click on the products to add  </p>
         </div>
      </div>


      <div ref="addRecipes" v-else-if="home"  class="addRecipeProducts addProduct">
        <br />
         <h4 class="title">Add Recipes</h4>
      </div>

      

    </div>