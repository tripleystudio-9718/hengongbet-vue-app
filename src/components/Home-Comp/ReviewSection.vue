<template>
  <div class="testimonials-section">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="main-title">Testimonials</h2>
        <h3 class="subtitle">Real stories. Real wins. Real excitement.</h3>
        <div class="rating-header">
          <span class="rating-score">4.8/5</span>
          <div class="stars-container">
            <span v-for="n in 5" :key="n" class="star">★</span>
          </div>
          <span class="review-count">Based On 1200 reviews</span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <!-- Left Side - Quote and Title -->
        <div class="left-panel">
          <div class="quote-icon">
            <img :src="quotationIcon" alt="Quotation" class="quote-image" />
          </div>
          <h2 class="section-title">
            What Our<br />
            customers are<br />
            saying
          </h2>
          
          <!-- Progress Bar -->
          <div class="controls-container">
            <button 
              @click="prevSlide"
              class="nav-button"
              :disabled="isTransitioning"
            >
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div class="progress-bar">
              <div 
                class="progress-fill"
                :style="{ width: progressWidth + '%' }"
              />
            </div>
            
            <button 
              @click="nextSlide"
              class="nav-button"
              :disabled="isTransitioning"
            >
              <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right Side - Testimonials Slider -->
        <div class="slider-container" ref="sliderContainer">
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
              class="testimonial-wrapper"
            >
              <!-- Testimonial Card -->
              <div 
                class="testimonial-card"
                :style="{ 
                  backgroundImage: `url(${messageBg})`
                }"
              >
                <!-- Quote Icon -->
                <div class="card-quote-icon">
                  <img :src="quotationIcon" alt="Quote" class="quote-icon-small" />
                </div>
                
                <!-- Content Area matching message bubble shape -->
                <div class="card-content">
                  <!-- Stars -->
                  <div class="card-stars">
                    <span 
                      v-for="n in 5" 
                      :key="n" 
                      class="card-star"
                      :class="{ 'active': n <= testimonial.rating }"
                    >★</span>
                  </div>
                  
                  <!-- Testimonial Text -->
                  <p class="testimonial-text">
                    {{ testimonial.text }}
                  </p>
                </div>
              </div>
              
              <!-- User Info - Outside the message background -->
              <div class="user-info">
                <div class="avatar">
                  <img 
                    v-if="testimonial.avatar"
                    :src="testimonial.avatar" 
                    :alt="testimonial.name"
                    class="avatar-image"
                  />
                  <span v-else class="avatar-initial">
                    {{ testimonial.name.charAt(0) }}
                  </span>
                </div>
                <div class="user-details">
                  <div class="user-name">
                    {{ testimonial.name }}
                  </div>
                  <div class="time-ago">
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

