<template>
<div class="forLoopRecipes">
   <ul v-bind:key="item.id" v-for="(item, index) in $store.getters.getRecipes">
        
            <li >  {{item.products}}  
                
                 <img class="btn delete"   @click="delItem(index)" width="15" src="https://img.icons8.com/color/48/000000/cancel.png"> 
            </li>
      </ul>
</div>
</template>

<script>
export default {
      name: 'forLoopRecipes',
      components: {
      },
      methods: {
        delItem: function(index) {		 
        this.$store.getters.getRecipes.splice(index, 1);
                }
        }
}

</script>
<style>
 
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