<template>
  <div id="app">
    <div id="wrapper">
      <nav class="navigation">
 <router-link to="/create" class="nav">Enter Products</router-link>
 <router-link to="/view" class="nav">View Products</router-link>
      </nav>
  <h2>Prepare Recipe </h2>
 <router-view></router-view>
    </div>
    <footer>
      <p><em> The page is created in 2019 &copy;</em></p>
     </footer>
  </div>
</template>

<script>

// import storedItems from './components/insidecom.vue'

export default {
  name: 'App'
}
</script>

<style>

#wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   
  width: 1080px;
  margin: auto;
 
}
html, body {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
  background-color:rgb(72,187,170);
}
.navigation {
  background-color: rgb(255,165,0);
  height: 50px;
   
}
footer {
      
      clear: both;
      background-color:rgb(72,187,170);
      position:fixed;
      bottom: 0px;
      width: 100%;
      text-align: center;
      height: 60px;
      
   
      
  }
  footer>p {
      color: rgb(245, 240, 240);
      font-weight: normal;
      margin-top: 15px;
      background-color: #66666662;
      font-size: 14px;
  }
h3 {
  margin: 40px 0 0;
}
 
.nav {
  margin: 0px 0px;
  font-weight: 800;
  color: green;
  text-decoration: none;
  padding:0px 10px 10px 10px;
  border-radius: 6px;
}
.nav:hover {
  background-color:rgb(72,187,170);
  color: rgb(20, 24, 16);
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
