<template>
  <section class="hero">
    <section>
      <h1
        :class="title.color"
        v-for="(title, index) of $t(`Hero.title`)"
        :key="`hero-title-${index}`"
      >
        {{ title.text }}
      </h1>
      <p class="description">{{ $t(`Hero.description`) }}</p>
      <button>{{ $t(`Hero.button`) }}</button>
    </section>
    <div class="svg">
      <svg
        width="384"
        height="384"
        viewBox="0 0 384 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M383.795 0.666664V71.4746H306.268H271.151H76.8022H0.666626V0.666664H383.795Z"
          fill="#00384B"
        />
        <path
          d="M231.45 142.284V213.091H184.75H163.597H70.4124V306.802C70.4124 308.578 71.0271 310.087 72.2761 311.324C73.5139 312.573 75.0207 313.189 76.8022 313.189H306.268C308.041 313.189 309.636 312.573 311.061 311.324C312.474 310.087 313.188 308.578 313.188 306.802V142.284H383.795L384 309.993C384 323.483 380.622 335.815 373.883 346.997C367.136 358.174 358.085 367.143 346.73 373.88C335.367 380.629 322.947 383.997 309.462 383.997H0.666626V213.091V142.284H231.45Z"
          fill="#00384B"
        />
      </svg>
    </div>
  </section>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Hero",
});
</script>
<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  height: calc(100vh - 340px);
  min-height: 700px;
  justify-content: space-between;
  align-items: center;
  // padding: $spacing-06 0;
  > section,
  > div {
    padding-top: 240px;
  }
}
.svg {
  display: flex;
  justify-content: center;
}

h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 61px;
  line-height: 110%;
  display: flex;
  align-items: center;
  margin: 0;
  letter-spacing: -0.01em;
}
.description {
  max-width: 550px;
  font-weight: var(--font-weight-regular);
  font-size: 25px;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
.green {
  color: var(--color-secondary-500);
}
</style>
