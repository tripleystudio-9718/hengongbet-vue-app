<template>
  <div class="promotion-section max-w-7xl mx-auto items-center justify-between">

    <div class="notice-bar">
      <div class="notice-content">
        <div class="notice-icon">
          <img :src="soundIcon" alt="Sound" class="sound-icon-image" />
        </div>
        <div class="marquee-container">
          <div class="marquee-text">
            {{ noticeText }}
          </div>
        </div>
        <button class="dropdown-arrow" @click="toggleNoticePopup">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            :class="{ 'rotated': showNoticePopup }"
          >
            <path d="M7 10L12 15L17 10H7Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      
      <!-- Improved Notice Popup -->
      <transition name="popup-fade">
        <div v-if="showNoticePopup" class="notice-popup-overlay" @click="closePopupOnOverlay">
          <div class="notice-popup" @click.stop>
            <div class="popup-header">
              <div class="popup-title">
                <div class="popup-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" fill="#fbbf24"/>
                  </svg>
                </div>
                <h3>Important Gaming Notice</h3>
              </div>
              <button @click="showNoticePopup = false" class="close-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            
            <div class="popup-body">
              <div class="notice-content-text">
                <p>{{ fullNoticeText }}</p>
              </div>
            </div>
            
            <div class="popup-footer">
              <button @click="showNoticePopup = false" class="understand-btn">
                I Understand
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Promotion Cards Swiper -->
    <div class="promotion-swiper-container">
      <Swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="swiperSpaceBetween"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :speed="500"
        :grab-cursor="true"
        :allow-touch-move="true"
        :centeredSlides="false"
        :slides-per-group="1"
        :threshold="20"
        :longSwipesRatio="0.2"
        :longSwipesMs="200"
        :followFinger="true"
        :touchRatio="1"
        :watchSlidesProgress="true"
        :simulateTouch="true"
        :touchStartPreventDefault="false"
        :slideToClickedSlide="false"
        :breakpoints="swiperBreakpoints"
        class="promotion-swiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(promo, index) in promotions"
          :key="`slide-${promo.id}`"
          class="swiper-slide"
        >
          <div class="promo-card" @click="navigateToPromotion">
            <img :src="promo.image" :alt="promo.title" class="promo-image" />
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { localePath } from '@/router';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

import soundIcon from '@/assets/sound-icon.svg'
import promotion1 from '@/assets/promotion-1.png'
import promotion2 from '@/assets/promotion-2.png'
import promotion3 from '@/assets/promotion-3.png'
import promotion4 from '@/assets/promotion-4.png'
import promotion5 from '@/assets/promotion-5.png'

