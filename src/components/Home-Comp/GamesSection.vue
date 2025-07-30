<template>
  <section class="games-section">
    <div class="games-container">
      <!-- Desktop Layout -->
      <div class="desktop-layout">
        <div class="games-top">
          <h2 class="games-title">{{ t('games.title') }}</h2>
          
          <!-- Game Categories -->
          <div class="game-categories">
            <button 
              v-for="category in gameCategories"
              :key="category.key"
              @click="activeCategory = category.key"
              :class="['category-btn', { active: activeCategory === category.key }]"
            >
              {{ category.label }}
            </button>
          </div>
        </div>
        
        <div class="games-grid">
          <div class="featured-game">
            <div class="featured-slider">
              <div 
                v-for="(featuredGame, index) in featuredGames"
                :key="featuredGame.id"
                class="featured-slide-card"
                :class="{ active: currentSlide === index }"
                v-show="currentSlide === index"
                @click="handleFeaturedGameClick(featuredGame)"
                style="cursor: pointer;"
              >
                <div class="crown-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="crown-svg">
                    <path d="M5 16L3 12L5.5 7L10 10L12 4L14 10L18.5 7L21 12L19 16H5ZM7 14H17L18 12.5L16.5 9L13.5 11.5L12 6.5L10.5 11.5L7.5 9L6 12.5L7 14Z"/>
                  </svg>
                </div>
                <div class="featured-image-container">
                  <img 
                    :src="featuredGame.image"
                    :alt="featuredGame.name"
                    class="featured-slide-image"
                  />
                </div>
              </div>
            </div>
            
            <!-- Game Info Outside Card -->
            <div class="featured-game-info">
              <h3>{{ currentFeaturedGame.name }}</h3>
              <p class="game-provider">{{ currentFeaturedGame.provider }}</p>
            </div>
            
            <!-- Slider Indicators -->
            <div class="slider-indicators">
              <button 
                v-for="(game, index) in featuredGames"
                :key="index"
                @click="setCurrentSlide(index)"
                :class="['indicator', { active: currentSlide === index }]"
              ></button>
            </div>
          </div>
          
          <div class="regular-games">
            <div v-for="game in displayedGames" :key="game.id" class="game-card-wrapper">
              <div 
                class="game-card"
                @click="handleRegularGameClick(game)"
                style="cursor: pointer;"
              >
                <img 
                  :src="game.image"
                  :alt="game.name"
                  class="game-image"
                />
              </div>
              <div class="game-info-external">
                <h4>{{ game.name }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="mobile-layout">
        <MobileGamesSection
          :active-category="activeCategory"
          :current-slide="currentSlide"
          :game-categories="gameCategories"
          :featured-games="featuredGames"
          :games="games"
          @update:active-category="activeCategory = $event"
          @play-game="handlePlayGame"
          @featured-game-click="handleFeaturedGameClick"
          @regular-game-click="handleRegularGameClick"
          @next-slide="nextSlide"
          @prev-slide="prevSlide"
        />
      </div>
    </div>
  </section>
</template>

<script>
import MobileGamesSection from './MobileGamesSection.vue'
import icelandGameIcon from '@/assets/iceland-game-icon.jpg'
import pantherMoonGameIcon from '@/assets/panther-moon-game-icon.jpg'
import fafafaGameIcon from '@/assets/fafafa-game-icon.jpg'
import sugarBlissGameIcon from '@/assets/sugar-bliss-game-icon.jpg'
import superAceGameIcon from '@/assets/super-ace-game-icon.jpg'

// Regular games images from game tabs
import game1 from '@/assets/game1.png'
import game2 from '@/assets/game2.png'
import game3 from '@/assets/game3.png'
import game4 from '@/assets/game4.png'
import game5 from '@/assets/game5.png'
import game6 from '@/assets/game6.png'
import game7 from '@/assets/game7.png'
import game8 from '@/assets/game8.png'
import game9 from '@/assets/game9.png'
import game10 from '@/assets/game10.png'
import game11 from '@/assets/game11.png'
import game12 from '@/assets/game12.png'
import game13 from '@/assets/game13.png'
import game14 from '@/assets/game14.png'
import game15 from '@/assets/game15.png'

// Translation data - you can move this to separate files
const translations = {
  en: {
    games: {
      title: "Hot Games",
      categories: {
        all: "All",
        slots: "Slots",
        casino: "Casino",
        sports: "Sports",
        lottery: "Lottery"
      },
      featured_games: {
        iceland: "Iceland",
        panther_moon: "Panther Moon", 
        fa_fa_fa: "Fa Fa Fa",
        sugar_bliss: "Sugar Bliss",
        super_ace: "Super Ace"
      },
      providers: {
        endorphina: "Endorphina",
        novomatic: "Novomatic",
        golden_hero: "Golden Hero",
        sweet_gaming: "Sweet Gaming",
        pragmatic_play: "Pragmatic Play"
      },
      regular_games: {
        lucky_365: "Lucky 365",
        askmeslot: "Askmeslot",
        jdb: "JDB",
        monkey_king: "Monkey King",
        hot_road: "Hot Road",
        maxbet: "Maxbet",
        sv388: "Sv388",
        rcb988: "Rcb988",
        jili: "Jili",
        microslot: "Microslot",
        evolution: "Evolution",
        sexy: "Sexy",
        ekor: "Ekor",
        big_gaming: "Big Gaming",
        pragmatic_play_regular: "Pragmatic Play"
      }
    }
  },
  ms: {
    games: {
      title: "Permainan Popular",
      categories: {
        all: "Semua",
        slots: "Slot",
        casino: "Kasino",
        sports: "Sukan", 
        lottery: "Loteri"
      },
      featured_games: {
        iceland: "Iceland",
        panther_moon: "Panther Moon",
        fa_fa_fa: "Fa Fa Fa", 
        sugar_bliss: "Sugar Bliss",
        super_ace: "Super Ace"
      },
      providers: {
        endorphina: "Endorphina",
        novomatic: "Novomatic",
        golden_hero: "Golden Hero",
        sweet_gaming: "Sweet Gaming",
        pragmatic_play: "Pragmatic Play"
      },
      regular_games: {
        lucky_365: "Lucky 365",
        askmeslot: "Askmeslot", 
        jdb: "JDB",
        monkey_king: "Raja Monyet",
        hot_road: "Jalan Panas",
        maxbet: "Maxbet",
        sv388: "Sv388",
        rcb988: "Rcb988",
        jili: "Jili",
        microslot: "Microslot",
        evolution: "Evolution",
        sexy: "Sexy",
        ekor: "Ekor",
        big_gaming: "Big Gaming",
        pragmatic_play_regular: "Pragmatic Play"
      }
    }
  },
  zh: {
    games: {
      title: "热门游戏",
      categories: {
        all: "全部",
        slots: "老虎机",
        casino: "娱乐场",
        sports: "体育",
        lottery: "彩票"
      },
      featured_games: {
        iceland: "冰岛",
        panther_moon: "黑豹之月",
        fa_fa_fa: "发发发",
        sugar_bliss: "甜蜜极乐", 
        super_ace: "超级王牌"
      },
      providers: {
        endorphina: "Endorphina",
        novomatic: "Novomatic", 
        golden_hero: "Golden Hero",
        sweet_gaming: "Sweet Gaming",
        pragmatic_play: "Pragmatic Play"
      },
      regular_games: {
        lucky_365: "幸运365",
        askmeslot: "Askmeslot",
        jdb: "JDB", 
        monkey_king: "齐天大圣",
        hot_road: "火热之路",
        maxbet: "Maxbet",
        sv388: "Sv388",
        rcb988: "Rcb988",
        jili: "吉利",
        microslot: "Microslot",
        evolution: "Evolution",
        sexy: "Sexy",
        ekor: "Ekor",
        big_gaming: "Big Gaming",
        pragmatic_play_regular: "Pragmatic Play"
      }
    }
  }
}

const AUTO_SLIDE_INTERVAL = 4000

export default {
  name: 'UnifiedGamesSection',
  components: {
    MobileGamesSection
  },
  props: {
    currentLanguage: {
      type: String,
      default: 'en' // en, ms, zh
    }
  },
  data() {
    return {
      activeCategory: 'all',
      currentSlide: 0,
      autoSlideInterval: null
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeUnmount() {
    this.stopAutoSlide()
  },
  computed: {
    gameCategories() {
      return [
        { key: 'all', label: this.t('games.categories.all') },
        { key: 'slots', label: this.t('games.categories.slots') },
        { key: 'casino', label: this.t('games.categories.casino') },
        { key: 'sports', label: this.t('games.categories.sports') },
        { key: 'lottery', label: this.t('games.categories.lottery') }
      ]
    },
    featuredGames() {
      return [
        {
          id: 'featured-1',
          name: this.t('games.featured_games.iceland'),
          provider: this.t('games.providers.endorphina'),
          image: icelandGameIcon
        },
        {
          id: 'featured-2', 
          name: this.t('games.featured_games.panther_moon'),
          provider: this.t('games.providers.novomatic'),
          image: pantherMoonGameIcon
        },
        {
          id: 'featured-3',
          name: this.t('games.featured_games.fa_fa_fa'),
          provider: this.t('games.providers.golden_hero'),
          image: fafafaGameIcon
        },
        {
          id: 'featured-4',
          name: this.t('games.featured_games.sugar_bliss'),
          provider: this.t('games.providers.sweet_gaming'),
          image: sugarBlissGameIcon
        },
        {
          id: 'featured-5',
          name: this.t('games.featured_games.super_ace'),
          provider: this.t('games.providers.pragmatic_play'),
          image: superAceGameIcon
        }
      ]
    },
    games() {
      return [
        { id: 1, name: this.t('games.regular_games.lucky_365'), image: game1, category: 'slots'},
        { id: 2, name: this.t('games.regular_games.askmeslot'), image: game2, category: 'slots'},
        { id: 3, name: this.t('games.regular_games.jdb'), image: game3, category: 'slots'},
        { id: 4, name: this.t('games.regular_games.monkey_king'), image: game4, category: 'slots'},
        { id: 5, name: this.t('games.regular_games.hot_road'), image: game5, category: 'casino'},
        { id: 6, name: this.t('games.regular_games.maxbet'), image: game6, category: 'sports'},
        { id: 7, name: this.t('games.regular_games.sv388'), image: game7, category: 'sports'},
        { id: 8, name: this.t('games.regular_games.rcb988'), image: game8, category: 'sports'},
        { id: 9, name: this.t('games.regular_games.jili'), image: game9, category: 'slots'},
        { id: 10, name: this.t('games.regular_games.microslot'), image: game10, category: 'slots'},
        { id: 11, name: this.t('games.regular_games.evolution'), image: game11, category: 'casino'},
        { id: 12, name: this.t('games.regular_games.sexy'), image: game12, category: 'casino'},
        { id: 13, name: this.t('games.regular_games.ekor'), image: game13, category: 'lottery'},
        { id: 14, name: this.t('games.regular_games.big_gaming'), image: game14, category: 'casino'},
        { id: 15, name: this.t('games.regular_games.pragmatic_play_regular'), image: game15, category: 'slots'}
      ]
    },
    displayedGames() {
      return this.activeCategory === 'all' 
        ? this.games 
        : this.games.filter(game => game.category === this.activeCategory)
    },
    currentFeaturedGame() {
      return this.featuredGames[this.currentSlide] || this.featuredGames[0]
    }
  },
  methods: {
    t(key) {
      const keys = key.split('.')
      let value = translations[this.currentLanguage]
      
      for (const k of keys) {
        value = value?.[k]
      }
      
      return value || key
    },

    // Updated registration redirect with proper locale detection
    goToRegisterPage() {
      const supportedLocales = ['en', 'ms', 'zh'];
      const locale = supportedLocales.includes(this.currentLanguage) 
        ? this.currentLanguage 
        : (this.$i18n?.locale || 'en');

      let targetUrl = 'https://hengongbet.com/en-my?regRef=player';
      
      // Handle different locale mappings
      switch(locale) {
        case 'zh':
          targetUrl = 'https://hengongbet.com/zh-my?regRef=player';
          break;
        case 'ms':
          // Add Malay URL if available, otherwise fallback to English
          targetUrl = 'https://hengongbet.com/ms-my?regRef=player';
          break;
        default:
          targetUrl = 'https://hengongbet.com/en-my?regRef=player';
      }

      // Optional: Track which game was clicked for analytics
      console.log('Redirecting to registration from game interaction');
      
      // Redirect to external URL
      window.location.href = targetUrl;
    },

    // Update handlePlayGame to redirect to registration
    handlePlayGame(game) {
      console.log('Game clicked:', game.name);
      // Instead of just emitting, redirect to registration
      this.goToRegisterPage();
    },

    // Add click handlers for featured games
    handleFeaturedGameClick(game) {
      console.log('Featured game clicked:', game.name);
      this.goToRegisterPage();
    },

    // Add click handler for regular games  
    handleRegularGameClick(game) {
      console.log('Regular game clicked:', game.name);
      this.goToRegisterPage();
    },

    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, AUTO_SLIDE_INTERVAL)
    },
    
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval)
        this.autoSlideInterval = null
      }
    },
    
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.featuredGames.length
    },
    
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 
        ? this.featuredGames.length - 1 
        : this.currentSlide - 1
    },
    
    setCurrentSlide(index) {
      this.currentSlide = index
    }
  }
}
</script>

