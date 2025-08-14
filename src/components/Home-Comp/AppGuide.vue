<template>
  <div class="app-guide-container">
    <!-- Header Section -->
    <div class="app-guide-header-section">
      <p class="app-guide-header-subtitle">{{ $t('app_guide.header.subtitle') }}</p>
      <!-- replaced h2 with div -->
      <div class="app-guide-header-title">{{ $t('app_guide.header.title') }}</div>
    </div>

    <div class="app-guide-features-section">
      <!-- Tab Navigation -->
      <div class="app-guide-tab-navigation">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['app-guide-tab-btn', { 'app-guide-active': activeTab === tab.id }]"
        >
          <i :class="tab.icon"></i>
          <span class="tab-text">{{ tab.title }}</span>
        </button>
      </div>

      <div class="app-guide-tab-content">
        <!-- Instruction Section -->
        <div class="instruction-section">
          <!-- replaced h2 with div -->
          <div class="instruction-title">{{ $t('app_guide.instructions.title') }}</div>
          
          <!-- Slides Container -->
          <div class="app-guide-slides-wrapper">
            <div 
              class="app-guide-slides" 
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div 
                v-for="(step, index) in currentTabSteps" 
                :key="index"
                class="app-guide-slide"
              >
                <div class="step-content">
                  <!-- replaced h3 with div -->
                  <div class="step-title">{{ $t('app_guide.instructions.step') }} {{ index + 1 }}</div>
                  <p class="step-description">{{ step.description }}</p>
                  
                  <!-- Step Image -->
                  <div class="step-image-container">
                    <img 
                      :src="step.image" 
                      :alt="$t('app_guide.alt_text.step_image', { number: index + 1 })" 
                      class="step-image" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Navigation -->
          <div class="app-guide-bottom-navigation">
            <!-- Left Arrow -->
            <button 
              class="app-guide-nav-arrow app-guide-nav-arrow-left" 
              @click="previousSlide"
              :disabled="currentSlide === 0"
              :title="$t('app_guide.navigation.previous')"
            >
              <i class="fas fa-arrow-left"></i>
            </button>

            <!-- Page Counter -->
            <span class="app-guide-page-counter">
              {{ currentSlide + 1 }}/{{ maxSlides }}
            </span>

            <!-- Right Arrow -->
            <button 
              class="app-guide-nav-arrow app-guide-nav-arrow-right" 
              @click="nextSlide"
              :disabled="currentSlide === maxSlides - 1"
              :title="$t('app_guide.navigation.next')"
            >
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>

          <!-- Dot indicators for mobile -->
          <!-- <div class="slide-indicators">
            <button
              v-for="(step, index) in currentTabSteps"
              :key="index"
              @click="goToSlide(index)"
              :class="['slide-dot', { active: currentSlide === index }]"
            >
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGuide',
  data() {
    return {
      activeTab: 'Android',
      currentSlide: 0,
      baseTabSteps: {
        'Android': [
          {
            stepKey: 'step1',
            image: '/src/assets/android-instruction-step-1.webp',
            alt: 'Android app installation step 1'
          },
          {
            stepKey: 'step2',
            image: '/src/assets/android-instruction-step-2.webp',
            alt: 'Android app installation step 2'
          },
          {
            stepKey: 'step3',
            image: '/src/assets/android-instruction-step-3.webp',
            alt: 'Android app installation step 3'
          }
        ],
        'iOS': [
          {
            stepKey: 'step1',
            image: '/src/assets/ios-instruction-step-1.webp',
            alt: 'iOS app installation step 1'
          },
          {
            stepKey: 'step2',
            image: '/src/assets/ios-instruction-step-2.webp',
            alt: 'iOS app installation step 2'
          },
          {
            stepKey: 'step3',
            image: '/src/assets/ios-instruction-step-3.webp',
            alt: 'iOS app installation step 3'
          }
        ],
        'Desktop': [
          {
            stepKey: 'step1',
            image: '/src/assets/desk-instruction-step-1.webp',
            alt: 'Desktop app installation step 1'
          },
          {
            stepKey: 'step2',
            image: '/src/assets/desk-instruction-step-2.webp',
            alt: 'Desktop app installation step 2'
          }
        ]
      }
    }
  },
  computed: {
    tabs() {
      return [
        {
          id: 'Android',
          title: this.$t('app_guide.tabs.android'),
          icon: 'fab fa-android'
        },
        {
          id: 'iOS',
          title: this.$t('app_guide.tabs.ios'),
          icon: 'fab fa-apple'
        },
        {
          id: 'Desktop',
          title: this.$t('app_guide.tabs.desktop'),
          icon: 'fas fa-desktop'
        }
      ]
    },
    currentTabSteps() {
      const baseSteps = this.baseTabSteps[this.activeTab] || []
      const activeTabKey = this.activeTab.toLowerCase()
      
      return baseSteps.map(step => ({
        ...step,
        description: this.$t(`app_guide.steps.${activeTabKey}.${step.stepKey}`)
      }))
    },
    maxSlides() {
      return this.currentTabSteps.length
    }
  },
  watch: {
    activeTab() {
      this.currentSlide = 0
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.maxSlides - 1) {
        this.currentSlide++
      }
    },
    previousSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    goToSlide(index) {
      this.currentSlide = index
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

/* CSS Custom Properties for consistent theming */
:root {
  --primary-gold: #F2B240;
  --primary-gold-light: #F0AD3C;
  --primary-gold-dark: #ED9326;
  --bg-dark: #242424;
  --bg-secondary: #27272A;
  --text-light: #ffffff;
  --text-muted: #C0BEBE;
  --border-color: #666666;
  --border-radius: 24px;
  --border-radius-small: 12px;
}

.app-guide-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* Header Section */
.app-guide-header-section {
  text-align: center;
  padding: 40px 0 30px 0;
  width: 100%;
}

.app-guide-header-subtitle {
  color: var(--text-light);
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.app-guide-header-title {
  font-size: 40px;
  font-weight: 500;
  color: #F2B240;
  margin: 0;
  line-height: 1.2;
}

.app-guide-features-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  width: 1000px;
  overflow: hidden;
  padding: 15px;
  margin: auto;
  gap: 20px;
}

.app-guide-tab-navigation {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 60%;
  padding: 10px;
  justify-content: center;
  border-radius: 16px;
  border: 2.031px solid #242424;
  background: #242424;
}

.app-guide-tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: transparent;
  color: var(--text-light);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 16px;
  border-radius: 50px;
  position: relative;   
  flex: 1;
  text-align: center;
  justify-content: center;
}

