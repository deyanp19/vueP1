<template>
  <div id="app">
 <router-link to="/create" class="nav">Enter Products</router-link>
 <router-link to="/view" class="nav">View Products</router-link>
  <h2>Prepare Recipe </h2>
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
  width: 960px;
  margin: auto;
  bottom: 50px;
}
h3 {
  margin: 40px 0 0;
}
 
.nav {
  margin-top: 50px;
  font-weight: 800;
  color: green;
  text-decoration: none;
  padding:10px;
  border-radius: 6px;
}
.nav:hover {
  background-color:  #A9DFBB;
  color: white;
}
 /* width */
::-webkit-scrollbar {
  width: 5px;
}
 
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(223, 205, 205); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888585; 
}
 
</style>
