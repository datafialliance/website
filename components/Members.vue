<template>
  <section id="members" class="main">
    <section class="container">
      <header class="title">{{ $t(`Members.title`) }}</header>
      <ul>
        <li v-for="(item, index) of $t(`Members.list`)" :key="`link-${index}`">
          <a :href="item.href">
            <img :src="item.icon" />
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Members",
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--color-primary-500);
  justify-content: center;
  padding: $spacing-06 0 $spacing-10;
  .container {
    width: 100%;
  }
}
.title {
  font-weight: var(--font-weight-medium);
  font-size: 45px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: $spacing-08;
  @media (max-width: #{$desktop + 1}) {
    font-size: 25px;
    margin-bottom: $spacing-05;
  }
}
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: $spacing-05;
  padding: 0;
  margin: 0;
  @media (max-width: #{$desktop + 1}) {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-03;
    justify-items: center;
    justify-content: center;
  }
  li a {
    background: var(--color-neutral-100);
    padding: $spacing-06;
    display: flex;
    box-shadow: 0 0 24px -10px var(--shadow-sm);
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    @media (max-width: #{$desktop + 1}) {
      padding: $spacing-03 $spacing-05;
    }
    img {
      max-width: 72px;
      @media (max-width: #{$desktop + 1}) {
        max-width: 32px;
      }
    }
  }
}
</style>
