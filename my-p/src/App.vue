<template>
  <div id="app">
    <list msg="Products to prepare tarator"/>
    <custom-li :todos="todos" />
  </div>
</template>

<script>
import list from './components/list.vue'
import customLi from './components/li.vue'

export default {
  name: 'app',
  components: {
    list: list,
    customLi:customLi
   },
   data() {
     return {
       todos: ['yogurt','cucumber','dill']
     }  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
li {
  background-color: red;
  border-radius: 6px;
}
</style>
