<template>
  <div class="language-selector-container">
    <div class="language-selector-button-container">
      <button @click="toggleLocale" class="language-selector-button" :class="activeButton('hu')">Hu</button>
      <button @click="toggleLocale" class="language-selector-button" :class="activeButton('ro')">Ro</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    activeButton() {
      return (locale) => ({
        'language-selector-button-active': this.currentLocale === locale,
      });
    },
  },
  methods: {
    toggleLocale() {
      if (this.currentLocale === 'hu') {
        this.$i18n.locale = 'ro';
      } else {
        this.$i18n.locale = 'hu';
      }

      localStorage.setItem('locale', this.currentLocale);
    },
  },
  created() {
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      this.$i18n.locale = storedLocale;
    }
  }
}
</script>

<style scoped>
.language-selector-container {
  @apply bg-[#FCFCFC] p-[6px] rounded-md shadow-ma-big w-fit;
}

.language-selector-button-container {
  @apply bg-ma-bg-01 flex justify-between rounded-[3px] w-[104px];
}

.language-selector-button {
  @apply bg-ma-bg-01 font-bold h-[46px] leading-5 p-[3px] rounded-[3px] text-[16px] text-ma-dark tracking-[-0.32px] w-[46px];
}

.language-selector-button-active {
  @apply bg-ma-red text-white;
}
</style>