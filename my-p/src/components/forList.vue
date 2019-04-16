<template>
<div class="forList">
  <!-- <input  class="search_input" ref="prod_search" v-model="search" v-bind:placeholder="placeholder3" /> -->
<div>
    <!-- {{listProduct}} -->
   <ul    v-bind="value.id" 
            v-for="(value, index) in listProduct" 
            @click="moveProduct(value)"  
            :key="value.id" >
        <li 
            
        >
            {{value.title}} {{value.weight}} {{value.units}}
                <img 
                class="btn delete" 
                @click.stop="delProduct(index )"
                width="19"
                src="https://img.icons8.com/color/48/000000/cancel.png"
            /> 
        </li>
      </ul> 
       
</div>  
</div>
</template>

<script>


export default {
    name: 'forList',
    data() {
    return {
                
        }
        },
            props:['placeholder3'],
        methods: {
        delProduct: function( index) {	
            // event.stopPropagation();
        console.log('after delete '+event)
            // status : not working
        console.log('before delete ' + index)
        //delete this.$store.mutations.delProduct[index]; 
        this.$store.commit('delProduct',index);
       
        
        
                },
        moveProduct: function(value) {
            
        this.$store.commit('moveProducts',value)
        
        console.log(product);
         
        
            },
        // create function that returns only the name of the property name from the  object and place it in the brackets
        
        },
        computed: { 
             listProduct() {
                 return this.$store.getters.getProducts
                 }
        }
    }

</script>
<style>
.search_input {
    margin: 20px 0px 10px 40px;
}
 
.delete {
    margin: 2px 0px;
}
.frame::-webkit-scrollbar {
    -webkit-appearance: none;
}

.frame::-webkit-scrollbar:vertical {
    width: 11px;
}

.frame::-webkit-scrollbar:horizontal {
    height: 11px;
}

.frame::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 5px solid white; /* should match background, can't be transparent */
    background-color: rgba(0, 0, 0, .5);
}

</style>