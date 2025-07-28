<template>
  <section>
    <!-- Header Section -->
    <div class="why-header-section">
      <h2 class="why-header-title">
        {{ headerContent.prefix }} <span class="accent-color">{{ headerContent.brand }}</span> {{ headerContent.suffix }}
      </h2>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="why-container">
        <div class="why-card-1">
          <img :src="computerIcon" alt="Computer Icon" class="why-image" />
          <div class="card-content">
            <h3 class="why-title">{{ cardContent[0].title }}</h3>
            <p class="why-p">{{ cardContent[0].description }}</p>
          </div>  
        </div>

        <div class="why-card-2">
          <img :src="trustedIcon" alt="Trusted Icon" class="why-image" />
          <div class="card-content">
            <h3 class="why-title">{{ cardContent[1].title }}</h3>
            <p class="why-p">{{ cardContent[1].description }}</p>
          </div>
        </div>

        <div class="why-card-3">
          <img :src="registrationIcon" alt="Registration Icon" class="why-image" />
          <div class="card-content">
            <h3 class="why-title" style="color: black;">{{ cardContent[2].title }}</h3>
            <p class="why-p" style="color: black;">{{ cardContent[2].description }}</p>
          </div>
        </div>

        <div class="why-card-4">
          <img :src="supportIcon" alt="Support Icon" class="why-image" />
          <div class="card-content">
            <h3 class="why-title">{{ cardContent[3].title }}</h3>
            <p class="why-p">{{ cardContent[3].description }}</p>
          </div>
        </div>
      </div>

      <!-- Mobile Slider Container -->
      <div class="mobile-slider-container">
        <div class="mobile-slider" ref="mobileSlider">
          <div class="mobile-card mobile-card-1">
            <img :src="computerIcon" alt="Computer Icon" class="mobile-image" />
            <div class="mobile-card-content">
              <h3 class="mobile-title">{{ cardContent[0].title }}</h3>
              <p class="mobile-p">{{ cardContent[0].description }}</p>
            </div>  
          </div>

          <div class="mobile-card mobile-card-2">
            <img :src="trustedIcon" alt="Trusted Icon" class="mobile-image" />
            <div class="mobile-card-content">
              <h3 class="mobile-title">{{ cardContent[1].title }}</h3>
              <p class="mobile-p">{{ cardContent[1].description }}</p>
            </div>
          </div>

          <div class="mobile-card mobile-card-3">
            <img :src="registrationIcon" alt="Registration Icon" class="mobile-image" />
            <div class="mobile-card-content">
              <h3 class="mobile-title" style="color: black;">{{ cardContent[2].title }}</h3>
              <p class="mobile-p" style="color: black;">{{ cardContent[2].description }}</p>
            </div>
          </div>

          <div class="mobile-card mobile-card-4">
            <img :src="supportIcon" alt="Support Icon" class="mobile-image" />
            <div class="mobile-card-content">
              <h3 class="mobile-title">{{ cardContent[3].title }}</h3>
              <p class="mobile-p">{{ cardContent[3].description }}</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
import computerIcon from '@/assets/computer_icon.png'
import trustedIcon from '@/assets/trusted_icon.png'
import registrationIcon from '@/assets/registration_icon.png'
import supportIcon from '@/assets/support_icon.png'

export default {
  name: 'WhySection',
  data() {
    return {
      computerIcon,
      trustedIcon,
      registrationIcon,
      supportIcon,
      currentSlide: 0,
      headerContent: {
        prefix: "Why Choose",
        brand: "Heng Ong Bet",
        suffix: "?"
      },
      cardContent: [
        {
          title: "What Makes Heng Ong Bet Different?",
          description: "Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play."
        },
        {
          title: "Most Trusted Casino",
          description: "Your privacy and security are our top priority. Heng Ong Bet uses industry-standard protection to safeguard your personal data and strictly follows our privacy policy to ensure a safe and trustworthy gaming environment."
        },
        {
          title: "Simple & Fast Registration",
          description: "Create your Heng Ong Bet account to access 1,000+ games, enjoy exclusive promos, and stay updated with the latest offers."
        },
        {
          title: "Online Support",
          description: "Our Heng Ong Bet support team is available 24/7 via live chat, phone, and email to assist you quickly with any issues."
        }
      ]
    }
  },
  mounted() {
    this.initMobileSlider()
  },
  methods: {
    initMobileSlider() {
      const slider = this.$refs.mobileSlider
      if (!slider) return

      let startX = 0
      let currentX = 0
      let isDragging = false
      let startTransform = 0

      slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
        isDragging = true
        startTransform = -this.currentSlide * 70
        slider.style.transition = 'none'
      })

      slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return
        e.preventDefault()
        currentX = e.touches[0].clientX
        const diffX = currentX - startX
        const movePercent = (diffX / window.innerWidth) * 100
        const newTransform = startTransform + movePercent
        
        const maxTransform = 0
        const minTransform = -(this.cardContent.length - 1) * 70
        
        let finalTransform = newTransform
        if (newTransform > maxTransform) {
          finalTransform = maxTransform + (newTransform - maxTransform) * 0.3
        } else if (newTransform < minTransform) {
          finalTransform = minTransform + (newTransform - minTransform) * 0.3
        }
        
        slider.style.transform = `translateX(${finalTransform}%)`
      })

      slider.addEventListener('touchend', (e) => {
        if (!isDragging) return
        isDragging = false
        slider.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        
        const diffX = currentX - startX
        const threshold = window.innerWidth * 0.15 // 15% of screen width
        const velocity = Math.abs(diffX) / 100 // Simple velocity calculation

        if (Math.abs(diffX) > threshold || velocity > 2) {
          if (diffX > 0 && this.currentSlide > 0) {
            this.currentSlide--
          } else if (diffX < 0 && this.currentSlide < this.cardContent.length - 1) {
            this.currentSlide++
          }
        }

        this.updateSliderPosition()
      })

      // Mouse events for desktop testing
      slider.addEventListener('mousedown', (e) => {
        startX = e.clientX
        isDragging = true
        startTransform = -this.currentSlide * 70
        slider.style.transition = 'none'
        e.preventDefault()
      })

      slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return
        currentX = e.clientX
        const diffX = currentX - startX
        const movePercent = (diffX / window.innerWidth) * 100
        const newTransform = startTransform + movePercent
        
        const maxTransform = 0
        const minTransform = -(this.cardContent.length - 1) * 70
        
        let finalTransform = newTransform
        if (newTransform > maxTransform) {
          finalTransform = maxTransform + (newTransform - maxTransform) * 0.3
        } else if (newTransform < minTransform) {
          finalTransform = minTransform + (newTransform - minTransform) * 0.3
        }
        
        slider.style.transform = `translateX(${finalTransform}%)`
      })

      slider.addEventListener('mouseup', (e) => {
        if (!isDragging) return
        isDragging = false
        slider.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        
        const diffX = currentX - startX
        const threshold = window.innerWidth * 0.15

        if (Math.abs(diffX) > threshold) {
          if (diffX > 0 && this.currentSlide > 0) {
            this.currentSlide--
          } else if (diffX < 0 && this.currentSlide < this.cardContent.length - 1) {
            this.currentSlide++
          }
        }

        this.updateSliderPosition()
      })

      slider.addEventListener('mouseleave', (e) => {
        if (isDragging) {
          isDragging = false
          slider.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          this.updateSliderPosition()
        }
      })
    },
    updateSliderPosition() {
      const slider = this.$refs.mobileSlider
      if (slider) {
        slider.style.transform = `translateX(-${this.currentSlide * 70}%)`
      }
    }
  }
}
</script>

