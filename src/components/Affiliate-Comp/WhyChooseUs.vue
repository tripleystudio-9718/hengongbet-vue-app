<template>
  <div class="why-section">
    <h2 class="section-title">Why Choose Us?</h2>
    
    <!-- Swiper Implementation -->
    <swiper
      :modules="modules"
      :slides-per-view="getSlidesPerView()"
      :space-between="getSpaceBetween()"
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
      :slides-offset-before="0"
      :slides-offset-after="0"
      :normalize-slide-index="true"
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
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

// Import icons
import why1Icon from '@/assets/why1-icon.png';
import why2Icon from '@/assets/why2-icon.png';
import why3Icon from '@/assets/why3-icon.png';
import why4Icon from '@/assets/why4-icon.png';
import why5Icon from '@/assets/why5-icon.png';
import why6Icon from '@/assets/why6-icon.png';

export default {
  name: 'WhyChooseUs',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      
      // Features data with imported icons
      features: [
        {
          icon: why1Icon,
          title: 'High Commission',
          description: 'Up to 50% revenue share with competitive rates'
        },
        {
          icon: why2Icon,
          title: 'Custom Solutions',
          description: 'Tailored affiliate programs for success'
        },
        {
          icon: why3Icon,
          title: 'Marketing Tools',
          description: 'Professional banners and tracking links'
        },
        {
          icon: why4Icon,
          title: 'Dedicated Support',
          description: '24/7 affiliate assistance and guidance'
        },
        {
          icon: why5Icon,
          title: 'Weekly Payouts',
          description: 'Fast and reliable payment processing'
        },
        {
          icon: why6Icon,
          title: 'Real-time Tracking',
          description: 'Monitor your earnings and performance live'
        }
      ],

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4.5,
          spaceBetween: 20,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0
        }
      }
    }
  },

  methods: {
    getSlidesPerView() {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 768) return 2;
      if (width < 1024) return 3;
      if (width < 1200) return 4;
      return 5.5;
    },

    getSpaceBetween() {
      const width = window.innerWidth;
      if (width < 768) return 20;
      if (width < 1024) return 25;
      if (width >= 1200) return 20;
      return 30;
    }
  }
}
</script>

<style scoped>
/* Section Title */
.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  margin: 60px 0 40px 0;
  line-height: 1.2;
}

/* Swiper Container */
.why-swiper {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px 20px 20px;
  overflow: hidden;
  position: relative;
}

.why-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.feature-card {
  background: linear-gradient(135deg, #F2B240 0%, #E6A635 100%);
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 100%;
  max-width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  margin: 0 auto;
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
  width: 60px;
  height: 60px;
  margin: 0 auto 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
}

.feature-card:hover .feature-icon {
  transform: scale(1.15) rotate(5deg);
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.icon-image {
  width: 100px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

.feature-card:hover .icon-image {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.feature-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.2;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-title {
  color: #1a1a1a;
  transform: translateY(-2px);
}

.feature-description {
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-description {
  color: #2a2a2a;
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
    margin: 40px 0 30px 0;
  }
  
  .why-swiper {
    padding: 0 15px 15px 15px;
  }
  
  .feature-card {
    max-width: 200px;
    height: 200px;
    padding: 25px 15px;
  }
  
  .feature-icon {
    width: 50px;
    height: 50px;
  }
  
  .icon-image {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .why-swiper {
    padding: 0 10px 10px 10px;
  }
  
  .feature-card {
    max-width: 180px;
    height: 180px;
    padding: 20px 10px;
  }
  
  .feature-title {
    font-size: 16px;
  }
  
  .feature-description {
    font-size: 12px;
  }
  
  .feature-icon {
    width: 45px;
    height: 45px;
  }
  
  .icon-image {
    width: 24px;
    height: 24px;
  }
}

/* Swiper overrides for smooth experience */
:deep(.swiper-wrapper) {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  align-items: center;
}

:deep(.swiper-slide) {
  transition: transform 0.3s ease;
  will-change: transform;
}

/* Ensure no partial slides on the left */
:deep(.swiper-container-horizontal > .swiper-pagination-bullets) {
  display: none;
}

:deep(.swiper) {
  overflow: hidden;
}

/* Prevent slides from being cut off on the left */
:deep(.swiper-slide:first-child) {
  margin-left: 0 !important;
}

:deep(.swiper-wrapper) {
  transform-origin: left center;
}
</style>