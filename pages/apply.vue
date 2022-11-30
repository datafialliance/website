<template>
  <section class="apply-page-content">
    <Header />
    <div class="container">
      <NuxtLink class="back" to="/"
        ><i class="fas fa-arrow-left mr-4"></i>Back</NuxtLink
      >
    </div>
    <section class="apply-container">
      <header>
        <h1>{{ $t(`Apply.header.title`) }}</h1>
        <p>{{ $t(`Apply.header.description`) }}</p>
      </header>
      <ApplyForm />
    </section>
    <div class="container">
      <Footer />
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";
import Members from "../components/Members.vue";
export default Vue.extend({
  components: { Members, Header },
  name: "ApplyPage",
  mounted() {},
});
</script>
<style lang="scss" >
header {
  > h1 {
    font-weight: var(--font-weight-medium);
    font-size: 45px;
    line-height: 120%;
    margin-bottom: 16px;
    @media (max-width: #{$desktop + 1}) {
      font-size: 25px;
    }
  }
  > p {
    font-family: var(--font-family-2);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 48px;
  }
}
.apply-page-content {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 160px;

  .container {
    width: 100%;
  }
  .apply-container {
    max-width: 900px;
    width: 100%;
    padding: 0 $spacing-06;
  }
}
.back {
  color: var(--color-neutral-50);
  text-decoration: none;
}
</style>
