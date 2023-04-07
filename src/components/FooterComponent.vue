<template>
  <footer class="bg-ma-dark flex flex-col gap-10 items-center justify-center pb-[60px] pt-[80px] px-[20px]">
    <svg class="h-[78px] w-[150px]">
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

    <div class="flex gap-6 text-ma-red">
      <a href="https://www.facebook.com/profile.php?id=100081250688765" target="_blank">
        <svg class="h-[30px] w-[30px]">
          <use xlink:href="#facebook"></use>
        </svg>
      </a>
      <svg class="cursor-pointer h-[30px] w-[30px]">
        <use xlink:href="#twitter"></use>
      </svg>
      <svg class="cursor-pointer h-[30px] w-[30px]">
        <use xlink:href="#email"></use>
      </svg>
    </div>
  </footer>
</template>

<style scoped>
* {
  @apply font-roboto leading-[20px] text-[14px] text-center text-white tracking-normal;
}
</style>