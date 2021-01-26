<template>
  <ul class="colors colors--black">
    <li class="colors__item" v-for="(color, index) in colors" :key="index">
      <label class="colors__label">
        <input class="colors__radio sr-only"
               type="radio"
               :value="color"
               v-model="currentColor"
        >
        <span class="colors__value" :style="'background-color:'+color+';'"/>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductColor',
  data() {
    return {
      currentColor: '#000000',
    };
  },
  props: ['colors'],
};
</script>
