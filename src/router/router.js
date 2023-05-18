import Vue from 'vue';
import Router, { createRouter } from 'vue-router'

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: MainPage
    
}]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})


export default router;