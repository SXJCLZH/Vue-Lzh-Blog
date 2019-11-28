import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
            path: '/Article',
            name: 'article',
            component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
        },
        {
            path: '/Data',
            name: 'data',
            component: () => import(/* webpackChunkName: "data" */ '../views/Data.vue')
        },
        {
            path: '/Download',
            name: 'download',
            component: () => import(/* webpackChunkName: "download" */ '../views/Download.vue')
        },
        {
            path: '/Help',
            name: 'help',
            component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
        },
        {
            path: '/Video',
            name: 'video',
            component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue')
        },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
