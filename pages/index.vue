<template>
  <section class="index-page-content">
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
  head() {
    return {
      title: "DataFi Alliance",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "DataFi Alliance is a consortium of like minded projects and individuals with a mission to drive the growth of DataFi across various industries. Members of DataFi Alliance are building web3 tech to enable and empower individuals and businesses to benefit from financialization of their data without giving away ownership and control over their data.",
        },
      ],
    };
  },
});
</script>
<style lang="scss" >
.index-page-content {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
