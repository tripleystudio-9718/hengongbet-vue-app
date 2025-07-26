<template>
  <section class="games-section">
    <div class="games-container">
      <div class="games-top">
        <h2 class="games-title">Hot Games</h2>
        
        <!-- Game Categories -->
        <div class="game-categories">
          <button 
            v-for="category in gameCategories"
            :key="category"
            @click="activeCategory = category"
            :class="['category-btn', { active: activeCategory === category }]"
          >
            {{ category }}
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
            <div class="game-card">
              <img 
                :src="game.image"
                :alt="game.name"
                class="game-image"
              />
            </div>
            <div class="game-info-external">
              <h4>{{ game.name }}</h4>
              <p>{{ game.provider }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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

const GAME_CATEGORIES = ['All', 'Slots', 'Casino', 'Sports', 'Lottery']
const AUTO_SLIDE_INTERVAL = 4000

export default {
  name: 'GamesSection',
  data() {
    return {
      activeCategory: 'All',
      currentSlide: 0,
      autoSlideInterval: null,
      gameCategories: GAME_CATEGORIES,
      featuredGames: [
        {
          id: 'featured-1',
          name: 'Iceland',
          provider: 'Endorphina',
          image: icelandGameIcon
        },
        {
          id: 'featured-2',
          name: 'Panther Moon',
          provider: 'Novomatic',
          image: pantherMoonGameIcon
        },
        {
          id: 'featured-3',
          name: 'Fa Fa Fa',
          provider: 'Golden Hero',
          image: fafafaGameIcon
        },
        {
          id: 'featured-4',
          name: 'Sugar Bliss',
          provider: 'Sweet Gaming',
          image: sugarBlissGameIcon
        },
        {
          id: 'featured-5',
          name: 'Super Ace',
          provider: 'Pragmatic Play',
          image: superAceGameIcon
        }
      ],
      games: [
        { id: 1, name: 'Lucky 365', image: game1, category: 'Slots'},
        { id: 2, name: 'Askmeslot', image: game2, category: 'Slots'},
        { id: 3, name: 'JDB', image: game3, category: 'Slots'},
        { id: 4, name: 'Monkey King', image: game4, category: 'Slots'},
        { id: 5, name: 'Hot Road', image: game5, category: 'Casino'},
        { id: 6, name: 'Maxbet', image: game6, category: 'Sports'},
        { id: 7, name: 'Sv388', image: game7, category: 'Sports'},
        { id: 8, name: 'Rcb988', image: game8, category: 'Sports'},
        { id: 9, name: 'Jili', image: game9, category: 'Slots'},
        { id: 10, name: 'Microslot', image: game10, category: 'Slots'},
        { id: 11, name: 'Evolution', image: game11, category: 'Casino'},
        { id: 12, name: 'Sexy', image: game12, category: 'Casino'},
        { id: 13, name: 'Ekor', image: game13, category: 'Lottery'},
        { id: 14, name: 'Big Gaming', image: game14, category: 'Casino'}
      ]
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeUnmount() {
    this.stopAutoSlide()
  },
  computed: {
    displayedGames() {
      return this.activeCategory === 'All' 
        ? this.games 
        : this.games.filter(game => game.category === this.activeCategory)
    },
    currentFeaturedGame() {
      return this.featuredGames[this.currentSlide]
    }
  },
  methods: {
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
    
    setCurrentSlide(index) {
      this.currentSlide = index
    }
  }
}
</script>

<style scoped>
/* Games Section */
.games-section {
  padding: 20px;
}

.games-container {
  max-width: 1200px;
  margin: 0 auto;
}

.games-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  margin-bottom: 0;
  position: relative;
}

.games-title {
  color: white;
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0 10px 0;
}

.game-categories {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;
}

.category-btn {
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

.category-btn.active,
.category-btn:hover {
  color: #F1AE3D;
}

.category-btn.active::after {
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

/* Games Grid */
.games-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
  padding: 20px 0;
}

/* Featured Game Slider */
.featured-game {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.featured-slider {
  border-radius: 15px;
  height: 250px;
  position: relative;
  width: 280px;
  flex-shrink: 0;
}

.featured-slide-card {
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

.featured-slide-card.active {
  opacity: 1;
  transform: scale(1);
}

.crown-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  color: #F1AE3D;
  z-index: 3;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.8));
}

.crown-svg {
  width: 100%;
  height: 100%;
}

.featured-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.featured-slide-image {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
}

/* Featured Game Info Outside Card */
.featured-game-info {
  text-align: center;
  color: white;
}

.featured-game-info h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.featured-game-info .game-provider {
  font-size: 0.9rem;
  margin-bottom: 0;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Slider Indicators */
.slider-indicators {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #F1AE3D;
  width: 24px;
  height: 8px;
}

/* Regular Games */
.regular-games {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  height: 320px;
}

.game-card-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.game-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 120px;
  flex-shrink: 0;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.game-info-external {
  margin-top: 8px;
  text-align: center;
  color: white;
}

.game-info-external h4 {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 4px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.game-info-external p {
  font-size: 0.75rem;
  opacity: 0.9;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .games-grid {
    grid-template-columns: 250px 1fr;
    gap: 20px;
  }
  
  .featured-slider {
    height: 320px;
    width: 240px;
  }
  
  .featured-game-info h3 {
    font-size: 1.1rem;
  }
  
  .regular-games {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 240px;
  }
  
  .game-card {
    height: 100px;
  }
}

@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .featured-game {
    order: -1;
  }
  
  .featured-slider {
    height: 280px;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
  
  .regular-games {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 12px;
    height: 280px;
  }
  
  .game-card {
    height: 60px;
  }
  
  .game-categories {
    gap: 8px;
  }
  
  .category-btn {
    padding: 6px 16px;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .games-section {
    padding: 40px 15px;
  }
  
  .featured-game-info h3 {
    font-size: 1rem;
  }
  
  .featured-slider {
    height: 240px;
  }
  
  .regular-games {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;
    height: 320px;
  }
  
  .game-card {
    height: 50px;
  }
  
  .game-info-external {
    margin-top: 6px;
  }
  
  .game-info-external h4 {
    font-size: 0.8rem;
  }
  
  .game-info-external p {
    font-size: 0.7rem;
  }
}
</style>