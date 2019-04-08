<template>
<div class="forList">
   <ul v-bind:key="item.id" v-for="(item, index) in $store.getters.getItems">

            <li>{{item.product}}   weight:  {{item.weight}} {{item.units}}<button  class="btn"   @click="delItem(index)"><img width="15" src="https://img.icons8.com/color/48/000000/cancel.png"> </button> </li>
      </ul>
</div>
</template>

<script>
export default {
      name: 'oneList',
      components: {
            
      },
      methods: {
      delItem: function(index) {		 
      this.$store.getters.getItems.splice(index, 1);
            }
      }
}

</script>
<style>
.forList{
    overflow-y: auto;
    height: 13em;
    width: 23em;
    line-height: 1em;
}

.frame::-webkit-scrollbar {
    -webkit-appearance: none;
}

.frame::-webkit-scrollbar:vertical {
    width: 11px;
}

.frame::-webkit-scrollbar:horizontal {
    height: 11px;
}

.frame::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 5px solid white; /* should match background, can't be transparent */
    background-color: rgba(0, 0, 0, .5);
}

</style>