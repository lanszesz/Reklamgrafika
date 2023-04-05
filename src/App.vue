<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar-component></nav-bar-component>
    <router-view></router-view>
    <guarantee-msg-component></guarantee-msg-component>
    <footer-component></footer-component>
    <svg-component></svg-component>
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import GuaranteeMsgComponent from "./components/GuaranteeMsgComponent.vue";

export default {
  components: {
    GuaranteeMsgComponent,
    FooterComponent,
    NavBarComponent
  },
}
</script>