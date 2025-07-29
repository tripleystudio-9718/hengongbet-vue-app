<template>
  <section class="hero-banner">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="autoPlayConfig"
      :navigation="navigationConfig"
      :pagination="paginationConfig"
      class="hero-banner-swiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="`slide-${index}`"
        class="hero-banner-slide"
      >
        <img 
          :src="image" 
          :alt="`Gaming Banner ${index + 1}`" 
          class="banner-image" 
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: 'HeroBanner',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    modules: {
      type: Array,
      required: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayInterval: {
      type: Number,
      default: 3000
    },
    showNavigation: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperInstance: null,
      currentSlideIndex: 0
    }
  },
  computed: {
    autoPlayConfig() {
      return this.autoPlay ? {
        delay: this.autoPlayInterval,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      } : false
    },
    navigationConfig() {
      return this.showNavigation ? {
        nextEl: '.hero-swiper-button-next',
        prevEl: '.hero-swiper-button-prev',
      } : false
    },
    paginationConfig() {
      return this.showPagination ? {
        el: '.hero-swiper-pagination',
        clickable: true,
        dynamicBullets: true
      } : false
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper
    },
    onSlideChange(swiper) {
      this.currentSlideIndex = swiper.realIndex
    },
    nextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext()
      }
    },
    prevSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev()
      }
    },
    goToSlide(index) {
      if (this.swiperInstance) {
        this.swiperInstance.slideToLoop(index)
      }
    }
  }
}
</script>

<style scoped>
/* Hero Banner Carousel */
.hero-banner {
  position: relative;
  overflow: hidden;
  background: #0a0e1a;
  width: 100%;
}

.hero-banner-swiper {
  width: 100%;
  height: auto;
  position: relative;
}

.hero-banner-slide {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 600px;
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

/* Custom Navigation Arrows */
:deep(.hero-swiper-button-next),
:deep(.hero-swiper-button-prev) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 20;
  user-select: none;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  margin-top: 0;
}

:deep(.hero-swiper-button-next):hover,
:deep(.hero-swiper-button-prev):hover {
  background: linear-gradient(135deg, rgba(242, 178, 64, 0.9), rgba(242, 178, 64, 0.7));
  border-color: rgba(242, 178, 64, 0.5);
  color: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 12px 40px rgba(242, 178, 64, 0.4);
}

:deep(.hero-swiper-button-next):active,
:deep(.hero-swiper-button-prev):active {
  transform: translateY(-50%) scale(0.95);
}

:deep(.hero-swiper-button-next)::after,
:deep(.hero-swiper-button-prev)::after {
  content: '';
  width: 0;
  height: 0;
}

:deep(.hero-swiper-button-prev) {
  left: 30px;
}

:deep(.hero-swiper-button-prev)::before {
  content: '';
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 18L9 12L15 6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center;
  background-size: contain;
}

:deep(.hero-swiper-button-next) {
  right: 30px;
}

:deep(.hero-swiper-button-next)::before {
  content: '';
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 18L15 12L9 6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center;
  background-size: contain;
}

/* Custom Pagination Dots */
:deep(.hero-swiper-pagination) {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 20;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
  margin: 0;
}

:deep(.swiper-pagination-bullet):hover {
  border-color: rgba(242, 178, 64, 0.8);
  background: rgba(242, 178, 64, 0.3);
}

:deep(.swiper-pagination-bullet-active) {
  background: #F2B240 !important;
  border-color: #F2B240 !important;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .banner-image {
    max-height: 300px;
  }

  :deep(.hero-swiper-button-next),
  :deep(.hero-swiper-button-prev) {
    width: 50px;
    height: 50px;
  }

  :deep(.hero-swiper-button-prev)::before,
  :deep(.hero-swiper-button-next)::before {
    width: 20px;
    height: 20px;
  }

  :deep(.hero-swiper-button-prev) {
    left: 15px;
  }

  :deep(.hero-swiper-button-next) {
    right: 15px;
  }

  :deep(.hero-swiper-pagination) {
    bottom: 15px;
    gap: 8px;
  }

  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .banner-image {
    max-height: 250px;
  }

  :deep(.hero-swiper-button-next),
  :deep(.hero-swiper-button-prev) {
    width: 45px;
    height: 45px;
  }

  :deep(.hero-swiper-button-prev)::before,
  :deep(.hero-swiper-button-next)::before {
    width: 18px;
    height: 18px;
  }

  :deep(.hero-swiper-button-prev) {
    left: 10px;
  }

  :deep(.hero-swiper-button-next) {
    right: 10px;
  }
}

@media (max-width: 360px) {
  .banner-image {
    max-height: 200px;
  }

  :deep(.hero-swiper-button-next),
  :deep(.hero-swiper-button-prev) {
    width: 40px;
    height: 40px;
  }

  :deep(.hero-swiper-button-prev)::before,
  :deep(.hero-swiper-button-next)::before {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .banner-image {
    max-height: 200px;
  }
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .banner-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

@media (hover: none) and (pointer: coarse) {
  :deep(.hero-swiper-button-next),
  :deep(.hero-swiper-button-prev) {
    width: 55px;
    height: 55px;
    touch-action: manipulation;
  }

  .hero-banner-swiper {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
}
</style>