import {createWebHistory,createRouter} from "vue-router";

import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Portfolio from '../pages/Portfolio.vue';
import Statistic from '../pages/Statistic.vue';
import Trade from '../pages/Trade.vue';

const routes = [
    { path: "/", redirect: "/home" },
    {
        path: '/home',
        name:'home',
        component: Home
    },
    {
        path: '/login',
        name:'login',
        component: Login
    },
    {
        path: '/portfolio',
        name:'portfolio',
        component: Portfolio
    },
    {
        path: '/trade',
        name:'trade',
        component: Trade
    },
    {
        path: '/statistic',
        name:'statistic',
        component: Statistic
    },
]

export const router = createRouter({
    history:createWebHistory(),
    routes:routes
});
