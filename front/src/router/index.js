import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => import(/* webpackPrefetch: true */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackPrefetch: true */ '../views/Login.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackPrefetch: true */ '../views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
