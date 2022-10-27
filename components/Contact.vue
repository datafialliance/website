<template>
  <section id="contact" class="main">
    <section class="main__content__text">
      <header class="header">
        <span
          :class="title.color"
          v-for="(title, index) of $t(`Contact.title`)"
          :key="`contact-title-${index}`"
        >
          {{ title.text }}
        </span>
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 -1.70474e-06L15.8736 15.8736L2.10995e-06 19.5L15.8736 23.1264L19.5 39L23.1264 23.1264L39 19.5L23.1264 15.8736L19.5 -1.70474e-06Z"
            fill="#004A62"
          />
        </svg>
      </header>
      <div class="description">{{ $t(`Contact.description`) }}</div>
      <div>
        <button>
          {{ $t(`Contact.button.text`) }}
          <i class="ml-3 mt-1 fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  </section>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact",
});
</script>
<style lang="scss" scoped>
.main {
  text-align: center;
  max-width: 496px;
  margin: 48px auto;
}
.header {
  font-weight: var(--font-weight-medium);
  font-size: 45px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.01em;
  margin-bottom: $spacing-05;
  position: relative;
  svg {
    position: absolute;
    top: -24px;
    right: -24px;
  }
  @media (max-width: #{$desktop + 1}) {
    font-size: 25px;
  }
}
.description {
  font-family: var(--font-family-2);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-5);
  line-height: 1.5;
  margin-bottom: $spacing-07;
}
.green {
  color: var(--color-secondary-500);
}
</style>
