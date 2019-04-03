<template>
<div class="forList">
 
       <!-- Input element with for loop. Only insert store values to present the display on the web -->
 
    <ul v-for="item in $store.getters.recepie">

          <li> {{item}}</li>

    </ul>  
 
</div>
</template>


<script>

export default {
    
}

</script>