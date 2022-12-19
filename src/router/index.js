import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/Public/TheHome.vue";

const store = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home' , component : TheHome },
    ]
})

export default store;
