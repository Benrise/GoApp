import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import TicketsPage from "@/pages/TicketsPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import CalendarPage from "../pages/CalendarPage.vue";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage
    },
    {
        path: '/tickets',
        name: 'Tickets',
        component: TicketsPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: CalendarPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})


export default router;