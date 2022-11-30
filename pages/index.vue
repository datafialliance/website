<template>
  <section class="index-page-content">
    <Header />
    <section class="container">
      <Hero />
      <HeroText />
    </section>
    <HeroVector />
    <values />
    <Members />
    <ContactVector />
    <section class="container">
      <why-join-us />
      <Footer />
    </section>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import WhyJoinUs from "~/components/WhyJoinUs.vue";
import Members from "../components/Members.vue";
import Values from "../components/Values.vue";
export default Vue.extend({
  components: { Members, Values, WhyJoinUs },
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
