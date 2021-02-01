<template>
  <ul class="catalog__list">
    <ProductItem :product="product"
                 :productIndex="index"
                 v-for="(product, index) in products" :key="product.id"
                 @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"/>
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
