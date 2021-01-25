<template>
  <ul class="colors colors--black">
    <li class="colors__item" v-for="(color, index) in colors" :key="index">
      <label class="colors__label">
        <input class="colors__radio sr-only"
               type="radio"
               :name="'color-'+keyColor"
               :value="color"
               :checked="index === 0">
        <span class="colors__value" :style="'background-color:'+color+';'"/>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductColor',
  props: ['colors', 'keyColor'],
};
</script>
