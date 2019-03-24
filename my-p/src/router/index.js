import Vue from 'vue'
import Router from 'vue-router'
import app from '../App.vue'
import recepie from '../components/secondPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/',
        name: 'home',
        component: 'app'
    },
    {
        path: '/recepie',
        name: 'recepie',
        component: 'recepie'
    }
    ]
})