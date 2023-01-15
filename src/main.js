import { createApp } from 'vue'
import './styles/styles.scss'
import App from './App.vue'
import vuetify from './plugins/vuetify/index.js';

createApp(App)
  .use(vuetify)
  .mount('#app')