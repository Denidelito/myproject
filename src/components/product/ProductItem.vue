<template>
  <li class="catalog__item" >
    <a class="catalog__pic" href="#">
      <img :src="product.img" :alt="product.title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{product.title}}
      </a>
    </h3>

    <span class="catalog__price">
          {{product.price}}
    </span>

    <ProductColor :colors="product.colors"/>
  </li>
</template>

<script>
import ProductColor from './ProductColor.vue';

export default {
  name: 'ProductItem',
  components: {
    ProductColor,
  },
  props: ['product', 'productIndex'],
};
</script>
