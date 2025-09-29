<template>
  <div class="game-overall">
    <div class="game-banner">
      <img :src="jiliBanner" alt="Jili Banner" />
    </div>
    
    <!-- Main Page Title -->
    <h1 class="main-page-title" v-html="$t('jiliSlots.content.title')"></h1>

    <!-- Game Content Section -->
    <div class="game-content-section">
      
      <!-- Introduction Section -->
      <div class="content-section">
        <div class="section-description">
          <span v-html="$t('jiliSlots.content.intro.text')"></span>
          <strong><span v-html="$t('jiliSlots.content.intro.linkText')"></span></strong>
          <span v-html="$t('jiliSlots.content.intro.continuation')"></span>
        </div>
      </div>

      <!-- What Are Jili Slots Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.whatAreJiliSlots.title')"></h2>
        <div class="section-description" v-html="$t('jiliSlots.content.whatAreJiliSlots.description')"></div>
        
        <div class="expert-note">
          <span v-html="$t('jiliSlots.content.whatAreJiliSlots.expertNote')"></span>
        </div>

        <h3 class="game-info-title" v-html="$t('jiliSlots.content.whatAreJiliSlots.coreTitle')"></h3>
        <div class="games-info-grid">
          <div v-for="(feature, index) in coreCharacteristics" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`jiliSlots.content.whatAreJiliSlots.characteristics.${feature}`)"></div>
          </div>
        </div>
      </div>

      <!-- Why Play at Hengongbet Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.whyPlayHengongbet.title')"></h2>
        <div class="section-description" v-html="$t('jiliSlots.content.whyPlayHengongbet.description')"></div>
        
        <h3 class="game-info-title" v-html="$t('jiliSlots.content.whyPlayHengongbet.benefitsTitle')"></h3>
        <div class="games-info-grid">
          <div v-for="(benefit, index) in hengongbetBenefits" :key="index" class="game-info-card">
            <div class="game-info-description">
              <span v-if="benefit === 'exclusivePromotions'">
                <strong><span v-html="$t('jiliSlots.content.whyPlayHengongbet.exclusive')"></span> </strong> <router-link :to="getLocalePath('/promotion')" class="hengongbet-link"><span v-html="$t('jiliSlots.content.whyPlayHengongbet.promotion')"></span> </router-link> <span v-html="$t('jiliSlots.content.whyPlayHengongbet.benefits.exclusivePromotions')"></span>
              </span>
              <span v-else v-html="$t(`jiliSlots.content.whyPlayHengongbet.benefits.${benefit}`)"></span>
            </div>
          </div>
          <div class="section-description" v-html="$t('jiliSlots.content.whyPlayHengongbet.engaging')"></div>
        </div>
      </div>

      <!-- Popular Games Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.popularGames.title')"></h2>
        
        <div v-for="game in popularGames" :key="game.key" class="game-details">
          <h3 class="game-info-title" v-html="$t(`jiliSlots.content.popularGames.games.${game.key}.name`)"></h3>
          
          <!-- <div class="game-specs-grid">
            <div class="spec-item">
              <span class="spec-label" v-html="$t('jiliSlots.content.popularGames.labels.theme')"></span> 
              <span v-html="$t(`jiliSlots.content.popularGames.games.${game.key}.theme`)"></span>
            </div>
            <div class="spec-item">
              <span class="spec-label" v-html="$t('jiliSlots.content.popularGames.labels.keyFeature')"></span> 
              <span v-html="$t(`jiliSlots.content.popularGames.games.${game.key}.keyFeature`)"></span>
            </div>
            <div class="spec-item">
              <span class="spec-label" v-html="$t('jiliSlots.content.popularGames.labels.volatility')"></span> 
              <span v-html="$t(`jiliSlots.content.popularGames.games.${game.key}.volatility`)"></span>
            </div>
            <div class="spec-item">
              <span class="spec-label" v-html="$t('jiliSlots.content.popularGames.labels.bestFor')"></span> 
              <span v-html="$t(`jiliSlots.content.popularGames.games.${game.key}.bestFor`)"></span>
            </div>
          </div> -->
          
          <div class="section-description" style="margin-top: 15px; font-size: 16px;" v-html="$t(`jiliSlots.content.popularGames.games.${game.key}.description`)"></div>
        </div>
      </div>

      <!-- Game Comparison Table Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.gameComparison.title')"></h2>
        
        <div class="table-container">
          <table class="sports-table comparison-table">
            <thead>
              <tr>
                <th v-html="$t('jiliSlots.content.gameComparison.tableHeaders.game')"></th>
                <th v-html="$t('jiliSlots.content.gameComparison.tableHeaders.theme')"></th>
                <th v-html="$t('jiliSlots.content.gameComparison.tableHeaders.keyFeature')"></th>
                <th v-html="$t('jiliSlots.content.gameComparison.tableHeaders.volatility')"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="game in popularGames" :key="game.key">
                <td v-html="$t(`jiliSlots.content.gameComparison.tableRows.${game.key}.game`)"></td>
                <td v-html="$t(`jiliSlots.content.gameComparison.tableRows.${game.key}.theme`)"></td>
                <td v-html="$t(`jiliSlots.content.gameComparison.tableRows.${game.key}.keyFeature`)"></td>
                <td v-html="$t(`jiliSlots.content.gameComparison.tableRows.${game.key}.volatility`)"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- How to Start Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.howToStart.title')"></h2>
        <div class="section-description" v-html="$t('jiliSlots.content.howToStart.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(step, index) in howToStartSteps" :key="index" class="game-info-card">
            <div class="game-info-description">
              <span v-if="step === 'step1'">
                <strong v-html="$t('jiliSlots.content.howToStart.steps.step1.title')"></strong><br>
                <span v-html="$t('jiliSlots.content.howToStart.steps.step1.text')"></span> <router-link :to="getLocalePath('/')" class="hengongbet-link" v-html="$t('jiliSlots.content.howToStart.steps.step1.link')"></router-link><span v-html="$t('jiliSlots.content.howToStart.steps.step1.continuation')"></span>
              </span>
              <span v-else v-html="$t(`jiliSlots.content.howToStart.steps.${step}`)"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Unique Features Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.uniqueFeatures.title')"></h2>
        
        <div v-for="feature in uniqueFeatures" :key="feature.key" class="feature-category">
          <h3 class="game-info-title" v-html="$t(`jiliSlots.content.uniqueFeatures.${feature.key}.title`)"></h3>
          <div class="game-info-description">
            <span v-if="feature.key === 'mobileFirst'">
              <span v-html="$t('jiliSlots.content.uniqueFeatures.mobileFirst.text')"></span> <router-link :to="getLocalePath('/download')" class="hengongbet-link" v-html="$t('jiliSlots.content.uniqueFeatures.mobileFirst.link')"></router-link><span v-html="$t('jiliSlots.content.uniqueFeatures.mobileFirst.continuation')"></span>
            </span>
            <span v-else v-html="$t(`jiliSlots.content.uniqueFeatures.${feature.key}.description`)"></span>
          </div>
        </div>

        <div class="expert-note">
          <span v-html="$t('jiliSlots.content.uniqueFeatures.definition')"></span>
        </div>
      </div>

      <!-- Gaming Tips Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.gamingTips.title')"></h2>
        
        <div class="games-info-grid">
          <div v-for="(tip, index) in gamingTips" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`jiliSlots.content.gamingTips.tips.${tip}`)"></div>
          </div>
        </div>
      </div>

      <!-- Comparison Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.comparison.title')"></h2>
        <div class="section-description" v-html="$t('jiliSlots.content.comparison.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(advantage, index) in jiliAdvantages" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`jiliSlots.content.comparison.advantages.${advantage}`)"></div>
          </div>
        </div>
      </div>

      <!-- Responsible Gaming Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.responsibleGaming.title')"></h2>
        <div class="section-description" v-html="$t('jiliSlots.content.responsibleGaming.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(tool, index) in responsibleGamingTools" :key="index" class="game-info-card">
            <div class="game-info-description" v-html="$t(`jiliSlots.content.responsibleGaming.tools.${tool}`)"></div>
          </div>
        </div>
      </div>

      <!-- FAQ Section - Accordion Design -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.faq.title')"></h2>
        
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
                v-html="$t(`jiliSlots.content.faq.${item.key}.question`)"
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
                  <p class="content-text" v-html="$t(`jiliSlots.content.faq.${item.key}.answer`)"></p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('jiliSlots.content.summary.title')"></h2>
        <div class="section-description" v-html="$t('jiliSlots.content.summary.description')"></div>
        <div class="section-description" v-html="$t('jiliSlots.content.summary.conclusion')"></div>
      </div>

    </div>
  </div>
