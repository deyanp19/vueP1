<template>
  <div class="list">
    <h1>{{ msg }}</h1>
     <lable >Add Item</lable>
     <input style="text">

     
    <ul>
      <li> yogurt <button class="delete">x</button></li>
      <li> cucumber <button class="delete">x</button></li>
      <li> dill <button class="delete">x</button></li>
      <li> salt <button class="delete">x</button></li>
     
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
   border: 1px solid black;
 }
li {
  list-style-position: inside;
  list-style-type: circle;
  margin: 0 10px;
  text-align: left;
  border: 1px solid black;

}
.delete {
  align: right;
  margin-right: 20px;
}
 
</style>
