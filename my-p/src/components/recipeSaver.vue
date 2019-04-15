<template>
    <div class="list-products-display">
         
       
  <!-- <input  class="search_input" ref="prod_search" v-model="search" v-bind:placeholder="placeholder3" /> -->
    <div class="recipeSaver ">
    
   <ul v-bind:key="value.id" v-for="(value, index) in $store.getters. getRecipeSaver" >

            <li class="recipeSaver" v-bind="value.id" >{{value}} 
                 <img class="btn delete"   @click="delProduct(index)" width="19" src="https://img.icons8.com/color/48/000000/cancel.png"> 
            </li>
      </ul> 
      
    </div>
    </div>
</template>

<script>

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
        this.$store.commit('delProduct',index);
        console.log('after delete '+index)
                },
    }
}

</script>
<style>
.recipeSaver {
    width: 165px;
}


</style>
