<template>
  <footer class="pt-[80px] pb-[60px] px-[20px] bg-ma-dark flex flex-col gap-10 justify-center items-center">
    <svg class="w-[150px] h-[78px]">
      <use xlink:href="#logo-small"></use>
    </svg>

    <div class="flex flex-col font-medium">
      <p>
        <span class="font-normal">{{ $t('footer.address') }}</span> {{ $t('footer.addressV') }}
      </p>
      <p>
        <span class="font-normal">{{ $t('footer.phone') }}</span> {{ $t('footer.phoneV') }}
      </p>
      <p>
        <span class="font-normal">{{ $t('footer.fax') }}</span> {{ $t('footer.faxV') }}
      </p>
      <p>
        <span class="font-normal">{{ $t('footer.email') }}</span> {{ $t('footer.emailV') }}
      </p>
    </div>

    <div class="flex text-ma-red gap-6">
      <svg class="h-[30px] w-[30px]">
        <use xlink:href="#facebook"></use>
      </svg>
      <svg class="h-[30px] w-[30px]">
        <use xlink:href="#twitter"></use>
      </svg>
      <svg class="h-[30px] w-[30px]">
        <use xlink:href="#email"></use>
      </svg>
    </div>
  </footer>
</template>

<style scoped>
* {
  @apply leading-[20px] text-[14px] text-center text-white tracking-normal font-roboto;
}
</style>