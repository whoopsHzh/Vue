import Vue from 'vue';
import App from './App.vue';



import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);


//1.创建组件


import Home from './components/Home';

import News from './components/News';

import Content from './components/Content';
//2.配置路由   注意：名字



const routes = [
  { path: '*', redirect:'./home'},
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/content/:aid', component: Content },
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


//4、挂载路由

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//5 <router-view></router-view> 放在 App.vue
