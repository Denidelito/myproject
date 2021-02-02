<template>
  <component :is="currentPageComponent" :page-params="currentPageParams"/>
</template>

<script>
import MainPage from './pages/MainPage.vue';
import ProductPages from './pages/ProductPages.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import eventBus from './eventBus';

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
  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  },
};
</script>
