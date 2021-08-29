import Vue from 'vue';
import VueRouter from "vue-router";
import MSite from "../pages/MSite/MSite";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/MSite',
            component: MSite,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/Search',
            component: Search,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/Order',
            component: Order,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/Profile',
            component: Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/Login',
            component: Login,
        },
        {
            path:'/',
            redirect: '/MSite'
        }
    ]
})