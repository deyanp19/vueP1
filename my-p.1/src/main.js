import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
// import list from '../components/list.vue'
// import recipe from '../components/secondPage.vue'
// import drouter from './router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);




const list = { template: '<div>33</div>' }
const recipe = { template: '<div>2222</div>' }

// 3. Create the router
const router = new VueRouter({
  routes: [
    { path: '/', component: list },
    { path: '/recipe', component: recipe }
  ]
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(app),
}).$mount('#app')