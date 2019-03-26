<template>
  <div class="list">
   
      <input type="text"
      v-model="message" id="input" placeholder="Enter New Product" style="text" />
        <button id="btn" @click="addItem">Add Item</button>

      <div v-for="item in items">
          <span >
            <span>{{ item.doTask }} </span>
          
          </span>
      <button @click="delItem($index)">delete</button>
      </div>  
      </div>
</template>

<script>
export default {
  
    name: 'list',
 
  	data() {
      return{
		message: '',
		items: [{
			doTask: ""
		}]
    }
	},
	methods: {
		addItem: function (value) {
			this.items.push({
				doTask: this.message
			});
			this.message = '';
			document.getElementById("input").focus();
		},
		delItem: function (index) {
			var button = this.items[index]; 
			this.items.splice(index, 1); 
			document.getElementById("input").focus();
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
.delete {
  border-radius: 50%;
  text-align: right;
  margin-right: 20px;
  box-shadow: 0px 0px 7px grey;
}

#input, #btn {
  border-radius: 16px;
}
</style>
