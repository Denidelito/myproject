<template>
  <li class="catalog__item" >
    <a class="catalog__pic" href="#" @click.prevent="gotoPage('product', {id: product.id})">
      <img :src="product.img" :alt="product.title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{product.title}}
      </a>
    </h3>

    <span class="catalog__price">
          {{product.price | numberFormat}} ₽
    </span>

    <ColorLIst class="colors colors--black"
               :color-list="product.colors"
               :current-color.sync="currentColor"/>
  </li>
</template>

<script>
import ColorLIst from '../ColorLIst.vue';
import gotoPage from '../../helpers/gotoPage';
import numberFormat from '../../helpers/numberFormat';

export default {
  name: 'ProductItem',
  data() {
    return {
      currentColor: 0,
    };
  },
  filters: {
    numberFormat,
  },
  components: {
    ColorLIst,
  },
  methods: {
    gotoPage,
  },
  props: ['product', 'productIndex'],
};
</script>
