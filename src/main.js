import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VOtpInput from "vue3-otp-input";

let app = createApp(App)

app.use(router).component('v-otp-input', VOtpInput).mount('#app')
