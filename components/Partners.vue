<template>
  <section id="partners" class="main">
    <section class="container">
      <header class="title">{{ $t(`Partners.title`) }}</header>
      <ul>
        <li v-for="(item, index) of $t(`Partners.list`)" :key="`link-${index}`">
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
  name: "Partners",
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--color-primary-500);
  justify-content: center;
  padding: $spacing-06 0;
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
}
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: $spacing-05;
  padding: 0;
  margin: 0;
  li a {
    background: var(--color-neutral-100);
    padding: $spacing-04;
    display: flex;
    box-shadow: 0 0 24px -10px var(--shadow-sm);
    border-radius: 12px;
    justify-content: center;
    align-items: center;
  }
}
</style>
