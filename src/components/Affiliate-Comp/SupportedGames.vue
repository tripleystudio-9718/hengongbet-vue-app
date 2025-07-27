<template>
  <div class="games-section">
    <h2 class="section-title">Supported Game Types</h2>
        
    <!-- Swiper Implementation -->
    <div class="swiper-container">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="15"
        :loop="false"
        :autoplay="{
          delay: 3500,
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
        class="games-swiper"
      >
        <swiper-slide 
          v-for="(game, index) in gameTypes" 
          :key="index"
          class="games-slide"
        >
          <div class="game-card">
            <div class="game-icon">
              <img :src="game.icon" :alt="game.title" class="icon-image" />
            </div>
            <h3 class="game-title">{{ game.title }}</h3>
            <p class="game-subtitle">{{ game.subtitle }}</p>
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

// Import game icons - using the actual icons from the provided image
import cockfightingIcon from '@/assets/cockfighting-icon.png';
import liveCasinoIcon from '@/assets/live-casino-icon.png';
import horseRacingIcon from '@/assets/horse-racing-icon.png';
import slotsIcon from '@/assets/slots-icon.png';
import sportsIcon from '@/assets/sports-icon.png';
import lotteryIcon from '@/assets/lottery-icon.png';

export default {
  name: 'SupportedGames',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      
      // Game types data with imported icons and subtitles
      gameTypes: [
        {
          icon: lotteryIcon,
          title: 'Lottery',
          subtitle: '(4D, Lucky, Magnum & More)'
        },
        {
          icon: sportsIcon,
          title: 'Sports',
          subtitle: '(Global Events, Real-Time Odds)'
        },
        {
          icon: slotsIcon,
          title: 'Slots',
          subtitle: '(Malaysia Gaming, Asia Number Ring 3)'
        },
        {
          icon: horseRacingIcon,
          title: 'Horse Racing',
          subtitle: '(Full Speed Online Racing)'
        },
        {
          icon: liveCasinoIcon,
          title: 'Live Casino',
          subtitle: '(Real Dealers & Realistic Game Dealing Cards)'
        },
        {
          icon: cockfightingIcon,
          title: 'Cockfighting',
          subtitle: '(Live Action, Real Betting)'
        },
      ],
      
      // Updated responsive breakpoints to match WhyChooseUs
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
  }
}
</script>

<style scoped>
/* Prevent horizontal scroll on section */
.games-section {
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
.games-swiper {
  width: 100%;
  max-width: none;
  margin: 40px 0;
  padding: 0 0 20px 0;
  overflow: visible;
  position: relative;
}

/* Override swiper wrapper */
.games-swiper :deep(.swiper-wrapper) {
  display: flex !important;
  flex-direction: row !important;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  align-items: stretch;
}

/* Slide sizing with auto width */
.games-slide {
  flex-shrink: 0 !important;
  width: 220px !important; /* Match WhyChooseUs default width */
  height: auto !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
}

/* Game Card - Updated with feature card styling */
.game-card {
  background: linear-gradient(135deg, #F2B240 0%, #E6A635 100%);
  padding: 25px 15px; /* Match WhyChooseUs padding */
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 100%;
  height: 200px; /* Match WhyChooseUs height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.game-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.game-card:hover::before {
  left: 100%;
}

.game-card:hover {
  box-shadow: 0 15px 35px rgba(242, 178, 64, 0.4);
}

.game-icon {
  width: 50px; /* Match WhyChooseUs icon size */
  height: 50px;
  margin: 0 auto 12px auto; /* Match WhyChooseUs margin */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.game-card:hover .game-icon {
  transform: scale(1.15) rotate(5deg);
  background: rgba(255, 255, 255, 0.3);
}

.icon-image {
  width: 60px; /* Match WhyChooseUs icon image size */
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

.game-card:hover .icon-image {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.game-title {
  font-size: 16px; /* Match WhyChooseUs title size */
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px; /* Match WhyChooseUs margin */
  line-height: 1.2;
  transition: all 0.3s ease;
}

.game-card:hover .game-title {
  color: #1a1a1a;
  transform: translateY(-2px);
}

.game-subtitle {
  font-size: 13px; /* Match WhyChooseUs description size */
  color: #ffffff;
  font-weight: 400;
  margin: 0;
  line-height: 1.3; /* Match WhyChooseUs line-height */
  transition: all 0.3s ease;
}

.game-card:hover .game-subtitle {
  color: #2a2a2a;
  transform: translateY(-1px);
}

/* Mobile Responsive Design - Match WhyChooseUs exactly */
@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
    margin: 40px 0 30px 0;
  }
  
  .swiper-container {
    padding: 0 15px;
  }
  
  .games-swiper {
    margin: 20px 0;
    padding: 0 0 15px 0;
  }
  
  .games-slide {
    width: 200px !important; /* Match WhyChooseUs mobile width */
  }
  
  .game-card {
    height: 190px; /* Match WhyChooseUs mobile height */
    padding: 20px 12px; /* Match WhyChooseUs mobile padding */
  }
  
  .game-title {
    font-size: 15px; /* Match WhyChooseUs mobile title */
    margin-bottom: 6px;
  }
  
  .game-subtitle {
    font-size: 12px; /* Match WhyChooseUs mobile description */
  }
  
  .game-icon {
    width: 45px; /* Match WhyChooseUs mobile icon container */
    height: 45px;
    margin-bottom: 10px;
  }
  
  .icon-image {
    width: 55px; /* Match WhyChooseUs mobile icon image */
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
  
  .games-swiper {
    margin: 20px 0;
    padding: 0 0 10px 0;
  }
  
  .games-slide {
    width: 170px !important; /* Match WhyChooseUs small mobile width */
  }
  
  .game-card {
    height: 180px; /* Match WhyChooseUs small mobile height */
    padding: 18px 10px; /* Match WhyChooseUs small mobile padding */
  }
  
  .game-title {
    font-size: 14px; /* Match WhyChooseUs small mobile title */
    margin-bottom: 5px;
  }
  
  .game-subtitle {
    font-size: 11px; /* Match WhyChooseUs small mobile description */
  }
  
  .game-icon {
    width: 40px; /* Match WhyChooseUs small mobile icon container */
    height: 40px;
    margin-bottom: 8px;
  }
  
  .icon-image {
    width: 50px; /* Match WhyChooseUs small mobile icon image */
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

/* Prevent horizontal scroll on the entire component */
* {
  box-sizing: border-box;
}
</style>