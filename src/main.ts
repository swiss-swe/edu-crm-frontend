/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';

//Toast
import Toast from 'vue-toastification';

// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

// Composables
import { createApp } from 'vue';
import '@/assets/styles.css';

const app = createApp(App);

registerPlugins(app);

app.use(Toast).mount('#app');
