<template>
  <footer class="footer">
    <section class="footer__left">
      <Logo />
      {{ $t(`Footer.copyright`) }}
    </section>
    <section class="footer__right">
      <MenuLinks class="app-footer" />
      <section class="address">
        <div
          :class="title.color"
          v-for="(title, index) of $t(`Footer.address`)"
          :key="`address-${index}`"
        >
          {{ title.text }}
        </div>
      </section>
      <SocialMedia />
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer {
  border-top: 2px solid var(--color-primary-300);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-06 0;
  &__right {
    display: grid;
    grid-template-columns: 1fr 1fr 100px;
  }
}
</style>
