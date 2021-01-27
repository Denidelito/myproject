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

    <ColorLIst class="colors colors--black"
               :color-list="product.colors"
               :current-color.sync="currentColor"/>
  </li>
</template>

<script>
import ColorLIst from '../ColorLIst.vue';

export default {
  name: 'ProductItem',
  data() {
    return {
      currentColor: 0,
    };
  },
  components: {
    ColorLIst,
  },
  props: ['product', 'productIndex'],
};
</script>
