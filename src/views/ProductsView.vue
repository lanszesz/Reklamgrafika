<template>
  <div class="flex flex-col">
    <div class="bg-ma-light flex justify-center pb-[240px] pt-[120px]">
      <div class="w-[1100px]">
        <image-gallery-component :images="galleryImages"></image-gallery-component>
      </div>
    </div>

    <div class="flex justify-center px-4">
      <div class="bg-white flex flex-col items-center max-w-[1100px] px-[20px] py-[83px] relative rounded-xl shadow-[0_50px_80px_#0D988C1A] text-center top-[-120px] sm:px-24">
        <svg class="h-[40px] mb-[55px] text-ma-red w-[50px]">
          <use xlink:href="#brand-element-01"></use>
        </svg>
        <h1>
          {{ $t('productsView.heading') }}
        </h1>
        <p class="mb-[110px] sh1 text-ma-red">
          {{ $t('productsView.subHeading') }}
        </p>
        <p class="mb-[80px] p-01">
          {{ $t('productsView.text') }}
        </p>
        <svg class="h-[40px] text-ma-red w-[50px]">
          <use xlink:href="#brand-element-02"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import ImageGalleryComponent from "../components/ImageGalleryComponent.vue";

export default {
  components: {
    ImageGalleryComponent
  },
  data() {
    return {
      galleryImages: [
        '/img/alma-medium.jpg',
        '/img/alma2-medium.jpg',
        '/img/alma3-medium.jpg',
        '/img/alma4-medium.jpg',
        '/img/alma5-medium.jpg',
      ]
    }
  }
};
</script>