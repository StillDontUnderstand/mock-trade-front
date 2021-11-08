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
        component: import('../layout/Layout1.vue'),
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

// router.beforeEach(async (to, from, next) => {
//     // 根据有没有token判断是否登录
//     // console.info(sessionStorage)
//     if (!sessionStorage.token) {
//         console.info(to)
//         // 1、当用户打开localhost，to.matched === []，匹配的是空路由，此时需要重定向到login
//         // 2、重定向到login之后，to.matched === [name: "login", path: "/login"...] 就是上一步的login页面
//         // to.matched.some(item => item.meta.requiresAuth) 这句的意思是 进入的路由页需要登录认证，取反就是不用登录，直接通过
//         if (to.matched.length > 0 && !to.matched.some(item => item.meta.requiresAuth)) {
//             next(); // 跳过，进入下一个导航钩子。比如：在 /login 路由页刷新页面会走到此逻辑
//         } else {
//             next({ path: '/login' });
//         }
//     } else {
//         console.info(to)
//         next({ path: to.path, query: to.query });
//         // 现在有token了
//         // if (!store.state.permission.permissionList) {
//         //     // 如果没有 permissionList，发请求获取用户权限列表
//         //     store.dispatch('permission/FETCH_PERMISSION').then(() => {
//         //         next({ path: to.path, query: to.query });
//         //     });
//         // } else {
//         //     // 现在有 permissionList 了
//         //     if (to.path !== '/login') {
//         //         if (to.matched.length === 0) {
//         //             // 如果匹配到的路由形如 https://172.24.1.117/?id=xxx&name=xxx，表明是关联跳转时没有权限，跳转到403
//         //             next({ path: '/403' });
//         //         } else if (queryChange) {
//         //             // 跳转之前将路由中查询字符串为空的过滤掉，如 xxx.com?page=&size= 这种
//         //             next({ name: to.name, params: to.params, query: to.query });
//         //         } else if (sessionStorage.isSysLock === 'true' && to.path !== '/sys-lock') {
//         //             next({ path: '/sys-lock' });
//         //         } else {
//         //             next();
//         //         }
//         //     } else {
//         //         // 1.如果用户手动在地址栏输入 /login，重定向到之前的路由页
//         //         // next(from.fullPath);

//         //         // 2.如果用户手动在地址栏输入 /login，清除token并刷新页面，就会去到登录页
//         //         store.commit('goToLogin');
//         //     }
//         // }
//     }
// });

export { router };