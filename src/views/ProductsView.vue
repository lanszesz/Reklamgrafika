<template>
  <div class="flex flex-col">
    <div class="bg-ma-light pt-[120px] pb-[240px] flex justify-center">
      <div class="w-[1100px]">
        <image-gallery-component :images="galleryImages"></image-gallery-component>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="bg-white top-[-120px] w-full max-w-[1100px] relative flex flex-col text-center items-center px-24 py-[83px] shadow-[0_50px_80px_#0D988C1A] rounded-xl">
        <svg class="svg-leaves">
          <use xlink:href="#leaves-1"></use>
        </svg>
        <h1>
          {{ $t('productsView.heading') }}
        </h1>
        <p class="sh1 text-ma-red">
          {{ $t('productsView.subHeading') }}
        </p>
        <p class="p-01">
          {{ $t('productsView.text') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageGalleryComponent from "../components/ImageGalleryComponent.vue";

export default {
  name: 'Products',
  components: {
    ImageGalleryComponent
  },
  data() {
    return {
      galleryImages: [
        '/img/alma-medium.jpg',
        '/img/alma2-medium.jpg',
        '/img/alma3-medium.jpg',
      ]
    }
  }
};
</script>