<template>
<div class="inputComp">
 
    <input  ref="my_input1" v-bind:placeholder="placeholder1" type="text" v-model="product"   style="text" />
    <input  class="quantity" ref="my_input2" v-bind:placeholder="placeholder2" type="text" v-model="weight"   style="text" /> 
    <select class="btn">
      <option value="kg">kg</option>
      <option value="gr">gr</option>
      <option value="l">l</option>
      <option value="ml">ml</option>
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
          procuct:""
          }
        },
        props: ['placeholder1','placeholder2'],
        methods: {
          changeItem: function() {    
            if ((this.product && this.weight) === "") {
              alert("Please dont leave it blanck")
            } else {
              var product = this.product
              var weight = this.weight
              this.$store.commit('changeItem',{product,weight});
               
              this.product="";
              this.weight="";
              this.$refs.my_input1.focus();  
              this.$refs.my_input1.focus();  
             
            return ; 
          }
        }  
    }
    
}

</script>

<style>
 
.btn {
  font-size: 10px;
  border-radius: 16px;
   
  padding: 2px;
  float: right;
}
 .quantity {
   width: 25%;
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