export default {
  name: 'CustomerTestimonials',
  data() {
    return {
      currentSlide: 0,
      targetSlide: 0,
      isAutoPlay: true,
      autoPlayInterval: null,
      cardWidth: 320,
      cardGap: 24,
      messageBg,
      quotationIcon,
      
      // Drag state
      isDragging: false,
      dragStartX: 0,
      dragStartTime: 0,
      initialTransform: 0,
      currentTransform: 0,
      
      // Animation state
      isTransitioning: false,
      animationId: null,
      
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
      // Create 3 sets for smooth infinite scrolling
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
    // Start from middle set for smooth bi-directional scrolling
    this.currentSlide = this.totalSlides;
    this.targetSlide = this.totalSlides;
    this.setupEventListeners();
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.cleanup();
  },
  methods: {
    setupEventListeners() {
      // Mouse events
      document.addEventListener('mousemove', this.handleMove, { passive: false });
      document.addEventListener('mouseup', this.handleEnd);
      document.addEventListener('mouseleave', this.handleEnd);
      
      // Touch events
      document.addEventListener('touchmove', this.handleMove, { passive: false });
      document.addEventListener('touchend', this.handleEnd);
      document.addEventListener('touchcancel', this.handleEnd);
    },
    
    cleanup() {
      this.stopAutoPlay();
      
      // Remove event listeners
      document.removeEventListener('mousemove', this.handleMove);
      document.removeEventListener('mouseup', this.handleEnd);
      document.removeEventListener('mouseleave', this.handleEnd);
      document.removeEventListener('touchmove', this.handleMove);
      document.removeEventListener('touchend', this.handleEnd);
      document.removeEventListener('touchcancel', this.handleEnd);
      
      // Cancel any ongoing animation
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
    },
    
    handleStart(event) {
      if (this.isTransitioning) return;
      
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
                     event.changedTouches ? event.changedTouches[0].clientX : this.dragStartX;
      const deltaX = clientX - this.dragStartX;
      const deltaTime = Date.now() - this.dragStartTime;
      const velocity = Math.abs(deltaX) / deltaTime; // pixels per ms
      
      // Determine if we should slide based on distance or velocity
      const distanceThreshold = this.slideDistance * 0.3;
      const velocityThreshold = 0.5; // pixels per ms
      
      let shouldSlide = false;
      let direction = 0;
      
      if (Math.abs(deltaX) > distanceThreshold || velocity > velocityThreshold) {
        shouldSlide = true;
        direction = deltaX > 0 ? -1 : 1; // opposite to drag direction
      }
      
      if (shouldSlide) {
        if (direction > 0) {
          this.goToSlide(this.currentSlide + 1);
        } else {
          this.goToSlide(this.currentSlide - 1);
        }
      } else {
        // Snap back to current slide
        this.goToSlide(this.currentSlide);
      }
      
      // Restart autoplay after a delay
      setTimeout(() => {
        this.startAutoPlay();
      }, 3000);
    },
    
    goToSlide(targetSlide) {
      if (this.isTransitioning) return;
      
      this.isTransitioning = true;
      this.currentSlide = targetSlide;
      this.targetSlide = targetSlide;
      
      // Handle infinite loop boundaries
      setTimeout(() => {
        this.handleInfiniteLoop();
      }, 800); // Match transition duration
    },
    
    handleInfiniteLoop() {
      let needsReset = false;
      let newPosition = this.currentSlide;
      
      // Check if we need to reset position for seamless loop
      if (this.currentSlide >= this.totalSlides * 2) {
        newPosition = this.totalSlides;
        needsReset = true;
      } else if (this.currentSlide < this.totalSlides) {
        newPosition = this.totalSlides;
        needsReset = true;
      }
      
      if (needsReset) {
        // Instantly move to equivalent position without transition
        setTimeout(() => {
          this.currentSlide = newPosition;
          this.targetSlide = newPosition;
          
          // Re-enable transitions after reset
          this.$nextTick(() => {
            this.isTransitioning = false;
          });
        }, 50);
      } else {
        this.isTransitioning = false;
      }
    },
    
    nextSlide() {
      if (this.isTransitioning) return;
      this.goToSlide(this.currentSlide + 1);
    },
    
    prevSlide() {
      if (this.isTransitioning) return;
      this.goToSlide(this.currentSlide - 1);
    },
    
    startAutoPlay() {
      this.stopAutoPlay();
      if (this.isAutoPlay && !this.isDragging) {
        this.autoPlayInterval = setInterval(() => {
          if (!this.isDragging && !this.isTransitioning) {
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
.testimonials-section {
  background: #27272A;
  padding: 4rem 1rem;
  color: white;
}

.main-title {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.subtitle {
  color: #F2B240;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.rating-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.rating-score {
  color: #F2B240;
  font-size: 1.5rem;
  font-weight: bold;
}

.stars-container {
  display: flex;
}

.star {
  color: #F2B240;
  font-size: 1.125rem;
}

.review-count {
  color: #9CA3AF;
}

.main-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.left-panel {
  flex-shrink: 0;
  width: 20rem;
}

.quote-icon {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.quote-image {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.section-title {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.controls-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.nav-button {
  padding: 0.5rem;
  border-radius: 9999px;
  background: #374151;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-button:hover:not(:disabled) {
  background: #4B5563;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: white;
}

.progress-bar {
  flex: 1;
  height: 0.25rem;
  background: #374151;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #F2B240;
  border-radius: 9999px;
  transition: width 0.3s ease-out;
}

.slider-container {
  flex: 1;
  overflow: hidden;
  cursor: grab;
  user-select: none;
}

.slider-container:active {
  cursor: grabbing;
}

.slider-track {
  display: flex;
  gap: 1.5rem;
  user-select: none;
  backface-visibility: hidden;
  perspective: 1000px;
}

.testimonial-wrapper {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 320px;
}

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

.card-quote-icon {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 2;
}

.quote-icon-small {
  width: 1.75rem;
  height: 1.75rem;
  opacity: 0.7;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.75rem 2rem 1.5rem 1.75rem;
  margin: 0.5rem;
  position: relative;
  z-index: 1;
}

.card-stars {
  display: flex;
  margin-bottom: 1rem;
  gap: 0.125rem;
}

.card-star {
  font-size: 1rem;
  color: #4B5563;
  line-height: 1;
}

.card-star.active {
  color: #F2B240;
}

.testimonial-text {
  color: #E5E7EB;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  flex: 1;
  word-wrap: break-word;
  hyphens: auto;
  white-space: pre-wrap;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-left: 0.5rem;
}

.avatar {
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

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  object-fit: cover;
}

.user-details {
  flex: 1;
}

.user-name {
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.time-ago {
  color: #9CA3AF;
  font-size: 0.75rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .left-panel {
    width: 100%;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .testimonial-wrapper {
    width: 280px;
  }
  
  .testimonial-card {
    min-height: 260px;
  }
  
  .card-content {
    padding: 1.5rem 1.75rem 1.25rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .testimonials-section {
    padding: 2rem 1rem;
  }
  
  .slider-track {
    gap: 1rem;
  }
  
  .testimonial-wrapper {
    width: 260px;
  }
}
</style>