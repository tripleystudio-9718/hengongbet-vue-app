<template>
  <div class="game-overall">
    <div class="game-banner">
    </div>
    
    <!-- Main Page Title -->
    <h1 class="main-page-title" v-html="$t('bigGaming.content.title')"></h1>

    <!-- Game Content Section -->
    <div class="game-content-section">
      
      <!-- Introduction Section -->
      <div class="content-section">
        <div class="section-description" v-html="$t('bigGaming.content.intro.description1')"></div>
        <div class="section-description" v-html="$t('bigGaming.content.intro.description2')"></div>
      </div>

      <!-- What Makes Stand Out Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.standOut.title')"></h2>
        <div class="section-description">
          <span v-html="$t('bigGaming.content.standOut.description.part1')"></span>
          <router-link :to="getLocalePath('/games')" class="hengongbet-link" v-html="$t('bigGaming.content.standOut.description.linkText')"></router-link>
          <span v-html="$t('bigGaming.content.standOut.description.part2')"></span>
        </div>
        <div class="section-description" v-html="$t('bigGaming.content.standOut.qualities')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in standOutItems" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`bigGaming.content.standOut.features.${item.key}`)"></div>
          </div>
        </div>
      </div>

      <!-- Popular Games Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.popularGames.title')"></h2>
        <div class="section-description" v-html="$t('bigGaming.content.popularGames.description')"></div>
        
        <div class="table-container">
          <table class="sports-table">
            <thead>
              <tr>
                <th v-html="$t('bigGaming.content.popularGames.tableHeaders.game')"></th>
                <th v-html="$t('bigGaming.content.popularGames.tableHeaders.description')"></th>
                <th v-html="$t('bigGaming.content.popularGames.tableHeaders.appeal')"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="game in popularGamesTableData" :key="game">
                <td v-html="$t(`bigGaming.content.popularGames.tableRows.${game}.game`)"></td>
                <td v-html="$t(`bigGaming.content.popularGames.tableRows.${game}.description`)"></td>
                <td v-html="$t(`bigGaming.content.popularGames.tableRows.${game}.appeal`)"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- BG Baccarat Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.bgBaccarat.title')"></h2>
        <div class="section-description" v-html="$t('bigGaming.content.bgBaccarat.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in bgBaccaratItems" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`bigGaming.content.bgBaccarat.features.${item.key}`)"></div>
          </div>
        </div>

        <div class="section-description" v-html="$t('bigGaming.content.bgBaccarat.strategies')"></div>

        <div class="expert-note">
          <strong v-html="$t('bigGaming.content.bgBaccarat.expertNote.label')"></strong>
          <span v-html="$t('bigGaming.content.bgBaccarat.expertNote.text')"></span>
        </div>
      </div>

      <!-- Roulette Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.roulette.title')"></h2>
        <div class="section-description" v-html="$t('bigGaming.content.roulette.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in rouletteItems" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`bigGaming.content.roulette.features.${item.key}`)"></div>
          </div>
        </div>

        <div class="section-description" v-html="$t('bigGaming.content.roulette.appeal')"></div>
        <div class="section-description" v-html="$t('bigGaming.content.roulette.didYouKnow')"></div>
      </div>

      <!-- Dragon Tiger Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.dragonTiger.title')"></h2>
        <div class="section-description" v-html="$t('bigGaming.content.dragonTiger.description')"></div>
        <div class="section-description" v-html="$t('bigGaming.content.dragonTiger.highlights')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in dragonTigerItems" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`bigGaming.content.dragonTiger.features.${item.key}`)"></div>
          </div>
        </div>

        <div class="section-description" v-html="$t('bigGaming.content.dragonTiger.conclusion')"></div>
      </div>

      <!-- Sic Bo Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.sicBo.title')"></h2>
        <div class="section-description" v-html="$t('bigGaming.content.sicBo.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in sicBoItems" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`bigGaming.content.sicBo.features.${item.key}`)"></div>
          </div>
        </div>

        <div class="section-description" v-html="$t('bigGaming.content.sicBo.appeal')"></div>
      </div>

      <!-- Poker Variants Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.poker.title')"></h2>
        <div class="section-description" v-html="$t('bigGaming.content.poker.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in pokerItems" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`bigGaming.content.poker.features.${item.key}`)"></div>
          </div>
        </div>

        <div class="section-description" v-html="$t('bigGaming.content.poker.conclusion')"></div>
      </div>

      <!-- Key Advantages Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.keyAdvantages.title')"></h2>
        <div class="section-description" v-html="$t('bigGaming.content.keyAdvantages.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in keyAdvantagesItems" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`bigGaming.content.keyAdvantages.features.${item.key}`)"></div>
          </div>
        </div>

        <div class="section-description" v-html="$t('bigGaming.content.keyAdvantages.conclusion')"></div>
      </div>

      <!-- Numbers That Matter Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.numbersMatter.title')"></h2>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in numbersMatterItems" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`bigGaming.content.numbersMatter.${item.key}`)"></div>
          </div>
        </div>
      </div>

      <!-- FAQ Section - Accordion Design -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.faq.title')"></h2>
        
        <div class="accordion-container">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index" 
            class="accordion-item"
          >
            <button
              @click="toggleFaqItem(index)"
              class="accordion-trigger"
            >
              <h3 
                class="trigger-text"
                :class="{ 'text-active': openFaqItems[index] }"
                v-html="$t(`bigGaming.content.faq.${item.key}.question`)"
              ></h3>

              <div class="trigger-icon-wrapper">
                <img 
                  :src="openFaqItems[index] ? closeIcon : openIcon"
                  :alt="openFaqItems[index] ? 'Close' : 'Open'"
                  class="trigger-icon-image"
                />
              </div>
            </button>
            
            <transition name="fade-slide">
              <div v-if="openFaqItems[index]" class="accordion-content">
                <div class="content-body">
                  <p class="content-text" v-html="$t(`bigGaming.content.faq.${item.key}.answer`)"></p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('bigGaming.content.summary.title')"></h2>
        <div class="section-description">
          <span v-html="$t('bigGaming.content.summary.description.part1')"></span>
          <router-link :to="getLocalePath('/')" class="hengongbet-link" v-html="$t('bigGaming.content.summary.description.linkText')"></router-link>
          <span v-html="$t('bigGaming.content.summary.description.part2')"></span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// Import the SVG icons