</template>

<script>
// Import the SVG icons
import openIcon from '@/assets/open-icon.svg'
import closeIcon from '@/assets/close-icon.svg'
import jiliBanner from '@/assets/jili-banner.jpg'

export default {
  name: 'JiliSlots',
  data() {
    return {
      // Make icons available to template
      openIcon,
      closeIcon,
      jiliBanner,
      openFaqItems: { 0: true },
      coreCharacteristics: [
        'highRtp',
        'diverseThemes',
        'bonusFeatures',
        'lightweightDesign'
      ],
      hengongbetBenefits: [
        'licensedPlatform',
        'accessibility24x7',
        'exclusivePromotions',
        'fastTransactions',
        'seamlessIntegration'
      ],
      popularGames: [
        { key: 'fortuneGems' },
        { key: 'crazy777' },
        { key: 'goldenEmpire' },
        { key: 'romaX' }
      ],
      howToStartSteps: [
        'step1',
        'step2',
        'step3',
        'step4'
      ],
      uniqueFeatures: [
        { key: 'mobileFirst' },
        { key: 'bonusMechanics' },
        { key: 'fairness' }
      ],
      gamingTips: [
        'manageBankroll',
        'pickRightRtp',
        'exploreVolatility',
        'testDemo'
      ],
      jiliAdvantages: [
        'localizedContent',
        'lightweightPerformance',
        'simplerMechanics'
      ],
      responsibleGamingTools: [
        'depositLimits',
        'selfExclusion',
        'support24x7'
      ],
      faqItems: [
        { key: 'whatKnownFor' },
        { key: 'safeToPlay' },
        { key: 'bestForBeginners' },
        { key: 'winRealMoney' }
      ]
    }
  },
  mounted() {
    // Debug translation loading
    console.log('Translation test:', this.$t('jiliSlots.content.title'));
    console.log('Step 1 test:', this.$t('jiliSlots.content.howToStart.steps.step1.title'));
    console.log('Current locale:', this.$i18n.locale);
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

/* Feature Category Styling */
.feature-category {
  margin-bottom: 30px;
}

.feature-category:last-child {
  margin-bottom: 0;
}

/* Game Details Styling */
.game-details {
  margin-bottom: 50px;
  padding: 30px;
  background: linear-gradient(135deg, rgba(242, 178, 64, 0.05) 0%, rgba(39, 39, 42, 0.8) 100%);
  border-radius: 16px;
  border: 1px solid rgba(242, 178, 64, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.game-details:last-child {
  margin-bottom: 0;
}

.game-specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 25px;
}

.spec-item {
  padding: 18px 20px;
  background: linear-gradient(135deg, rgba(242, 178, 64, 0.12) 0%, rgba(242, 178, 64, 0.06) 100%);
  border-radius: 12px;
  border: 1px solid rgba(242, 178, 64, 0.15);
  font-size: 15px;
  line-height: 1.5;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.spec-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(242, 178, 64, 0.15);
  border-color: rgba(242, 178, 64, 0.3);
}

.spec-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #F2B240 0%, #E5A535 100%);
}

.spec-item .spec-label {
  color: #F2B240;
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.spec-item span {
  color: #E5E7EB;
  font-weight: 400;
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
  max-width: 1200px;
  margin: 0 auto;
  min-width: 600px;
}

.comparison-table thead tr {
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1.2fr 1fr;
  background: linear-gradient(180deg, #F1AF3E 52.88%, #ED8F23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
}

.comparison-table tbody tr {
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1.2fr 1fr;
  border-bottom: 1px solid #F1AF3E;
}

.comparison-table tbody tr:last-child {
  border-bottom: none;
}

.sports-table th,
.sports-table td {
  padding: 15px 8px;
  text-align: center;
  border-right: 1px solid #F1AF3E;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  border: none;
  font-size: 13px;
}

.sports-table th:last-child,
.sports-table td:last-child {
  border-right: none;
}

.sports-table th {
  color: #000;
  font-weight: 700;
  font-size: 14px;
}

.sports-table td {
  color: #FFF;
  background: linear-gradient(180deg, rgba(241, 175, 62, 0.10) 52.88%, rgba(237, 143, 35, 0.10) 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
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
    font-size: 24px;
  }

  .section-title {
    font-size: 20px !important;
  }

  .game-info-title {
    font-size: 18px !important;
  }
}
</style>