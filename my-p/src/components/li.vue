<template>
  <div class="li">
   <custom-li :todos="todos" />
  <ul id="app">
    <li v-for="todo in todos">
      {{ todo }}
       <button @click="$emit('remove', todo.id)">
      X
    </button>
    </li>
  </ul>
 
  </div>
</template>

<script>
 


export default {
  name: 'custom-li',
  props: {
    todos: String
  },
   data() {
     return {
       todos: ['yogurt','cucumber','dill','salt']
     }  
  }
}
</script>



<style scoped>
h3 {
  margin: 40px 0 0;
}
 ul{
   position: right;
   
 }
li {
  font-weight: 700;
  list-style-position: inside;
  list-style-type: circle;
  margin: 7px;
  text-align: left;
  background-color: #A9DFBF;
  border-radius: 16px;
  padding: 5px;
  color: white;
  text-shadow: 1px 1px 6px black  ;
  box-shadow: 5px 5px 3px grey;

}
li:hover {
  background-color:#7DCEA0;
}

button {
  border-radius: 50%;
  text-align: right;
  margin-right: 20px;
  box-shadow: 0px 0px 7px grey;
  position: relative;
}
 
</style>










