<template>
     <div class="create">
         create
         <div class="product-input">
            <inputComp />
            <inputComp />
        </div>
         
        <div class="list-products">
            Your recepie
           <oneList />
            
        </div>
    </div>
</template>

<script>
import inputComp from '../components/input.vue'
import oneList from '../components/forList.vue'


export default {
    components: {
        oneList,
        inputComp
    },
    methods: {
        changeRecepie: function(event) {     
       event.preventDefault();
       
        
        if (document.getElementById("input").value === "" ) {
          alert("Name must be filled!")
      } else {
      
        var msg = document.getElementById("input").value;
        this.$store.commit('changeRecepie', msg );
        // this.items.push(msg);
        this.message = '';
         // this.addItem();
        document.getElementById("input").focus();
        }
    },   
    }

  
}

</script>

<style>
.product-input {
    margin: 40px 0px 0px 0px;
    width: 40%;
    clear: both;
    float: left;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
}
.list-products {
    padding-top: 15px;
    width: 40%;
    margin: 40px 0px 0px 0px;
    float: right;
    background-color: rgba(219, 224, 149, 0.376);
    border-radius: 10px;
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

</style>
