<template>
  <div class="flex justify-center bg-ma-dark">
    <div class="flex gap-12 max-w-[1980px] w-full h-[800px]" :class="{'flex-row-reverse' : direction}">
      <img :src="imageSrc" class="w-[48%] shrink-0 object-cover" alt="Alma">
      <div class="flex flex-col text-white justify-center max-w-[570px] gap-5 text-left">
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
  name: "ImageTextComponent",
  props: {
    direction: Boolean,
    imageSrc: String
  },
}
</script>