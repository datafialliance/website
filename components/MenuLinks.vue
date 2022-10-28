<template>
  <ul>
    <li v-for="(link, index) of $t(`Header.links`)" :key="`link-${index}`">
      <NuxtLink v-if="link.type === linkType.Internal" :to="link.href">{{
        link.name
      }}</NuxtLink>
      <a :href="'/' + link.href" v-if="link.type === linkType.Anchor">
        {{ link.name }}
      </a>
    </li>
  </ul>
</template>


<script lang="ts">
import Vue from "vue";
import { LinkType } from "../types/link-type";

export default Vue.extend({
  name: "MenuLinks",
  data() {
    return { linkType: LinkType };
  },
});
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  li a {
    font-family: var(----font-family-2);
    font-weight: var(--font-weight-semibold);
    line-height: 1.5;
    text-decoration: none;
    color: var(--color-text);
    margin-left: $spacing-06;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: var(--color-secondary-500);
      border-bottom: 1px solid var(--color-secondary-500);
    }
  }
  li:first-of-type a {
    margin-left: 0;
  }
  &.app-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    li {
      margin-bottom: $spacing-03;
    }
    a {
      margin-left: 0;
      font-weight: 400;
    }
  }
}
</style>>
