<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar-component></nav-bar-component>
    <router-view></router-view>
    <svg-component></svg-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
    NavBarComponent
  },
}
</script>