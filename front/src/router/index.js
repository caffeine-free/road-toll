import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: () => import(/* webpackPrefetch: true */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackPrefetch: true */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackPrefetch: true */ '../views/Register.vue'),
  },
  {
    path: '/recover',
    name: 'recover',
    component: () => import(/* webpackPrefetch: true */ '../views/Recover.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackPrefetch: true */ '../views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
