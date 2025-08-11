<template>
  <div class="game-overall">
    <div class="game-banner">
      <img :src="bannerImage" :alt="$t('games.alt.gameBanner')" />
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
          v-html="$t(`games.tabs.${tab.id}`)"
        >
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
            @click="goToRegisterPage"
            :title="$t('games.actions.clickToPlay', { gameName: $t(`games.names.${game.nameKey}`) })"
          >
            <div class="game-image">
              <img :src="game.image" :alt="$t('games.alt.gameImage')" />
            </div>
            <div class="game-name" v-html="$t(`games.names.${game.nameKey}`)"></div>
          </div>
        </div>
        <!-- Slots Tab -->
        <div v-show="activeTab === 'slots'" class="tab-content active">
          <div 
            v-for="game in slotsGames"
            :key="game.id"
            class="game-card"
            @click="goToRegisterPage"
            :title="$t('games.actions.clickToPlay', { gameName: $t(`games.names.${game.nameKey}`) })"
          >
            <div class="game-image">
              <img :src="game.image" :alt="$t('games.alt.gameImage')" />
            </div>
            <div class="game-name">{{ $t(`games.names.${game.nameKey}`) }}</div>
          </div>
        </div>
        <!-- Casino Tab -->
        <div v-show="activeTab === 'casino'" class="tab-content active">
          <div 
            v-for="game in casinoGames"
            :key="game.id"
            class="game-card"
            @click="goToRegisterPage"
            :title="$t('games.actions.clickToPlay', { gameName: $t(`games.names.${game.nameKey}`) })"
          >
            <div class="game-image">
              <img :src="game.image" :alt="$t('games.alt.gameImage')" />
            </div>
            <div class="game-name">{{ $t(`games.names.${game.nameKey}`) }}</div>
          </div>
        </div>
        <!-- Sports Tab -->
        <div v-show="activeTab === 'sports'" class="tab-content active">
          <div 
            v-for="game in sportsGames"
            :key="game.id"
            class="game-card"
            @click="goToRegisterPage"
            :title="$t('games.actions.clickToPlay', { gameName: $t(`games.names.${game.nameKey}`) })"
          >
            <div class="game-image">
              <img :src="game.image" :alt="$t('games.alt.gameImage')" />
            </div>
            <div class="game-name">{{ $t(`games.names.${game.nameKey}`) }}</div>
          </div>
        </div>
        <!-- Lottery Tab -->
        <div v-show="activeTab === 'lottery'" class="tab-content active">
          <div 
            v-for="game in lotteryGames"
            :key="game.id"
            class="game-card"
            @click="goToRegisterPage"
            :title="$t('games.actions.clickToPlay', { gameName: $t(`games.names.${game.nameKey}`) })"
          >
            <div class="game-image">
              <img :src="game.image" :alt="$t('games.alt.gameImage')" />
            </div>
            <div class="game-name">{{ $t(`games.names.${game.nameKey}`) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Game Information Section -->
    <div class="game-content-section">
      <!-- Slots Section -->
      <div class="content-section">
        <div class="section-title" v-html="$t('games.content.slots.title')"></div>
        <div class="section-description" v-html="$t('games.content.slots.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in slotsContent" :key="index" class="game-info-card">
            <div class="game-info-title" v-html="$t(`games.content.slots.games.${item.key}.title`)"></div>
            <div class="game-info-description" v-html="$t(`games.content.slots.games.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- Casino Section -->
      <div class="content-section">
        <div class="section-title" v-html="$t('games.content.casino.title')"></div>
        <div class="section-description" v-html="$t('games.content.casino.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in casinoContent" :key="index" class="game-info-card">
            <div class="game-info-title" v-html="$t(`games.content.casino.games.${item.key}.title`)"></div>
            <div class="game-info-description" v-html="$t(`games.content.casino.games.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- Sports Section -->
      <div class="content-section">
        <div class="section-title" v-html="$t('games.content.sports.title')"></div>
        <div class="section-description" v-html="$t('games.content.sports.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in sportsContent" :key="index" class="game-info-card">
            <div class="game-info-title" v-html="$t(`games.content.sports.games.${item.key}.title`)"></div>
            <div class="game-info-description" v-html="$t(`games.content.sports.games.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- Lottery Section -->
      <div class="content-section">
        <div class="section-title" v-html="$t('games.content.lottery.title')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in lotteryContent" :key="index" class="game-info-card">
            <div class="game-info-title" v-html="$t(`games.content.lottery.games.${item.key}.title`)"></div>
            <div class="game-info-description" v-html="$t(`games.content.lottery.games.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- FAQ Section - Accordion Design -->
      <div class="content-section">
        <div class="section-title" v-html="$t('games.content.faq.title')"></div>
        
        <div class="accordion-container">
          <div 
            v-for="(item, index) in faqContent" 
            :key="index" 
            class="accordion-item"
          >
            <button
              @click="toggleContentItem('faq', index)"
              class="accordion-trigger"
            >
              <span 
                class="trigger-text"
                :class="{ 'text-active': openContentItems.faq[index] }"
                v-html="$t(`games.content.faq.items.${item.key}.question`)"
              ></span>

              <div class="trigger-icon-wrapper">
                <div class="trigger-icon-circle">
                  <svg 
                    v-if="openContentItems.faq[index]" 
                    class="trigger-icon-image"
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path d="M18 12H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <svg 
                    v-else 
                    class="trigger-icon-image"
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
            </button>
            
            <transition name="fade-slide">
              <div v-if="openContentItems.faq[index]" class="accordion-content">
                <div class="content-body">
                  <p class="content-text" v-html="$t(`games.content.faq.items.${item.key}.answer`)"></p>
                </div>
              </div>
            </transition>
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
        { id: 'all' },
        { id: 'slots' },
        { id: 'casino' },
        { id: 'sports' },
        { id: 'lottery' }
      ],
      allGames: [
        { 
          id: 1, 
          nameKey: 'lucky365', 
          image: new URL('@/assets/game1.png', import.meta.url).href, 
          category: 'slots' 
        },
        { 
          id: 2, 
          nameKey: 'askmeslot', 
          image: new URL('@/assets/game2.png', import.meta.url).href, 
          category: 'slots' 
        },
        { 
          id: 3, 
          nameKey: 'jdb', 
          image: new URL('@/assets/game3.png', import.meta.url).href, 
          category: 'slots' 
        },
        { 
          id: 4, 
          nameKey: 'monkeyKing', 
          image: new URL('@/assets/game4.png', import.meta.url).href, 
          category: 'slots' 
        },
        { 
          id: 5, 
          nameKey: 'hotRoad', 
          image: new URL('@/assets/game5.png', import.meta.url).href, 
          category: 'casino' 
        },
        { 
          id: 6, 
          nameKey: 'maxbet', 
          image: new URL('@/assets/game6.png', import.meta.url).href, 
          category: 'sports' 
        },
        { 
          id: 7, 
          nameKey: 'sv388', 
          image: new URL('@/assets/game7.png', import.meta.url).href, 
          category: 'sports' 
        },
        { 
          id: 8, 
          nameKey: 'rcb988', 
          image: new URL('@/assets/game8.png', import.meta.url).href, 
          category: 'sports' 
        },
        { 
          id: 9, 
          nameKey: 'jili', 
          image: new URL('@/assets/game9.png', import.meta.url).href, 
          category: 'slots' 
        },
        { 
          id: 10, 
          nameKey: 'microslot', 
          image: new URL('@/assets/game10.png', import.meta.url).href, 
          category: 'slots' 
        },
        { 
          id: 11, 
          nameKey: 'evolution', 
          image: new URL('@/assets/game11.png', import.meta.url).href, 
          category: 'casino' 
        },
        { 
          id: 12, 
          nameKey: 'sexy', 
          image: new URL('@/assets/game12.png', import.meta.url).href, 
          category: 'casino' 
        },
        { 
          id: 13, 
          nameKey: 'ekor', 
          image: new URL('@/assets/game13.png', import.meta.url).href, 
          category: 'lottery' 
        },
        { 
          id: 14, 
          nameKey: 'bigGaming', 
          image: new URL('@/assets/game14.png', import.meta.url).href, 
          category: 'casino' 
        },
        { 
          id: 15, 
          nameKey: 'pragmaticPlay', 
          image: new URL('@/assets/game15.png', import.meta.url).href, 
          category: 'casino' 
        }
      ],
      openContentItems: {
        faq: { 0: true }
      },
      slotsContent: [
        { key: 'lucky365' },
        { key: 'askmeslot' },
        { key: 'jdb' },
        { key: 'monkeyKing' },
        { key: 'jili' },
        { key: 'microslot' }
      ],
      casinoContent: [
        { key: 'hotRoad' },
        { key: 'evolution' },
        { key: 'sexy' },
        { key: 'bigGaming' },
        { key: 'pragmaticPlay' }
      ],
      sportsContent: [
        { key: 'maxbet' },
        { key: 'sv388' },
        { key: 'rcb988' }
      ],
      lotteryContent: [
        { key: 'ekor' }
      ],
      faqContent: [
        { key: 'popular' },
        { key: 'realTime' },
        { key: 'sports' },
        { key: 'ekor4d' },
        { key: 'fair' },
        { key: 'mobile' }
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
    toggleContentItem(section, index) {
      this.openContentItems[section] = {
        ...this.openContentItems[section],
        [index]: !this.openContentItems[section][index]
      };
    },
    handleGameClick(game) {
      const gameName = this.$t(`games.names.${game.nameKey}`);
      console.log('Game clicked:', gameName);
    },
    goToRegisterPage() {
      const locale = this.$i18n?.locale || 'en';

      let targetUrl = 'https://hengongbet.com/en-my?regRef=player';
      if (locale === 'zh') {
        targetUrl = 'https://hengongbet.com/zh-my?regRef=player';
      } else if (locale === 'ms') {
        targetUrl = 'https://hengongbet.com/ms-my?regRef=player';
      }
      // Redirect to external URL
      window.location.href = targetUrl;
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
.game-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
}

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

.game-card:hover .game-image img {
  transform: scale(1.05);
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
  text-align: center;
}

/* Game Content Section */
.game-content-section {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 60px 20px;
  color: white;
}

.content-section {
  margin-bottom: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.content-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.section-description {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin: 0 0 40px 0;
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Game Info Cards - Static Display */
.games-info-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.game-info-card {
  background: transparent;
  padding: 0;
}

.game-info-title {
  font-size: 24px;
  font-weight: 600;
  color: #F2B240;
  margin-bottom: 15px;
  line-height: 1.3;
}

.game-info-description {
  font-size: 16px;
  color: #D1D5DB;
  line-height: 1.6;
  margin-bottom: 0;
}

/* Accordion Styles - Only for FAQ */
.accordion-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.accordion-item {
  background-color: #242424;
  border-radius: 0.5rem;
  overflow: hidden;
}

.accordion-item:last-child {
  margin-bottom: 0;
}

.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.accordion-trigger:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.trigger-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 1.125rem;
  padding-right: 1rem;
  line-height: 1.4;
  transition: color 0.2s ease;
  text-align: left;
}

.text-active {
  color: #F2B240;
}

.trigger-icon-wrapper {
  flex-shrink: 0;
  margin-left: 1rem;
}

.trigger-icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #F2B240;
  border-radius: 50%;
}

.trigger-icon-image {
  width: 20px;
  height: 20px;
  color: #000000;
}

.accordion-content {
  padding: 0 1.25rem 0.5rem 1.25rem;
}

.content-body {
  border-radius: 0.5rem;
  padding: 1rem;
}

.content-text {
  color: #D1D5DB;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

/* Transition animations */
.fade-slide-enter-active {
  transition: all 0.3s ease-out;
}

.fade-slide-leave-active {
  transition: all 0.3s ease-in;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .tab-content {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .game-content-section {
    padding: 40px 15px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
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
}
</style>