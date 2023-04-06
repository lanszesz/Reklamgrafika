<template>
  <div class="flex text-center justify-center items-center py-[80px]">
    <div class="flex flex-col justify-center items-center w-[1140px] gap-10">
      <svg class="h-[70px] hidden shrink-0 text-ma-red w-[150px] sm:block">
        <use xlink:href="#leaves-1"></use>
      </svg>
      <h2 class="text-ma-red">
        <slot name="header"></slot>
      </h2>
      <p class="paragraph-display whitespace-pre-line">
        <slot name="text"></slot>
      </p>

      <div class="rounded-[50%] bg-ma-red w-3 h-3 mt-2.5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
}
</script>