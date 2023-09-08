import { createApp } from 'vue';
import { register } from 'swiper/element/bundle';
import ExcludeCustomElements from '../plugins/exclude-custom-elements.js';
import App from './App.vue';
register();

const app = createApp(App);

app.use(ExcludeCustomElements).mount('#app');