import openIcon from '@/assets/open-icon.svg'
import closeIcon from '@/assets/close-icon.svg'

export default {
  name: 'BigGaming',
  data() {
    return {
      // Make icons available to template
      openIcon,
      closeIcon,
      openFaqItems: { 0: true },
      standOutItems: [
        { key: 'licensedDealers' },
        { key: 'stableStreaming' },
        { key: 'fairOdds' },
        { key: 'availability247' }
      ],
      popularGamesTableData: [
        'bgLiveBaccarat',
        'bgLiveRoulette',
        'bgLiveDragonTiger',
        'bgLiveSicBo',
        'bgLivePoker'
      ],
      bgBaccaratItems: [
        { key: 'multipleCameras' },
        { key: 'sideBets' },
        { key: 'fastResults' }
      ],
      rouletteItems: [
        { key: 'hdLiveSpins' },
        { key: 'clearBettingLayouts' },
        { key: 'europeanAsianRules' }
      ],
      dragonTigerItems: [
        { key: 'fastRounds' },
        { key: 'tieBets' },
        { key: 'accessibleRules' }
      ],
      sicBoItems: [
        { key: 'clearBettingGrids' },
        { key: 'highPayoutMultipliers' },
        { key: 'liveDiceRolls' }
      ],
      pokerItems: [
        { key: 'dealerInteraction' },
        { key: 'variants' },
        { key: 'sideBetsJackpots' }
      ],
      keyAdvantagesItems: [
        { key: 'trustedLicensing' },
        { key: 'support247' },
        { key: 'mobileOptimized' },
        { key: 'multiplePayment' }
      ],
      numbersMatterItems: [
        { key: 'availability' },
        { key: 'tiePayout' },
        { key: 'rouletteHouseEdge' },
        { key: 'baccaratHouseEdge' },
        { key: 'dragonTigerTime' }
      ],
      faqItems: [
        { key: 'whatIsBigGaming' },
        { key: 'isTrusted' },
        { key: 'mobilePlay' },
        { key: 'minimumBet' },
        { key: 'bestOdds' }
      ]
    }
  },
  methods: {
    // Custom method to get localized path using current locale
    getLocalePath(path) {
      const locale = this.$i18n?.locale || 'en';
      if (locale === 'en') {
        return path;
      }
      return `/${locale}${path}`;
    },
    
    toggleFaqItem(index) {
      this.openFaqItems = {
        ...this.openFaqItems,
        [index]: !this.openFaqItems[index]
      };
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
  min-height: 100vh;
}

.game-banner {
  width: 100%;
  height: auto;
}

.game-banner img {
  width: 100%;
  height: auto;
}

/* Game Content Section */
.game-content-section {
  padding: 0 20px;
  color: white;
}

.content-section {
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.content-section:last-child {
  margin-bottom: 0;
}

/* Main Page Title (H1) */
.main-page-title {
  font-size: 48px;
  font-weight: 700;
  color: #F2B240;
  text-align: center;
  margin: 40px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

/* Main Section Title (H2) */
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
  margin: 0 0 30px 0;
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hengongbet-link {
  color: #F2B240;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.hengongbet-link:hover {
  color: #E5A535;
  text-decoration: underline;
}

/* Game Info Cards - Static Display */
.games-info-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.game-info-card {
  background: transparent;
  padding: 0;
  text-align: center;
}

/* Game Info Title (H3) */
.game-info-title {
  font-size: 24px;
  font-weight: 600;
  color: #F2B240;
  margin-bottom: 15px;
  line-height: 1.3;
  text-align: center;
}

.game-info-description {
  font-size: 16px;
  color: #D1D5DB;
  line-height: 1.6;
  margin-bottom: 0;
  text-align: center;
}

/* Expert Note Styling */
.expert-note {
  border-left: 4px solid #F2B240;
  padding: 20px;
  margin: 30px auto;
  border-radius: 8px;
  max-width: 800px;
  font-style: italic;
  color: #E5E7EB;
  text-align: center;
}

.expert-note strong {
  color: #F2B240;
  font-weight: 600;
}

/* Table Styling */
.table-container {
  width: 100%;
  overflow-x: auto;
  margin: 0 auto 40px auto;
  -webkit-overflow-scrolling: touch;
}

.sports-table {
  background: #333;
  border-radius: 36px;
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  min-width: 600px;
}

.sports-table thead tr {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  background: linear-gradient(180deg, #F1AF3E 52.88%, #ED8F23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
}

.sports-table tbody tr {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  border-bottom: 1px solid #F1AF3E;
}

.sports-table tbody tr:last-child {
  border-bottom: none;
}

.sports-table th,
.sports-table td {
  padding: 20px;
  text-align: center;
  border-right: 1px solid #F1AF3E;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  border: none;
}

.sports-table th:last-child,
.sports-table td:last-child {
  border-right: none;
}

.sports-table th {
  color: #000;
  font-weight: 700;
  font-size: 16px;
}

.sports-table td {
  color: #FFF;
  background: linear-gradient(180deg, rgba(241, 175, 62, 0.10) 52.88%, rgba(237, 143, 35, 0.10) 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  font-size: 16px;
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
  margin-bottom: 1rem;
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

/* FAQ Question Title (H3) */
.trigger-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.4;
  transition: color 0.2s ease;
  text-align: left;
  margin: 0;
  padding-right: 1rem;
}

.text-active {
  color: #F2B240;
}

.trigger-icon-wrapper {
  flex-shrink: 0;
  margin-left: 1rem;
}

.trigger-icon-image {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}

.trigger-icon-image:hover {
  transform: scale(1.1);
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
  .game-content-section {
    padding: 40px 15px;
  }

  .main-page-title {
    font-size: 36px;
    margin: 30px 0;
  }

  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .main-page-title {
    font-size: 28px;
    margin: 20px 0;
  }

  .section-title {
    font-size: 24px !important;
  }

  .game-info-title {
    font-size: 20px !important;
  }

  .game-info-description,
  .section-description,
  .content-text {
    font-size: 14px !important;
  }

  .trigger-text {
    font-size: 16px !important;
  }

  .trigger-icon-image {
    width: 16px;
    height: 16px;
  }

  .expert-note {
    padding: 15px;
    margin: 30px auto;
    font-size: 14px;
  }

  /* Mobile table styles */
  .table-container {
    padding: 0 5px;
  }

  .sports-table {
    border-radius: 20px;
    min-width: 320px;
  }

  .sports-table thead tr,
  .sports-table tbody tr {
    grid-template-columns: 1fr 2fr 2fr;
  }

  .sports-table th,
  .sports-table td {
    padding: 12px 8px;
    font-size: 12px;
    line-height: 1.3;
    text-align: center;
  }

  .sports-table th {
    font-size: 13px;
    font-weight: 700;
  }
}
</style>