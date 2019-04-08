<template>
<div class="rview">
 
 <oneList />
       
</div>
</template>




<script>

import oneList from '../components/forList.vue'

export default {
  name: 'rview',
    components: {
      oneList
    }
}

</script>

<style>
.rview {
  margin: auto;
}
 </style>