import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/data/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      const item = state.cartProducts.find((itemProduct) => itemProduct.productId === productId);

      if (item) {
        item.amount += amount;
      } else {
        state.cartProducts.push({
          productId,
          amount,
        });
      }
    },
    updateCartAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((itemProduct) => itemProduct.productId === productId);

      if (item) {
        item.amount = amount;
      }
    },
    delCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => ({
        ...item,
        product: products.find((p) => p.id === item.productId),
      }));
    },
    cartTotalPrice(state, getter) {
      const sumPriceProduct = (item) => (item.product.price * item.amount);

      return getter.cartDetailProducts.reduce((acc, item) => sumPriceProduct(item) + acc, 0);
    },
  },
});
