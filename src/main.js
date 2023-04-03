import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import {createI18n} from "vue-i18n";
import hu from './locales/hu' // import Hungarian translations
import ro from './locales/ro' // import Romanian translations

const i18n = new createI18n({
    locale: 'hu', // default
    messages: {
        hu,
        ro,
    }
})

createApp(App).use(i18n).mount('#app')