import { createApp } from 'vue'
import './styles/styles.scss'
import App from './App.vue'
import vuetify from './plugins/vuetify/index.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import library from './plugins/fontawesome/index.js';
import VueCountdown from '@chenfengyuan/vue-countdown';


createApp(App)
  .use(vuetify)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component(VueCountdown.name, VueCountdown)
  .mount('#app')
  

