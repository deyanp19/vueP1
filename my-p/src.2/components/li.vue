<template>
  <div class="li">
   
  <ul id="app">
    <li v-for="todo in todos">
      {{ todo }}
    </li>
  </ul>
 
  </div>
</template>

<script>

export default {
  name: 'custom-li',
  props: {
    todos: String
  }
}
</script>



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
   text-align: right;
  margin-right: 20px;
}
 
</style>










