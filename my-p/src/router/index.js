//import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../components/list.vue'
import recipe from '../components/secondPage.vue'
import create from '../pages/create.vue'
import view from '../pages/view.vue'
 


 
  // 3. Create the router instance and pass the `routes` option
  

 
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: list },
    { path: '/recipe', component: recipe },
    { path: '/create', component: create },
    { path: '/view', component: view }
    
  ]
})



export default router;