<style scoped>
/* Base Section */
.games-section {
  padding: 20px;
  position: relative;
  z-index: 1;
  min-height: auto;
  height: auto;
  overflow: visible;
}

.games-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

/* Show desktop layout by default, hide mobile */
.desktop-layout {
  display: block;
  position: relative;
  z-index: 1;
}

.mobile-layout {
  display: none;
}

/* DESKTOP STYLES */
.desktop-layout .games-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  margin-bottom: 0;
  position: relative;
}

.desktop-layout .games-title {
  color: white;
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0 10px 0;
}

.desktop-layout .game-categories {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;
}

.desktop-layout .category-btn {
  padding: 8px 20px;
  background-color: transparent;
  color: #cbd5e1;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  margin: 26px 0 10px;
}

.desktop-layout .category-btn.active,
.desktop-layout .category-btn:hover {
  color: #F1AE3D;
}

.desktop-layout .category-btn.active::after {
  content: '';
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, #F2B240 0%, #ED9226 100%);
  border-radius: 2px;
  z-index: 10;
}

.desktop-layout .games-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
  padding: 20px 0;
}

.desktop-layout .featured-game {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.desktop-layout .featured-slider {
  border-radius: 15px;
  height: 250px;
  position: relative;
  width: 280px;
  flex-shrink: 0;
}

.desktop-layout .featured-slide-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.5s ease;
}

