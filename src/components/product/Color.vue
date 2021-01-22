<template>
  <ul class="colors colors--black">
    <li class="colors__item" v-for="(color, index) in colors" :key="index">
      <label class="colors__label">
        <input class="colors__radio sr-only"
               type="radio"
               :name="'color-'+key"
               :value="color"
               :checked="index === 0">
        <span class="colors__value" :style="'background-color:'+color+';'"></span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Color',
  props: {
    colors: Array,
    key: String,
  },
};
</script>
