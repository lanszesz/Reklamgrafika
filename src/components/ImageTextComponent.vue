<template>
  <!--  <div class="flex justify-center bg-ma-dark">
      <div class="flex flex-col items-center lg:flex-row gap-12 max-w-[1980px] w-full" :class="{'flex-row-reverse' : direction}">
        <div class="flex flex-1 flex-basis-0 flex-shrink-1">
          <img :src="imageSrc" class="w-full object-cover" alt="Alma">
        </div>
        <div class="flex flex-col text-white text-center items-center justify-center max-w-[570px] gap-5 text-left py-[220px]">
          <h2>
            <slot name="header"></slot>
          </h2>
          <p class="sh1 text-ma-red">
            <slot name="text"></slot>
          </p>
          <button class="primary-button mt-[80px]">TOVÁBB</button>
        </div>
      </div>
    </div>-->

  <div class="flex justify-center bg-ma-dark h-[810px] max-h-[810px]">
    <div class="flex flex-col items-center lg:flex-row gap-12 max-w-[1980px] w-full" :class="{'flex-row-reverse' : direction}">
      <div class="flex flex-1 flex-basis-0 overflow-clip h-full flex-shrink-1 justify-center items-center max-w-[900px]">
        <img :src="imageSrc" class="w-full  object-contain" alt="Alma">
      </div>
      <div class="flex flex-col text-white text-center items-center justify-center max-w-[570px] gap-5 text-left">
        <h2>
          <slot name="header"></slot>
        </h2>
        <p class="sh1 text-ma-red">
          <slot name="text"></slot>
        </p>
        <button class="primary-button mt-[80px]">TOVÁBB</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: Boolean,
    imageSrc: String
  },
}
</script>