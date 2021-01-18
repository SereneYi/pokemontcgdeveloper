import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMq from 'vue-mq'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter);
const router = new VueRouter({ mode: 'history', routes });

Vue.config.productionTip = false
Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
