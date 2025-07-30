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
      :speed="800"
      :loopAdditionalSlides="2"
      :watchSlidesProgress="true"
      :centeredSlides="true"
      class="hero-banner-swiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @autoplayTimeLeft="onAutoplayTimeLeft"
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="`slide-${index}`"
        class="hero-banner-slide"
        @click="navigateToPromotion"
      >
        <img 
          :src="image" 
          :alt="`Gaming Banner ${index + 1}`" 
          class="banner-image" 
        />
      </swiper-slide>
      
      <!-- Custom Navigation Arrows -->
      <div class="hero-swiper-button-prev" slot="button-prev" @click.stop="prevSlide">
        <div class="nav-arrow nav-arrow-left"></div>
      </div>
      <div class="hero-swiper-button-next" slot="button-next" @click.stop="nextSlide">
        <div class="nav-arrow nav-arrow-right"></div>
      </div>
      
      <!-- Custom Pagination -->
      <div class="hero-swiper-pagination" slot="pagination"></div>
      
      <!-- Progress Ring for Auto-play (Optional) -->
      <div v-if="showProgressRing" class="autoplay-progress">
        <svg class="progress-ring" width="60" height="60">
          <circle
            class="progress-ring-circle"
            :stroke-dasharray="progressCircumference + ' ' + progressCircumference"
            :stroke-dashoffset="progressOffset"
            cx="30"
            cy="30"
            r="25"
          />
        </svg>
        <span class="progress-text">{{ Math.ceil(autoplayTimeLeft / 1000) }}</span>
      </div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { localePath } from '@/router';

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
      default: 4000 // Slightly longer for better UX
    },
    showNavigation: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    showProgressRing: {
      type: Boolean,
      default: false // Optional progress indicator
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    showPromotionOverlay: {
      type: Boolean,
      default: false // Simplified - no overlay needed
    }
  },
  data() {
    return {
      swiperInstance: null,
      currentSlideIndex: 0,
      autoplayTimeLeft: 0,
      progressCircumference: 2 * Math.PI * 25 // radius = 25
    }
  },
  computed: {
    autoPlayConfig() {
      return this.autoPlay ? {
        delay: this.autoPlayInterval,
        disableOnInteraction: false,
        pauseOnMouseEnter: this.pauseOnHover,
        reverseDirection: false,
        waitForTransition: true,
        stopOnLastSlide: false // Ensures unlimited movement
      } : false
    },
    navigationConfig() {
      return this.showNavigation ? {
        nextEl: '.hero-swiper-button-next',
        prevEl: '.hero-swiper-button-prev',
        disabledClass: 'swiper-button-disabled'
      } : false
    },
    paginationConfig() {
      return this.showPagination ? {
        el: '.hero-swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
        type: 'bullets'
      } : false
    },
    progressOffset() {
      const progress = 1 - (this.autoplayTimeLeft / this.autoPlayInterval)
      return this.progressCircumference * progress
    }
  },
  mounted() {
    // Ensure auto-play starts immediately
    this.$nextTick(() => {
      if (this.swiperInstance && this.autoPlay) {
        this.startAutoplay()
      }
    })
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper
      
      // Start autoplay immediately
      if (this.autoPlay) {
        this.startAutoplay()
      }
    },
    onSlideChange(swiper) {
      this.currentSlideIndex = swiper.realIndex
      this.$emit('slideChange', {
        currentIndex: this.currentSlideIndex,
        totalSlides: this.images.length
      })
    },
    onAutoplayTimeLeft(swiper, time, progress) {
      this.autoplayTimeLeft = time
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
    },
    startAutoplay() {
      if (this.swiperInstance && this.swiperInstance.autoplay) {
        this.swiperInstance.autoplay.start()
      }
    },
    stopAutoplay() {
      if (this.swiperInstance && this.swiperInstance.autoplay) {
        this.swiperInstance.autoplay.stop()
      }
    },
    resumeAutoplay() {
      if (this.swiperInstance && this.swiperInstance.autoplay) {
        this.swiperInstance.autoplay.start()
      }
    },
    // Manual controls for external use
    pauseSlider() {
      this.stopAutoplay()
    },
    playSlider() {
      this.startAutoplay()
    },
    // Navigation to promotion page
    navigateToPromotion() {
      try {
        // Get current locale from route
        const currentLocale = this.$route.meta?.locale || 'en';
        
        // Generate localized path for promotion page
        const promotionPath = localePath('/promotion', currentLocale);
        
        // Navigate to promotion page
        this.$router.push(promotionPath);
        
        console.log('Navigating to promotion page:', promotionPath);
      } catch (error) {
        console.error('Navigation error:', error);
        // Fallback navigation
        this.$router.push('/promotion');
      }
    }
  },
  beforeUnmount() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true)
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
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 600px;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  transition: transform 0.8s ease, filter 0.3s ease;
}

