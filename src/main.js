import { createApp } from 'vue'
import { makeServer } from "./server";
import App from './App.vue'
import axios from 'axios'
import CapitalizeFirstDirective from './directives/CapitalizeFirstDirective'
// styles
import './assets/styles/main.scss'

const axiosInstance = axios.create({
  withCredentials: true,
})

// mockup app
makeServer();

const app = createApp(App)

// add axios as a global property to access from whole components in our vue-app
app.config.globalProperties.$axios = { ...axiosInstance }

// add capitlizer directive
app.directive('capFirst', CapitalizeFirstDirective);

app.mount('#app')