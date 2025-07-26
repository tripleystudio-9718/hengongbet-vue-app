<template>
  <div class="app-guide-container">
    <!-- Header Section -->
    <div class="app-guide-header-section">
      <p class="app-guide-header-subtitle">{{ headerContent.subtitle }}</p>
      <h2 class="app-guide-header-title">{{ headerContent.title }}</h2>
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
          {{ tab.title }}
        </button>
      </div>

      <div class="app-guide-tab-content">
        <!-- Instruction Section -->
        <div class="instruction-section">
          <h2 class="instruction-title">Instruction</h2>
          
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
                  <h3 class="step-title">Step {{ index + 1 }}</h3>
                  <p class="step-description">{{ step.description }}</p>
                  
                  <!-- Step Image -->
                  <div class="step-image-container">
                    <img :src="step.image" :alt="`Step ${index + 1}`" class="step-image" />
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
            >
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
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
      headerContent: {
        subtitle: "All - New Heng Ong Bet App",
        title: "Premium Games & Support"
      },
      tabs: [
        {
          id: 'Android',
          title: 'Android',
          icon: 'fab fa-android'
        },
        {
          id: 'iOS',
          title: 'iOS',
          icon: 'fab fa-apple'
        },
        {
          id: 'Desktop',
          title: 'Desktop',
          icon: 'fas fa-desktop'
        }
      ],
      tabSteps: {
        'Android': [
          {
            description: 'Tap dotted setting icon at top right of the address bar.',
            image: '/src/assets/step1-image.webp'
          },
          {
            description: 'Tap Add to Home Screen to pop up installation for HENG ONG BET App.',
            image: '/src/assets/step2-image.webp'
          },
          {
            description: 'Tap Install to own the HENG ONG BET App, launch & enjoy your game!',
            image: '/src/assets/step3-image.webp'
          }
        ],
        'iOS': [
          {
            description: 'Tap share button at the bottom of the address bar.',
            image: '/src/assets/ios-step1-image.webp'
          },
          {
            description: 'Tap Add to Home Screen to pop up installation for HENG ONG BET App.',
            image: '/src/assets/ios-step2-image.webp'
          },
          {
            description: 'Tap Add to own the HENG ONG BET App, launch & enjoy your game!',
            image: '/src/assets/ios-step3-image.webp'
          }
        ],
        'Desktop': [
          {
            description: 'Click desktop download button at right side of the address bar to pop up installation for HENG ONG BET App.',
            image: '/src/assets/desk-step1-image.webp'
          },
          {
            description: 'Click Install to own the HENG ONG BET App, launch & enjoy your game!',
            image: '/src/assets/desk-step2-image.webp'
          }
        ]
      }
    }
  },
  computed: {
    currentTabSteps() {
      return this.tabSteps[this.activeTab] || []
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
/* Font Awesome CDN - Add this to your main HTML file */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.app-guide-container {
  width: 100%;
}

/* Header Section */
.app-guide-header-section {
  text-align: center;
  padding: 60px 0 40px 0;
}

.app-guide-header-subtitle {
  color: #ffffff;
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
  width: 1000px;
  border-radius: 24px;
  overflow: hidden;
  padding: 15px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 60px;
  gap: 20px;
}

.app-guide-tab-navigation {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #242424;
  padding: 15px;
  width: 60%;
  border-radius: 16px;
}

.app-guide-tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: transparent;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 18px;
  border-radius: 50px;
  position: relative;   
  width: 100%;
  text-align: center;
  justify-content: center;
}

.app-guide-tab-btn i {
  font-size: 1.1rem;
}

.app-guide-tab-btn:hover {
  background: linear-gradient(to right, #F0AD3C 0%, #ED9326 100%);
  border-radius: 13px;
}

.app-guide-tab-btn.app-guide-active {
  background: linear-gradient(to right, #F0AD3C 0%, #ED9326 100%);
  border-radius: 13px;
  color: #000000;
  font-weight: 600;
}

.app-guide-tab-content {
  background: #242424;
  min-height: 200px;
  width: 85%;
  padding: 20px;
  border-radius: 24px;
  height: 100%;
}

.instruction-section {
  width: 100%;
}

.instruction-title {
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 30px 0;
  text-align: left;
}

.app-guide-slides-wrapper {
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 30px;
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
  border: 2px solid #666666;
  border-radius: 8px;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  font-size: 0.9rem;
}

.app-guide-nav-arrow:hover:not(:disabled) {
  border-color: #F0AD3C;
  color: #F0AD3C;
  background: rgba(240, 173, 60, 0.1);
}

.app-guide-nav-arrow:disabled {
  border-color: #333333;
  color: #555555;
  cursor: not-allowed;
  opacity: 0.5;
}

.app-guide-page-counter {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  min-width: 50px;
  text-align: center;
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
  color: #F2B240;
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 20px 0;
}

.step-description {
  color: #ffffff;
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
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  display: block;
}

/* Responsive Design */
@media (max-width: 768px) {
  .app-guide-header-section {
    padding: 40px 20px 30px 20px;
  }
  
  .app-guide-header-subtitle {
    font-size: 24px;
  }
  
  .app-guide-header-title {
    font-size: 32px;
  }
  
  .app-guide-features-section {
    width: 100%;
    margin-top: 0;
    margin-bottom: 40px;
  }
  
  .app-guide-tab-navigation {
    flex-direction: column;
    width: 80%;
  }
  
  .app-guide-tab-btn {
    text-align: center;
    padding: 15px 20px;
    font-size: 16px;
    border-radius: 13px !important;
  }
  
  .app-guide-tab-content {
    padding: 25px 20px;
    width: 90%;
  }
  
  .instruction-title {
    font-size: 24px;
    text-align: center;
  }
  
  .step-title {
    font-size: 22px;
    text-align: center;
  }
  
  .step-description {
    font-size: 16px;
    text-align: center;
  }
  
  .app-guide-nav-arrow {
    width: 45px;
    height: 35px;
    font-size: 0.8rem;
  }
  
  .app-guide-page-counter {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .app-guide-header-title {
    font-size: 28px;
  }
  
  .app-guide-header-subtitle {
    font-size: 20px;
  }
  
  .app-guide-features-section {
    width: 95%;
  }
  
  .app-guide-tab-navigation {
    width: 95%;
    padding: 15px;
  }
  
  .app-guide-tab-btn {
    padding: 12px 16px;
    font-size: 14px;
  }
  
  .app-guide-tab-content {
    padding: 20px 16px;
    width: 95%;
  }
  
  .instruction-title {
    font-size: 20px;
  }
  
  .step-title {
    font-size: 18px;
  }
  
  .step-description {
    font-size: 14px;
  }
  
  .app-guide-nav-arrow {
    width: 40px;
    height: 30px;
    font-size: 0.7rem;
  }
  
  .app-guide-page-counter {
    font-size: 0.9rem;
  }
}
</style>