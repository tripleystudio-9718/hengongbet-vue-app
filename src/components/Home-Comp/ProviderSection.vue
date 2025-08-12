<template>
  <section>
    <!-- Global Header Section -->
    <div class="global-header-section">
      <div class="global-title" v-html="$t('provider_showcase.global_header.title')"></div>
      <p class="global-description" v-html="$t('provider_showcase.global_header.description')"></p>
      <p class="global-cta" v-html="$t('provider_showcase.global_header.cta')"></p>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- Desktop Provider Container -->
      <div class="provider-container">
        <div 
          v-for="(provider, index) in providers" 
          :key="index"
          :class="`provider-card provider-card-${index + 1}`"
          :style="{ backgroundImage: `url(${provider.backgroundImage})` }"
        >
          <div class="provider-content">
            <div class="provider-title" v-html="provider.displayName"></div>
            <p class="provider-description" v-html="provider.displayDescription"></p>
          </div>
        </div>
      </div>

      <!-- Mobile Slider Container -->
      <div class="mobile-provider-slider-container">
        <div class="mobile-provider-slider" ref="mobileProviderSlider">
          <div 
            v-for="(provider, index) in providers" 
            :key="index"
            class="mobile-provider-card"
            :style="{ backgroundImage: `url(${provider.backgroundImage})` }"
          >
            <div class="mobile-provider-content">
              <div class="mobile-provider-title" v-html="provider.displayName"></div>
              <p class="mobile-provider-description" v-html="provider.displayDescription"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="bottom-section">
      <div class="bottom-title" v-html="$t('provider_showcase.bottom_section.title')"></div>
      <p class="bottom-description-line1" v-html="$t('provider_showcase.bottom_section.description_line1')"></p>
      <p class="bottom-description-line2" v-html="$t('provider_showcase.bottom_section.description_line2')"></p>
      <p class="bottom-description-line3" v-html="$t('provider_showcase.bottom_section.description_line3')"></p>
      <button class="register-btn" @click="handleRegisterClick" v-html="$t('provider_showcase.bottom_section.register_btn')"></button>
    </div>
  </section>
</template>

<script>
import slotsBg from '@/assets/slots-bg.png'
import sportsBg from '@/assets/sports-bg.png'
import lotteryBg from '@/assets/lottery-bg.png'
import liveCasinoBg from '@/assets/live-casino-bg.png'

class GameProvider {
  constructor(translationKey, backgroundImage, altKey) {
    this.translationKey = translationKey
    this.backgroundImage = backgroundImage
    this.altKey = altKey
  }
}

export default {
  name: 'ProviderShowcase',
  data() {
    return {
      currentProviderSlide: 0,
      baseProviders: [
        new GameProvider('slots', slotsBg, 'slots'),
        new GameProvider('sports', sportsBg, 'sports'),
        new GameProvider('lottery', lotteryBg, 'lottery'),
        new GameProvider('live_casino', liveCasinoBg, 'live_casino')
      ]
    }
  },
  computed: {
    providers() {
      return this.baseProviders.map(provider => ({
        ...provider,
        displayName: this.$t(`provider_showcase.providers.${provider.translationKey}.name`),
        displayDescription: this.$t(`provider_showcase.providers.${provider.translationKey}.description`),
        displayAlt: this.$t(`provider_showcase.alt_text.${provider.altKey}`)
      }))
    }
  },
  mounted() {
    this.initMobileProviderSlider()
  },
  methods: {
    initMobileProviderSlider() {
      const slider = this.$refs.mobileProviderSlider
      if (!slider) return

      let startX = 0
      let currentX = 0
      let isDragging = false
      let startTransform = 0

      slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
        isDragging = true
        startTransform = -this.currentProviderSlide * 70
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
        const minTransform = -(this.providers.length - 1) * 70
        
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
        const threshold = window.innerWidth * 0.15
        const velocity = Math.abs(diffX) / 100

        if (Math.abs(diffX) > threshold || velocity > 2) {
          if (diffX > 0 && this.currentProviderSlide > 0) {
            this.currentProviderSlide--
          } else if (diffX < 0 && this.currentProviderSlide < this.providers.length - 1) {
            this.currentProviderSlide++
          }
        }

        this.updateProviderSliderPosition()
      })

      // Mouse events for desktop testing
      slider.addEventListener('mousedown', (e) => {
        startX = e.clientX
        isDragging = true
        startTransform = -this.currentProviderSlide * 70
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
        const minTransform = -(this.providers.length - 1) * 70
        
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
          if (diffX > 0 && this.currentProviderSlide > 0) {
            this.currentProviderSlide--
          } else if (diffX < 0 && this.currentProviderSlide < this.providers.length - 1) {
            this.currentProviderSlide++
          }
        }

        this.updateProviderSliderPosition()
      })

      slider.addEventListener('mouseleave', (e) => {
        if (isDragging) {
          isDragging = false
          slider.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          this.updateProviderSliderPosition()
        }
      })
    },
    updateProviderSliderPosition() {
      const slider = this.$refs.mobileProviderSlider
      if (slider) {
        slider.style.transform = `translateX(-${this.currentProviderSlide * 70}%)`
      }
    },
    handleRegisterClick() {
      const locale = this.$i18n?.locale || 'en'

      let targetUrl = 'https://hengongbet.com/en-my?regRef=player'
      if (locale === 'zh') {
        targetUrl = 'https://hengongbet.com/zh-my?regRef=player'
      } else if (locale === 'ms') {
        targetUrl = 'https://hengongbet.com/ms-my?regRef=player'
      }

      window.location.href = targetUrl
    }
  }
}
</script>

