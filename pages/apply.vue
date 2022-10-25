<template>
  <section class="page-content">
    <section class="container">
      <Header />
      Apply

      <Footer />
    </section>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Partners from "../components/Partners.vue";
export default Vue.extend({
  components: { Partners },
  name: "ApplyPage",
  mounted() {},
});
</script>
