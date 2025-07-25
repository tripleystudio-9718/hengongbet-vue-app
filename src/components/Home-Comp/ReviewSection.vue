<template>
  <div class="section-container">
    <div class="content-wrapper">
      <!-- Header -->
      <div class="header-wrapper">
        <h2 class="main-title">{{ headerContent.title }}</h2>
        <h3 class="accent-subtitle">{{ headerContent.subtitle }}</h3>
        <div class="rating-display">
          <span class="rating-value">{{ headerContent.rating }}</span>
          <div class="stars-group">
            <span v-for="n in 5" :key="n" class="star-icon">★</span>
          </div>
          <span class="rating-description">{{ headerContent.reviewCount }}</span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="two-column-layout">
        <!-- Left Side - Quote and Title -->
        <div class="control-panel">
          <div class="quote-display">
            <img :src="quotationIcon" alt="Quotation" class="quote-icon" />
          </div>
          <h2 class="panel-title">
            {{ controlContent.title }}
          </h2>
          
          <!-- Progress Bar -->
          <div class="navigation-controls">
            <button 
              @click="prevSlide"
              class="control-button"
            >
              <img :src="nextRightArrow" alt="Previous" class="control-arrow-icon left-arrow" />
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
            >
              <img :src="nextRightArrow" alt="Next" class="control-arrow-icon" />
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
                    {{ testimonial.timeAgo }}
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
      
      // Drag state
      isDragging: false,
      dragStartX: 0,
      dragStartTime: 0,
      initialTransform: 0,
      currentTransform: 0,
      
      headerContent: {
        title: "Testimonials",
        subtitle: "Real stories. Real wins. Real excitement.",
        rating: "4.8/5",
        reviewCount: "Based On 1200 reviews"
      },
      
      controlContent: {
        title: "What Our Customers Are Saying"
      },
      
      testimonials: [
        {
          id: 1,
          name: "Mohamed Fitri Aiman",
          timeAgo: "2 days ago",
          rating: 5,
          text: "Saya laki game, dah cuba banyak website kasino, tapi Winbox memang letak. Game banyak pilihan, dan slot sampai live kasino. Website pun senang guna, loading laju. Kalau ada masalah, support pun cepat reply. Memang puas hati, sekarang kawan kawan saya pun main kat sini.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        },
        {
          id: 2,
          name: "Knesia Pang Suet Yin",
          timeAgo: "1 week ago", 
          rating: 5,
          text: "一开始用友介绍Winbox我还半信半疑，后来自己注册玩才发现真的很不错。网站界面很清晰，不卡，玩起来很顺手。最重要的是提现的时候真的很快的，什么出款说法、安全、红色防护，几乎没火线就会到账的，感觉他们是在兑现社服务承诺而不是一种欺骗的行为。",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        },
        {
          id: 3,
          name: "Bolok Low Kai Xin",
          timeAgo: "3 mins ago",
          rating: 5,
          text: "Been using Winbox for a while now and I must say, it's one here is how easy everything is. The platform runs so smoothly and customer service is top-notch. Very professional and friendly. Withdrawals? Always quick. I've tried many sites made cashing out such a breeze. Customer service is hassle-free. Highly recommend!",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
          id: 4,
          name: "Ahmad Rahman",
          timeAgo: "5 days ago",
          rating: 5,
          text: "Platform yang sangat baik! Interface mudah digunakan dan games yang disediakan sangat menarik. Customer service sangat membantu dan withdrawal process sangat cepat.",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        {
          id: 5,
          name: "Lisa Wong",
          timeAgo: "1 day ago",
          rating: 5,
          text: "Excellent platform with great games and fast payouts. The live casino games are particularly impressive. Highly recommended for anyone looking for a reliable gaming experience.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        }
      ]
    }
  },
  computed: {
    displayTestimonials() {
      return [...this.testimonials, ...this.testimonials, ...this.testimonials];
    },
    totalSlides() {
      return this.testimonials.length;
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
    this.currentSlide = this.totalSlides;
    this.setupEventListeners();
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.cleanup();
  },
  methods: {
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
      
      const distanceThreshold = this.slideDistance * 0.3;
      const velocityThreshold = 0.5;
      
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
      }, 3000);
    },
    
    goToSlide(targetSlide) {
      this.currentSlide = targetSlide;
      
      setTimeout(() => {
        this.handleInfiniteLoop();
      }, 100);
    },
    
    handleInfiniteLoop() {
      let newPosition = this.currentSlide;
      
      if (this.currentSlide >= this.totalSlides * 2) {
        newPosition = this.totalSlides;
      } else if (this.currentSlide < this.totalSlides) {
        newPosition = this.totalSlides;
      }
      
      if (newPosition !== this.currentSlide) {
        this.$nextTick(() => {
          this.currentSlide = newPosition;
        });
      }
    },
    
    nextSlide() {
      this.goToSlide(this.currentSlide + 1);
    },
    
    prevSlide() {
      this.goToSlide(this.currentSlide - 1);
    },
    
    startAutoPlay() {
      this.stopAutoPlay();
      if (this.isAutoPlay && !this.isDragging) {
        this.autoPlayInterval = setInterval(() => {
          if (!this.isDragging) {
            this.nextSlide();
          }
        }, 5000);
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
  min-height: 280px;
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
  padding: 1rem 2rem 3rem 1.75rem;
  margin: 0.5rem;
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
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
  white-space: pre-wrap;
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
  .two-column-layout {
    flex-direction: column;
    gap: 2rem;
  }
  
  .control-panel {
    width: 100%;
    text-align: center;
  }
  
  .panel-title {
    font-size: 2rem;
  }
  
  .slide-item {
    width: 280px;
  }
  
  .testimonial-card {
    min-height: 260px;
  }
  
  .card-body {
    padding: 1.5rem 1.75rem 1.25rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .section-container {
    padding: 2rem 1rem;
  }
  
  .slider-track {
    gap: 1rem;
  }
  
  .slide-item {
    width: 260px;
  }
}
</style>