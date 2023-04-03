<template>

  <SvgComponent></SvgComponent>

  <div>
    <p>{{ $t('hello') }}, {{ $t('world') }}!</p>
  </div>
  <button @click="addRipple" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
    Click me!
  </button>
  <button class="primary-button">
    TOVÁBB
  </button>
  <button class="secondary-button">
    MÉGSEM
  </button>
  <button class="navigation-button">
    <svg class="h-10 w-10 text-ma-dark">
      <use xlink:href="#navigate-back"></use>
    </svg>
  </button>
  <button class="navigation-button">
    <svg class="h-10 w-10 text-ma-dark">
      <use xlink:href="#navigate-forward"></use>
    </svg>
  </button>
  <h1>Hello World!</h1>
  <LanguageSwitchComponent></LanguageSwitchComponent>
</template>

<script>
import LanguageSwitchComponent from "./components/LanguageSwitchComponent.vue";
import SvgComponent from "./components/SvgComponent.vue";

export default {
  components: {
    SvgComponent,
    LanguageSwitchComponent
  },
  methods: {
    addRipple(event) {
      const button = event.currentTarget;
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      button.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    },
  }
}
</script>

<style>
.ripple {
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple-effect 1s linear;
}

@keyframes ripple-effect {
  to {
    opacity: 0;
    transform: scale(2.5);
  }
}
</style>