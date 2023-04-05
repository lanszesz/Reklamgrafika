<template>
  <div class="bg-ma-bg-01 flex flex-col gap-4 px-[20px] py-[40px] text-center">
    <h3>A Madéfalvi Gyümölcs</h3>

    <div class="flex items-center justify-center">
      <div class="line"></div>

      <svg>
        <use xlink:href="#leaves-1"></use>
      </svg>

      <div class="border border-2 border-ma-dark h-[70px] p-2 rounded-[10px] sm:shrink-0 w-[320px]">
        <div class="bg-ma-red flex h-full items-center justify-center px-2 rounded-[5px]">
          <p class="font-bold leading-[25px] text-[25px] sm:leading-[30px] sm:text-[30px]">{{ $t('guaranteeMsg.guarantee') }}</p>
        </div>
      </div>

      <svg>
        <use xlink:href="#leaves-2"></use>
      </svg>

      <div class="line"></div>
    </div>

    <p class="font-bold leading-[20px] text-[18px] text-ma-dark tracking-[1.1px] sm:leading-[25px] sm:text-[22px]">{{ $t('guaranteeMsg.guaranteeMsg') }}</p>
  </div>
</template>

<style scoped>
svg {
  @apply h-[70px] hidden shrink-0 text-ma-red w-[150px] sm:block;
}

.line {
  @apply bg-ma-dark hidden max-h-[4px] p-[2px] rounded-[10px] shrink w-[264px] md:block;
}
</style>