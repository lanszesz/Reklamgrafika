<template>
  <!--desktop-->
  <nav class="bg-white gap-10 hidden items-center justify-start  p-6 shadow-ma-nav lg:justify-between md:flex">
    <h5 class="flex flex-row-reverse lg:flex-1 lg:flex-basis-0 lg:flex-shrink-1 lg:order-none order-2">
      <router-link :to="{ name: 'Home'}">{{ $t('navbar.aboutUs') }}</router-link>
    </h5>

    <router-link :to="{ name: 'Home'}" class="order-1 lg:order-none">
      <svg class="h-[180px] w-[200px] hidden lg:block">
        <use xlink:href="#logo-large"></use>
      </svg>
      <svg class="block h-[78px] w-[150px] lg:hidden">
        <use xlink:href="#logo-small"></use>
      </svg>
    </router-link>

    <h5 class="flex flex-1 flex-basis-0 flex-shrink-1 order-3 lg:order-none">
      <router-link :to="{ name: 'Products'}">{{ $t('navbar.products') }}</router-link>
    </h5>

    <language-selector-component class="absolute right-[80px]"></language-selector-component>
  </nav>

  <!--mobile-->
  <div class="bg-white flex flex-col shadow-ma-nav">
    <nav class="flex gap-10 items-center justify-between p-6 lg:justify-between md:hidden">
      <router-link :to="{ name: 'Home'}">
        <svg class="h-[78px] w-[150px]">
          <use xlink:href="#logo-small"></use>
        </svg>
      </router-link>

      <svg class="h-[50px] w-[50px]" @click="toggleMobileMenu">
        <use xlink:href="#hamburger"></use>
      </svg>
    </nav>
    <div v-if="isMobileMenuVisible" class="flex flex-col gap-5 items-center pb-5 md:hidden">
      <router-link :to="{ name: 'Home'}" class="sh2">{{ $t('navbar.aboutUs') }}</router-link>
      <router-link :to="{ name: 'Products'}" class="sh2">{{ $t('navbar.products') }}</router-link>
      <language-selector-component class="mt-5"></language-selector-component>
    </div>
  </div>
</template>

<script>
import LanguageSelectorComponent from "./LanguageSelectorComponent.vue";

export default {
  components: {
    LanguageSelectorComponent
  },
  data() {
    return {
      isMobileMenuVisible: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    }
  }
}
</script>