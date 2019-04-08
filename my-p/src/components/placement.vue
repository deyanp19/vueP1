<template>
<div class="inputComp">
 
    <input  ref="my_input1" v-bind:placeholder="placeholder1" type="text" v-model="product"   style="text" />
   
    <input  class="quantity" ref="my_input2" v-bind:placeholder="placeholder2" type="text" v-model="weight"   style="text" /> 
    <select  class="dropdown" ref="my_input3" name="units" v-model="units">
      <option>kg</option>
      <option>gr</option>
      <option>l</option>
      <option>ml</option>
    </select>
      
     
  <button  class="btn" @click="changeItem">Add Item</button> 
  
   
</div>
</template>


<script>
  // //
export default {
        name:'placement',
        data() {
          return {
            weight:"",
            procuct:"",
            units: this.value
          }
        },
        //units:["kg","gr","l","ml"],
        props: ['placeholder1','placeholder2'],
        methods: {
          changeItem: function() {    
            if ((this.product && this.weight) === "") {
              alert("Please dont leave it blanck")
            } else {
              var product = this.product
              var weight = this.weight
              var units = this.units
              this.$store.commit('changeItem',{product,weight,units});
               
              this.product="";
              this.weight="";
              this.units="";
              this.$refs.my_input1.focus();  
              this.$refs.my_input2.focus();  
              this.$refs.my_input3.focus();  
            return ; 
          }
        }  
    }
    
}

</script>

<style>

 .dropdown {
  font-size: 14px;
  border-radius: 16px;
  padding: 2px;
  float: left;
  background-color: hsl(180,35,79);
}
 
.btn {
  font-size: 10px;
  border-radius: 16px;
  padding: 2px;
  float: right;
}
 .quantity {
   width: 25%;
   margin: 0px 14px 10px 0px;
   
 }

input{
  font-size: 12px;
  width: 45%;
  border-radius: 16px;
  margin-left: 5px 15px 5px 5px;
  padding: 2px;
  float: left;
   
}
li {
  height: 20px;
  font:
}
</style>