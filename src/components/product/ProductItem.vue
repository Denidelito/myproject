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

    <ul class="colors colors--black">
      <ColorLIst :color="color"
                 :current-color.sync="currentColor" v-for="color in product.colors"
                 :key="color.id"/>
    </ul>
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
