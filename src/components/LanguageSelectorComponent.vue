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
  @apply p-[6px] bg-[#FCFCFC] shadow-ma-big rounded-md w-fit;
}

.language-selector-button-container {
  @apply bg-ma-bg-01 rounded-[3px] w-[104px] flex justify-between;
}

.language-selector-button {
  @apply text-[16px] font-bold rounded-[3px] w-[46px] h-[46px] tracking-[-0.32px] leading-5 bg-ma-bg-01 text-ma-dark p-[3px];
}

.language-selector-button-active {
  @apply bg-ma-red text-white;
}
</style>