import { createApp } from 'vue'
import { makeServer } from "./server";
import App from './App.vue'
// styles
import './assets/main.scss'

// mockup app
makeServer();

createApp(App).mount('#app')
