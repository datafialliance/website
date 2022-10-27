<template>
  <section class="page-content">
    <Header />
    <section class="container">
      <Hero />
    </section>
    <HeroVector />
    <Partners />
    <HowItWorks />
    <ContactVector />
    <section class="container">
      <Contact />
      <Footer />
    </section>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Partners from "../components/Partners.vue";
export default Vue.extend({
  components: { Partners },
  name: "IndexPage",
  mounted() {},
});
</script>
<style lang="scss" scoped>
.page-content {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
