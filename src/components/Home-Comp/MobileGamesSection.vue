<template>
  <section class="mobile-games-section">
    <div class="mobile-container">
      <!-- Header -->
      <div class="mobile-header">
        <h2 class="mobile-title">{{ t('mobileGameSec.title') }}</h2>
      </div>
            
      <!-- Featured Game Carousel -->
      <div class="mobile-featured">
        <div class="mobile-carousel"
             @mouseenter="stopAutoplay"
             @mouseleave="startAutoplay">
          <!-- Navigation Arrows -->
          <button class="carousel-nav prev" @click="scrollLeft">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
                    
          <button class="carousel-nav next" @click="scrollRight">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
                    
          <!-- Horizontal Scrollable Container -->
          <div class="carousel-container"
               ref="carouselContainer"
               @touchstart="handleTouchStart"
               @touchmove="handleTouchMove"
               @touchend="handleTouchEnd">
            <div class="carousel-track-horizontal"
                 :style="{ transform: `translateX(${translateX}px)`, transition: isTransitioning ? 'transform 0.3s ease' : 'none' }">
              <div
                v-for="(game, index) in infiniteGames"
                :key="`${game.id}-${Math.floor(index / featuredGames.length)}-${index}`"
                class="featured-game-card"
                :class="{
                  'center-card': index === centerIndex,
                  'left-card': index === centerIndex - 1,
                  'right-card': index === centerIndex + 1,
                  'left-outer-card': index === centerIndex - 2,
                  'right-outer-card': index === centerIndex + 2
                }"
                @click.prevent.stop="handleFeaturedGameClick(game, $event)"
                @mousedown.prevent="() => {}"
                style="cursor: pointer;"
              >
                <div class="crown-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>
                  </svg>
                </div>
                <img
                  :src="game.image"
                  :alt="game.name"
                  class="featured-image"
                />
              </div>
            </div>
          </div>
        </div>
                
        <!-- Featured Game Info -->
        <div class="featured-info">
          <div>{{ centerGame.name }}</div>
          <p>{{ centerGame.provider }}</p>
        </div>
      </div>
            
      <!-- Enhanced Category Tabs -->
      <div class="game-tabs-container">
        <div class="game-tabs">
          <button
            v-for="(category, index) in translatedGameCategories"
            :key="category.key"
            :ref="`tab-${index}`"
            @click="$emit('update:activeCategory', category.key); updateTabIndicator()"
            :class="['game-tab', { active: activeCategory === category.key }]"
          >
            <div class="tab-icon-wrapper">
              <img 
                :src="getCategoryIconPath(category.key)"
                :alt="`${category.label} icon`"
                class="tab-icon-image"
              />
            </div>
            <span class="tab-text">{{ category.label }}</span>
          </button>
        </div>
        <div class="tab-indicator" :style="indicatorStyle"></div>
      </div>
            
      <!-- Games Grid -->
      <div class="mobile-games-grid">
        <div
          v-for="game in displayedGames"
          :key="game.id"
          class="mobile-game-card"
          @click.prevent.stop="handleRegularGameClick(game, $event)"
          @mousedown.prevent="() => {}"
          style="cursor: pointer;"
        >
          <div class="game-image-container">
            <img
              :src="game.image"
              :alt="game.name"
              class="game-image"
            />
          </div>
          <div class="game-title">{{ game.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import allIcon from '@/assets/all-icon.svg'
import casinoIcon from '@/assets/casino-icon.svg'
import slotIcon from '@/assets/slot-icon.svg'
import sportIcon from '@/assets/sport-icon.svg'
import lotteryIcon from '@/assets/lottery-icon.svg'

export default {
  name: 'MobileGamesSection',
  props: {
    activeCategory: {
      type: String,
      default: 'all'
    },
    currentSlide: {
      type: Number,
      default: 0
    },
    gameCategories: {
      type: Array,
      required: true
    },
    featuredGames: {
      type: Array,
      required: true
    },
    games: {
      type: Array,
      required: true
    },
    currentLanguage: {
      type: String,
      default: 'en'
    }
  },
  emits: ['update:activeCategory', 'play-game', 'next-slide', 'prev-slide', 'featured-game-click', 'regular-game-click'],
  data() {
    return {
      centerIndex: 0,
      translateX: 0,
      cardWidth: 120,
      autoplayInterval: null,
      isTransitioning: false,
      touchStartX: 0,
      touchEndX: 0,
      minSwipeDistance: 50,
      duplicateCount: 3,
      tabIndicatorStyle: {
        transform: 'translateX(0px)',
        width: '0px',
        opacity: '0'
      }
    }
  },
  computed: {
    translatedGameCategories() {
      return this.gameCategories.map(category => ({
        key: category.key,
        label: category.label
      }));
    },
    displayedGames() {
      return this.activeCategory === 'all'
        ? this.games
        : this.games.filter(game => game.category === this.activeCategory)
    },
    centerGame() {
      const realIndex = this.currentRealIndex
      return this.featuredGames[realIndex] || this.featuredGames[0]
    },
    infiniteGames() {
      if (this.featuredGames.length === 0) return []
      const games = []
      for (let i = 0; i < this.duplicateCount; i++) {
        games.push(...this.featuredGames)
      }
      games.push(...this.featuredGames)
      for (let i = 0; i < this.duplicateCount; i++) {
        games.push(...this.featuredGames)
      }
      return games
    },
    currentRealIndex() {
      const middleSetStart = this.duplicateCount * this.featuredGames.length
      const indexInMiddleSet = (this.centerIndex - middleSetStart) % this.featuredGames.length
      return indexInMiddleSet < 0 ? this.featuredGames.length + indexInMiddleSet : indexInMiddleSet
    },
    indicatorStyle() {
      return this.tabIndicatorStyle
    }
  },
  watch: {
    activeCategory() {
      this.$nextTick(() => {
        this.updateTabIndicator()
      })
    }
  },
  mounted() {
    this.initializeCarousel()
    this.startAutoplay()
    this.updateTabIndicator()
    window.addEventListener('resize', this.handleResize)
    const tabContainer = this.$el.querySelector('.game-tabs')
    if (tabContainer) {
      tabContainer.addEventListener('scroll', this.updateTabIndicator)
    }
  },
  beforeUnmount() {
    this.stopAutoplay()
    window.removeEventListener('resize', this.handleResize)
    const tabContainer = this.$el.querySelector('.game-tabs')
    if (tabContainer) {
      tabContainer.removeEventListener('scroll', this.updateTabIndicator)
    }
  },
  methods: {
    t(key) {
      if (this.$t) {
        return this.$t(key)
      }
      if (this.$translations && this.$translations[this.currentLanguage]) {
        const keys = key.split('.')
        let value = this.$translations[this.currentLanguage]
        for (const k of keys) {
          value = value?.[k]
        }
        return value || key
      }
      return key
    },
    
    goToRegisterPage(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const locale = this.$i18n?.locale || 'en';

      let targetUrl = 'https://hengongbet.com/en-my?regRef=player';
  if (locale === 'zh') {
    targetUrl = 'https://hengongbet.com/zh-my?regRef=player';
  } else if (locale === 'ms') {
    targetUrl = 'https://hengongbet.com/ms-my?regRef=player';
  }
      // Redirect to external URL
      window.location.href = targetUrl;
},

    handleFeaturedGameClick(game, event) {
      console.log('Mobile featured game clicked:', game.name);
      this.$emit('featured-game-click', game);
      this.goToRegisterPage(event);
    },

    handleRegularGameClick(game, event) {
      console.log('Mobile regular game clicked:', game.name);
      this.$emit('regular-game-click', game);
      this.goToRegisterPage(event);
    },

    playGame(game) {
      console.log('Mobile game clicked (legacy):', game.name);
      this.$emit('play-game', game);
      this.goToRegisterPage(event);
    },

    initializeCarousel() {
      this.centerIndex = this.duplicateCount * this.featuredGames.length
      this.updateTranslateX()
    },

    scrollLeft() {
      if (this.isTransitioning) return
      this.isTransitioning = true
      this.centerIndex--
      this.updateTranslateX()
      setTimeout(() => {
        this.checkAndResetPosition()
        this.isTransitioning = false
      }, 300)
      this.$emit('prev-slide')
    },

    scrollRight() {
      if (this.isTransitioning) return
      this.isTransitioning = true
      this.centerIndex++
      this.updateTranslateX()
      setTimeout(() => {
        this.checkAndResetPosition()
        this.isTransitioning = false
      }, 300)
      this.$emit('next-slide')
    },

    checkAndResetPosition() {
      const middleSetStart = this.duplicateCount * this.featuredGames.length
      const middleSetEnd = middleSetStart + this.featuredGames.length - 1

      if (this.centerIndex < middleSetStart - this.featuredGames.length) {
        this.centerIndex += this.featuredGames.length * this.duplicateCount
        this.translateX = this.calculateTranslateX(this.centerIndex)
      } else if (this.centerIndex > middleSetEnd + this.featuredGames.length) {
        this.centerIndex -= this.featuredGames.length * this.duplicateCount
        this.translateX = this.calculateTranslateX(this.centerIndex)
      }
    },

    goToSlide(index) {
      if (this.isTransitioning) return
      this.stopAutoplay()
      this.isTransitioning = true
      this.centerIndex = (this.duplicateCount * this.featuredGames.length) + index
      this.updateTranslateX()
      setTimeout(() => {
        this.isTransitioning = false
        this.startAutoplay()
      }, 300)
    },

    calculateTranslateX(index) {
      const container = this.$refs.carouselContainer
      if (container) {
        const containerWidth = container.offsetWidth
        const cardEffectiveWidth = this.cardWidth - 10
        const centerOffset = (containerWidth - cardEffectiveWidth) / 2
        return centerOffset - index * cardEffectiveWidth
      }
      return 0
    },

    updateTranslateX() {
      this.translateX = this.calculateTranslateX(this.centerIndex)
    },

    startAutoplay() {
      this.stopAutoplay()
      this.autoplayInterval = setInterval(() => {
        this.scrollRight()
      }, 3000)
    },

    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
        this.autoplayInterval = null
      }
    },

    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX
      this.stopAutoplay()
    },

    handleTouchMove(e) {
      e.preventDefault()
    },

    handleTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].clientX
      this.handleSwipe()
      setTimeout(() => {
        this.startAutoplay()
      }, 1000)
    },

    handleSwipe() {
      const swipeDistance = this.touchStartX - this.touchEndX
      if (Math.abs(swipeDistance) > this.minSwipeDistance) {
        if (swipeDistance > 0) {
          this.scrollRight()
        } else {
          this.scrollLeft()
        }
      }
    },

    handleResize() {
      this.updateTranslateX()
      this.updateTabIndicator()
    },

    updateTabIndicator() {
      this.$nextTick(() => {
        const activeIndex = this.translatedGameCategories.findIndex(cat => cat.key === this.activeCategory)
        const tabRef = this.$refs[`tab-${activeIndex}`]?.[0]
        if (tabRef && tabRef.parentElement) {
          const tabRect = tabRef.getBoundingClientRect()
          const containerRect = tabRef.parentElement.getBoundingClientRect()
          const scrollLeft = tabRef.parentElement.scrollLeft
          const left = tabRect.left - containerRect.left + scrollLeft
          const width = tabRect.width
          this.tabIndicatorStyle = {
            transform: `translateX(${left}px)`,
            width: `${width}px`,
            opacity: '1'
          }
        }
      })
    },

    getCategoryIconPath(category) {
      const iconMap = {
        'all': allIcon,
        'slots': slotIcon, 
        'casino': casinoIcon,
        'sports': sportIcon,
        'lottery': lotteryIcon
      }
      return iconMap[category] || '/icons/all-icon.png'
    }
  }
}
</script>

