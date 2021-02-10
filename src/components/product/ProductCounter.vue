<template>
  <div>
    <button type="button" aria-label="Убрать один товар" @click="inkrement(counter - 1)">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="currentCount" name="count">

    <button type="button" aria-label="Добавить один товар" @click="inkrement(counter + 1)">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: 'ProductCounter',
  props: [
    'counter',
  ],
  computed: {
    currentCount: {
      get() {
        return this.counter;
      },
      set(value) {
        this.$emit('update:counter', value);
      },
    },
  },
  methods: {
    inkrement(counter) {
      if (counter !== 0) {
        this.$emit('update:counter', counter);
      }
    },
  },
};
</script>