.app-guide-tab-btn i {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.app-guide-tab-btn:hover {
  background: transparent;
}

.app-guide-tab-btn.app-guide-active {
  border-radius: 12.943px;
  background: linear-gradient(180deg, #F0AD3C 0%, #ED9326 100%);
  background-blend-mode: plus-darker;
  color: #000000;
  font-weight: 600;
}

.app-guide-tab-content {
  padding: 20px 20px 40px 20px;
  border-radius: 24.388px;
  background: #242424;
  box-shadow: 0 5.528px 5.528px 0 rgba(0, 0, 0, 0.25);
}

.instruction-section {
  width: 100%;
}

.instruction-title {
  color: var(--text-light);
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 30px 0;
  text-align: left;
}

.app-guide-slides-wrapper {
  overflow: hidden;
  border-radius: var(--border-radius-small);
  margin-bottom: 30px;
}

.app-guide-slides {
  display: flex;
  transition: transform 0.3s ease;
}

.app-guide-slide {
  min-width: 100%;
}

.step-content {
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.step-title {
  color: var(--primary-gold);
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 20px 0;
}

.step-description {
  color: var(--text-light);
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 30px 0;
}

.step-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  overflow: hidden;
}

.step-image {
  max-width: 70%;
  max-height: 300px;
  width: auto;
  height: auto;
  border-radius: var(--border-radius-small);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  display: block;
}

.app-guide-bottom-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.app-guide-nav-arrow {
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  width: 50px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-light);
  font-size: 0.9rem;
}

.app-guide-nav-arrow:hover:not(:disabled) {
  border-color: var(--primary-gold-light);
  color: var(--primary-gold-light);
  background: rgba(240, 173, 60, 0.1);
}

.app-guide-nav-arrow:disabled {
  border-color: #333333;
  color: #555555;
  cursor: not-allowed;
  opacity: 0.5;
}

.app-guide-page-counter {
  color: var(--text-light);
  font-size: 1.1rem;
  font-weight: 600;
  min-width: 50px;
  text-align: center;
}

.slide-indicators {
  display: none; /* Hidden on desktop, shown on mobile */
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
}

.slide-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #666666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slide-dot.active {
  background: var(--primary-gold);
  transform: scale(1.2);
}

