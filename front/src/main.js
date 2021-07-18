import Vue from 'vue';
import VueMask from 'v-mask';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueMask);
Vue.use(HighchartsVue, { highcharts: Highcharts });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
