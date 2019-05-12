<template>
<div class='Recipe'>
<h4>Lets have fun and answer the question:</h4>
 
<p>Can you make ... with the listed products below</p>
   <!-- two v-for loops -possible -->
 <ol  >
     <li  v-for="item in dishes"   v-bind:key="item.id">{{item}} {{messageForListItems}}
        <ul v-for="item in $store.getters.flavor"><li> {{item}}</li></ul>  
     </li>    
  </ol>
</div>
</template>

<script>
 
export default {
    name: 'Recipe',
    data() {
        return {
            messageForListItems: 'from this products:',
            dishes:['Pizza', 'Stew','Burger']
        }
    },
}
</script>

<style>

</style>
