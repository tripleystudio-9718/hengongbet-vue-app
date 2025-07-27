<template>
   <div class="game-overall">
    <div class="game-banner">
      <img :src="bannerImage" alt="Game Banner" />
    </div>
  <div class="game-tabs-container">
    <!-- Tab Navigation -->
    <div class="tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        class="tab-button" 
        :class="{ active: activeTab === tab.id }"
        @click="setActiveTab(tab.id)"
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content-wrapper">
      <!-- All Games Tab -->
      <div v-show="activeTab === 'all'" class="tab-content active">
        <div 
          v-for="game in allGames" 
          :key="game.id"
          class="game-card"
          @click="handleGameClick(game)"
        >
          <div class="game-image">
            <img :src="game.image" :alt="game.name" />
          </div>
          <div class="game-name">{{ game.name }}</div>
        </div>
      </div>

      <!-- Slots Tab -->
      <div v-show="activeTab === 'slots'" class="tab-content active">
        <div 
          v-for="game in slotsGames" 
          :key="game.id"
          class="game-card"
          @click="handleGameClick(game)"
        >
          <div class="game-image">
            <img :src="game.image" :alt="game.name" />
          </div>
          <div class="game-name">{{ game.name }}</div>
        </div>
      </div>

      <!-- Casino Tab -->
      <div v-show="activeTab === 'casino'" class="tab-content active">
        <div 
          v-for="game in casinoGames" 
          :key="game.id"
          class="game-card"
          @click="handleGameClick(game)"
        >
          <div class="game-image">
            <img :src="game.image" :alt="game.name" />
          </div>
          <div class="game-name">{{ game.name }}</div>
        </div>
      </div>

      <!-- Sports Tab -->
      <div v-show="activeTab === 'sports'" class="tab-content active">
        <div 
          v-for="game in sportsGames" 
          :key="game.id"
          class="game-card"
          @click="handleGameClick(game)"
        >
          <div class="game-image">
            <img :src="game.image" :alt="game.name" />
          </div>
          <div class="game-name">{{ game.name }}</div>
        </div>
      </div>

      <!-- Lottery Tab -->
      <div v-show="activeTab === 'lottery'" class="tab-content active">
        <div 
          v-for="game in lotteryGames" 
          :key="game.id"
          class="game-card"
          @click="handleGameClick(game)"
        >
          <div class="game-image">
            <img :src="game.image" :alt="game.name" />
          </div>
          <div class="game-name">{{ game.name }}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'GameTabs',
  data() {
    return {
      bannerImage: new URL('@/assets/gamepage-banner.png', import.meta.url).href,
      activeTab: 'all',
      tabs: [
        { id: 'all', name: 'All' },
        { id: 'slots', name: 'Slots' },
        { id: 'casino', name: 'Casino' },
        { id: 'sports', name: 'Sports' },
        { id: 'lottery', name: 'Lottery' }
      ],
      allGames: [
        { id: 1, name: 'Lucky 365', image: new URL('@/assets/game1.png', import.meta.url).href, category: 'slots' },
        { id: 2, name: 'Askmeslot', image: new URL('@/assets/game2.png', import.meta.url).href, category: 'slots' },
        { id: 3, name: 'JDB', image: new URL('@/assets/game3.png', import.meta.url).href, category: 'slots' },
        { id: 4, name: 'Monkey King', image: new URL('@/assets/game4.png', import.meta.url).href, category: 'slots' },
        { id: 5, name: 'Hot Road', image: new URL('@/assets/game5.png', import.meta.url).href, category: 'casino' },
        { id: 6, name: 'Maxbet', image: new URL('@/assets/game6.png', import.meta.url).href, category: 'sports' },
        { id: 7, name: 'Sv388', image: new URL('@/assets/game7.png', import.meta.url).href, category: 'sports' },
        { id: 8, name: 'Rcb988', image: new URL('@/assets/game8.png', import.meta.url).href, category: 'sports' },
        { id: 9, name: 'Jili', image: new URL('@/assets/game9.png', import.meta.url).href, category: 'slots' },
        { id: 10, name: 'Microslot', image: new URL('@/assets/game10.png', import.meta.url).href, category: 'slots' },
        { id: 11, name: 'Evolution', image: new URL('@/assets/game11.png', import.meta.url).href, category: 'casino' },
        { id: 12, name: 'Sexy', image: new URL('@/assets/game12.png', import.meta.url).href, category: 'casino' },
        { id: 13, name: 'Ekor', image: new URL('@/assets/game13.png', import.meta.url).href, category: 'lottery' },
        { id: 14, name: 'Big Gaming', image: new URL('@/assets/game14.png', import.meta.url).href, category: 'casino' },
        { id: 15, name: 'Pragmatic Play', image: new URL('@/assets/game15.png', import.meta.url).href, category: 'casino' }
      ]
    }
  },
  computed: {
    slotsGames() {
      return this.allGames.filter(game => game.category === 'slots');
    },
    casinoGames() {
      return this.allGames.filter(game => game.category === 'casino');
    },
    sportsGames() {
      return this.allGames.filter(game => game.category === 'sports');
    },
    lotteryGames() {
      return this.allGames.filter(game => game.category === 'lottery');
    }
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
    handleGameClick(game) {
      console.log('Game clicked:', game.name);
    }
  }
}
</script>


<style scoped>

  .game-overall {
  width: 100%;
  height: auto;
  background-color: #27272A;
  font-family: "Afacad",sans-serif !important;
}

.game-banner {
  width: 100%;
  height: auto;
}

.game-banner img {
  width: 100%;
  height: auto;
}


.game-tabs-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #27272A;
  min-height: 100vh;
  font-family: 'Rubik', sans-serif;
}

/* Tab Navigation */
.tabs {
  display: flex;
  gap: 0;
  margin-bottom: 30px;
  background-color: #242424;
  border-radius: 25px;
  padding: 4px;
  justify-content: center;
  max-width: 630px;
  margin: 0 auto 30px auto;
  gap:4px;
}

.tab-button {
  background: transparent;
  border: none;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 100;
  color: #ffffff;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-family: 'Rubik', sans-serif;
}

.tab-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.tab-button.active {
background: linear-gradient(135deg, #F0AD3C 0%, #ED9326 100%);
  color: #070707;
  font-weight: 100;
}

/* Tab Content */
.tab-content-wrapper {
  width: 100%;
}

.tab-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* Game Cards */

.game-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  transition: transform 0.3s ease;
}



.game-name {
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:30px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .tab-content {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

@media (max-width: 768px) {
  html, body {
    overflow-x: hidden;
  }

  .game-overall,
  .game-tabs-container,
  .tab-content-wrapper,
  .tab-content {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .tabs {
    overflow-x: auto;
    white-space: nowrap;
    justify-content: center;
    padding: 6px 0;
    gap: 6px;
    scrollbar-width: none; /* Firefox */
  }

  .tabs::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  .tab-button {
    font-size: 12px;
    padding: 6px 10px;
    flex: 0 0 auto; /* Don't shrink */
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 0;
    margin: 0;
  }

  .game-card {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .game-image {
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    background: #000;
  }

  .game-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }

  .game-name {
    font-size: 11px;
    color: #fff;
    text-align: center;
    margin: 6px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

</style>
