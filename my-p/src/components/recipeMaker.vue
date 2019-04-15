<template>
    <div id="forList" >

<!-- USE AN ARRAY METHOD TO CHOOSE FROM THE LIST ON LEFT AND MOVE IT TO DIFFERENT ARRAY SO YOU CAN DISPLAY IT IN A SECOND ARRAY INSIDE AND OBJECT AND ADD A TITLE TO THE RECIPE  THEN JUST CALL IT . 
    FOR THE FUNCTIONALITY TO EDIT THE RECEPIES YOU HAVE TO LOAD THEM SOMEWHERE AND DELETE OR ADD STUFF AND SAVE THEM AGAIN -->

   <ul v-bind:key="value.id" v-for="(value, index) in $store.getters.getRecipes">
        
            <li  >  {{index}}  
               
                 <img class="btn delete"   @click="delRecipe(index)" width="19" src="https://img.icons8.com/color/48/000000/cancel.png">
                
            </li>
      </ul>
    </div>
</template>

<script>
 
export default {
    name:'recipeMaker',
    components: {
        
    },
    methods: {
      delRecipe: function(index) {		 
        this.$store.commit('delRecipes', index);
        console.log('After deleting execution in del Recipe '+ index)
                }
            }
    
}

</script>

<style>
.title {
margin: 0px 0px 50px 0px;
}
.saveBtn {
    position: absolute;
    margin:-40px 0px 0px 0px;
    
}
.forList{
   
    width: 20em;
    line-height: 1em;
     
}
.delete {
  
    margin: 1px 0px;
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
