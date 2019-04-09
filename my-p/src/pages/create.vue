<template>
     <div class="create">
         <div class="product">
             <div class="addProduct">
                <placement placeholder1="Enter Product" placeholder2="Quantity" />
             </div>
        </div>
        <div class="list-products">
           Entered Products and Quantities  
                <search placeholder="Search"/>
                <oneList />
        </div>
        <div class="createRecipe" >
            <recipeMaker />
             
        </div>
        <div id="titlesOfRecipes">
             <recipeSaved />
         </div>
         
    </div>
</template>

<script>
import placement from '../components/placement.vue'
import oneList from '../components/forList.vue'
import recipeMaker from '../components/recipeMaker.vue'
import search from '../components/search.vue'
//import recipeSaved from '../components/recipeSaved.vue'
 

export default {
    components: {
        placement,
        oneList,
        recipeMaker,
        search,
        //recipeSaved
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
    position:relative;
    float: left;
    padding-top: 15px;
    width: 41%;
    margin: 50px 0px 0px 0px;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
}
.createRecipe {
    float:left;
    padding-top: 15px;
    margin: 50px 0px 0px 20px;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
    width: 25%;
    overflow-y: auto;
    height: 17.5em;
    line-height: 1em;
}
 
.forLoopRecipes {
    height: 80%;
}
 .addProduct{
    margin: 40px 0px 50px 0px;
    padding: 30px;
    width: 100%;
     
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
}
li {
    font-size: 14px;
    font-weight: 700;
    list-style-position: inside;
    list-style-type: circle;
    margin: -10px 2px;
    text-align: left;
    background-color: #A9DFBF;
    border-radius: 16px;
    padding: 5px;
    color: rgb(10, 7, 7);
    box-shadow: 5px 5px 3px grey; 
    border-radius: 6px;
}

</style>
