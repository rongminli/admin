import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import store from './store'
// import './permission.js'
import axios from './http/api'
  import './styles/index.scss'
require('./mock/mock.js')

import VueFilter from 'vue-filter';

Vue.use(VueFilter); 

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.axios = axios

store.dispatch('permission/generateRoutes','').then((accessedRoutes)=>{
	store.commit('permission/SET_ROUTES',accessedRoutes)
});

new Vue({
	render: h => h(App),
	router,
	store, 
}).$mount('#app')  
