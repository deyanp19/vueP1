import Vue from 'vue'
import Router from 'vue-router'
import list from '../components/list.vue'
import recepie from '../components/secondPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/',
        name: 'home',
        component: list
    },
    {
        path: '/recepie',
        name: 'recepie',
        component: recepie
    }
    ]
})