import {createRouter, createWebHistory} from 'vue-router';
import Products from './views/ProductsView.vue';
import Home from './views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;