/* Custom Navigation Arrows */
.hero-swiper-button-next,
.hero-swiper-button-prev {
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
}

.hero-swiper-button-next:hover,
.hero-swiper-button-prev:hover {
  background: linear-gradient(135deg, rgba(242, 178, 64, 0.9), rgba(242, 178, 64, 0.7));
  border-color: rgba(242, 178, 64, 0.5);
  color: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 12px 40px rgba(242, 178, 64, 0.4);
}

.hero-swiper-button-next:active,
.hero-swiper-button-prev:active {
  transform: translateY(-50%) scale(0.95);
}

.hero-swiper-button-prev {
  left: 30px;
}

.hero-swiper-button-next {
  right: 30px;
}

.nav-arrow {
  width: 24px;
  height: 24px;
  position: relative;
}

.nav-arrow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform-origin: center;
}

.nav-arrow-left::before {
  transform: translate(-25%, -50%) rotate(-135deg);
}

.nav-arrow-right::before {
  transform: translate(-75%, -50%) rotate(45deg);
}

/* Custom Pagination Dots */
.hero-swiper-pagination {
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
  transform: scale(1.2);
}

:deep(.swiper-pagination-bullet-active) {
  background: #F2B240 !important;
  border-color: #F2B240 !important;
  transform: scale(1.3);
}

/* Progress Ring for Auto-play */
.autoplay-progress {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}

.progress-ring {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
}

.progress-ring-circle {
  fill: transparent;
  stroke: rgba(242, 178, 64, 0.8);
  stroke-width: 2;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.1s linear;
}

.progress-text {
  position: absolute;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

/* Smooth slide transitions */
:deep(.swiper-slide) {
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

:deep(.swiper-slide-active) {
  transform: scale(1);
}

:deep(.swiper-slide-prev),
:deep(.swiper-slide-next) {
  transform: scale(0.95);
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .banner-image {
    height: 100px;
  }

  .hero-swiper-button-next,
  .hero-swiper-button-prev {
    width: 30px;
    height: 30px;
  }

  .nav-arrow {
    width: 20px;
    height: 20px;
  }

  .nav-arrow::before {
    width: 10px;
    height: 10px;
  }

  .hero-swiper-button-prev {
    left: 15px;
  }

  .hero-swiper-button-next {
    right: 15px;
  }

  .hero-swiper-pagination {
    bottom: 15px;
    gap: 8px;
  }

  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
  }

  .autoplay-progress {
    top: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
  }

  .progress-text {
    font-size: 12px;
  }

  .promotion-text h3 {
    font-size: 1.5rem;
  }

  .promotion-text p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .banner-image {
    height: 100px;
  }

  .hero-swiper-button-next,
  .hero-swiper-button-prev {
    width: 30px !important;
    height: 30px !important;
  }

  .nav-arrow {
    width: 18px;
    height: 18px;
  }

  .nav-arrow::before {
    width: 9px;
    height: 9px;
  }

  .hero-swiper-button-prev {
    left: 10px;
  }

  .hero-swiper-button-next {
    right: 10px;
  }

  .autoplay-progress {
    display: none; /* Hide on very small screens */
  }

  .promotion-text h3 {
    font-size: 1.2rem;
  }

  .promotion-text p {
    font-size: 0.9rem;
  }
}

@media (max-width: 360px) {
  .nav-arrow {
    width: 16px;
    height: 16px;
  }

  .nav-arrow::before {
    width: 8px;
    height: 8px;
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
  .hero-swiper-button-next,
  .hero-swiper-button-prev {
    width: 55px;
    height: 55px;
    touch-action: manipulation;
  }

  .hero-banner-swiper {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  /* Always show overlay on touch devices */
  .slide-overlay {
    opacity: 0.7;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .hero-banner-slide,
  .banner-image,
  :deep(.swiper-slide) {
    transition: none;
  }
  
  .autoplay-progress {
    display: none;
  }
}

/* Focus states for accessibility */
.hero-swiper-button-next:focus,
.hero-swiper-button-prev:focus {
  outline: 2px solid #F2B240;
  outline-offset: 2px;
}

:deep(.swiper-pagination-bullet):focus {
  outline: 2px solid #F2B240;
  outline-offset: 2px;
}

.hero-banner-slide:focus {
  outline: 2px solid #F2B240;
  outline-offset: 2px;
}
</style>