<style scoped>
/* Global Header Section */
.global-header-section {
  text-align: center;
}

.global-title {
  color: #F2B240;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.global-description {
  color: #C0BEBE;
  font-size: clamp(0.9rem, 2.2vw, 1.125rem);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 1rem auto;
}

.global-cta {
  color: #C0BEBE;
  font-size: clamp(0.9rem, 2.2vw, 1.125rem);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 500;
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
  padding-bottom: 2rem;
}

/* Desktop Provider Container */
.provider-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.provider-card {
  width: 316.564px;
  height: 380px;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
}

.provider-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.8));
  border-radius: 24px;
  pointer-events: none;
}

.provider-card:hover {
  transform: translateY(-5px);
}

.provider-content {
  z-index: 1;
  position: relative;
  width: 100%;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.provider-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #FFD700;
  margin: 0 0 12px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.provider-description {
  font-size: 0.82rem;
  color: #ffffff;
  margin: 0;
  text-align: center;
  line-height: 1.35;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 400;
  width: 100%;
}

/* Mobile Slider Styles */
.mobile-provider-slider-container {
  display: none;
}

.mobile-provider-slider {
  display: flex;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  touch-action: pan-y;
  cursor: grab;
  padding-right: 30%;
}

.mobile-provider-slider:active {
  cursor: grabbing;
}

.mobile-provider-card {
  flex: 0 0 70%;
  margin-right: 20px;
  height: 320px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
}

.mobile-provider-card:last-child {
  margin-right: 0;
}

.mobile-provider-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.8));
  border-radius: 20px;
  pointer-events: none;
}

.mobile-provider-content {
  z-index: 1;
  position: relative;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.mobile-provider-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #FFD700;
  margin: 0 0 10px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.mobile-provider-description {
  font-size: 0.7rem;
  color: #ffffff;
  margin: 0;
  text-align: center;
  line-height: 1.3;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 400;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}

/* Bottom Section */
.bottom-section {
  text-align: center;
  padding: 60px 20px 40px 20px;
  margin-top: 60px;
  border-top: 1px solid #3A3A3D;
}

.bottom-title {
  color: #FFFFFF;
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.bottom-description-line1,
.bottom-description-line2,
.bottom-description-line3 {
  color: #C0BEBE;
  font-size: clamp(0.9rem, 2.2vw, 1.125rem);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 1rem auto;
}

.bottom-description-line2 {
  margin-bottom: 1.5rem;
}

.bottom-description-line3 {
  margin-bottom: 2rem;
}

.register-btn {
  background: #F2B240;
  color: #000000;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: none;
}

.register-btn:hover {
  background: #E5A535;
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 1024px) {
  .provider-container {
    gap: 15px;
  }
  
  .provider-card {
    width: 280px;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .global-header-section {
    padding: 30px 15px;
    margin-bottom: 20px;
  }
  
  .provider-container {
    display: none;
  }
  
  .mobile-provider-slider-container {
    display: block;
    overflow: hidden;
    padding: 0 20px;
  }
  
  .py-8 {
    padding-bottom: 40px;
  }
  
  .bottom-section {
    padding: 40px 15px 30px 15px;
    margin-top: 40px;
  }
}

@media (max-width: 480px) {
  .global-header-section {
    padding: 20px 12px;
  }
  
  .px-6 {
    padding: 0;
  }
  
  .mobile-provider-slider-container {
    padding: 0 16px;
  }
  
  .mobile-provider-card {
    height: 280px;
    padding: 16px;
    border-radius: 16px;
  }
  
  .mobile-provider-content {
    height: 120px;
  }
  
  .mobile-provider-title {
    font-size: 12px;
    margin-bottom: 8px;
    height: 25px;
  }
  
  .mobile-provider-description {
    font-size: 10px;
    line-height: 1.2;
    -webkit-line-clamp: 6;
  }
  
  .bottom-section {
    padding: 30px 12px 20px 12px;
    margin-top: 30px;
  }
  
  .register-btn {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
}
</style>