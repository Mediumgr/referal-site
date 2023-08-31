import { createApp } from '/node_modules/vue/dist/vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
