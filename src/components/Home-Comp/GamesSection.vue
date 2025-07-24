<template>
  <section class="games-section">
    <div class="games-container">
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

      <!-- Games Grid -->
      <div class="games-grid">
        <!-- Featured Game Slider -->
        <div class="featured-game">
          <div class="featured-slider">
            <div 
              v-for="(featuredGame, index) in featuredGames" 
              :key="featuredGame.id"
              class="game-card featured-card"
              :class="{ active: currentSlide === index }"
              v-show="currentSlide === index"
            >
              <div class="crown-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" class="crown-svg">
                  <path d="M5 16L3 12L5.5 7L10 10L12 4L14 10L18.5 7L21 12L19 16H5ZM7 14H17L18 12.5L16.5 9L13.5 11.5L12 6.5L10.5 11.5L7.5 9L6 12.5L7 14Z"/>
                </svg>
              </div>
              <div class="featured-image">
                <img :src="featuredGame.image" :alt="featuredGame.name" class="featured-game-image" />
              </div>
              <div class="game-info">
                <h3>{{ featuredGame.name }}</h3>
                <p class="game-provider">{{ featuredGame.provider }}</p>
                <div class="game-rating">
                  <span class="stars">{{ featuredGame.rating }}</span>
                </div>
              </div>
            </div>
            
            <!-- Slider Indicators -->
            <div class="slider-indicators">
              <button 
                v-for="(game, index) in featuredGames" 
                :key="index"
                @click="currentSlide = index"
                :class="['indicator', { active: currentSlide === index }]"
              ></button>
            </div>
          </div>
        </div>

        <!-- Regular Games Grid -->
        <div class="regular-games">
          <div v-for="game in displayedGames" :key="game.id" class="game-card">
            <img :src="game.image" :alt="game.name" class="game-image" />
            <div class="game-overlay">
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
export default {
  name: 'GamesSection',
  data() {
    return {
      activeCategory: 'All',
      currentSlide: 0,
      autoSlideInterval: null,
      gameCategories: ['All', 'Slots', 'Casino', 'Sports', 'Lottery'],
      featuredGames: [
        {
          id: 'featured-1',
          name: 'Super Ace',
          provider: 'Microgaming',
          image: 'https://via.placeholder.com/160x160/fbbf24/000000?text=SUPER+ACE',
          rating: '★★★★★'
        },
        {
          id: 'featured-2',
          name: 'Lucky 365',
          provider: 'Lucky 365',
          image: 'https://via.placeholder.com/160x160/ff6b35/ffffff?text=LUCKY+365',
          rating: '★★★★☆'
        },
        {
          id: 'featured-3',
          name: 'Mega Win',
          provider: 'JDB',
          image: 'https://via.placeholder.com/160x160/e74c3c/ffffff?text=MEGA+WIN',
          rating: '★★★★★'
        },
        {
          id: 'featured-4',
          name: 'Golden Tiger',
          provider: 'Evolution',
          image: 'https://via.placeholder.com/160x160/f39c12/000000?text=GOLDEN+TIGER',
          rating: '★★★★☆'
        }
      ],
      games: [
        { id: 1, name: 'LUCKY 365', provider: 'Lucky 365', image: 'https://via.placeholder.com/120x120/ff6b35/ffffff?text=LUCKY+365', category: 'Slots' },
        { id: 2, name: 'ASKMESLOT', provider: 'Askmeslot', image: 'https://via.placeholder.com/120x120/4ecdc4/ffffff?text=ASKMESLOT', category: 'Slots' },
        { id: 3, name: 'JDB', provider: 'JDB', image: 'https://via.placeholder.com/120x120/ff6b35/ffffff?text=JDB', category: 'Slots' },
        { id: 4, name: 'MONKEY KING', provider: 'Monkey King', image: 'https://via.placeholder.com/120x120/2c3e50/ffffff?text=MONKEY+KING', category: 'Slots' },
        { id: 5, name: 'JILI', provider: 'Jili', image: 'https://via.placeholder.com/120x120/e74c3c/ffffff?text=JILI', category: 'Slots' },
        { id: 6, name: 'MICROSLOT', provider: 'Microslot', image: 'https://via.placeholder.com/120x120/9b59b6/ffffff?text=MICROSLOT', category: 'Slots' },
        { id: 7, name: 'EVOLUTION', provider: 'Evolution', image: 'https://via.placeholder.com/120x120/34495e/ffffff?text=EVOLUTION', category: 'Casino' },
        { id: 8, name: 'HOT ROAD', provider: 'Hot Road', image: 'https://via.placeholder.com/120x120/e67e22/ffffff?text=HOT+ROAD', category: 'Casino' },
        { id: 9, name: 'MAXBET', provider: 'Maxbet', image: 'https://via.placeholder.com/120x120/3498db/ffffff?text=MAXBET', category: 'Sports' },
        { id: 10, name: 'SV388', provider: 'SV388', image: 'https://via.placeholder.com/120x120/1abc9c/ffffff?text=SV388', category: 'Sports' },
        { id: 11, name: 'RCB988', provider: 'RCB988', image: 'https://via.placeholder.com/120x120/f39c12/ffffff?text=RCB988', category: 'Sports' },
        { id: 12, name: 'EKOR', provider: 'Ekor', image: 'https://via.placeholder.com/120x120/8e44ad/ffffff?text=EKOR', category: 'Lottery' },
        { id: 13, name: 'BIG GAMING', provider: 'Big Gaming', image: 'https://via.placeholder.com/120x120/27ae60/ffffff?text=BIG+GAMING', category: 'Casino' },
        { id: 14, name: 'SEXY', provider: 'Sexy', image: 'https://via.placeholder.com/120x120/e91e63/ffffff?text=SEXY', category: 'Casino' }
      ]
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeUnmount() {
    this.stopAutoSlide()
  },
  methods: {
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide()
      }, 4000) // Change slide every 4 seconds
    },
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval)
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.featuredGames.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.featuredGames.length - 1 : this.currentSlide - 1
    }
  },
  computed: {
    displayedGames() {
      if (this.activeCategory === 'All') {
        return this.games.slice(0, 14)
      }
      return this.games.filter(game => game.category === this.activeCategory).slice(0, 14)
    }
  }
}
</script>

