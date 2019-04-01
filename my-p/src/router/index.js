//import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../components/list.vue'
import recipe from '../components/secondPage.vue'
import storedItems from '../components/insidecom.vue'
 


 
  // 3. Create the router instance and pass the `routes` option
  

 
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: list },
    { path: '/recipe', component: recipe },
    { path: '/store', component: storedItems}
    
  ]
})



export default router;