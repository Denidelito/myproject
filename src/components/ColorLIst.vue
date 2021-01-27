<template>
  <li class="colors__item">
    <label class="colors__label">
      <input class="colors__radio sr-only"
             type="radio"
             :value="color.id"
             v-model.number="computedColors"
      >
      <span class="colors__value" :style="'background-color:'+color.title+';'"/>
    </label>
  </li>
</template>

<script>
export default {
  name: 'ProductColor',
  props: ['color', 'currentColor'],
  computed: {
    computedColors: {
      get() {
        return this.currentColor;
      },
      set(value) {
        this.$emit('update:currentColor', value);
      },
    },
  },
};
</script>
