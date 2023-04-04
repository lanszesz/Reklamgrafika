import {createApp} from 'vue';
import './style.css';
import App from './App.vue';

import router from "./router.js";

import {createI18n} from "vue-i18n";
import hu from './locales/hu';
import ro from './locales/ro';

import SvgComponent from "./components/SvgComponent.vue";

const i18n = new createI18n({
    locale: 'hu', // default
    messages: {
        hu,
        ro,
    }
});

createApp(App).use(i18n).use(router).component('svg-component', SvgComponent).mount('#app');