export default {
  name: 'PromotionSection',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showNoticePopup: false,
      swiperInstance: null,
      modules: [Autoplay],
      noticeText: "Notice: The following games will not count the amount of code played only the winnings and losses: MONKEY KING - 'Dragon Tiger Blue', 'Dragon Tiger Red', 'Single Pick', 'Roulette73', 'Baccarat' EVOLUTION - 'First Person Craps', 'Craps'...",
      fullNoticeText: "Notice: The following games will not count the amount of code played only the winnings and losses. MONKEY KING - \"Dragon Tiger Blue，Dragon Tiger Red，Single Pick，Roulette73，Baccarat\" EVOLUTION - \"First Person Craps、Craps 、First Person Video Poker 、Video Poker 、All Blackjack Games\" JILI - \"Blackjack and Blackjack Lucky Ladies\" Pragmatic Play （Live） - \"All Blackjack Game\" Pragmatic Play （Slot） - \"Roulette 、Baccarat、 Dragon Bonus Baccarat、Dragon Tiger\" JDB - \"Gamble\" Thank you for your understanding and cooperation,and wish you a happy game.",
      promotions: [
        { id: 1, title: 'Top-up Bonus 68%', image: promotion1 },
        { id: 2, title: 'Top-up Bonus 200%', image: promotion2 },
        { id: 3, title: 'Daily Rebate Up to 3%', image: promotion3 },
        { id: 4, title: 'Referral Rebate Up to 10%', image: promotion4 },
        { id: 5, title: 'Top-up Rebate 0.5%', image: promotion5 }
      ],
      soundIcon
    }
  },
  computed: {
    swiperBreakpoints() {
      return {
        // Mobile devices (320px and up)
        320: {
          slidesPerView: 1.5,
          spaceBetween: 12,
          centeredSlides: false,
        },
        // Small mobile devices (480px and up)
        480: {
          slidesPerView: 1.8,
          spaceBetween: 15,
          centeredSlides: false,
        },
        // Tablets (640px and up)
        640: {
          slidesPerView: 2.5,
          spaceBetween: 16,
          centeredSlides: false,
        },
        // Large tablets (768px and up)
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
          centeredSlides: false,
        },
        // Desktop (1024px and up)
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
          centeredSlides: false,
        },
        // Large desktop (1200px and up)
        1200: {
          slidesPerView: 4.5,
          spaceBetween: 20,
          centeredSlides: false,
        }
      }
    },
    swiperSpaceBetween() {
      // Default space between slides
      return 20
    }
  },
  methods: {
    toggleNoticePopup() {
      this.showNoticePopup = !this.showNoticePopup
    },
    closePopupOnOverlay(event) {
      if (event.target === event.currentTarget) {
        this.showNoticePopup = false
      }
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper
    },
    onSlideChange(swiper) {
      console.log('Slide changed to:', swiper.activeIndex)
    },
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
  }
}
</script>

<style scoped>
.promotion-section {
  background-color: #27272A;
  padding: 0;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
}

/* Notice Bar */
.notice-bar {
  position: relative;
}

.notice-content {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: 0 auto;
}

.notice-icon {
  color: #fbbf24;
  margin-right: 12px;
  flex-shrink: 0;
}

.marquee-container {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 12px;
}

.marquee-text {
  display: inline-block;
  color: #e2e8f0;
  font-size: 0.9rem;
  animation: marquee 60s linear infinite;
  padding-left: 100%;
}

@keyframes marquee {
  0% { 
    transform: translateX(0%); 
  }
  100% { 
    transform: translateX(-100%); 
  }
}

.dropdown-arrow {
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-arrow:hover {
  background: #334155;
  color: #fbbf24;
  transform: scale(1.05);
}

.dropdown-arrow svg.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.dropdown-arrow svg {
  transition: transform 0.3s ease;
}

/* Enhanced Notice Popup */
.notice-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.notice-popup {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 1px solid #475569;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
}

.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid #475569;
  background: rgba(251, 191, 36, 0.05);
}

.popup-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.popup-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(251, 191, 36, 0.2);
  border-radius: 50%;
}

.popup-title h3 {
  color: #fbbf24;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.close-button {
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: #475569;
  color: #fbbf24;
  transform: scale(1.1);
}

.popup-body {
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto;
}

.notice-content-text {
  background: rgba(251, 191, 36, 0.1);
  border-left: 4px solid #fbbf24;
  padding: 20px;
  border-radius: 0 8px 8px 0;
}

.notice-content-text p {
  color: #e2e8f0;
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  white-space: pre-line;
}

.popup-footer {
  padding: 20px 24px 24px 24px;
  border-top: 1px solid #475569;
  display: flex;
  justify-content: center;
  background: rgba(251, 191, 36, 0.02);
}

.understand-btn {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #0f172a;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
}

.understand-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(251, 191, 36, 0.4);
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.understand-btn:active {
  transform: translateY(0);
}

/* Popup Animations */
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: all 0.3s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
}

.popup-fade-enter-from .notice-popup,
.popup-fade-leave-to .notice-popup {
  transform: scale(0.9) translateY(-20px);
}

