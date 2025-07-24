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
    <div 
      class="promotion-swiper-container"
      @mousedown="startDrag"
      @mousemove="drag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchstart="startDrag"
      @touchmove="drag"
      @touchend="endDrag"
    >
      <div class="swiper-track" ref="swiperTrack">
        <div 
          v-for="(promo, index) in infinitePromotions" 
          :key="`${promo.id}-${index}`"
          class="swiper-slide"
        >
          <img :src="promo.image" :alt="promo.title" class="promo-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import soundIcon from '@/assets/sound-icon.svg'

import promotion1 from '@/assets/promotion-1.png'
import promotion2 from '@/assets/promotion-2.png'
import promotion3 from '@/assets/promotion-3.png'
import promotion4 from '@/assets/promotion-4.png'
import promotion5 from '@/assets/promotion-5.png'

export default {
  name: 'PromotionSection',
  data() {
    return {
      showNoticePopup: false,
      currentSlide: 0,
      autoPlayInterval: null,
      slideWidth: 0,
      containerWidth: 0,
      isTransitioning: false,
      // Drag functionality
      isDragging: false,
      startX: 0,
      currentX: 0,
      dragOffset: 0,
      initialTransform: 0,
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
    infinitePromotions() {
      return [...this.promotions, ...this.promotions, ...this.promotions]
    }
  },
  mounted() {
    this.calculateDimensions()
    this.startAutoPlay()
    this.setupInfiniteLoop()
    window.addEventListener('resize', this.calculateDimensions)
  },
  beforeUnmount() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval)
    }
    window.removeEventListener('resize', this.calculateDimensions)
  },
  methods: {
    toggleNoticePopup() {
      this.showNoticePopup = !this.showNoticePopup
    },
    calculateDimensions() {
      this.$nextTick(() => {
        const container = this.$refs.swiperTrack?.parentElement
        if (container) {
          this.containerWidth = container.offsetWidth
          // Calculate slide width to show 4.5 items
          this.slideWidth = (this.containerWidth - 80) / 4.5 // 80px for padding
          this.updateSliderPosition()
        }
      })
    },
    setupInfiniteLoop() {
      // Start from the middle set to allow seamless looping
      this.currentSlide = this.promotions.length
      this.$nextTick(() => {
        this.updateSliderPosition(false)
      })
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        if (!this.isDragging) {
          this.nextSlide()
        }
      }, 2000) // Changed to 1 second
    },
    nextSlide() {
      if (this.isTransitioning) return
      
      this.isTransitioning = true
      this.currentSlide++
      this.updateSliderPosition()
      
      // Reset to beginning of middle set when reaching end
      setTimeout(() => {
        if (this.currentSlide >= this.promotions.length * 2) {
          this.currentSlide = this.promotions.length
          this.updateSliderPosition(false)
        }
        this.isTransitioning = false
      }, 300) // Reduced transition time for smoother auto-play
    },
    updateSliderPosition(withTransition = true) {
      const track = this.$refs.swiperTrack
      if (track && this.slideWidth > 0) {
        const offset = -this.currentSlide * (this.slideWidth + 20) + this.dragOffset // 20px gap
        track.style.transition = withTransition ? 'transform 0.3s ease' : 'none'
        track.style.transform = `translateX(${offset}px)`
      }
    },
    // Drag functionality
    getClientX(event) {
      return event.touches ? event.touches[0].clientX : event.clientX
    },
    startDrag(event) {
      this.isDragging = true
      this.startX = this.getClientX(event)
      this.currentX = this.startX
      this.dragOffset = 0
      this.initialTransform = -this.currentSlide * (this.slideWidth + 20)
      
      // Pause auto-play while dragging
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval)
      }
      
      // Prevent default to avoid text selection
      event.preventDefault()
    },
    drag(event) {
      if (!this.isDragging) return
      
      event.preventDefault()
      this.currentX = this.getClientX(event)
      this.dragOffset = this.currentX - this.startX
      
      // Update position with drag offset
      this.updateSliderPosition(false)
    },
    endDrag() {
      if (!this.isDragging) return
      
      this.isDragging = false
      const dragDistance = this.currentX - this.startX
      const threshold = this.slideWidth * 0.3 // 30% of slide width
      
      // Determine if we should move to next/prev slide
      if (Math.abs(dragDistance) > threshold) {
        if (dragDistance > 0) {
          // Dragged right - go to previous slide
          this.prevSlide()
        } else {
          // Dragged left - go to next slide
          this.nextSlide()
        }
      } else {
        // Snap back to current position
        this.dragOffset = 0
        this.updateSliderPosition()
      }
      
      // Reset drag offset
      this.dragOffset = 0
      
      // Resume auto-play
      this.startAutoPlay()
    },
    prevSlide() {
      if (this.isTransitioning) return
      
      this.isTransitioning = true
      this.currentSlide--
      this.updateSliderPosition()
      
      // Reset to end of middle set when reaching beginning
      setTimeout(() => {
        if (this.currentSlide < this.promotions.length) {
          this.currentSlide = this.promotions.length * 2 - 1
          this.updateSliderPosition(false)
        }
        this.isTransitioning = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.promotion-section {
  background-color: #27272A;
  padding: 0;
  width: 1200px;
}

/* Notice Bar */
.notice-bar {
  position: relative;
}

.notice-content {
  display: flex;
  align-items: center;
  padding: 12px 0;
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
  padding: 10px 20px 0 20px;
  overflow: hidden;
  margin: 0 auto;
  cursor: grab;
  user-select: none;
}

.promotion-swiper-container:active {
  cursor: grabbing;
}

.swiper-track {
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;
}

.swiper-slide {
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 150px;
  pointer-events: none; 
}

.swiper-slide:hover {
  transform: translateY(-5px);
}

.promo-image {
  width: 100%;
  height: 80%;
  object-fit: cover;
  display: block;
  pointer-events: none; 
  user-select: none;
}

.sound-icon-image {
    width: 20px;
    height: 20px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .promotion-swiper-container {
    padding: 30px 20px;
  }
}

@media (max-width: 768px) {
  .notice-content {
    padding: 10px 15px;
  }
  
  .marquee-text {
    font-size: 0.8rem;
  }
  
  .promotion-swiper-container {
    padding: 30px 15px;
  }
  
  .swiper-slide {
    height: 120px;
  }
}

@media (max-width: 480px) {
  .promotion-swiper-container {
    padding: 20px 10px;
  }
  
  .swiper-slide {
    height: 100px;
  }
}
</style>