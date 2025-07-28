<template>
  <div class="home-page">
    <!-- Hero Banner Carousel Section -->
    <section class="hero-banner">
      <div class="carousel-container"
           @mousedown="startDrag"
           @mousemove="drag"
           @mouseup="endDrag"
           @mouseleave="endDrag"
           @touchstart="startDrag"
           @touchmove="drag"
           @touchend="endDrag">
        
        <div class="carousel-wrapper"
             :style="{
               transform: `translateX(${currentTransform}px)`,
               transition: isDragging ? 'none' : 'transform 0.3s ease-out'
             }"
             ref="carouselWrapper">
          <div v-for="(image, index) in displayImages"
               :key="`slide-${index}`"
               class="carousel-slide">
            <img :src="image" 
                 :alt="`Gaming Banner ${(index % originalImages.length) + 1}`" 
                 class="banner-image" />
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button @click="prevSlide" 
                @mousedown.stop 
                @touchstart.stop 
                class="carousel-arrow carousel-arrow-left" 
                aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <button @click="nextSlide" 
                @mousedown.stop 
                @touchstart.stop 
                class="carousel-arrow carousel-arrow-right" 
                aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="carousel-dots">
          <button v-for="(image, index) in originalImages"
                  :key="`dot-${index}`"
                  @click="goToSlide(index)"
                  :class="['carousel-dot', { active: index === currentSlideIndex }]"
                  :aria-label="`Go to slide ${index + 1}`">
          </button>
        </div>
      </div>
    </section>
        
    <div class="home-container">
      <PromotionSection />
            
      <section class="main-content">
        <div class="content-container">
          <!-- Brand Section -->
          <div class="section-wrapper">
            <p class="subtitle-text">{{ content.brandSection.subtitle }}</p>
            <h2 class="main-title" style="color: #F2B240;">{{ content.brandSection.title }}</h2>
            <p class="description-text">{{ content.brandSection.tagline }}</p>
                                  
            <div class="text-content">
              <p v-for="(paragraph, index) in content.brandSection.paragraphs" :key="index">
                {{ paragraph }}
              </p>
                                        
              <ul class="feature-list">
                <li v-for="(feature, index) in content.brandSection.features" :key="index">
                  • {{ feature }}
                </li>
              </ul>
                                        
              <p>{{ content.brandSection.conclusion }}</p>
            </div>
          </div>
                    
          <FeaturesSection />
        </div>
      </section>
            
      <GamesSection />
      <StepsSection />
      <AppGuide />
      <WhySection />
            
      <!-- Become Affiliate Section -->
      <div class="two-column-section">
        <div class="column-image">
          <img :src="becomeImg" alt="HengOngBet Logo" class="responsive-image" />
        </div>
        <div class="column-text">
          <h2 class="main-title">
            Become a <span class="accent-color">{{ content.affiliateSection.brand }}</span> Affiliate Today
          </h2>
          <p class="subtitle-text">{{ content.affiliateSection.description }}</p>
                    
          <ul class="feature-list-1" style="flex-direction: column;">
            <li v-for="(benefit, index) in content.affiliateSection.benefits" :key="index">
              • {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
            
      <ProviderSection />
      <ReviewSection />
      <FaqSection />
    </div>
  </div>
</template>

<script>
import PromotionSection from '@/components/Home-Comp/PromotionSection.vue'
import FeaturesSection from '@/components/Home-Comp/FeaturesSection.vue'
import GamesSection from '@/components/Home-Comp/GamesSection.vue'
import StepsSection from '@/components/Home-Comp/StepsSection.vue'
import AppGuide from '@/components/Home-Comp/AppGuide.vue'
import WhySection from '@/components/Home-Comp/WhySection.vue'
import ProviderSection from '@/components/Home-Comp/ProviderSection.vue'
import ReviewSection from '@/components/Home-Comp/ReviewSection.vue'
import FaqSection from '@/components/Home-Comp/FaqSection.vue'
import homeBanner from '@/assets/home-banner.png'
import becomeImg from '@/assets/become-img.png'

export default {
  name: 'Home',
  components: {
    PromotionSection,
    FeaturesSection,
    GamesSection,
    StepsSection,
    AppGuide,
    WhySection,
    ProviderSection,
    ReviewSection,
    FaqSection
  },
  data() {
    return {
      homeBanner,
      becomeImg,
      // Carousel data
      currentSlideIndex: 0,
      slideWidth: 0,
      isDragging: false,
      startX: 0,
      currentX: 0,
      dragOffset: 0,
      autoPlayTimer: null,
      isTransitioning: false,
      // Base images for the carousel
      carouselImages: [
        homeBanner,
        homeBanner,
        homeBanner,
        homeBanner,
        homeBanner,
        homeBanner
      ],
      content: {
        brandSection: {
          subtitle: "Trusted Online Casino",
          title: "Heng Ong Bet Official",
          tagline: "Heng Ong Bet - Malaysia's Trusted Online Casino Platform",
          paragraphs: [
            "Founded in 2015, Heng Ong Bet is Malaysia's first all-in-one online entertainment platform. With world-class gaming systems and highest technical support team committed to delivering safe, reliable, and high-quality gaming services to all users.",
            "As one of the leading online gaming platforms in Malaysia, we offer a comprehensive range of gaming options including:"
          ],
          features: [
            "Sports betting",
            "Live casino",
            "Slot games",
            "4D lottery and more"
          ],
          conclusion: "Players enjoy a fair, secure, and seamless gaming experience, with fast deposits and withdrawals."
        },
        whySection: {
          brand: "Heng Ong Bet"
        },
        affiliateSection: {
          brand: "Heng Ong Bet",
          description: "Join HengOngBet's official affiliate program and earn high commissions by promoting Malaysia's top online casino platform. Whether you're a seasoned marketer or just getting started, our tools, tracking system, and support team help you succeed",
          benefits: [
            "Real-time tracking & reports",
            "Up to 50% revenue share",
            "Weekly payout system",
            "Custom promotional banners",
            "Telegram bot & link generator",
            "Dedicated affiliate support",
            "Zero cost to join",
            "Trusted by thousands of agents in Malaysia"
          ]
        },
        globalSection: {
          brand: "Heng Ong Bet",
          title: "We Are Global",
          subtitle: "Heng Ong Bet is Now Expanding Globally",
          description: "Heng Ong Bet is now available in Singapore, with our talented global team supporting growth across Malaysia and Singapore. What unites us? A passion for delivering the best gaming experience. We're also actively expanding into Thailand, Vietnam, Indonesia, Cambodia, the UK, and the USA."
        }
      }
    }
  },
  computed: {
    originalImages() {
      return this.carouselImages.length > 0 ? this.carouselImages : [
        homeBanner,
        homeBanner,
        homeBanner
      ]
    },
    displayImages() {
      // Create infinite loop by adding first and last slides
      const images = this.originalImages
      return [
        images[images.length - 1], // Last slide at beginning
        ...images,                 // Original slides
        images[0]                  // First slide at end
      ]
    },
    currentTransform() {
      // Add 1 to account for the extra slide at the beginning
      const baseTransform = -(this.currentSlideIndex + 1) * this.slideWidth
      return baseTransform + this.dragOffset
    }
  },
  mounted() {
    this.initializeCarousel()
    this.startCarousel()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    this.stopCarousel()
    window.removeEventListener('resize', this.handleResize)
    this.removeGlobalListeners()
  },
  methods: {
    initializeCarousel() {
      this.$nextTick(() => {
        const container = this.$refs.carouselWrapper?.parentElement
        if (container) {
          this.slideWidth = container.offsetWidth
        }
      })
    },
    
    handleResize() {
      this.initializeCarousel()
    },
    
    startCarousel() {
      if (this.autoPlayTimer) return
      this.autoPlayTimer = setInterval(() => {
        if (!this.isDragging && !this.isTransitioning) {
          this.nextSlide()
        }
      }, 3000)
    },
    
    stopCarousel() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer)
        this.autoPlayTimer = null
      }
    },
    
    nextSlide() {
      if (this.isTransitioning) return
      
      this.isTransitioning = true
      this.dragOffset = 0
      this.currentSlideIndex++
      
      // Handle infinite loop
      if (this.currentSlideIndex >= this.originalImages.length) {
        setTimeout(() => {
          this.currentSlideIndex = 0
          this.isTransitioning = false
        }, 300)
      } else {
        setTimeout(() => {
          this.isTransitioning = false
        }, 300)
      }
    },
    
    prevSlide() {
      if (this.isTransitioning) return
      
      this.isTransitioning = true
      this.dragOffset = 0
      this.currentSlideIndex--
      
      // Handle infinite loop
      if (this.currentSlideIndex < 0) {
        setTimeout(() => {
          this.currentSlideIndex = this.originalImages.length - 1
          this.isTransitioning = false
        }, 300)
      } else {
        setTimeout(() => {
          this.isTransitioning = false
        }, 300)
      }
    },
    
    goToSlide(index) {
      if (this.isTransitioning || index === this.currentSlideIndex) return
      
      this.isTransitioning = true
      this.dragOffset = 0
      this.currentSlideIndex = index
      
      setTimeout(() => {
        this.isTransitioning = false
      }, 300)
    },
    
    startDrag(event) {
      if (this.isTransitioning) return
      
      this.isDragging = true
      this.stopCarousel()
      
      const clientX = event.type === 'mousedown' ? event.clientX : event.touches[0].clientX
      this.startX = clientX
      this.currentX = clientX
      this.dragOffset = 0
      
      event.preventDefault()
      
      if (event.type === 'mousedown') {
        document.addEventListener('mousemove', this.handleMouseMove)
        document.addEventListener('mouseup', this.handleMouseUp)
      }
    },
    
    drag(event) {
      if (!this.isDragging) return
      
      event.preventDefault()
      const clientX = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX
      this.currentX = clientX
      
      this.dragOffset = this.currentX - this.startX
      
      // Add resistance at boundaries
      const maxDrag = this.slideWidth * 0.5
      if (Math.abs(this.dragOffset) > maxDrag) {
        this.dragOffset = this.dragOffset > 0 ? maxDrag : -maxDrag
      }
    },
    
    handleMouseMove(event) {
      this.drag(event)
    },
    
    handleMouseUp() {
      this.endDrag()
    },
    
    endDrag() {
      if (!this.isDragging) return
      
      this.isDragging = false
      this.removeGlobalListeners()
      
      const threshold = this.slideWidth * 0.25
      
      if (Math.abs(this.dragOffset) > threshold) {
        if (this.dragOffset > 0) {
          this.prevSlide()
        } else {
          this.nextSlide()
        }
      } else {
        // Snap back to current slide
        this.isTransitioning = true
        this.dragOffset = 0
        setTimeout(() => {
          this.isTransitioning = false
        }, 300)
      }
      
      // Restart auto-play
      setTimeout(() => {
        this.startCarousel()
      }, 1000)
    },
    
    removeGlobalListeners() {
      document.removeEventListener('mousemove', this.handleMouseMove)
      document.removeEventListener('mouseup', this.handleMouseUp)
    }
  }
}
</script>

