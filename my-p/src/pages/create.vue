<template>
     <div class="create">
         <div class="product">
            <placement placeholder1="Enter Product" placeholder2="Quantity" />
            
        </div>
        <div class="list-products">
           Entered Products and Quantities
           <oneList />
        </div>
    </div>
</template>

<script>
import placement from '../components/placement.vue'
import oneList from '../components/forList.vue'

export default {
    components: {
        oneList,
        placement
    },
     
    data() {
        return {
            // Enter if needed
            }
        }
    }
</script>

<style>
.product{
    margin: 40px 0px 0px 0px;
    width: 50%;
    float: left;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
}
.list-products {
    
    padding-top: 15px;
    width: 40%;
    margin: 40px 0px 0px 0px;
    float: right;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
}

li {
  font-size: 10px;
  font-weight: 700;
  list-style-position: inside;
  list-style-type: circle;
  margin: 7px;
  text-align: left;
  background-color: #A9DFBF;
  border-radius: 16px;
  padding: 5px;
  color: white;
  text-shadow: 1px 1px 6px black  ;
  box-shadow: 5px 5px 3px grey; 
  border-radius: 6px;
}

</style>
