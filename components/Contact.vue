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
      </header>
      <div class="description">{{ $t(`Contact.description`) }}</div>
      <div>
        <button>{{ $t(`Contact.button.text`) }}</button>
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
