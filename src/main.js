import { createApp } from 'vue'
import { makeServer } from "./server";
import App from './App.vue'
import axios from 'axios'
// styles
import './assets/styles/main.scss'

const axiosInstance = axios.create({
  withCredentials: true,
})

// mockup app
makeServer();

const app = createApp(App)

app.config.globalProperties.$axios = { ...axiosInstance }

app.mount('#app')