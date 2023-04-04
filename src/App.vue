<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar-component></nav-bar-component>
    <router-view></router-view>
    <svg-component></svg-component>
    <div class="bg-ma-bg-01 py-[40px] px-[20px] flex flex-col gap-4 items-center justify-center text-center">
      <h3>A Madéfalvi Gyümölcs</h3>
      <div class="flex gap-10 items-center w-full">
        <div class="w-[264px] max-h-[4px] p-[2px] bg-ma-dark rounded-[10px]"></div>
        <svg class="w-[150px] h-[70px] text-ma-red">
          <use xlink:href="#leaves-1"></use>
        </svg>
        <svg class="w-[150px] h-[70px] text-ma-red">
          <use xlink:href="#leaves-2"></use>
        </svg>
        <div class="w-[264px] max-h-[4px] p-[2px] bg-ma-dark rounded-[10px]"></div>
      </div>
      <p class="font-bold leading-[25px] text-[22px] text-ma-dark tracking-[1.1px]">{{ $t('footer.text') }}</p>
    </div>
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