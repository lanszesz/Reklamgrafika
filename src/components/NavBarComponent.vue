<template>
  <nav class="h-60 shadow-ma-nav bg-white flex gap-10 justify-between items-center px-10">
    <h5 class="flex flex-1 flex-shrink-1 flex-basis-0 flex-row-reverse">
      <router-link :to="{ name: 'Home'}">{{ $t('navbar.aboutUs') }}</router-link>
    </h5>

    <router-link :to="{ name: 'Home'}">
      <svg class="h-[180px] w-[200px]">
        <use xlink:href="#logo-large"></use>
      </svg>
    </router-link>

    <h5 class="flex flex-1 flex-shrink-1 flex-basis-0">
      <router-link :to="{ name: 'Products'}">{{ $t('navbar.products') }}</router-link>
    </h5>

    <language-selector-component></language-selector-component>
  </nav>
</template>

<script>
import LanguageSelectorComponent from "./LanguageSelectorComponent.vue";

export default {
  components: {
    LanguageSelectorComponent
  },
}
</script>