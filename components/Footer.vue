<template>
  <footer class="footer">
    <section class="footer__left">
      <Logo class="logo" />
      <span class="copyright">
        {{ $t(`Footer.copyright`) }}
      </span>
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
      <SocialMedia class="app-footer" />
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
  padding: $spacing-08 0;
  .logo {
    margin-bottom: $spacing-06;
  }
  &__left {
    font-weight: var(--font-weight-regular);
    .copyright {
      display: inline-block;
      max-width: 325px;
    }
  }
  &__right {
    display: grid;
    font-weight: var(--font-weight-regular);
    grid-template-columns: 1fr 1fr 100px;
  }
  @media (max-width: #{$desktop + 1}) {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: $spacing-07;
    .logo {
      justify-content: flex-start;
    }
    &__right {
      display: flex;
      flex-direction: column;
      gap: $spacing-07;
    }
  }
}
</style>
