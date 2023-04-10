<template>
  <div class="bg-ma-dark flex justify-center overflow-clip xl:max-h-[810px]">
    <div class="flex flex-col gap-10 items-center max-w-[1920px] min-w-screen w-screen xl:flex-row" :class="{'xl:flex-row-reverse' : direction}">
      <img :src="imageSrc" class="flex-grow max-h-[500px] object-cover object-fit w-full 2xl:max-w-[900px] xl:max-h-[2000px] xl:max-w-[700px]" alt="Alma">
      <div class="flex flex-1 flex-basis-0 flex-col flex-shrink-1 gap-5 max-w-[570px] p-2 pb-16 place-items-center text-center text-white xl:pb-0 xl:place-items-start xl:text-left"
           :class="{'xl:place-items-end xl:text-right' : direction}">
        <h2>
          <slot name="header"></slot>
        </h2>
        <p class="sh1 text-ma-red">
          <slot name="text"></slot>
        </p>
        <button @click="$emit('scroll')" class="primary-button mt-[80px]">TOVÁBB</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['scroll'],
  props: {
    direction: Boolean,
    imageSrc: String
  },
}
</script>