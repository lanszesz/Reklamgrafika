<template>
  <button @click="toggleLocale">{{ currentLocale }}</button>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    toggleLocale() {
      if (this.currentLocale === 'hu') {
        this.$i18n.locale = 'ro';
      } else {
        this.$i18n.locale = 'hu';
      }
    },
  }
}
</script>