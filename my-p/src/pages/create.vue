<template>
     <div class="create">
         <div class="product">
             <div class="addProduct">
                <placement placeholder1="Enter Product" placeholder2="Quantity" />
             </div>
        </div>
        <div class="list-products">
           Entered Products and Quantities  
                <oneList />
        </div>
        <div class="createRecipe" >
            <recipePicker />
        </div>
    </div>
</template>

<script>
import placement from '../components/placement.vue'
import oneList from '../components/forList.vue'
import recipePicker from '../components/recipePicker.vue'
export default {
    components: {
        placement,
        oneList,
        recipePicker
    },
    data() {
        return {
            // Enter if needed
            }
        }
    }
</script>

<style>

.list-products {
    position:static;
   float: left;
    padding-top: 15px;
    width: 40%;
    margin: 250px 0px 0px 0px;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
}
.createRecipe {
    float:left;
    padding-top: 15px;
    width: 20%;
    margin: 0px 0px 0px 0px;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
}
 .product{
    margin: 40px 0px 50px 0px;
    padding: 20px;
    width: 100%;
    float: left;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
}


li {
  font-size: 14px;
  font-weight: 700;
  list-style-position: inside;
  list-style-type: circle;
  margin: 7px;
  text-align: left;
  background-color: #A9DFBF;
  border-radius: 16px;
  padding: 5px;
  color: rgb(10, 7, 7);
  box-shadow: 5px 5px 3px grey; 
  border-radius: 6px;
}

</style>
