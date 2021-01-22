<template>
  <section class="catalog">
    <ul class="catalog__list">
      <li class="catalog__item" v-for="(product, index) in products" :key="index">
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

        <Color :colors="product.colors" :key="index"></Color>
      </li>
    </ul>
  </section>
</template>

<script>
import products from './data/products';
import Color from './components/product/Color.vue';

export default {
  name: 'App',
  components: {
    Color,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
