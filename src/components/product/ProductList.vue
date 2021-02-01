<template>
  <ul class="catalog__list">
    <ProductItem :product="product"
                 :productIndex="index"
                 v-for="(product, index) in products" :key="product.id"
                 @gotoPage="(pageName, pageParam) => $emit('gotoPage', pageName, pageParam)"/>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  props: ['products'],
};
</script>
