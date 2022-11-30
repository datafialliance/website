<template>
  <ul>
    <li
      v-for="(link, index) of $t(`Header.socialMedia`)"
      :key="`social-link-${index}`"
    >
      <a :href="link.href" target="_blank">
        <i :class="'fa-brands fa-' + link.icon" :title="link.name"></i>
      </a>
    </li>
    <li>
      <a
        href="mailto:join@datafialliance.org?subject=Gm!! We would like to join the Alliance"
      >
        <button>
          {{ $t(`WhyJoinUs.button.text`) }}
          <i class="ml-3 mt- fas fa-arrow-right"></i>
        </button>
      </a>
    </li>
  </ul>
</template>


<script lang="ts">
import Vue from "vue";
import { LinkType } from "../types/link-type";

export default Vue.extend({
  name: "SocialMedia",
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
  &.app-footer {
    align-items: flex-start;
    justify-content: flex-end;
    li a {
      color: var(--color-neutral-100);
    }
  }
  li a {
    text-decoration: none;
    color: var(--color-secondary-500);
    margin-left: $spacing-06;
    transition: all 0.3s ease-in-out;
    &:hover {
      transition: all 0.3s ease-in-out;
      color: var(--color-secondary-600);
    }
  }
}
</style>>
