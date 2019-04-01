<template>
<div id="storedIt">
<!-- <li >{{$store.getters.getItems}} </li> -->
<p> You choose prop:  {{storageItem}}</p>
rambo
</div>
</template>

<script>


export default {
    name: 'storedIt',
    data() {
        return {
            message:"checking"
        }

    },
    computed: {
        storageItem() {
            return this.$store.state
        }
    },
}


</script>