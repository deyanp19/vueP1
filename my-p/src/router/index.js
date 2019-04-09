//import Vue from 'vue'
import VueRouter from 'vue-router'
import create from '../pages/create.vue'
import view from '../pages/view.vue'
 


 
  // 3. Create the router instance and pass the `routes` option
  

 
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/create', component: create },
    { path: '/view', component: view }
  ]
})



export default router;