<style scoped>
/* Header Section */
.why-header-section {
  text-align: center;
  padding: 40px 0 40px 0;
}

.why-header-title {
  font-size: 40px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.2;
}

.accent-color {
  color: #F2B240;
}

/* Utility Classes */
.max-w-7xl {
  max-width: 80rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-8 {
  padding: 0;
}

/* Desktop Why Container */
.why-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  max-width: 1600px;
  margin: 0 auto;
  gap: 15px;
}

.why-card-1, .why-card-2, .why-card-3, .why-card-4 {
  width: 25%;
  height: 470px;
  border-radius: 24px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-shadow: 0 2.609px 3.001px 0 rgba(0, 0, 0, 0.13);
}

.why-card-1 {
  background: linear-gradient(to right, #484848 0%, #303033 100%);
}

.why-card-2 {
  background: linear-gradient(180deg, #33DAFF 0%, #033DBC 100%);
}

.why-card-3 {
  background: linear-gradient(180deg, #F9F9F9 0%, #E8E8E8 100%);
}

.why-card-4 {
  background: linear-gradient(0deg, #ED9226 0%, #FFEA00 100%);
}

.why-image {
  width: 200px;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
}

.why-title {
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 20px 0;
  text-align: center;
  line-height: 1.3;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-p {
  color: #ffffff;
  font-size: 15px;
  margin: 0;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  max-width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* Mobile Slider Styles */
.mobile-slider-container {
  display: none;
}

.mobile-slider {
  display: flex;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  touch-action: pan-y;
  cursor: grab;
  padding-right: 30%;
}

.mobile-slider:active {
  cursor: grabbing;
}

.mobile-card {
  flex: 0 0 70%;
  margin-right: 20px;
  height: 280px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-shadow: 0 2.609px 3.001px 0 rgba(0, 0, 0, 0.13);
}

.mobile-card:last-child {
  margin-right: 0;
}

.mobile-card-1 {
  background: linear-gradient(to right, #484848 0%, #303033 100%);
}

.mobile-card-2 {
  background: linear-gradient(180deg, #33DAFF 0%, #033DBC 100%);
}

.mobile-card-3 {
  background: linear-gradient(180deg, #F9F9F9 0%, #E8E8E8 100%);
}

.mobile-card-4 {
  background: linear-gradient(0deg, #ED9226 0%, #FFEA00 100%);
}

.mobile-image {
  width: 70px;
  height: auto;
  object-fit: contain;
  margin-bottom: 15px;
  flex-shrink: 0;
}

.mobile-card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
}

.mobile-title {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 15px 0;
  text-align: center;
  line-height: 1.3;
}

.mobile-p {
  color: #ffffff;
  font-size: 12px;
  margin: 0;
  font-weight: 400;
  text-align: center;
  line-height: 1.4;
  max-width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* Dots Indicator */
.dots-container {
  display: none;
}

.dot {
  display: none;
}

.dot.active {
  display: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .why-header-section {
    padding: 0 20px 30px 20px;
  }
  
  .why-header-title {
    font-size: 2.5rem;
  }
  
  .why-container {
    display: none;
  }
  
  .mobile-slider-container {
    display: block;
    overflow: hidden;
    padding: 0 20px;
  }
  
  .py-8 {
    padding-bottom: 40px;
  }
}

@media (max-width: 480px) {
  .why-header-title {
    font-size: 1.8rem;
  }
  
  .px-6 {
    padding: 0;
  }
  
  .mobile-slider-container {
    padding: 0 16px;
  }
  
  .mobile-card {
    height: 280px;
    padding: 16px;
    border-radius: 16px;
  }
  
  .mobile-image {
    width: 100px;
    margin-bottom: 12px;
  }
  
  .mobile-title {
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  .mobile-p {
    font-size: 11px;
    line-height: 1.3;
  }
}
</style>