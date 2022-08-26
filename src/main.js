import { createApp } from 'vue'
import { makeServer } from "./server";
import App from './App.vue'
import axios from 'axios'
// styles
import './assets/styles/main.scss'

window.axios = axios;

// mockup app
makeServer();

createApp(App).mount('#app')