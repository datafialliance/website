<template>
  <section id="what-is-datafi" class="main">
    <h1 class="header green">
      <span
        :class="title.color"
        v-for="(title, index) of $t(`HeroText.title`)"
        :key="`herotext-title-${index}`"
      >
        {{ title.text }}
      </span>
    </h1>
    <p class="description">{{ $t(`HeroText.description`) }}</p>
  </section>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeroText",
});
</script>
<style lang="scss" scoped>
.main {
  text-align: center;
  width: 80%;
  height: auto;
  margin: 10% auto;
  padding: 10% auto;
}
h1 {
  font-weight: var(--font-weight-medium);
  font-size: 45px;
  line-height: normal;
  text-align: center;
  letter-spacing: -0.01em;

  @media (max-width: #{$desktop + 1}) {
    font-size: 25px;
  }
}
.description {
  font-weight: var(--font-weight-regular);
  font-size: 35px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  @media (max-width: #{$desktop + 1}) {
    font-size: 16px;
  }
}
.green {
  color: var(--color-secondary-500);
}
</style>
