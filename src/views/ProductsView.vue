<template>
  <div class="flex flex-col">
    <div class="bg-ma-light flex justify-center pb-[240px] pt-[120px] px-[16px]">
      <Splide :has-track="false" :options="splideOptions" aria-label="My Favorite Images" class="relative">
        <SplideTrack>
          <SplideSlide v-for="(image, index) in galleryImages" :key="index">
            <img :src="image" alt="Sample 1">
          </SplideSlide>
        </SplideTrack>

        <div class="splide__arrows hidden lg:block">
          <button class="splide__arrow splide__arrow--prev navigation-button">
            <svg>
              <use xlink:href="#navigate-forward"></use>
            </svg>
          </button>
          <button class="splide__arrow splide__arrow--next navigation-button">
            <svg>
              <use xlink:href="#navigate-forward"></use>
            </svg>
          </button>
        </div>
      </Splide>
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
import {Splide, SplideSlide, SplideTrack} from "@splidejs/vue-splide";

export default {
  components: {
    ImageGalleryComponent,
    Splide,
    SplideTrack,
    SplideSlide,
  },
  data() {
    return {
      galleryImages: [
        '/img/alma-medium.jpg',
        '/img/alma2-medium.jpg',
        '/img/alma3-medium.jpg',
        '/img/alma4-medium.jpg',
        '/img/alma5-medium.jpg',
      ],
      splideOptions: {
        rewind: true,
        height: 600,
        width: 900,
        autoplay: true,
        interval: 5000,
        rewindByDrag: true,
        preloadPages: 3
      }
    }
  }
};
</script>