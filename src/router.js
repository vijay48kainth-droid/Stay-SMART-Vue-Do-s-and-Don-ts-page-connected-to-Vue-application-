import { createRouter, createWebHistory } from 'vue-router'

/*

createRouter() creates the router
createWebHistory() gives you normal URLs such as /report. This is the recommended history mode for normal web applications.

*/

import Home from './Home.vue'
import Report from './Report.vue'
import DoAndDont from './Do&Dont.vue'

const routes = [

    {
        path: '/',
        component: Home
    },

    {
        path: '/report',
        component: Report
    },
    {
        path: '/do&dont',
        component: DoAndDont
    }

]

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router