<style scoped>
.mobile-games-section {
  color: white;
  padding: 0;
  margin: 0;
}

.mobile-container {
  padding: 0;
  max-width: 100%;
}

/* Header */
.mobile-header {
  margin-bottom: 20px;
}

.mobile-title {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0;
  text-align: left;
}

/* Featured Carousel */
.mobile-featured {
  margin-bottom: 30px;
}

.mobile-carousel {
  position: relative;
  margin-bottom: 15px;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.carousel-nav:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-nav.prev {
  left: 10px;
}

.carousel-nav.next {
  right: 10px;
}

.carousel-nav svg {
  width: 20px;
  height: 20px;
}

.carousel-container {
  overflow: hidden;
  border-radius: 15px;
  position: relative;
}

.carousel-track-horizontal {
  display: flex;
  padding: 20px 0;
  height: 100%;
  align-items: center;
  will-change: transform;
}

.featured-game-card {
  position: relative;
  min-width: 120px;
  width: 120px;
  height: 120px;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  transform: scale(0.7);
  opacity: 0.4;
  flex-shrink: 0;
  margin-right: -10px;
  /* Prevent text selection and context menu */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.featured-game-card.center-card {
  transform: scale(1.1);
  opacity: 1;
  z-index: 5;
  margin-right: -10px;
  margin-left: -10px;
}

.featured-game-card.left-card,
.featured-game-card.right-card {
  transform: scale(0.9);
  opacity: 0.8;
  z-index: 3;
}

.featured-game-card.left-outer-card,
.featured-game-card.right-outer-card {
  transform: scale(0.75);
  opacity: 0.6;
  z-index: 2;
}

.featured-game-card:not(.center-card):not(.left-card):not(.right-card):not(.left-outer-card):not(.right-outer-card) {
  z-index: 1;
}

.crown-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  color: #FFD700;
  z-index: 6;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.8));
}

