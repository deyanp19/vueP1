<template>
    
</template>

<script>
export default {
    name:'search',
    
  
   
    methods: {
        // insert if needed
    },
    computed: {
        // insert if needed
         filteredProducts: function() {
                return this.getItems.filter(function(prod) {
                    return prod.product.toLowerCase().indexOf(this.prod_search.toLowerCase())>=0;
                    });
                }
    }
}

</script>
<style>

</style>