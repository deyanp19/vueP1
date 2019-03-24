<template>
  <div class="list">
    <h1>Products to prepare tarator</h1>
    <input type="text"
    class="input"
    :value="value"
    v-on="listeners" id="input" placeholder="Enter New Product" style="text">
     <button id="btn" @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    value: {
      type: String,
      default: '',
    }
   },
   components: {
    list
  
   
   },
  
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