.featured-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 15px;
  /* Prevent image dragging */
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.featured-info {
  text-align: center;
  margin-top: 12px;
}

.featured-info h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: white;
}

.featured-info p {
  font-size: 14px;
  color: #94a3b8;
  margin: 0;
}

/* Enhanced Game Tabs - Based on Design */
.game-tabs-container {
  position: relative;
  border-bottom: 1px solid white;
  margin: 0 8px 24px 8px;
}

.game-tabs {
  display: flex;
  position: relative;
  z-index: 2;
  gap: 0;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.game-tabs::-webkit-scrollbar {
  display: none;
}

.game-tab {
  flex: 1;
  padding: 12px 8px;
  background: transparent;
  border: none;
  color: #888;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  position: relative;
  border-radius: 20px;
  min-height: 60px;
}

.game-tab:hover {
  color: #ccc;
}

.game-tab.active {
  color: #fff;
  font-weight: 600;
}

.tab-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-icon-image {
  width: 15px !important;
  height: 15px !important;
  transition: all 0.3s ease;
  object-fit: contain;
}

.game-tab.active .tab-icon-image {
  transform: scale(1.1);
}

.tab-indicator {
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #f59e0b, #d97706, #f59e0b);
  border-radius: 2px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.6), 0 2px 8px rgba(245, 158, 11, 0.4);
}

