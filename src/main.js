import { createApp } from 'vue'
import './style.css'
import './assets/sass/style.scss'
import App from './App.vue'
import router from './router'

import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import  VueCookies  from 'vue3-cookies';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const vuetify = createVuetify({
    components,
    directives,
  })
const app = createApp(App)
app.use(VueSweetalert2);
app.use(router)
app.use(vuetify)
app.use(VCalendar, {})

// Use the components
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.mount('#app')
