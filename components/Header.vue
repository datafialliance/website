<template>
  <header
    class="app-header"
    :class="innerWidth < 980 && mobileMenuOpen ? 'mobile-open' : ''"
  >
    <Logo></Logo>
    <MenuLinks class="mobile-links"></MenuLinks>
    <SocialMedia class="social-media"></SocialMedia>
    <a class="mobile-icon" @click="mobileMenuOpen = !mobileMenuOpen">
      <i :class="!mobileMenuOpen ? 'fas fa-bars' : 'fas fa-close'"></i>
    </a>
  </header>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      innerWidth: 0,
      mobileMenuOpen: false,
    };
  },

  computed: {
    isMobile() {
      return process.client ? window.innerWidth < 980 : 0;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.innerWidth = process.client ? window.innerWidth : 0;
    },
  },
});
</script>
<style lang="scss">
.app-header {
  display: flex;
  max-width: $fullhd;
  margin: 0 auto;
  width: 100%;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-06 $spacing-05;
  top: 0;
  z-index: 1;

  &.mobile-open {
    display: flex;
    background: var(--color-primary-600);
    position: fixed;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    z-index: 100;
    .mobile-links {
      flex-direction: column;
      align-items: flex-start;
      gap: $spacing-05;
      a {
        margin-left: 0;
        font-size: 25px;
      }
    }
    .mobile-icon {
      position: absolute;
      right: 42px;
      top: 40px;
    }
  }

  .mobile-icon {
    display: none;
  }
  @media (max-width: #{$desktop + 1}) {
    padding: $spacing-07 $spacing-05;
    &:not(.mobile-open) {
      .mobile-links,
      .social-media {
        display: none;
      }
    }
    .mobile-icon {
      display: inline-block;
      margin-bottom: $spacing-03;
      i {
        font-size: var(--font-size-2);
      }
    }
  }
}
</style>
