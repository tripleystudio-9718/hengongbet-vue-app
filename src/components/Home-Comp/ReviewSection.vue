<template>
  <div class="section-container">
    <div class="content-wrapper">
      <!-- Header -->
      <div class="header-wrapper">
        <div class="main-title">{{ $t('testimonials.header.title') }}</div>
        <div class="accent-subtitle">{{ $t('testimonials.header.subtitle') }}</div>
        <div class="rating-display">
          <span class="rating-value">{{ $t('testimonials.header.rating') }}</span>
          <div class="stars-group">
            <span v-for="n in 5" :key="n" class="star-icon">★</span>
          </div>
          <span class="rating-description">{{ $t('testimonials.header.review_count') }}</span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="two-column-layout">
        <!-- Left Side - Quote and Title -->
        <div class="control-panel">
          <div class="quote-display">
            <img :src="quotationIcon" :alt="$t('testimonials.alt_text.quotation')" class="quote-icon" />
          </div>
          <div class="panel-title">
            {{ $t('testimonials.control.title') }}
          </div>
          
          <!-- Progress Bar -->
          <div class="navigation-controls">
            <button 
              @click="prevSlide"
              class="control-button"
              :title="$t('testimonials.navigation.previous')"
            >
              <img :src="nextRightArrow" :alt="$t('testimonials.alt_text.previous')" class="control-arrow-icon left-arrow" />
            </button>
            
            <div class="progress-container">
              <div 
                class="progress-indicator"
                :style="{ width: progressWidth + '%' }"
              />
            </div>
            
            <button 
              @click="nextSlide"
              class="control-button"
              :title="$t('testimonials.navigation.next')"
            >
              <img :src="nextRightArrow" :alt="$t('testimonials.alt_text.next')" class="control-arrow-icon" />
            </button>
          </div>
        </div>

        <!-- Right Side - Testimonials Slider -->
        <div class="slider-wrapper" ref="sliderContainer">
          <div 
            class="slider-track"
            ref="sliderTrack"
            :style="sliderStyle"
            @mousedown="handleStart"
            @touchstart="handleStart"
          >
            <div 
              v-for="(testimonial, index) in displayTestimonials"
              :key="`testimonial-${testimonial.id}-${index}`"
              class="slide-item"
            >
              <!-- Testimonial Card -->
              <div 
                class="testimonial-card"
                :style="{ 
                  backgroundImage: `url(${messageBg})`
                }"
              >
                <!-- Content Area -->
                <div class="card-body">
                  <!-- Testimonial Text -->
                  <p class="review-text">
                    {{ testimonial.text }}
                  </p>
                  
                  <!-- Stars at bottom -->
                  <div class="rating-stars">
                    <span 
                      v-for="n in 5" 
                      :key="n" 
                      class="star-rating"
                      :class="{ 'star-active': n <= testimonial.rating }"
                    >★</span>
                  </div>
                </div>
              </div>
              
              <!-- User Info -->
              <div class="user-profile">
                <div class="profile-avatar">
                  <img 
                    v-if="testimonial.avatar"
                    :src="testimonial.avatar" 
                    :alt="testimonial.name"
                    class="avatar-photo"
                  />
                  <span v-else class="avatar-initial">
                    {{ testimonial.name.charAt(0) }}
                  </span>
                </div>
                <div class="profile-info">
                  <div class="profile-name">
                    {{ testimonial.name }}
                  </div>
                  <div class="profile-timestamp">
                    {{ formatTimeAgo(testimonial.timeAgo) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import messageBg from '@/assets/message-bg.png'
import quotationIcon from '@/assets/quotation_icon.svg'
import nextRightArrow from '@/assets/next-right-arrow.svg'
import avatar1 from '@/assets/avatar-1.png'
import avatar2 from '@/assets/avatar-2.png'
import avatar3 from '@/assets/avatar-3.png'

export default {
  name: 'CustomerTestimonials',
  data() {
    return {
      currentSlide: 0,
      isAutoPlay: true,
      autoPlayInterval: null,
      cardWidth: 320,
      cardGap: 24,
      messageBg,
      quotationIcon,
      nextRightArrow,
      avatar1,
      avatar2,
      avatar3,
      duplicateCount: 50, // Much larger number for true infinite scrolling
      
      // Drag state
      isDragging: false,
      dragStartX: 0,
      dragStartTime: 0,
      initialTransform: 0,
      currentTransform: 0,
      
      // Base testimonials data with original messages
      testimonials: [
        {
          id: 1,
          name: "Mohamed Fitri Aiman",
          timeAgo: "2 days ago",
          rating: 5,
          text: "Saya kaki game, dah cuba banyak website kasino, tapi Winbox memang lain. Game banyak pilihan, dari slot sampai live kasino. Website pun senang guna, loading laju. Kalau ada masalah, support pun cepat reply. Memang puas hati, sekarang kawan-kawan saya pun main kat sini",
          avatar: avatar1
        },
        {
          id: 2,
          name: "Knesia Pang Suet Yin",
          timeAgo: "1 week ago", 
          rating: 5,
          text: "—开始朋友介绍Winbox我还半信半疑，后来目己注册玩了才知道亮的不同。网站界面很清晰，不卡，玩起来很顺手。最重要的是他们的优惠活动很多，什么迎新奖励、返水、红包都有。几乎每次上线都会有惊喜，感觉他们真的在回馈玩家，不像别的网站只是吸钱。现在我介绍给几个朋友了，太象都说很值！",
          avatar: avatar2
        },
        {
          id: 3,
          name: "Bolok Low Kai Xian",
          timeAgo: "3 mins ago",
          rating: 5,
          text: "Been using Winbox for a while now. What keeps me here is how easy everything is. The site runs smoothly and customer service responds fast and friendly. Withdrawals? Always quick. Other sites made cashing out a headache, but Winbox is hassle- free. Highly recommend.",
          avatar: avatar3
        }
      ]
    }
  },
  computed: {
    displayTestimonials() {
      // Create multiple duplicates for better infinite scrolling
      const duplicates = [];
      for (let i = 0; i < this.duplicateCount; i++) {
        duplicates.push(...this.testimonials.map((testimonial, index) => ({
          ...testimonial,
          uniqueId: `${testimonial.id}-${i}-${index}` // Unique identifier for each duplicate
        })));
      }
      return duplicates;
    },
    totalSlides() {
      return this.testimonials.length;
    },
    totalDuplicatedSlides() {
      return this.displayTestimonials.length;
    },
    realIndex() {
      return ((this.currentSlide % this.totalSlides) + this.totalSlides) % this.totalSlides;
    },
    progressWidth() {
      return ((this.realIndex + 1) / this.totalSlides) * 100;
    },
    slideDistance() {
      return this.cardWidth + this.cardGap;
    },
    centerOffset() {
      // Start from the middle set of duplicates
      return Math.floor(this.duplicateCount / 2) * this.totalSlides;
    },
    sliderStyle() {
      const translateX = this.isDragging 
        ? this.currentTransform 
        : -(this.currentSlide * this.slideDistance);
        
      return {
        transform: `translateX(${translateX}px)`,
        transition: this.isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
        width: `${this.displayTestimonials.length * this.slideDistance}px`,
        willChange: this.isDragging ? 'transform' : 'auto'
      };
    }
  },
  mounted() {
    // Start from the middle set of duplicates for seamless infinite scroll
    this.currentSlide = this.centerOffset;
    this.setupEventListeners();
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.cleanup();
  },
  methods: {
    formatTimeAgo(timeAgo) {
      // Parse the original timeAgo and format it with translations
      if (timeAgo.includes('days ago')) {
        const days = timeAgo.match(/(\d+)/)[0];
        return `${days} ${this.$t('testimonials.time.days_ago')}`;
      } else if (timeAgo.includes('week ago')) {
        const weeks = timeAgo.match(/(\d+)/)?.[0] || '1';
        return `${weeks} ${this.$t('testimonials.time.week_ago')}`;
      } else if (timeAgo.includes('mins ago')) {
        const mins = timeAgo.match(/(\d+)/)[0];
        return `${mins} ${this.$t('testimonials.time.mins_ago')}`;
      }
      return timeAgo; // fallback to original if no match
    },
    
    setupEventListeners() {
      document.addEventListener('mousemove', this.handleMove, { passive: false });
      document.addEventListener('mouseup', this.handleEnd);
      document.addEventListener('touchmove', this.handleMove, { passive: false });
      document.addEventListener('touchend', this.handleEnd);
      document.addEventListener('touchcancel', this.handleEnd);
    },
    
    cleanup() {
      this.stopAutoPlay();
      document.removeEventListener('mousemove', this.handleMove);
      document.removeEventListener('mouseup', this.handleEnd);
      document.removeEventListener('touchmove', this.handleMove);
      document.removeEventListener('touchend', this.handleEnd);
      document.removeEventListener('touchcancel', this.handleEnd);
    },
    
    handleStart(event) {
      this.isDragging = true;
      this.stopAutoPlay();
      
      const clientX = event.type === 'mousedown' ? event.clientX : event.touches[0].clientX;
      this.dragStartX = clientX;
      this.dragStartTime = Date.now();
      this.initialTransform = -(this.currentSlide * this.slideDistance);
      this.currentTransform = this.initialTransform;
      
      event.preventDefault();
    },
    
    handleMove(event) {
      if (!this.isDragging) return;
      
      const clientX = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX;
      const deltaX = clientX - this.dragStartX;
      this.currentTransform = this.initialTransform + deltaX;
      
      event.preventDefault();
    },
    
    handleEnd(event) {
      if (!this.isDragging) return;
      
      this.isDragging = false;
      
      const clientX = event.type === 'mouseup' ? event.clientX : 
                     (event.changedTouches ? event.changedTouches[0].clientX : this.dragStartX);
      const deltaX = clientX - this.dragStartX;
      const deltaTime = Date.now() - this.dragStartTime;
      const velocity = Math.abs(deltaX) / deltaTime;
      
      const distanceThreshold = this.slideDistance * 0.25; // Reduced threshold for easier swiping
      const velocityThreshold = 0.3; // Reduced velocity threshold
      
      let shouldSlide = false;
      let direction = 0;
      
      if (Math.abs(deltaX) > distanceThreshold || velocity > velocityThreshold) {
        shouldSlide = true;
        direction = deltaX > 0 ? -1 : 1;
      }
      
      if (shouldSlide) {
        if (direction > 0) {
          this.goToSlide(this.currentSlide + 1);
        } else {
          this.goToSlide(this.currentSlide - 1);
        }
      } else {
        this.goToSlide(this.currentSlide);
      }
      
      setTimeout(() => {
        this.startAutoPlay();
      }, 2000); // Reduced delay before auto-play resumes
    },
    
    goToSlide(targetSlide) {
      // For true circular behavior, just move to the target slide
      this.currentSlide = targetSlide;
    },
    
    handleInfiniteLoop() {
      // Remove all repositioning logic - let it flow naturally
      // The CSS transform will handle the positioning
    },
    
    nextSlide() {
      this.stopAutoPlay();
      this.goToSlide(this.currentSlide + 1);
      setTimeout(() => {
        this.startAutoPlay();
      }, 3000);
    },
    
    prevSlide() {
      this.stopAutoPlay();
      this.goToSlide(this.currentSlide - 1);
      setTimeout(() => {
        this.startAutoPlay();
      }, 3000);
    },
    
    startAutoPlay() {
      this.stopAutoPlay();
      if (this.isAutoPlay && !this.isDragging) {
        this.autoPlayInterval = setInterval(() => {
          if (!this.isDragging) {
            this.currentSlide++; // Just increment, no bounds checking
          }
        }, 4000);
      }
    },
    
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    }
  }
}
</script>

<style scoped>
/* Global Layout Classes */
.section-container {
  background: #27272A;
  padding: 1rem 1rem;
  color: white;
}

.content-wrapper {
  max-width: 80rem;
  margin: 0 auto;
}

.header-wrapper {
  text-align: center;
  margin-bottom: 3rem;
}

.two-column-layout {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

/* Global Typography Classes */
.main-title {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.accent-subtitle {
  color: #F2B240;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.panel-title {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2rem;
}

/* Rating Components */
.rating-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.rating-value {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
}

.stars-group {
  display: flex;
}

.star-icon {
  color: #F2B240;
  font-size: 1.125rem;
}

.rating-description {
  color: #9CA3AF;
}

/* Control Panel */
.control-panel {
  flex-shrink: 0;
  width: 20rem;
}

.quote-display {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.quote-icon {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

/* Navigation Controls */
.navigation-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.control-button {
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.control-button:hover:not(:disabled) {
  background: #4B5563;
}

.control-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.control-arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  filter: brightness(0) saturate(100%) invert(100%);
}

.left-arrow {
  transform: scaleX(-1);
}

.progress-container {
  flex: 1;
  height: 0.25rem;
  background: #ffffff;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-indicator {
  height: 100%;
  background: #F2B240;
  border-radius: 9999px;
  transition: width 0.3s ease-out;
}

/* Slider Components */
.slider-wrapper {
  flex: 1;
  overflow: hidden;
  cursor: grab;
  user-select: none;
}

.slider-wrapper:active {
  cursor: grabbing;
}

.slider-track {
  display: flex;
  gap: 1.5rem;
  user-select: none;
  backface-visibility: hidden;
  perspective: 1000px;
}

.slide-item {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 320px;
}

/* Testimonial Card */
.testimonial-card {
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  position: relative;
  width: 100%;
  min-height: 300px;
  height: auto;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: stretch;
}

.card-quote-display {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 2;
}

.mini-quote-icon {
  width: 1.75rem;
  height: 1.75rem;
  opacity: 0.7;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem 2.5rem 1rem;
  margin: 0.75rem;
  position: relative;
  z-index: 1;
}

.rating-stars {
  display: flex;
  gap: 0.125rem;
  justify-content: flex-start;
  margin-top: 1rem;
}

.star-rating {
  font-size: 1rem;
  color: #4B5563;
  line-height: 1;
}

.star-active {
  color: #F2B240;
}

.review-text {
  color: #E5E7EB;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  white-space: pre-wrap;
  text-align: left;
  flex: 1;
  display: flex;
  align-items: center;
}

/* User Profile */
.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-left: 2.5rem;
  margin-top: -25px;
}

.profile-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.avatar-photo {
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.profile-name {
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.profile-timestamp {
  color: #9CA3AF;
  font-size: 0.75rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-container {
    text-align: center;
  }
  
  .two-column-layout {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .control-panel {
    width: 100%;
    text-align: center;
    order: 2; /* Move control panel below slider on mobile */
  }
  
  .slider-wrapper {
    order: 1; /* Move slider above control panel on mobile */
    width: 100%;
  }
  
  /* Hide quote image on mobile */
  .quote-display {
    display: none;
  }
  
  .panel-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .navigation-controls {
    justify-content: center;
    margin-top: 1rem;
  }
  
  .slide-item {
    width: 280px;
  }
  
  .testimonial-card {
    min-height: 260px;
  }
  
  .card-body {
    padding: 1.75rem 2rem 2rem 1.75rem;
  }
  
  .review-text {
    font-size: 0.85rem;
    line-height: 1.5;
  }
  
  .user-profile {
    padding-left: 1.5rem;
    justify-content: center;
  }
  
  /* Center all text content */
  .main-title,
  .accent-subtitle {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .section-container {
    padding: 2rem 1rem;
    text-align: center;
  }
  
  .header-wrapper {
    margin-bottom: 2rem;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .accent-subtitle {
    font-size: 1.5rem;
  }
  
  .panel-title {
    font-size: 1.5rem;
  }
  
  .slider-track {
    gap: 1rem;
  }
  
  .slide-item {
    width: 260px;
  }
  
  .testimonial-card {
    min-height: 260px;
  }
  
  .card-body {
    padding: 1.25rem 1.5rem 1.5rem 1.25rem;
  }
  
  .review-text {
    font-size: 0.75rem;
    line-height: 1.4;
  }
  
  .user-profile {
    padding-left: 1.25rem;
    margin-top: -20px;
  }
  
  .review-text {
    font-size: 0.8rem;
  }
  
  /* Ensure everything is centered */
  .content-wrapper {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 1.5rem 0.5rem;
  }
  
  .main-title {
    font-size: 28px;
    margin: 0;
  }
  
  .accent-subtitle {
    font-size: 16px;
    margin: 0;
  }
  
  .panel-title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  
  .slide-item {
    width: 240px;
  }
  
  .testimonial-card {
    min-height: 240px;
  }
  
  .card-body {
    padding: 0rem 1.25rem 2.25rem 1rem;
  }
  
  .review-text {
    font-size: 0.7rem;
    line-height: 1.3;
  }
  
  .navigation-controls {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .control-button {
    padding: 0.4rem;
  }
  
  .control-arrow-icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>