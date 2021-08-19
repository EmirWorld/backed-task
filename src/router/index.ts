import Vue from 'vue'
import VueRouter, {RouteConfig} from "vue-router";

Vue.use(VueRouter)

/*
* Basic Vue routes
* */

const routes: Array<RouteConfig> = [
    {
        path: "/",
        alias: "/users",
        name: "users",
        component:()=> import("../components/UsersList.vue"),
    },

    {
        path: "/users/:id",
        name: "user-view",
        component: ()=> import("../components/UserView.vue"),
    },

    {
        path: "/add",
        name: "add",
        component: ()=> import("../components/AddUser.vue"),
    },
    {
        path: "/import",
        name: "json",
        component: ()=> import("../components/ImportJSON.vue"),
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
