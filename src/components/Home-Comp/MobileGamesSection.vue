<template>
  <section class="mobile-games-section">
    <div class="mobile-container">
      <!-- Header -->
      <div class="mobile-header">
        <h2 class="mobile-title">Hot Games</h2>
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
                  'right-card': index === centerIndex + 1
                }"
              >
                <div class="crown-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16L3 12L5.5 7L10 10L12 4L14 10L18.5 7L21 12L19 16H5ZM7 14H17L18 12.5L16.5 9L13.5 11.5L12 6.5L10.5 11.5L7.5 9L6 12.5L7 14Z"/>
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
        
        <!-- Pagination Dots -->
        <div class="carousel-pagination">
          <button
            v-for="(game, index) in featuredGames"
            :key="`dot-${index}`"
            @click="goToSlide(index)"
            :class="['pagination-dot', { active: index === currentRealIndex }]"
          ></button>
        </div>
                
        <!-- Featured Game Info -->
        <div class="featured-info">
          <h3>{{ centerGame.name }}</h3>
          <p>{{ centerGame.provider }}</p>
        </div>
      </div>
            
      <!-- Enhanced Category Tabs -->
      <div class="game-tabs-container">
        <div class="game-tabs">
          <button
            v-for="(category, index) in gameCategories"
            :key="category"
            :ref="`tab-${index}`"
            @click="$emit('update:activeCategory', category)"
            :class="['game-tab', { active: activeCategory === category }]"
          >
            <span class="tab-icon" v-html="getCategoryIcon(category)"></span>
            <span class="tab-text">{{ category }}</span>
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
          @click="playGame(game)"
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
export default {
  name: 'MobileGamesSection',
  props: {
    activeCategory: {
      type: String,
      default: 'All'
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
    }
  },
  emits: ['update:activeCategory', 'play-game', 'next-slide', 'prev-slide'],
  data() {
    return {
      centerIndex: 0,
      translateX: 0,
      cardWidth: 160,
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
    displayedGames() {
      return this.activeCategory === 'All'
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
        const cardEffectiveWidth = this.cardWidth - 20
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
        const activeIndex = this.gameCategories.indexOf(this.activeCategory)
        const tabRef = this.$refs[`tab-${activeIndex}`]?.[0]
        if (tabRef && tabRef.parentElement) {
          const tabRect = tabRef.getBoundingClientRect()
          const containerRect = tabRef.parentElement.getBoundingClientRect()
          const scrollLeft = tabRef.parentElement.scrollLeft
          const left = tabRect.left - containerRect.left + scrollLeft + 8
          const width = tabRect.width - 16
          this.tabIndicatorStyle = {
            transform: `translateX(${left}px)`,
            width: `${width}px`,
            opacity: '1'
          }
        }
      })
    },
    getCategoryIcon(category) {
      const icons = {
        'All': '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 6h2v2H3V6m4 0h14v2H7V6m-4 5h2v2H3v-2m4 0h14v2H7v-2m-4 5h2v2H3v-2m4 0h14v2H7v-2Z"/></svg>',
        'Slots': '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2v16h14V4H5m3 4h2v2H8V8m0 4h2v2H8v-2m4-4h2v2h-2V8m0 4h2v2h-2v-2m4-4h2v2h-2V8m0 4h2v2h-2v-2Z"/></svg>',
        'Casino': '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/></svg>',
        'Sports': '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
        'Lottery': '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M5 3h4v6h6V3h4v18h-4v-6H9v6H5V3Z"/></svg>'
      }
      return icons[category] || ''
    },
    playGame(game) {
      console.log('Playing game:', game.name)
      this.$emit('play-game', game)
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
  padding: 20px 0;
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
  min-width: 160px;
  width: 160px;
  height: 160px;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  transform: scale(0.8);
  opacity: 0.6;
  flex-shrink: 0;
  margin-right: -20px;
}

.featured-game-card.center-card {
  transform: scale(1.1);
  opacity: 1;
  z-index: 5;
  margin-right: -20px;
  margin-left: -20px;
}

.featured-game-card.left-card,
.featured-game-card.right-card {
  transform: scale(0.9);
  opacity: 0.8;
  z-index: 3;
}

.featured-game-card:not(.center-card):not(.left-card):not(.right-card) {
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
}

.carousel-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 15px 0;
}

.pagination-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-dot.active {
  background: #f59e0b;
  transform: scale(1.2);
}

.pagination-dot:hover {
  background: rgba(255, 255, 255, 0.5);
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

/* Enhanced Game Tabs */
.game-tabs-container {
  position: relative;
  background: linear-gradient(145deg, rgba(51, 65, 85, 0.8), rgba(30, 41, 59, 0.9));
  border-radius: 16px;
  padding: 6px;
  margin: 0 8px 24px 8px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(71, 85, 105, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.game-tabs {
  display: flex;
  position: relative;
  z-index: 2;
  gap: 0;
  overflow-x: auto;           /* enables horizontal scroll */
  white-space: nowrap;        /* prevents wrapping */
  -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */
  scrollbar-width: none;      /* hide scrollbar for Firefox */
}

.game-tabs::-webkit-scrollbar {
  display: none;              /* hide scrollbar for Chrome/Safari */
}

.game-tab {
  flex: 0 0 auto;
  padding: 14px 12px;
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  position: relative;
  border-radius: 12px;
  min-height: 48px;
}

.game-tab:hover {
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

.game-tab.active {
  color: #f59e0b;
  font-weight: 600;
}

.game-tab.active .tab-icon {
  color: #f59e0b;
  transform: scale(1.1);
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.tab-text {
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: inherit;
}

.tab-indicator {
  position: absolute;
  bottom: 6px;
  left: 6px;
  height: 4px;
  background: linear-gradient(90deg, #f59e0b, #d97706, #f59e0b);
  border-radius: 2px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  box-shadow: 
    0 0 12px rgba(245, 158, 11, 0.6),
    0 2px 8px rgba(245, 158, 11, 0.4);
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
}

/* Responsive adjustments */
@media (max-width: 380px) {
  .mobile-container {
    padding: 15px 8px;
  }
  
  .game-tabs-container {
    margin: 0 4px 20px 4px;
    padding: 5px;
  }
  
  .mobile-games-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    padding: 0 2px;
  }
  
  .game-tab {
    font-size: 11px;
    padding: 12px 8px;
    gap: 6px;
    min-height: 44px;
  }
  
  .tab-text {
    font-size: 11px;
  }
  
  .game-title {
    font-size: 8px;
    margin-top: 6px;
  }
  
  .tab-icon svg {
    width: 14px;
    height: 14px;
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
    padding: 13px 10px;
    font-size: 12px;
  }
  
  .tab-text {
    font-size: 12px;
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
    padding: 14px 12px;
    font-size: 13px;
  }
  
  .tab-text {
    font-size: 13px;
  }
}
</style>