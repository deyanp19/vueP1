<template>
    <div id="recipeSaved">
    <!-- insert the list of titles of 
    recipes -->
    <h2>Saved Recipe</h2>  
    <ul v-bind:key="item.id" v-for="(item, index) in $store.getters.getRecipes">
        
            <li >  {{item}}  
                
                 <img class="btn delete"    width="15" src="https://img.icons8.com/color/48/000000/cancel.png"> 
            </li>
      </ul>
    </div>
</template>

<script>


export default {
    name:"recipeSaved"
}
</script>

<style>
 
 
</style>