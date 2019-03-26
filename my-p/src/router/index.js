//import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../components/list.vue'
import recipe from '../components/secondPage.vue'


 
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.

//   const Bar = { template: '<div>bar</div>' }
//   const Unicode = { template: '<div>unicode</div>' }


//   const router = new VueRouter({
//     routes: [
//       { path: '/', component: Bar },
//       { path: '/jj', component: Unicode }
//     ]
// })


// const n =  new VueRouter({
//     [
   
//    }
//    ]
// });

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: list },
    { path: '/recipe', component: recipe }
  ]
})



export default router;