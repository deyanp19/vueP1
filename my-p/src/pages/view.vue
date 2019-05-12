<template>
<div class="rview">
 <p>ksdl {{ productName}}</p>
 <forList />
       
</div>
</template>




<script>

import forList from '../components/forList.vue'

export default {
  name: 'rview',
    components: {
      forList
    }
}

</script>

<style>
.rview {
  margin: auto;
}
 </style>