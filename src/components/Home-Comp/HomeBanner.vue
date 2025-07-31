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
    
    <!-- Mobile Auth Buttons - Only visible on mobile -->
    <div class="mobile-auth-buttons">
      <button @click="goToLogin" class="mobile-login-btn">
        {{ $t('auth.login') }}
      </button>
      <button @click="goToRegister" class="mobile-register-btn">
        {{ $t('auth.register') }}
      </button>
    </div>
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
      default: 4000
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
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    showPromotionOverlay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      swiperInstance: null,
      currentSlideIndex: 0,
      autoplayTimeLeft: 0,
      progressCircumference: 2 * Math.PI * 25
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
        stopOnLastSlide: false
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
    this.$nextTick(() => {
      if (this.swiperInstance && this.autoPlay) {
        this.startAutoplay()
      }
    })
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper
      
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
    pauseSlider() {
      this.stopAutoplay()
    },
    playSlider() {
      this.startAutoplay()
    },
    navigateToPromotion() {
      try {
        const currentLocale = this.$route.meta?.locale || 'en';
        const promotionPath = localePath('/promotion', currentLocale);
        this.$router.push(promotionPath);
        console.log('Navigating to promotion page:', promotionPath);
      } catch (error) {
        console.error('Navigation error:', error);
        this.$router.push('/promotion');
      }
    },
    // Mobile auth button methods
    goToLogin() {
      try {
        const currentLocale = this.$route.meta?.locale || 'en';
        const loginPath = localePath('/login', currentLocale);
        this.$router.push(loginPath);
      } catch (error) {
        console.error('Login navigation error:', error);
        this.$router.push('/login');
      }
    },
    goToRegister() {
      try {
        const currentLocale = this.$route.meta?.locale || 'en';
        const registerPath = localePath('/register', currentLocale);
        this.$router.push(registerPath);
      } catch (error) {
        console.error('Register navigation error:', error);
        this.$router.push('/register');
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
/* Existing styles remain the same... */
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

.mobile-auth-buttons {
  background-color: #27272A;
  display: none; 
  flex-direction: row;
  gap: 16px;
  padding: 5px 24px;
  justify-content: center;
}

.mobile-login-btn {
  flex: 1;
  max-width: 50%;
  padding: 14px 20px;
  border: 2px solid #F1AE3D;
  color: #F1AE3D;
  background: transparent;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.mobile-login-btn:hover,
.mobile-login-btn:active {
  background: #F1AE3D;
  color: #1a202c;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(241, 174, 61, 0.3);
}

.mobile-register-btn {
  flex: 1;
  max-width: 50%;
  padding: 14px 20px;
  background: linear-gradient(135deg, #F2B240 0%, #ED9226 100%);
  color: #1a202c;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(237, 146, 38, 0.3);
  text-align: center;
  white-space: nowrap;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.mobile-register-btn:hover,
.mobile-register-btn:active {
  background: linear-gradient(135deg, #F8C455 0%, #F1A533 100%);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(237, 146, 38, 0.4);
  border-color: rgba(255, 255, 255, 0.2);
}

/* All existing navigation and pagination styles remain unchanged... */
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

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .mobile-auth-buttons {
    display: flex !important;
    padding: 10px;
  }

  .banner-image {
    height: 100px;
  }

  .hero-swiper-button-next,
  .hero-swiper-button-prev {
    width: 30px !important;
    height: 30px !important;
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
}

@media (max-width: 480px) {
  .banner-image {
    height: 100px;
  }

  .mobile-login-btn,
  .mobile-register-btn {
    padding: 5px 16px;
    font-size: 0.95rem;
    max-width: 50%;
  }

  .hero-swiper-button-next,
  .hero-swiper-button-prev {
    width: 40px;
    height: 40px;
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
    display: none;
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

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {

  .hero-swiper-button-next,
  .hero-swiper-button-prev {
    width: 50px;
    height: 50px;
    touch-action: manipulation;
  }

  .hero-banner-swiper {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .hero-banner-slide,
  .banner-image,
  :deep(.swiper-slide),
  .mobile-login-btn,
  .mobile-register-btn {
    transition: none;
  }
  
  .autoplay-progress {
    display: none;
  }
}

/* Focus states for accessibility */
.mobile-login-btn:focus,
.mobile-register-btn:focus {
  outline: 2px solid #F2B240;
  outline-offset: 2px;
}

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