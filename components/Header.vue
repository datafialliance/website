<template>
  <header class="header">
    <Logo></Logo>
    <MenuLinks class="mobile-links"></MenuLinks>
    <SocialMedia class="social-media"></SocialMedia>
    <div class="mobile-icon">
      <i class="fas fa-bars"></i>
    </div>
  </header>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>
<style lang="scss" scoped>
.header {
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
  .mobile-icon {
    display: none;
  }
  @media (max-width: #{$desktop + 1}) {
    padding: $spacing-07 $spacing-05;
    .mobile-links,
    .social-media {
      display: none;
    }
    .mobile-icon {
      display: inline-block;
      i {
        font-size: var(--font-size-2);
      }
    }
  }
}
</style>
