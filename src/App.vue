<script>
import Header from "./components/Header";
import {RouterView} from 'vue-router';
import Sidebar from './components/Sidebar.vue';
export default {
    components:{
    Header,
    Sidebar
}
}
</script>

<template>
    <div>
        <Header />
        <Sidebar />
        <RouterView />
    </div>
</template>