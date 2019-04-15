 <template>
<div  class="inputComp">
    <input  ref="my_input1" v-bind:placeholder="placeholder1" type="text" v-model="product"   style="text" />
    <input  class="quantity" ref="my_input2" v-bind:placeholder="placeholder2" type="text" v-model="weight"   style="text" /> 
    <div id="buttonAndDropdown">
        <select  class="dropdown" ref="my_input3" name="units" v-model="units">
          <option>kg</option>
          <option>gr</option>
          <option>l</option>
          <option>ml</option>
        </select>
        <button  class="btnAdd" @click="addProduct">Add Item</button> 
    </div>
</div>
</template>
<script>

export default {
        name:'placement',
        data() {
          return {
            weight:""
            
          }
        },
        //units:["kg","gr","l","ml"],
        props: ['placeholder1','placeholder2'],
        methods: {
          addProduct: function() {    
            if ((this.product && this.weight) === "") {
              alert("Please dont leave it blanck")
            } else {
              var title = this.product
              var weight = this.weight
              var units = this.units
              this.$store.commit('addProduct',{title,weight,units});
              this.product="";
              this.weight="";
              this.units="";
               
              this.$refs.my_input2.focus();  
              this.$refs.my_input3.focus();
              this.$refs.my_input1.focus();   
            return ; 
          }
        }  
    }
    
}

</script>

<style>
.buttonAndDropdown {
  clear:both;
}
 

 .dropdown {
  font-size: 14px;
  border-radius: 16px;
  padding: 2px;
  float: left;
  background-color: hsl(180,35,79);
}
 
.btn {
  margin-top:0px;
  font-size: 14px;
  border-radius: 16px;
  padding: 1px 8px;
  float: right;
}
 .btnAdd {
  font-size: 14px;
  border-radius: 16px;
  width: 110px;
  background-color: orange;
  margin: 8px 0px; 
  border: 0;
   padding: 3px 8px;
 }
 .quantity {
   width: 23%;
   margin: 0px 9px 10px 0px;
   
 }

input{
  font-size: 14px;
  width: 45%;
  border-radius: 16px;
  margin-left: 5px 15px 5px 5px;
  padding: 2px;
  float: left;
  background-color: rgba(221, 243, 240, 0.828);
   
}
 
</style>