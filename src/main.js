import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(VCalendar, {}).use(BootstrapVue3).use(router).mount('#app')
