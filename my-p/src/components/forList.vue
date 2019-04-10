<template>
<div class="forList">
  <!-- <input  class="search_input" ref="prod_search" v-model="search" v-bind:placeholder="placeholder3" /> -->
<div>
   <ul v-bind:key="item.id" v-for="(item, index) in $store.getters.getItems ">

            <li  @click="moveItem(item)">{{item.product}}   units:  {{item.weight}} {{item.units}}
                 <img class="btn delete"   @click="delItem(index)" width="19" src="https://img.icons8.com/color/48/000000/cancel.png"> 
                 
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
        delItem: function(index) {		 
        this.$store.getters.getItems.splice(index, 1);
                },
        moveItem: function(products) {
            // filter the incoming object only for the product key:value part using var=transit
       
        var transit = products.product;
        this.$store.commit('moveProducts',transit)
     
        //console.log();
            }
        },
        computed: { 
         
        //    filteredProducts: function() {
        //        var productsInStorage=$store.getters.getItems;
        //        return this.productsInStorage.filter((item) => {
        //            return productsInStorage.product.match(this.search);

        //        })
        //         }
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