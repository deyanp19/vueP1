<template>
<div class="forList">
 
       <!-- Input element with for loop. Only insert store values to present the display on the web -->
   <ul v-bind:key="item.id" v-for="(item, index) in $store.getters.getItems">

            <li>{{item.product}}   weight:  {{item.weight}} {{item.units}}<button  class="btn"   @click="delItem(index)"><img width="10" src="https://img.icons8.com/color/48/000000/cancel.png"> </button> </li>

      </ul>  
    
     
</div>
</template>


<script>

export default {
      methods: {
      delItem: function(index) {		 
      this.$store.getters.getItems.splice(index, 1);
    }
    
}
}

</script>
<style>
 
</style>