/* Mobile-First Responsive Design */
@media (max-width: 768px) {
  .app-guide-container {
    padding: 0;
  }

  .app-guide-header-section {
    padding: 20px 0;
  }

  .app-guide-header-subtitle {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .app-guide-header-title {
    font-size: 28px;
  }

  .app-guide-features-section {
    width: calc(100% - 40px);
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    gap: 10px;
  }

  .app-guide-tab-navigation {
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    margin-bottom: 0;
  }

  .app-guide-tab-btn {
    flex: 1;
    text-align: center;
    padding: 12px 8px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 25px;
    color: var(--text-light);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 44px;
    justify-content: center;
  }

  .app-guide-tab-content {
    width: 100%;
    padding: 24px 24px;
    border-radius: 16px;
    min-height: auto;
  }

  .instruction-title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .step-content {
    padding: 16px;
  }

  .step-title {
    font-size: 20px;
    margin-bottom: 12px;
    text-align: center;
  }

  .step-description {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: center;
  }

  .step-image-container {
    padding: 16px 0;
  }

  .step-image {
    max-width: 90%;
    max-height: 250px;
    border-radius: 8px;
  }

  .app-guide-bottom-navigation {
    gap: 16px;
    margin-top: 16px;
  }

  .app-guide-nav-arrow {
    width: 44px;
    height: 44px;
    font-size: 0.8rem;
  }

  .app-guide-page-counter {
    font-size: 1rem;
    min-width: 40px;
  }

  .slide-indicators {
    display: flex;
  }

  .app-guide-slides-wrapper {
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .app-guide-container {
    padding: 0;
  }

  .app-guide-header-subtitle {
    font-size: 16px;
  }

  .app-guide-header-title {
    font-size: 28px;
  }

  .app-guide-tab-navigation {
    padding: 8px;
    gap: 4px;
  }

  .app-guide-tab-btn {
    padding: 8px 6px;
    font-size: 12px;
    gap: 4px;
    flex-direction: row;
  }

  .app-guide-tab-btn i {
    font-size: 0.9rem;
    margin-bottom: 2px;
  }

  .tab-text {
    font-size: 10px;
    line-height: 1;
  }

  .app-guide-tab-content {
    padding: 12px;
  }

  .instruction-title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .step-content {
    padding: 12px;
  }

  .step-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .step-description {
    font-size: 14px;
    margin-bottom: 16px;
  }

  .step-image {
    max-width: 95%;
    max-height: 200px;
  }

  .app-guide-bottom-navigation {
    gap: 12px;
    margin-top: 12px;
  }

  .app-guide-nav-arrow {
    width: 40px;
    height: 40px;
    font-size: 0.7rem;
  }

  .app-guide-page-counter {
    font-size: 0.9rem;
    min-width: 35px;
  }

  .slide-indicators {
    gap: 6px;
    margin-top: 16px;
  }

  .slide-dot {
    width: 8px;
    height: 8px;
  }
}

@media (max-width: 360px) {
  .app-guide-header-subtitle {
    font-size: 18px;
  }

  .app-guide-header-title {
    font-size: 22px;
  }

  .app-guide-tab-btn {
    min-height: 48px;
    padding: 6px 4px;
  }

  .tab-text {
    font-size: 9px;
  }

  .instruction-title {
    font-size: 18px;
  }

  .step-title {
    font-size: 16px;
  }

  .step-description {
    font-size: 13px;
  }
}

/* Touch-friendly improvements */
@media (hover: none) and (pointer: coarse) {
  .app-guide-tab-btn:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }

  .app-guide-nav-arrow:active:not(:disabled) {
    transform: scale(0.95);
  }

  .slide-dot:active {
    transform: scale(1.3);
  }
}

/* Landscape orientation adjustments */
@media (max-width: 768px) and (orientation: landscape) {
  .app-guide-header-section {
    padding: 16px 0;
  }

  .step-image {
    max-height: 180px;
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .step-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}
</style>
