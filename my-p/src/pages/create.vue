<template>
  <div class="create">
    <div class="createRecipe">
      <h4 class="title">Recipe Maker</h4>
      <div class="createRecipe-display">
        <recipeMaker/>
      </div>
      <button class="btnAdd">Add</button>
    </div>
    <div class="list-products">
      <h4 class="title">Entered Products and Quantities</h4>
      <div class="list-products-display">
        <forList/>
      </div>
      <button class="btnAdd">Add</button>
    </div>

    <div class="product">
      <div class="addProduct">
        <br>
        <h4 class="title">Add Products</h4>
        <placement placeholder1="Enter Product" placeholder2="Quantity"/>
      </div>
    </div>
  </div>
</template>

<script>
import forList from "../components/forList.vue";
import recipeMaker from "../components/recipeMaker.vue";
import placement from "../components/placement.vue";
//import search from '../components/search.vue'
//import recipeSaved from '../components/recipeSaved.vue'

export default {
  components: {
    placement,
    forList,
    recipeMaker

    //recipeSaved
  },
  data() {
    return {
      // Enter if needed
    };
  }
};
</script>

<style>
.list-products-display {
  height: 230px;
  overflow-y: auto;
  margin: 50px 25px 0px 25px;
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
