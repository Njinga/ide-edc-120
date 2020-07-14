import Vue from 'vue'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PortalVue from 'portal-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
        console.log('Service Worker registered!');
    });
} else {
    console.log('Service Worker not supported :(');
}