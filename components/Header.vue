<template>
  <header class="header">
    <Logo></Logo>
    <MenuLinks></MenuLinks>
    <SocialMedia></SocialMedia>
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
  width: 100%;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-06 0;
}
</style>
