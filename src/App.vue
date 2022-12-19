<template>
    <the-navbar></the-navbar>
    <router-view></router-view>
</template>

<script>
import TheNavbar from "./components/Shared/TheNavbar.vue";
export default {
    name:'App',
    components:{ TheNavbar, },
}
</script>

<style scoped>

</style>
