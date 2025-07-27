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
      
      <!-- Notice Popup -->
      <div v-if="showNoticePopup" class="notice-popup">
        <div class="popup-content">
          <h3>Important Notice</h3>
          <p>{{ fullNoticeText }}</p>
          <button @click="showNoticePopup = false" class="close-btn">Close</button>
        </div>
      </div>
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
          <div class="promo-card">
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
      noticeText: "Notice: The following games will not count the amount of code played only the winnings and losses: MONKEY KING - 'Dragon Tiger Blue', 'Dragon Tiger', 'Single Pick', 'Roulette73', 'Baccarat' EVOLUTION - 'First Person Craps', 'Craps', 'First Person Video Poker'...",
      fullNoticeText: "Notice: The following games will not count the amount of code played only the winnings and losses: MONKEY KING - 'Dragon Tiger Blue', 'Dragon Tiger', 'Single Pick', 'Roulette73', 'Baccarat' EVOLUTION - 'First Person Craps', 'Craps', 'First Person Video Poker', 'Video Poker', 'Caribbean Stud Poker', 'Texas Hold'em Bonus Poker', 'Three Card Poker', 'Pai Gow Poker', 'Red Dog', 'War', 'Hi-Lo', 'Andar Bahar', 'Teen Patti', 'Dragon Tiger', 'Sic Bo', 'Craps Live', 'Monopoly Live', 'Dream Catcher', 'Cash or Crash', 'Crazy Time', 'Mega Ball', 'Football Studio', 'Side Bet City', 'Lightning Dice', 'Lightning Roulette', 'Lightning Blackjack', 'Lightning Baccarat'.",
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
    onSwiper(swiper) {
      this.swiperInstance = swiper
    },
    onSlideChange(swiper) {
      console.log('Slide changed to:', swiper.activeIndex)
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
  padding: 4px;
  border-radius: 4px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.dropdown-arrow:hover {
  background: #334155;
  color: #fbbf24;
}

.dropdown-arrow svg.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.dropdown-arrow svg {
  transition: transform 0.3s ease;
}

/* Notice Popup */
.notice-popup {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #1e293b;
  border: 1px solid #334155;
  border-top: none;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.popup-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.popup-content h3 {
  color: #fbbf24;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.popup-content p {
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 16px;
}

.close-btn {
  background: #fbbf24;
  color: #0f172a;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: #f59e0b;
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
</style>