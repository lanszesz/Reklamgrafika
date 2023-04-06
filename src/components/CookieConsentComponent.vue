<template>
  <div v-if="!consentGiven" class="bg-[#f8f8f8] bottom-0 fixed flex items-center justify-between p-4 w-full z-50">
    <p>
      {{ $t('cookieConsent.text') }}
    </p>
    <button @click="giveConsent" class="primary-button">
      {{ $t('cookieConsent.button') }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      consentGiven: false,
    };
  },
  methods: {
    giveConsent() {
      this.consentGiven = true;
      // Store consent status in localStorage
      localStorage.setItem('cookieConsent', 'true');
    },
  },
  mounted() {
    // Check if consent is already given, and update the data accordingly
    if (localStorage.getItem('cookieConsent') === 'true') {
      this.consentGiven = true;
    }
  },
};
</script>
