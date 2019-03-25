<template>
  <div id="app">
  <h1>Products to prepare dishes</h1>

 <router-link  to="/" class="nav">Products</router-link>
 <router-link to="/recipe" class="nav">Dishes</router-link>
 

 <router-view></router-view>
  
    
  </div>
</template>

<script>

export default {
  name: 'app'
  
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
.nav {
  font-weight: 800;
  margin-left:10px;
  color: green;
}
</style>