<style scoped>
/* Games Section */
.games-section {
  padding: 60px 20px;
  background: #0f172a;
}

.games-container {
  max-width: 1200px;
  margin: 0 auto;
}

.games-title {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
}

/* Game Categories */
.game-categories {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 8px 20px;
  background: #334155;
  color: #cbd5e1;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
}

.category-btn.active,
.category-btn:hover {
  background: #fbbf24;
  color: #0f172a;
}

/* Games Grid */
.games-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

/* Featured Game Slider */
.featured-game {
  position: relative;
}

.featured-slider {
  border-radius: 15px;
  height: 280px;
  position: relative;
}

.featured-card {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.5s ease;
}

.featured-card.active {
  opacity: 1;
  transform: scale(1);
}

.crown-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  color: #0f172a;
  opacity: 0.4;
}

.crown-svg {
  width: 100%;
  height: 100%;
}

.featured-image {
  margin-bottom: 15px;
}

.featured-game-image {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.featured-card .game-info {
  text-align: center;
  z-index: 2;
}

.featured-card h3 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.featured-card .game-provider {
  font-size: 0.9rem;
  margin-bottom: 10px;
  opacity: 0.8;
}

.stars {
  color: #0f172a;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

/* Slider Indicators */
.slider-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(15, 23, 42, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #0f172a;
  transform: scale(1.2);
}

/* Regular Games */
.regular-games {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.game-card {
  background: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1;
}

.game-card:not(.featured-card):hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.game-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.9));
  color: white;
  padding: 20px 12px 12px;
  border-radius: 0 0 12px 12px;
}

.game-overlay h4 {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 4px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.game-overlay p {
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
    height: 200px;
  }
  
  .featured-card h3 {
    font-size: 1.4rem;
  }
  
  .featured-game-image {
    width: 60px;
    height: 60px;
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
  
  .featured-card {
    height: 200px;
  }
  
  .regular-games {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 12px;
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
  
  .featured-card h3 {
    font-size: 1.4rem;
  }
  
  .regular-games {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 10px;
  }
  
  .game-overlay {
    padding: 15px 8px 8px;
  }
  
  .game-overlay h4 {
    font-size: 0.8rem;
  }
  
  .game-overlay p {
    font-size: 0.7rem;
  }
}
</style>