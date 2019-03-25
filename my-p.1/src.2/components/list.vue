<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    
     
     <input placeholder="Enter New Product" style="text">
     <button @click="addItem">Add Item</button>

     
    <ul>
      <li> yogurt <button class="delete">x</button></li>
    
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
 ul{
   position: right;
   
 }
li {
  list-style-position: inside;
  list-style-type: circle;
  margin: 0 10px;
  text-align: left;
  background-color: red;
  border-radius: 6px;


}
.delete {
   text-align: right;
  margin-right: 20px;
}
 
</style>
