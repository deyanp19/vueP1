import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

 
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

 


 

// 3. Create the router


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(app),
}).$mount('#app')