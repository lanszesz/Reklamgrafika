<template>
  <nav-bar-component></nav-bar-component>
  <router-view></router-view>
  <svg-component></svg-component>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";

export default {
  components: {
    NavBarComponent
  },
}
</script>