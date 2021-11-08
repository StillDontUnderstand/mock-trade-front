import { createWebHistory, createRouter } from "vue-router";

import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Portfolio from '../pages/Portfolio.vue';
import Statistic from '../pages/Statistic.vue';
import Trade from '../pages/Trade.vue';
import Layout from '../layout/Layout.vue';


const routes = [
    { path: "/", redirect: "/login" },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/main',
        component: import('../layout/Layout.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: 'portfolio',
                name: 'portfolio',
                component: Portfolio
            },
            {
                path: 'trade',
                name: 'trade',
                component: Trade
            },
            {
                path: 'statistic',
                name: 'statistic',
                component: Statistic
            },
            {
                path: 'profile',
                name: 'profile',
                component: import("../component/profile.vue")
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });
export { router };