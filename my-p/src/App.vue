<template>
  <div id="app">
  <h1>Products to prepare dishes</h1>
  

  
        

  
 
 <router-link to="/create" class="nav">Enter Products</router-link>
 <router-link to="/view" class="nav">View Products</router-link>
 <router-view></router-view>
  
    
  </div>
</template>

<script>

// import storedItems from './components/insidecom.vue'

export default {
  name: 'App'
      
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:60px;
   
  
}
h3 {
  margin: 40px 0 0;
}
 ul{
   position: right;
   
 }

.delete {
  border-radius: 50%;
  text-align: right;
  margin-right: 20px;
  box-shadow: 0px 0px 7px grey;
}

 
.nav {
  font-weight: 800;
  /* margin-left:10px; */
  color: green;
  text-decoration: none;
  padding:10px;
  border-radius: 6px;
}
.nav:hover {
  background-color:  #A9DFBB;
  color: white;
}

li {
  font-size: 10px;
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
</style>
