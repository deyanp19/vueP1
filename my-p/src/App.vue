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
  border-radius: 6px;
}
.delete {
  border-radius: 50%;
  text-align: right;
  margin-right: 20px;
  box-shadow: 0px 0px 7px grey;
}

#input, #btn {
  border-radius: 16px;
  margin-top: 15px;
}
 
.nav {
  font-weight: 800;
  margin-left:10px;
  color: green;
  text-decoration: none;
  padding:10px;
  border-radius: 6px;
}
.nav:hover {
  background-color:  #A9DFBB;
  color: white;
}
</style>
