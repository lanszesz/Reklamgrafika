import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true
    },
    plugins: [vue()], resolve: {
        alias: [{
            find: 'vue-i18n', replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        }]
    },
    build: {
        outDir: './'
    }
})
