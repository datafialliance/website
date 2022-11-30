<template>
  <section id="why-join-us" class="main">
    <section class="main__content__text">
      <h1 class="green">Why Join Us?</h1>
      <header class="header">
        <span
          :class="title.color"
          v-for="(title, index) of $t(`WhyJoinUs.title`)"
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
      <div>
        <a
          href="mailto:join@datafialliance.org?subject=Gm!! We would like to join the Alliance"
        >
          <button>Become A Member</button>
        </a>
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
h1 {
  font-weight: var(--font-weight-medium);
  font-size: 45px;
}
.main {
  text-align: center;
  width: 100%;
  margin: 48px auto;
  padding: 10% auto;
}
.header {
  font-weight: var(--font-weight-regular);
  font-size: 35px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.01em;
  margin-top: 20px;
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
