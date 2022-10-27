<template>
  <div>
    <svg viewBox="0 0 7756 1464" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2.97266C62.9118 86.3492 257.034 242.72 530.229 201.189C667.826 180.271 751.992 139.528 833.348 100.146C953.902 41.7877 1068.28 -13.5821 1341.2 2.97266C1706.88 25.1538 1891.88 248.186 1938.67 356.93V366H0V2.97266Z"
        fill="#003242"
      />
    </svg>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ContactVector",
});
</script>
<style lang="scss" scoped>
svg {
  display: flex;
  width: 7756px;
  height: 1464;
}
div {
  background: var(--color-primary-500);
  z-index: 11;
  width: 100%;
  overflow: hidden;
  height: 30vh;
  position: relative;

  @media (max-width: #{$desktop + 1}) {
    height: 240px;
    width: 100%;
    svg {
      width: 3939px;
      height: 966px;
    }
  }
}
</style>