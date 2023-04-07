<template>
  <div class="flex items-center justify-center px-[20px] py-[150px] text-center">
    <div class="flex flex-col gap-10 items-center justify-center w-[1140px]">
      <svg class="h-[70px] hidden shrink-0 text-ma-red w-[150px] sm:block">
        <use xlink:href="#leaves-1"></use>
      </svg>
      <h2 class="text-ma-red">
        <slot name="header"></slot>
      </h2>
      <p class="paragraph-display">
        <slot name="text"></slot>
      </p>
      <div class="bg-ma-red h-3 mt-2.5 rounded-[50%] w-3"></div>
    </div>
  </div>
</template>