<template>
<div class="view">
view
   <oneList />
       
</div>
</template>




<script>

import oneList from '../components/forList.vue'

export default {
  name: 'view',
    components: {
        oneList
    }
  
 
}

</script>

<style>

.view {
 max-width: 960px;
}