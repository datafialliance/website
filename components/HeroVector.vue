<template>
  <div>
    <svg viewBox="0 0 1454 271" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0V268.771C47.1839 206.238 192.776 88.9603 397.671 120.109C500.87 135.797 563.994 166.354 625.011 195.891C715.427 239.659 801.213 281.187 1005.9 268.771C1280.16 252.135 1418.91 84.8604 1454 3.30273V0H0Z"
        fill="#003242"
      />
    </svg>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeroVector",
});
</script>
<style lang="scss" scoped>
div {
  background: var(--color-primary-500);
  z-index: 11;
  //   position: absolute;
  width: 100%;
  //   bottom: 0;
  overflow: hidden;
  height: 38vh;
  position: relative;
}
svg {
  display: flex;
}
</style>