import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import ProductPages from '@/pages/ProductPages.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'main',
    component: MainPage,
    path: '/',
  },
  {
    name: 'product',
    component: ProductPages,
    path: '/product/:id',
  },
  {
    name: 'notFound',
    component: NotFoundPage,
    path: '*',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
