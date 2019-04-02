<template>
  <div class="list">
    <!-- This is the lable and input from the example -->
   
   
    <!--End of example -->

  <input type="text" name="flavor" v-model="message" id="input" placeholder="Enter New Product" style="text"  @keyup.enter="changed"/>
  <button  class="btn" @click="changed">Add Item</button> 
        <hr />

      <div :key="item.id"  v-for="(item, index) in $store.getters.flavor" class="listOfItems"  >
          <span >
            <!-- <span v-if="item.doTask == 2">{{ item.doTask }} </span> -->
            <span>{{ item }} </span>
          </span>
      <button  class="btn"   @click="delItem(index)">delete</button> 
      <p id="recorded">&#9898 Recorded</p>
       <hr />
      </div>  
      </div>
</template>

<script>
 
// import { mapActions } from 'vuex'
export default {
   name: 'list',
   data() {
      return{
		message: '',
		items: []
    }
	},
	methods: {
    // ...mapActions(['addItems']),
		// addItem: function () {
		// 	this.items.push(this.message);
    //   this.message = '';
       
			// document.getElementById("input").focus();
		// },
    // addItems: function() {
    //   return this.addItem();
    // },
		delItem: function(index) {
			//var button = this.items[index]; 
      // use splice -- remember $remove is out of Vue 2.0 versions  
			this.$store.getters.flavor.splice(index, 1); 
			document.getElementById("input").focus();
    },
    
    changed: function(event) {     
       
        
        if (document.getElementById("input").value == "") {
          alert("Name must be filled!")
      } else {
      
        var msg = document.getElementById("input").value;
        this.$store.commit('change', msg );
        // this.items.push(msg);
        this.message = '';
         // this.addItem();
        document.getElementById("input").focus();
        }
    },   

    validateInput: function() {
      
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
  /* margin: 7px; */
  text-align: left;
  background-color: #A9DFBF;
  border-radius: 16px;
  padding: 5px;
  color: white;
  text-shadow: 1px 1px 6px black  ;
  box-shadow: 5px 5px 3px grey;
  text-decoration: none;
}
.delete {
  border-radius: 50%;
  text-align: right;
  margin-right: 20px;
  box-shadow: 0px 0px 7px grey;
}

#input, .btn {
  border-radius: 16px;
  margin-left: 15px;
}
.listOfItems {
  
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
</style>
