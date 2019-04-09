<template>
  <div class="list">
    <!-- This is the lable and input from the example -->
   
   
    <!--End of example -->

  <input pattern="[A-Za-z]{5}" type="text" name="flavor" v-model="message" id="input" placeholder="Enter New Product" style="text"  @keyup.enter="changed"/>

  <button  class="delete" @click="changed">Add Item</button> 
        <hr />

      <div :key="item.id"  v-for="(item, index) in $store.getters.flavor" class="listOfItems"  >
          <span >
            <span>{{ item }} </span>
          </span>
      <button  class="delete"   @click="delItem(index)">delete</button> 
      <p id="recorded">&#9898 Recorded</p>
       <hr />
      </div>  
      </div>
</template>

<script>
 
 
export default {
   name: 'list',
 
	methods: {
    
		delItem: function(index) {
			this.$store.getters.flavor.splice(index, 1); 
			document.getElementById("input").focus();
    },
    changed: function(event) {   
       var msg = document.getElementById("input").value;  
        if (document.getElementById("input").value === "" ) {
          alert("Name must be filled!")
      } else {
        this.$store.commit('change', msg );
        // this.items.push(msg);
        this.message = '';
         // this.addItem();
        document.getElementById("input").focus();
        }
    },    
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
 
 #input {
   folat: right;
 }

  .delete {
  border-radius: 16px;
  margin-left: 5px 15px 5px 5px;
  padding: 2px;
 
}
 
hr { 
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  width: 60%;
} 
#recorded {
 background-color: white;
 color:rgb(231, 48, 48);
 display:inline;
 position: relative;
 right: -100px;

}

 li {
  font-size: 10px;
  font-weight: 700;
  list-style-position: inside;
  list-style-type: circle;
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