<style scoped>
/* Global Layout */
.home-page {
  background: #27272A;
  min-height: 100vh;
  overflow-x: hidden;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Banner Carousel */
.hero-banner {
  position: relative;
  overflow: hidden;
  background: #0a0e1a;
  width: 100%;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  will-change: transform;
  cursor: grab;
  touch-action: pan-y;
}

.carousel-wrapper:active {
  cursor: grabbing;
}

.carousel-slide {
  min-width: 100%;
  max-width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  display: block;
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

/* Carousel Navigation Arrows */
.carousel-arrow {
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

.carousel-arrow:hover {
  background: linear-gradient(135deg, rgba(242, 178, 64, 0.9), rgba(242, 178, 64, 0.7));
  border-color: rgba(242, 178, 64, 0.5);
  color: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 12px 40px rgba(242, 178, 64, 0.4);
}

.carousel-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-arrow svg {
  transition: transform 0.3s ease;
}

.carousel-arrow:hover svg {
  transform: scale(1.2);
}

.carousel-arrow-left {
  left: 30px;
}

.carousel-arrow-right {
  right: 30px;
}

/* Dots Indicator */
.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 20;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot:hover {
  border-color: rgba(242, 178, 64, 0.8);
  background: rgba(242, 178, 64, 0.3);
}

.carousel-dot.active {
  background: #F2B240;
  border-color: #F2B240;
}

/* Global Typography Classes */
.main-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 500;
  color: #FFFFFF;
  margin: 1rem 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.accent-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  color: #F2B240;
  margin: 1rem 0;
  line-height: 1.2;
}

.section-title {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  font-weight: 400;
  color: #D5D3CF;
  margin: 1rem 0;
  line-height: 1.3;
}

.subtitle-text {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  font-weight: 400;
  color: #D5D3CF;
  margin: 0.5rem 0;
  line-height: 1.4;
}

.description-text {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  font-weight: 600;
  color: #ffffff;
  margin: 1rem 0 2rem 0;
  line-height: 1.4;
  text-align: center;
}

.text-content {
  font-size: clamp(0.9rem, 2.2vw, 1.125rem);
  color: #C0BEBE;
  line-height: 1.8;
  margin: 1rem 0;
  text-align: center;
}

.accent-color {
  color: #F2B240;
}

/* Global Layout Classes */
.section-wrapper {
  text-align: center;
  padding: 2rem 0;
}

.two-column-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  gap: 40px;
}

.column-image {
  width: 40%;
  flex-shrink: 0;
}

.column-text {
  width: 60%;
  flex-shrink: 1;
}

.responsive-image {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.limited-width {
  max-width: 900px;
  margin: 0 auto;
}

/* Global List Styles */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list-1 {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
  max-width: 100%;
}

.feature-list li,
.feature-list-1 li {
  margin-bottom: 0.8rem;
  color: #C0BEBE;
  font-size: clamp(0.9rem, 2.2vw, 1.125rem);
  line-height: 1.6;
  font-weight: 400;
  word-wrap: break-word;
  hyphens: auto;
}

/* Content Specific */
.main-content {
  padding: 0;
}

.content-container {
  color: white;
}

/* Mobile First Responsive Design */
@media (max-width: 768px) {
  .home-container {
    padding: 0 16px;
    text-align: center;
  }

  .banner-image {
    max-height: 300px;
  }

  .carousel-arrow {
    width: 50px;
    height: 50px;
  }

  .carousel-arrow svg {
    width: 20px;
    height: 20px;
  }

  .carousel-arrow-left {
    left: 15px;
  }

  .carousel-arrow-right {
    right: 15px;
  }

  .carousel-dots {
    bottom: 15px;
    gap: 8px;
  }

  .carousel-dot {
    width: 10px;
    height: 10px;
  }

  .section-wrapper {
    padding: 1.5rem 0;
    text-align: center;
  }

  .two-column-section {
    flex-direction: column;
    gap: 24px;
    padding: 40px 0;
    text-align: center;
  }

  .column-image,
  .column-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .column-text {
    text-align: center;
  }

  .description-text {
    margin: 0;
  }

  .feature-list-1 {
    text-align: center;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-content {
    padding: 0 10px;
    text-align: center;
  }

  .main-title,
  .accent-title,
  .section-title,
  .subtitle-text,
  .description-text {
    text-align: center;
  }

  .main-content,
  .content-container {
    text-align: center;
  }

  .responsive-image {
    display: block;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 0 12px;
    text-align: center;
  }

  .banner-image {
    max-height: 250px;
  }

  .carousel-arrow {
    width: 45px;
    height: 45px;
  }

  .carousel-arrow svg {
    width: 18px;
    height: 18px;
  }

  .carousel-arrow-left {
    left: 10px;
  }

  .carousel-arrow-right {
    right: 10px;
  }

  .main-title {
    margin: 0;
  }

  .subtitle-text {
    font-size: 12px;
    margin: 0;
  }

  .section-wrapper {
    padding: 1rem 0;
    text-align: center;
  }

  .two-column-section {
    padding: 20px 0;
    gap: 20px;
    text-align: center;
  }

  .text-content {
    padding: 0 5px;
    text-align: center;
    font-size: 10px;
  }

  .feature-list,
  .feature-list-1 {
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .feature-list li,
  .feature-list-1 li {
    margin: 0;
    padding: 0 5px;
    text-align: center;
    font-size: 10px;
  }

  * {
    text-align: center !important;
  }

  .feature-list li::before,
  .feature-list-1 li::before {
    text-align: left;
  }
}

@media (max-width: 360px) {
  .home-container {
    padding: 0 10px;
    text-align: center;
  }

  .banner-image {
    max-height: 200px;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
  }

  .carousel-arrow svg {
    width: 16px;
    height: 16px;
  }

  .section-wrapper {
    padding: 0.8rem 0;
    text-align: center;
  }

  .two-column-section {
    padding: 20px 0;
    gap: 16px;
    text-align: center;
  }

  .main-title,
  .accent-title,
  .section-title,
  .subtitle-text,
  .description-text,
  .text-content {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .banner-image {
    max-height: 200px;
  }

  .section-wrapper {
    padding: 1rem 0;
    text-align: center;
  }

  .home-container {
    text-align: center;
  }
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .banner-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

@media (hover: none) and (pointer: coarse) {
  .feature-list li,
  .feature-list-1 li {
    padding: 8px 4px;
    margin-bottom: 1rem;
    text-align: center;
  }

  .carousel-arrow {
    width: 55px;
    height: 55px;
    touch-action: manipulation;
  }

  .carousel-container {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
}

/* Performance optimizations */
.carousel-wrapper {
  backface-visibility: hidden;
  perspective: 1000px;
}

.carousel-slide {
  backface-visibility: hidden;
}
</style>