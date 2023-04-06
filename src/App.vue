<template>
  <div>
    <nav-bar-component></nav-bar-component>
    <router-view></router-view>
    <guarantee-msg-component></guarantee-msg-component>
    <footer-component></footer-component>
    <svg-component></svg-component>
    <cookie-consent-component></cookie-consent-component>
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import GuaranteeMsgComponent from "./components/GuaranteeMsgComponent.vue";
import CookieConsentComponent from "./components/CookieConsentComponent.vue";

export default {
  components: {
    GuaranteeMsgComponent,
    FooterComponent,
    NavBarComponent,
    CookieConsentComponent
  },
}
</script>