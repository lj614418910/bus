import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import route from 'components/route/route';
import where from 'components/where/where';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/', redirect: { path: '/route' } },
  { path: '/route', component: route },
  { path: '/where', component: where }
];
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  data: {
   eventHub: new Vue()
  }
}).$mount('#app');
