<template>
    <div id="forList" >
<h4 class="title"> Recipe Maker</h4>
<!-- USE AN ARRAY METHOD TO CHOOSE FROM THE LIST ON LEFT AND MOVE IT TO DIFFERENT ARRAY SO YOU CAN DISPLAY IT IN A SECOND ARRAY INSIDE AND OBJECT AND ADD A TITLE TO THE RECIPE  THEN JUST CALL IT . 
    FOR THE FUNCTIONALITY TO EDIT THE RECEPIES YOU HAVE TO LOAD THEM SOMEWHERE AND DELETE OR ADD STUFF AND SAVE THEM AGAIN -->

 <forLoopRecipes />

    </div>
</template>

<script>
import forLoopRecipes from './forRecipes.vue'
export default {
    name:'recipeMaker',
    components: {
        forLoopRecipes
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
    overflow-y: auto;
    height: 13em;
    width: 23em;
    line-height: 1em;
}

</style>
