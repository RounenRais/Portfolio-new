import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'flag-icon-css/css/flag-icons.min.css';




  



const app = createApp(App);
app.use(router);
app.mount('#app');