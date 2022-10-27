<template>
  <section id="how-it-works" class="main">
    <section class="container">
      <section class="main__content">
        <section class="main__content__text">
          <div class="title">{{ $t(`HowItWorks.title`) }}</div>
          <header class="header">{{ $t(`HowItWorks.header`) }}</header>
          <div class="description">{{ $t(`HowItWorks.description`) }}</div>
          <div>
            <button>{{ $t(`HowItWorks.button`) }}</button>
          </div>
        </section>

        <ul class="cards">
          <li
            class="card"
            v-for="(card, index) of $t(`HowItWorks.cards`)"
            :key="`card-${index}`"
          >
            <img :src="card.icon" />
            <header>{{ card.title }}</header>
            <p>{{ card.description }}</p>
          </li>
        </ul>
      </section>
    </section>
    <div class="decoration">
      <svg
        width="159"
        height="328"
        viewBox="0 0 159 328"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.133086 327.413L22.035 320.089L4.74122 304.783L0.133086 327.413ZM13.63 315.176C44.8261 275.884 76.168 204.496 59.3887 138.121L55.5107 139.101C71.8663 203.8 41.2771 273.922 10.4974 312.689L13.63 315.176ZM59.3887 138.121C57.0185 128.745 54.0891 122.001 50.747 117.573C47.3808 113.112 43.4522 110.836 39.2065 110.901C35.055 110.965 31.1379 113.266 27.7105 116.742C24.2607 120.24 21.1085 125.122 18.4546 130.832C13.1451 142.257 9.67308 157.341 9.94521 172.279C10.2172 187.208 14.2381 202.224 24.183 213.253L27.1537 210.574C18.067 200.497 14.2058 186.545 13.9445 172.206C13.6835 157.877 17.0273 143.395 22.0821 132.518C24.6103 127.078 27.5274 122.624 30.5588 119.55C33.6127 116.453 36.589 114.942 39.2678 114.901C41.8524 114.861 44.6911 116.188 47.5541 119.982C50.4412 123.808 53.2029 129.972 55.5107 139.101L59.3887 138.121ZM24.183 213.253C29.1423 218.753 34.6281 222.35 40.5296 223.959C46.4413 225.57 52.617 225.143 58.8699 222.844C71.2901 218.279 84.0869 206.313 96.3666 187.933C120.971 151.108 144.176 87.5148 158.267 1.3364L154.319 0.690951C140.274 86.5902 117.199 149.553 93.0406 185.711C80.939 203.824 68.734 214.957 57.4898 219.09C51.9106 221.141 46.5884 221.464 41.5814 220.099C36.5641 218.732 31.7103 215.628 27.1537 210.574L24.183 213.253Z"
          fill="#004A62"
        />
      </svg>
    </div>
  </section>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HowItWorks",
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--color-primary-500);
  justify-content: center;
  padding: $spacing-10 0;
  position: relative;
  @media (max-width: #{$desktop + 1}) {
    padding: $spacing-10 0 0;
  }
  .container {
    width: 100%;
    z-index: 1;
    position: relative;
  }
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-07;
    align-items: center;
    &__text {
      max-width: 440px;
      width: 100%;
      z-index: 1;
      > .title {
        font-style: normal;
        font-weight: var(--font-weight-medium);
        font-size: 25px;
        line-height: 1.2;
        color: var(--color-secondary-500);
        @media (max-width: #{$desktop + 1}) {
          font-size: var(--font-size-5);
        }
      }
      > .header {
        font-weight: var(--font-weight-medium);
        font-size: 45px;
        line-height: 1.2;
        display: flex;
        align-items: center;
        letter-spacing: -0.01em;
        color: var(--color-neutral-50);
        @media (max-width: #{$desktop + 1}) {
          font-size: 25px;
        }
      }
      > .description {
        font-family: var(--font-family-2);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-5);
        line-height: 1.5;
        margin-bottom: $spacing-07;
        margin-top: $spacing-04;
        color: var(--color-neutral-100);
      }
    }

    @media (max-width: #{$desktop + 1}) {
      display: flex;
      flex-direction: column;
      gap: 96px;
    }
  }
}

.decoration {
  position: absolute;
  z-index: 0;
  bottom: -100px;
  left: 30%;
  @media (max-width: #{$desktop + 1}) {
    bottom: calc(50% + 100px);
  }
}
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: $spacing-05;
  padding: 0;
  margin: 0;
  background: radial-gradient(
    50% 50% at 50% 50%,
    var(--color-primary-200) 0%,
    rgba(0, 62, 82, 0) 100%
  );
  .card {
    padding: $spacing-07;
    background: var(--color-primary-600);
    box-shadow: var(--shadow-sm);
    border-radius: 12px;

    > header {
      font-weight: var(--font-weight-medium);
      font-size: 25px;
      line-height: 1.2;
    }
    > p {
      margin-top: $spacing-03;
      font-family: var(--font-family-2);
      font-weight: var(--font-weight-regular);
      font-size: 16px;
    }
    img {
      max-width: 60px;
    }
    &:first-of-type {
      grid-row: 1 / 3;
      grid-column: 1 / 2;
    }
    &:nth-of-type(2) {
      grid-row: 2 / 4;
      grid-column: 2 / none;
    }

    &:last-of-type {
      grid-row: 3 / 5;
      grid-column: 1 / 2;
    }
  }
  @media (max-width: #{$desktop + 1}) {
    display: flex;
    flex-direction: column;
  }
}
</style>
