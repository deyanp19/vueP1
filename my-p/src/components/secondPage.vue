<template>
<div class='recepie'>
<h4>Lets have fun and answer the question:</h4>
<p>Can you make ... with the listed products below</p>
      
 <ol  >
     <li  v-for="item in dishes"   v-bind:key="item.id">{{item}} {{messageForListItems}}
<!-- <span><li >{{$store.getters.getItems}} </li></span> -->
       
     </li>
     
  </ol>

 
</div>
 

</template>


<script>
// import list from './list'
// import {mapGetters} from 'vuex'

export default {
    name: 'recepie',
    data() {
        return {
            messageForListItems: 'from this products:',
            dishes:['Pizza', 'Stew','Burger']
        }
    },
    // computed: mapGetters(['getItems'])
    // dataArray() {
    //    return  $store.getters.items[0]
    // }
}
</script>


<style>


</style>
