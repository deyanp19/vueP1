<template>
<div class="inputComp">
 
  <form>
       <label for="products">Enter product</label><input type="text">
      <input pattern="[A-Za-z]{5}"  name="flavor" v-model="message" id="input" placeholder="Enter New Product" style="text"  @keyup.enter="changedRecepie" type="submit">
    </form>
 
</div>
</template>


<script>

export default {
    
}

</script>

<style>
label {
margin: 8px;
}

form {
    margin: 25px;
}

input, .btn {
  border-radius: 16px;
  margin-left: 15px;
}
</style>