.desktop-layout .featured-slide-card.active {
  opacity: 1;
  transform: scale(1);
}

.desktop-layout .featured-slide-card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 25px rgba(241, 174, 61, 0.3);
}

.desktop-layout .crown-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  color: #F1AE3D;
  z-index: 3;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.8));
}

.desktop-layout .crown-svg {
  width: 100%;
  height: 100%;
}

.desktop-layout .featured-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.desktop-layout .featured-slide-image {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
}

.desktop-layout .featured-game-info {
  text-align: center;
  color: white;
}

.desktop-layout .featured-game-info h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.desktop-layout .featured-game-info .game-provider {
  font-size: 0.9rem;
  margin-bottom: 0;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.desktop-layout .slider-indicators {
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.desktop-layout .indicator {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.desktop-layout .indicator.active {
  background: #F1AE3D;
  width: 24px;
  height: 8px;
}

.desktop-layout .regular-games {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
}

.desktop-layout .game-card-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.desktop-layout .game-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 120px;
  flex-shrink: 0;
}

.desktop-layout .game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.desktop-layout .game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.desktop-layout .game-info-external {
  margin-top: 8px;
  text-align: center;
  color: white;
}

.desktop-layout .game-info-external h4 {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* RESPONSIVE BREAKPOINTS */
@media (max-width: 768px) {
  .desktop-layout {
    display: none;
  }
  
  .mobile-layout {
    display: block;
  }
  
  .games-section {
    padding: 0;
  }
}
</style>