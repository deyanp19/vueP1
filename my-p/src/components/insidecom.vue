<template>
<div id="storedIt">
<!-- <li >{{$store.getters.getItems}} </li> -->

rambo
 <p> You choose {{$store.getters.flavor}}</p>  
</div>
</template>

<script>
//import {mapGetters} from 'vuex'

export default {
    name: 'storedIt',
    data() {
        return {
            message:"checking"
        }

    },
   // computed: mapGetters(['getItems'])
    
    // {
    //     storageItem() {
    //         return  $store.getters.flavor
    //     }
    // },
}


</script>