.popup-fade-enter-to .notice-popup,
.popup-fade-leave-from .notice-popup {
  transform: scale(1) translateY(0);
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .notice-popup-overlay {
    padding: 10px;
  }
  
  .notice-popup {
    border-radius: 12px;
    max-height: 85vh;
  }
  
  .popup-header {
    padding: 16px 16px 0 16px;
  }
  
  .popup-title h3 {
    font-size: 1.1rem;
  }
  
  .popup-icon {
    width: 32px;
    height: 32px;
  }
  
  .popup-body {
    padding: 16px;
  }
  
  .notice-content-text {
    padding: 16px;
  }
  
  .popup-footer {
    padding: 16px;
  }
  
  .understand-btn {
    padding: 10px 24px;
    font-size: 0.9rem;
  }
}

/* Promotion Swiper */
.promotion-swiper-container {
  position: relative;
  padding: 20px;
  overflow: hidden;
  margin: 0 auto;
}

.promotion-swiper {
  width: 100%;
  padding: 0;
  overflow: visible;
}

.swiper-slide {
  flex-shrink: 0;
  width: auto;
}

.promo-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 100px;
  box-sizing: border-box;
  width: 100%;
}

.promo-card:hover {
  transform: translateY(-5px);
}

.promo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  border-radius: 12px;
  pointer-events: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.sound-icon-image {
  width: 20px;
  height: 20px;
}

/* Mobile-specific adjustments */
@media (max-width: 480px) {
  .promotion-section {
    padding: 0;
  }
  
  .notice-content {
    padding: 10px 0;
  }
  
  .marquee-text {
    font-size: 0.8rem;
  }
  
  .promotion-swiper-container {
    padding: 0 15px;
  }
  
  .promo-card {
    height: 80px;
    border-radius: 8px;
  }
  
  .promo-image {
    border-radius: 8px;
  }
  
  /* Ensure 1.5 items are clearly visible */
  .swiper-slide {
    width: calc(66.66% - 8px) !important;
  }
}

/* Very small mobile devices */
@media (max-width: 360px) {
  .promotion-swiper-container {
    padding: 15px 10px;
  }
  
  .notice-content {
    padding: 8px 10px;
  }
  
  .promo-card {
    height: 70px;
  }
  
  /* Ensure 1.5 items fit properly on very small screens */
  .swiper-slide {
    width: calc(66.66% - 6px) !important;
  }
}

/* Tablet adjustments */
@media (min-width: 481px) and (max-width: 768px) {
  .promotion-swiper-container {
    padding: 25px 20px;
  }
  
  .promo-card {
    height: 90px;
  }
}

/* Desktop adjustments */
@media (min-width: 769px) {
  .promotion-swiper-container {
    padding: 30px 20px;
  }
  
  .promo-card {
    height: 100px;
  }
}

/* Perfect Swiper Styles */
.promotion-swiper .swiper-wrapper {
  align-items: stretch;
}

.promotion-swiper.swiper-grab {
  cursor: grab;
}

.promotion-swiper.swiper-grabbing {
  cursor: grabbing;
}

/* Ensure smooth infinite loop */
.promotion-swiper .swiper-slide {
  opacity: 1 !important;
}

.promotion-swiper .swiper-slide-duplicate {
  opacity: 1 !important;
}

/* Touch-friendly improvements for mobile */
@media (hover: none) and (pointer: coarse) {
  .promo-card:hover {
    transform: none;
  }
  
  .promo-card:active {
    transform: scale(0.98);
  }
  
  .dropdown-arrow {
    padding: 8px;
    min-width: 32px;
    min-height: 32px;
  }
}

/* Custom Scrollbar for popup body */
.popup-body::-webkit-scrollbar {
  width: 6px;
}

.popup-body::-webkit-scrollbar-track {
  background: #334155;
  border-radius: 3px;
}

.popup-body::-webkit-scrollbar-thumb {
  background: #fbbf24;
  border-radius: 3px;
}

.popup-body::-webkit-scrollbar-thumb:hover {
  background: #f59e0b;
}
</style>