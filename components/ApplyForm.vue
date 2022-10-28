
<template>
  <form>
    <div class="text-field-box">
      <div>
        {{ $t("Apply.form.name") }}

        <span class="error">*</span>
      </div>
      <input class="text-field" v-model="name" />
      <div class="error msg" v-show="checkValidations && !name">Required</div>
    </div>
    <div class="text-field-box">
      <div>{{ $t("Apply.form.email") }} <span class="error">*</span></div>
      <input class="text-field" v-model="email" />
      <div class="error msg" v-show="checkValidations && !email">Required</div>
      <div
        class="error msg"
        v-show="checkValidations && email && !validEmail(email)"
      >
        Email is not valid
      </div>
    </div>
    <div class="text-field-box">
      <div>{{ $t("Apply.form.websiteUrl") }}</div>
      <input class="text-field" v-model="websiteUrl" />
    </div>

    <div class="text-field-box">
      <div>{{ $t("Apply.form.companyTwitter") }}</div>
      <input class="text-field" v-model="companyTwitter" />
    </div>
    <div class="text-field-box">
      <div>{{ $t("Apply.form.description") }}</div>
      <textarea class="text-field" v-model="description" />
    </div>
    <div>
      <div>
        <button class="btn-default mt-3" block="block" @click="submit($event)">
          <img
            class="btn-icon"
            src="/img/icons/mail-icon.svg"
            alt="mail icon"
          /><span>{{ $t("Apply.form.submit") }}</span>
        </button>
      </div>
    </div>
  </form>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApplyForm",
  data() {
    return {
      name: "",
      websiteUrl: "",
      email: "",
      companyTwitter: "",
      description: "",
      checkValidations: false,
    };
  },
  computed: {
    isValid() {
      if (!this.name) {
        return false;
      }

      if (!this.validEmail(this.email)) {
        return false;
      }
      return true;
    },
  },
  methods: {
    validEmail(email: string) {
      const re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },
    clearData() {
      this.name = "";
      this.websiteUrl = "";
      this.email = "";
      this.companyTwitter = "";
      this.description = "";
      this.checkValidations = false;
    },
    setFormData(formData: any) {
      this.name = formData.first_name;
      this.websiteUrl = formData.last_name;
      this.email = formData.email;
      this.companyTwitter = formData.custom_fields.company;
      this.description = formData.custom_fields.description;
      this.checkValidations = false;
    },
    getContact() {
      return {
        email: this.email,
        company_name: this.name,
        websiteUrl: this.websiteUrl,
        country: this.companyTwitter,
        // custom_fields: {
        //   category: this.category,
        //   company: this.companyTwitter,
        //   description: this.category,
        // },
      };
    },
    //     changeValue(newValue) {
    //   this.selectedValue = newValue
    // },
    async submit(e: Event) {
      e.preventDefault();
      this.checkValidations = true;
      if (this.isValid) {
        debugger;
      }
    },
  },
});
</script>
<style lang="scss" scoped>
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-05;
  margin-bottom: $spacing-11;

  :nth-child(5) {
    grid-column: 1 / 3;
  }
  > div:last-of-type {
    width: 100%;
    grid-column: 1 / 3;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: #{$desktop + 1}) {
    display: flex;
    flex-direction: column;
  }
}
.text-field-box {
  font-weight: var(--font-weight-regular);
  line-height: 1.5;
  > div:first-of-type {
    margin-bottom: $spacing-02;
  }
}
.error {
  color: red;
  &.msg {
    margin-top: $spacing-03;
  }
}
</style>
