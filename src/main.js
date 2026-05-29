import {createApp} from 'vue';
import {router} from './router';
import App from './app.vue';

/// Import and start the router
createApp(App).use(router).mount('#app');
