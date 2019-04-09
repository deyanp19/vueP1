<template>
    <input  class="search_input" ref="prod_search" v-model="search" v-bind:placeholder="placeholder3">
</template>

<script>
export default {
    name:'search',
    data() {
        return {
            search:""
        }
    },
    props:['placeholder3'],
    methods: {
        // insert if needed
    },
    computed: {
        // insert if needed
    }
}
</script>
<style>
.search_input {
    margin: 20px 0px 10px 40px;

   

}
</style>