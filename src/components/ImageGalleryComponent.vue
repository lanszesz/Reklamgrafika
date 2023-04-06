<template>
  <div class="flex justify-between items-center flex-grow">
    <button @click="previousImage" class="navigation-button" :disabled="currentIndex === 0">
      <svg>
        <use xlink:href="#navigate-back"></use>
      </svg>
    </button>

    <div class="flex flex-col items-center relative">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentImage">
          <img :src="currentImage" class="w-[900px] h-[600px] object-cover rounded-xl" alt=""/>
        </div>
      </transition>

      <div class="flex gap-2 absolute bottom-[50px]">
        <span v-for="(image, index) in images" :key="index" class="bg-ma-red w-3 h-3 mt-2.5" :class="{ 'opacity-50': index !== currentIndex }"></span>
      </div>
    </div>

    <button @click="nextImage" class="navigation-button" :disabled="currentIndex === images.length - 1">
      <svg>
        <use xlink:href="#navigate-forward"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ImageGalleryComponent',
  props: {
    images: Array
  },
  data() {
    return {
      currentIndex: 0,
      timer: null
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.resetTimer();
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.resetTimer();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.nextImage();
      }, 5000);
    },
    resetTimer() {
      clearInterval(this.timer);
      this.startTimer();
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.25s ease;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>