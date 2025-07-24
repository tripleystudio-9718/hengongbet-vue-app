<template>
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
      <!-- Slides Container -->
      <div class="app-guide-slides-wrapper">
        <div 
          class="app-guide-slides" 
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div 
            v-for="(slide, index) in slides" 
            :key="index"
            class="app-guide-slide"
          >
            <div class="app-guide-features-list">
              <div 
                v-for="feature in slide" 
                :key="feature.id"
                class="app-guide-feature-item"
              >
                <div class="app-guide-feature-title">{{ feature.title }}</div>
                <div class="app-guide-feature-separator">–</div>
                <div class="app-guide-feature-description">{{ feature.description }}</div>
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
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      activeTab: 'Android',
      currentSlide: 0,
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
      tabFeatures: {
        'Android': [
          {
            id: 1,
            title: 'Expert Team',
            description: 'Constantly improving games and user experience'
          },
          {
            id: 2,
            title: 'Secure Platform',
            description: 'Advanced encryption for data protection'
          },
          {
            id: 3,
            title: '24/7 Support',
            description: 'Help available anytime'
          },
          {
            id: 4,
            title: 'Responsible Gaming',
            description: 'Promoting safe and healthy play'
          },
          {
            id: 5,
            title: 'Community Focused',
            description: 'Supporting local welfare initiatives'
          },
          {
            id: 6,
            title: 'Fast Performance',
            description: 'Optimized for mobile devices'
          },
          {
            id: 7,
            title: 'Easy Installation',
            description: 'Simple APK installation process'
          },
          {
            id: 8,
            title: 'Regular Updates',
            description: 'Frequent feature improvements'
          }
        ],
        'iOS': [
          {
            id: 1,
            title: 'Extensive Slot Collection',
            description: 'Over 1000+ premium slot games from top providers'
          },
          {
            id: 2,
            title: 'Live Casino Games',
            description: 'Real-time gaming with professional dealers'
          },
          {
            id: 3,
            title: 'Sports Betting',
            description: 'Comprehensive sportsbook with competitive odds'
          },
          {
            id: 4,
            title: '4D Lottery',
            description: 'Traditional Malaysian lottery games'
          },
          {
            id: 5,
            title: 'Regular Updates',
            description: 'New games added weekly to keep experience fresh'
          },
          {
            id: 6,
            title: 'Touch ID Support',
            description: 'Secure biometric authentication'
          },
          {
            id: 7,
            title: 'iOS Optimization',
            description: 'Perfect integration with iOS ecosystem'
          }
        ],
        'Desktop': [
          {
            id: 1,
            title: 'SSL Encryption',
            description: 'Bank-level security for all transactions'
          },
          {
            id: 2,
            title: 'Licensed & Regulated',
            description: 'Fully licensed gaming platform'
          },
          {
            id: 3,
            title: 'Fast Withdrawals',
            description: 'Quick and secure payout processing'
          },
          {
            id: 4,
            title: 'Loyalty Rewards',
            description: 'Earn points and bonuses for regular play'
          },
          {
            id: 5,
            title: 'Fair Gaming',
            description: 'RNG certified games ensuring fair play'
          },
          {
            id: 6,
            title: 'Multi-Monitor Support',
            description: 'Enhanced gaming across multiple screens'
          },
          {
            id: 7,
            title: 'Keyboard Shortcuts',
            description: 'Quick access to favorite features'
          },
          {
            id: 8,
            title: 'High Performance',
            description: 'Optimized for desktop processors'
          },
          {
            id: 9,
            title: 'Browser Compatibility',
            description: 'Works on all major browsers'
          }
        ]
      }
    }
  },
  computed: {
    currentTabFeatures() {
      return this.tabFeatures[this.activeTab] || []
    },
    slides() {
      const features = this.currentTabFeatures
      const slides = []
      const itemsPerSlide = 3
      
      for (let i = 0; i < features.length; i += itemsPerSlide) {
        slides.push(features.slice(i, i + itemsPerSlide))
      }
      
      return slides
    },
    maxSlides() {
      return this.slides.length
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
  margin-top: 60px;
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
  font-size: 0.95rem;
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
  flex-shrink: 0;
}

.app-guide-features-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.app-guide-feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.app-guide-feature-title {
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.app-guide-feature-separator {
  color: #888888;
  font-weight: 300;
  font-size: 1rem;
}

.app-guide-feature-description {
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.4;
  flex: 1;
}

.app-guide-pagination {
  display: none;
}

.app-guide-pagination-text {
  display: none;
}

.app-guide-pagination-dots {
  display: none;
}

.app-guide-pagination-dot {
  display: none;
}

.app-guide-pagination-dot.app-guide-active {
  display: none;
}

.app-guide-pagination-dot:hover {
  display: none;
}

.app-guide-pagination-dot.app-guide-active:hover {
  display: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .app-guide-tab-navigation {
    flex-direction: column;
    width: 80%;
  }
  
  .app-guide-tab-btn {
    text-align: center;
    padding: 15px 20px;
    font-size: 0.9rem;
    border-radius: 13px !important;
  }
  
  .app-guide-tab-content {
    padding: 25px 20px;
    width: 90%;
  }
  
  .app-guide-slider-container {
    display: none;
  }
  
  .app-guide-arrow {
    display: none;
  }
  
  .app-guide-nav-arrow {
    width: 45px;
    height: 35px;
    font-size: 0.8rem;
  }
  
  .app-guide-page-counter {
    font-size: 1rem;
  }
  
  .app-guide-feature-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 12px 0;
    border-bottom: 1px solid #4a4a4a;
  }
  
  .app-guide-feature-item:last-child {
    border-bottom: none;
  }
  
  .app-guide-feature-title {
    min-width: auto;
    width: 100%;
  }
  
  .app-guide-feature-separator {
    display: none;
  }
  
  .app-guide-feature-description {
    padding-left: 0;
  }
}

@media (max-width: 480px) {
  .app-guide-features-section {
    width: 95%;
  }
  
  .app-guide-tab-navigation {
    width: 95%;
    padding: 15px;
  }
  
  .app-guide-tab-btn {
    padding: 12px 16px;
    font-size: 0.85rem;
  }
  
  .app-guide-tab-content {
    padding: 20px 16px;
    width: 95%;
  }
  
  .app-guide-feature-title {
    font-size: 0.9rem;
  }
  
  .app-guide-feature-description {
    font-size: 0.85rem;
  }
  
  .app-guide-arrow {
    display: none;
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