<script>
import {RouterLink} from 'vue-router';

export default {
    components:{
        RouterLink
    }    
}
</script>

<template>
    <ul id="menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </ul>
</template>

<style>
ul#menu{
    list-style: none;
    font-size:22px;
}
</style>