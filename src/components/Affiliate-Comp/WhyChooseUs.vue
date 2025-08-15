<template>
  <div class="why-section">
    <h2 class="section-title" v-html="$t('why_choose_us.title')"></h2>
    
    <!-- Swiper Implementation -->
    <div class="swiper-container">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="15"
        :loop="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :grab-cursor="true"
        :breakpoints="breakpoints"
        :speed="400"
        :allow-touch-move="true"
        :resistance="true"
        :resistance-ratio="0.3"
        :free-mode="false"
        :watch-slides-progress="true"
        :centered-slides="false"
        class="why-swiper"
      >
        <swiper-slide 
          v-for="(feature, index) in features" 
          :key="index"
          class="why-slide"
        >
          <div class="feature-card">
            <div class="feature-icon">
              <img :src="feature.icon" :alt="feature.title" class="icon-image" />
            </div>
            <h3 class="feature-title" v-html="feature.title"></h3>
            <div class="feature-description" v-html="feature.description"></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// Updated imports with descriptive variable names matching file names
import highCommissionIcon from '@/assets/high-commission-icon.png';
import customSolutionsIcon from '@/assets/custom-solutions-icon.png';
import marketingToolsIcon from '@/assets/marketing-tools-icon.png';
import dedicatedSupportIcon from '@/assets/dedicated-support-icon.png';
import weeklyPayoutsIcon from '@/assets/weekly-payouts-icon.png';

export default {
  name: 'WhyChooseUs',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      
      // Base features data with icons, translation keys, and alt text
      baseFeatures: [
        {
          icon: highCommissionIcon,
          translationKey: 'high_commission',
          altText: 'High commission rates'
        },
        {
          icon: customSolutionsIcon,
          translationKey: 'custom_solutions',
          altText: 'Custom solutions'
        },
        {
          icon: marketingToolsIcon,  
          translationKey: 'marketing_tools',
          altText: 'Marketing tools'
        },
        {
          icon: dedicatedSupportIcon,
          translationKey: 'dedicated_support',
          altText: 'Dedicated support'
        },
        {
          icon: weeklyPayoutsIcon,
          translationKey: 'weekly_payouts',
          altText: 'Weekly payouts'
        }
      ],

      // Responsive breakpoints - using 'auto' for better control
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 10
        },
        480: {
          slidesPerView: 'auto',
          spaceBetween: 12
        },
        640: {
          slidesPerView: 'auto',
          spaceBetween: 15
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 25
        },
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 20
        }
      }
    }
  },
  computed: {
    features() {
      return this.baseFeatures.map(feature => ({
        ...feature,
        title: this.$t(`why_choose_us.features.${feature.translationKey}.title`),
        description: this.$t(`why_choose_us.features.${feature.translationKey}.description`)
      }))
    }
  }
}
</script>

<style scoped>
/* Prevent horizontal scroll on body */
.why-section {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

/* Section Title */
.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  margin: 60px 0 40px 0;
  line-height: 1.2;
}

/* Container to control overflow */
.swiper-container {
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
  box-sizing: border-box;
}

/* Swiper Container - Prevent overflow */
.why-swiper {
  width: 100%;
  max-width: none;
  margin: 40px 0;
  padding: 0 0 20px 0;
  overflow: visible;
  position: relative;
}

/* Override swiper wrapper */
.why-swiper :deep(.swiper-wrapper) {
  display: flex !important;
  flex-direction: row !important;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  align-items: stretch;
}

/* Slide sizing with auto width */
.why-slide {
  flex-shrink: 0 !important;
  width: 220px !important; /* Fixed width for consistency */
  height: auto !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.feature-card {
  background: linear-gradient(135deg, #F2B240 0%, #E6A635 100%);
  padding: 25px 15px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  box-shadow: 0 15px 35px rgba(242, 178, 64, 0.4);
}

.feature-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 12px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.feature-card:hover .feature-icon {
  transform: scale(1.15) rotate(5deg);
  background: rgba(255, 255, 255, 0.3);
}

.icon-image {
  width: 60px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

.feature-card:hover .icon-image {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.feature-title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.2;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-title {
  color: #1a1a1a;
  transform: translateY(-2px);
}

.feature-description {
  font-size: 13px;
  color: #ffffff;
  font-weight: 400;
  margin: 0;
  line-height: 1.3;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-description {
  color: #2a2a2a;
  transform: translateY(-1px);
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
    margin: 40px 0 30px 0;
  }
  
  .swiper-container {
    padding: 0 15px;
  }
  
  .why-swiper {
    margin: 20px 0;
    padding: 0 0 15px 0;
  }
  
  .why-slide {
    width: 200px !important;
  }
  
  .feature-card {
    height: 190px;
    padding: 20px 12px;
  }
  
  .feature-title {
    font-size: 15px;
    margin-bottom: 6px;
  }
  
  .feature-description {
    font-size: 12px;
  }
  
  .feature-icon {
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
  }
  
  .icon-image {
    width: 55px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
    margin: 30px 0 25px 0;
  }

  .swiper-container {
    padding: 0 10px;
  }
  
  .why-swiper {
    margin: 20px 0;
    padding: 0 0 10px 0;
  }
  
  .why-slide {
    width: 170px !important;
  }
  
  .feature-card {
    height: 180px;
    padding: 18px 10px;
  }
  
  .feature-title {
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .feature-description {
    font-size: 11px;
  }
  
  .feature-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
  
  .icon-image {
    width: 50px;
  }
}

/* Ensure swiper overrides any conflicting styles */
:deep(.swiper) {
  overflow: visible !important;
  width: 100% !important;
}

:deep(.swiper-slide) {
  transition: transform 0.3s ease;
  will-change: transform;
  display: flex !important;
  flex-shrink: 0 !important;
}

/* Remove any grid styling that might interfere */
:deep(.swiper-wrapper) {
  grid-template-columns: none !important;
  grid-gap: none !important;
  gap: none !important;
}

/* Prevent horizontal scroll on the entire page */
* {
  box-sizing: border-box;
}
</style>