<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">

      <ProductFilter :price-from.sync="filterPriceFrom"
                     :price-to.sync="filterPriceTo"
                     :category-id.sync="filterCategoryId"
                     :product-color.sync="filterColorId"
                     :pageParams="pageParams"/>
      <section class="catalog">
        <ProductList :products="products"/>
        <BasePagination v-model="page" :page="page" :count="countProducts"
                        :per-page="productsPerPage"/>
      </section>
    </div>
  </main>
</template>
<script>
import products from '@/data/products';
import ProductList from '@/components/product/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/product/ProductFilter.vue';
import gotoPage from '../helpers/gotoPage';

export default {
  components: {
    ProductFilter,
    BasePagination,
    ProductList,
  },
  props: [
    'pageParams',
  ],
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: 0,
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    filterProducts() {
      let filterProducts = products;
      const Category = (product) => product.categoryId === this.filterCategoryId;
      const PriceFrom = (product) => product.price > this.filterPriceFrom;
      const PriceTo = (product) => product.price < this.filterPriceTo;
      const Color = (product) => product.colors.find((color) => color.id === this.filterColorId);

      if (this.filterPriceFrom > 0) {
        filterProducts = filterProducts.filter(PriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filterProducts = filterProducts.filter(PriceTo);
      }

      if (this.filterCategoryId) {
        filterProducts = filterProducts.filter(Category);
      }

      if (this.filterColorId) {
        filterProducts = filterProducts.filter(Color);
      }
      return filterProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filterProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filterProducts.length;
    },
  },
  methods: {
    gotoPage,
  },
};
</script>
