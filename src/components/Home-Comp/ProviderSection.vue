<template>
  <section>
    <!-- Global Header Section -->
    <div class="global-header-section">
      <h3 class="global-brand">{{ globalContent.brand }}</h3>
      <h2 class="global-title">{{ globalContent.title }}</h2>
      <h4 class="global-subtitle">{{ globalContent.subtitle }}</h4>
      <p class="global-description">{{ globalContent.description }}</p>
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
            <h3 class="provider-title">{{ provider.name }}</h3>
            <p class="provider-description">{{ provider.description }}</p>
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
              <h3 class="mobile-provider-title">{{ provider.name }}</h3>
              <p class="mobile-provider-description">{{ provider.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slotsBg from '@/assets/slots-bg.png'
import sportsBg from '@/assets/sports-bg.png'
import lotteryBg from '@/assets/lottery-bg.png'
import liveCasinoBg from '@/assets/live-casino-bg.png'

class GameProvider {
  constructor(name, backgroundImage, alt, description) {
    this.name = name
    this.backgroundImage = backgroundImage
    this.alt = alt
    this.description = description
  }
}

export default {
  name: 'ProviderShowcase',
  data() {
    return {
      currentProviderSlide: 0,
      globalContent: {
        brand: "Heng Ong Bet",
        title: "We Are Global",
        subtitle: "Heng Ong Bet is Now Expanding Globally",
        description: "Heng Ong Bet is now available in Singapore, with our talented global team supporting growth across Malaysia and Singapore. What unites us? A passion for delivering the best gaming experience. We're also actively expanding into Thailand, Vietnam, Indonesia, Cambodia, the UK, and the USA."
      },
      providers: [
        new GameProvider(
          'Slots', 
          slotsBg, 
          'Slots Gaming Provider',
          'Heng Ong Bet offers a wide variety of online slot games powered by top providers like MEGA888, PUSSY888, PUSSY888, VPOWER, NAGA GAMES, JILI, and more. With advanced technology, stunning graphics, and immersive sound effects, our slots deliver exciting gameplay and big win potential.'
        ),
        new GameProvider(
          'Sport Betting', 
          sportsBg, 
          'Sports Betting Provider',
          'Heng Ong Bet offers a complete and professional sports betting experience through top platforms like MAXBET, SBOBET, and RCB788. Bet on popular sports such as football, basketball, tennis, baseball, and ice hockey with various options like handicap, over/under, odd/even, and half-time bets.'
        ),
        new GameProvider(
          '4D Lottery', 
          lotteryBg, 
          '4D Lottery Provider',
          'Heng Ong Bet brings you the most exciting 4D lottery games with a chance to win big prizes every day. Enjoy popular formats like direct selection, group selection, Magnum, Da Ma Cai, Toto, and daily Grand Dragon draws. With high odds and multiple betting options, your winning chances are greater than ever.'
        ),
        new GameProvider(
          'Live Casino', 
          liveCasinoBg, 
          'Live Casino Provider',
          'Heng Ong Bet brings you real-time live casino games at home with top providers like PGCN88 LIVE, AE SEXY, and EVOLUTION. Enjoy smooth HD streams, fair play from pro dealers, and fast, secure transactions—all in one trusted platform.'
        )
      ]
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
    }
  }
}
</script>

<style scoped>
/* Global Header Section */
.global-header-section {
  text-align: center;
  padding: 0 20px;
}

.global-brand {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  margin: 0 0 0.5rem 0;
  text-align: center;
}

.global-title {
  color: #F2B240;
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-align: center;
}

.global-subtitle {
  color: #ffffff;
  font-size: 1.3rem;
  margin: 0 0 2rem 0;
  font-weight: normal;
  line-height: 1.3;
  text-align: center;
}

.global-description {
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
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
    padding: 15px;
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
}

@media (max-width: 480px) {
  .global-title {
    font-size: 28px;
  }
  
  .global-subtitle {
    font-size: 16px;
    margin: 10px;
  }
  
  .global-description {
    font-size: 10px;
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
}
</style>