/* Games Grid */
.mobile-games-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0 4px;
}

.mobile-game-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease;
  border-radius: 12px;
  overflow: hidden;
  /* Prevent text selection and context menu */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.mobile-game-card:active {
  transform: scale(0.95);
}

.game-image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #374151, #1f2937);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(71, 85, 105, 0.2);
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  /* Prevent image dragging */
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.mobile-game-card:hover .game-image {
  transform: scale(1.05);
}

.game-title {
  margin-top: 8px;
  font-size: 9px;
  font-weight: 600;
  color: white;
  text-align: center;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0 2px;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* Prevent text selection */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Responsive adjustments */
@media (max-width: 380px) {
  .mobile-container {
    padding: 15px 8px;
  }
  
  .game-tabs-container {
    margin: 0 4px 20px 4px;
  }
  
  .mobile-games-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    padding: 0 2px;
  }
  
  .game-tab {
    font-size: 10px;
    padding: 10px 6px;
    gap: 4px;
    min-height: 55px;
  }
  
  .tab-text {
    font-size: 10px;
  }
  
  .tab-icon-image {
    width: 28px;
    height: 28px;
  }
  
  .game-title {
    font-size: 8px;
    margin-top: 6px;
  }
}

@media (min-width: 381px) and (max-width: 480px) {
  .game-tabs-container {
    margin: 0 6px 22px 6px;
  }
  
  .mobile-games-grid {
    gap: 8px;
    padding: 0 3px;
  }
  
  .game-title {
    font-size: 9px;
  }
  
  .game-tab {
    padding: 11px 7px;
    font-size: 11px;
  }
  
  .tab-text {
    font-size: 11px;
  }
  
  .tab-icon-image {
    width: 30px;
    height: 30px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .mobile-games-grid {
    gap: 10px;
    padding: 0 4px;
  }
  
  .game-title {
    font-size: 10px;
  }
  
  .game-tab {
    padding: 12px 8px;
    font-size: 12px;
  }
  
  .tab-text {
    font-size: 12px;
  }
  
  .tab-icon-image {
    width: 32px;
    height: 32px;
  }
}
</style>
