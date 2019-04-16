<template>
    <div class="list-products-display">
        
        
  <!-- <input  class="search_input" ref="prod_search" v-model="search" v-bind:placeholder="placeholder3" /> -->
    <div class="recipeSaver ">
    
   <ul v-bind:key="value.id" v-for="(value, index) in getRecipeSaver" >

            <li class="recipeSaver" v-bind="value.id" >{{value}} 
                 <img class="btn delete"   @click="delProduct(index)" width="19" src="https://img.icons8.com/color/48/000000/cancel.png"> 
            </li>
      </ul> 
      
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default  {
    name:"recipeSaver",
    data() {
        return {
            // enter if needed
          
        }
    },
    components: {
        
    },
    methods: {
          delProduct: function(index) {	
            // status : not working
        console.log('before delete ' + index)
        //delete this.$store.mutations.delProduct[index]; 
        //this.$store.commit('delrecipeSaver',index);
        this.$store.commit('delRecipeSaver',index)
        console.log('after delete '+index)
                }
    },
    computed: {
        // get a function to draw the data from vuex store
     ...mapGetters(['getRecipeSaver'])
    }
}

</script>
<style>
.recipeSaver {
    width: 165px;
}


</style>
