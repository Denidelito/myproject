<template>
  <component :is="currentPageComponent" :page-params="currentPageParams"
             @gotoPage="(pageName, pageParams) => gotoPage(pageName, pageParams)"/>

</template>

<script>
import MainPage from './pages/MainPage.vue';
import ProductPages from './pages/ProductPages.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = {
  main: 'MainPage',
  product: 'ProductPages',
};

export default {
  name: 'App',
  data() {
    return {
      currentPages: 'main',
      currentPageParams: {},
    };
  },
  computed: {
    currentPageComponent() {
      return router[this.currentPages] || 'NotFoundPage';
    },
  },
  components: {
    MainPage,
    ProductPages,
    NotFoundPage,
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPages = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
};
</script>
