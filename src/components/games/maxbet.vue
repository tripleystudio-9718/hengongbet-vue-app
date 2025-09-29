<template>
  <div class="game-overall">
    <div class="game-banner">
      <img :src="maxbetBanner" alt="Maxbet Banner" />
    </div>
    
    <!-- Main Page Title -->
    <h1 class="main-page-title" v-html="$t('maxbet.content.title')"></h1>

    <!-- Game Content Section -->
    <div class="game-content-section">
      
      <!-- Introduction Section -->
      <div class="content-section">
        <div class="section-description">
          <span v-html="$t('maxbet.content.intro.part1')"></span>
          <router-link :to="getLocalePath('/games')" class="hengongbet-link" v-html="$t('maxbet.content.intro.linkText')"></router-link>
          <span v-html="$t('maxbet.content.intro.part2')"></span>
        </div>
      </div>

      <!-- Why Choose Maxbet Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.whyChoose.title')"></h2>
        <div class="section-description" v-html="$t('maxbet.content.whyChoose.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in whyChooseItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.whyChoose.items.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.whyChoose.items.${item.key}.description`)"></div>
          </div>
        </div>

        <div class="expert-note">
          <strong v-html="$t('maxbet.content.whyChoose.expertNote.label')"></strong>
          <span v-html="$t('maxbet.content.whyChoose.expertNote.text')"></span>
        </div>
      </div>

      <!-- Popular Sports Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.popularSports.title')"></h2>
        <div class="section-description" v-html="$t('maxbet.content.popularSports.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in sportsItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.popularSports.items.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.popularSports.items.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- Types of Bets Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.betTypes.title')"></h2>
        <div class="section-description" v-html="$t('maxbet.content.betTypes.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in betTypeItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.betTypes.items.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.betTypes.items.${item.key}.description`)"></div>
          </div>
        </div>

        <div class="expert-note">
          <strong v-html="$t('maxbet.content.betTypes.definition.label')"></strong>
          <span v-html="$t('maxbet.content.betTypes.definition.text')"></span>
        </div>
      </div>

      <!-- Live Betting Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.liveBetting.title')"></h2>
        <div class="section-description" v-html="$t('maxbet.content.liveBetting.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in liveBettingItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.liveBetting.benefits.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.liveBetting.benefits.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- Security Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.security.title')"></h2>
        <div class="section-description" v-html="$t('maxbet.content.security.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in securityItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.security.items.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.security.items.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- Strategies Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.strategies.title')"></h2>
        <div class="section-description" v-html="$t('maxbet.content.strategies.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in strategyItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.strategies.items.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.strategies.items.${item.key}.description`)"></div>
          </div>
        </div>

        <div class="expert-note">
          <strong v-html="$t('maxbet.content.strategies.note.label')"></strong>
          <span v-html="$t('maxbet.content.strategies.note.text')"></span>
        </div>
      </div>

      <!-- User Experience Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.userExperience.title')"></h2>
        <div class="section-description" v-html="$t('maxbet.content.userExperience.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in userExperienceItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.userExperience.items.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.userExperience.items.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- Payment Methods Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.paymentMethods.title')"></h2>
        <div class="section-description" v-html="$t('maxbet.content.paymentMethods.description')"></div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in paymentItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.paymentMethods.items.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.paymentMethods.items.${item.key}.description`)"></div>
          </div>
        </div>

        <div class="section-description" v-html="$t('maxbet.content.paymentMethods.processingTime')"></div>
      </div>

      <!-- Responsible Gambling Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.responsibleGambling.title')"></h2>
        <div class="section-description">
          <span v-html="$t('maxbet.content.responsibleGambling.description')"></span>
          <span v-html="$t('maxbet.content.responsibleGambling.appInfo.part1')"></span>
          <router-link :to="getLocalePath('/download')" class="hengongbet-link" v-html="$t('maxbet.content.responsibleGambling.appInfo.linkText')"></router-link>
          <span v-html="$t('maxbet.content.responsibleGambling.appInfo.part2')"></span>
        </div>
        
        <div class="games-info-grid">
          <div v-for="(item, index) in responsibleGamblingItems" :key="index" class="game-info-card">
            <h3 class="game-info-title" v-html="$t(`maxbet.content.responsibleGambling.items.${item.key}.title`)"></h3>
            <div class="game-info-description" v-html="$t(`maxbet.content.responsibleGambling.items.${item.key}.description`)"></div>
          </div>
        </div>
      </div>

      <!-- FAQ Section - Accordion Design -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.faq.title')"></h2>
        
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
                v-html="$t(`maxbet.content.faq.items.${item.key}.question`)"
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
                  <p class="content-text" v-html="$t(`maxbet.content.faq.items.${item.key}.answer`)"></p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Final Thoughts Section -->
      <div class="content-section">
        <h2 class="section-title" v-html="$t('maxbet.content.finalThoughts.title')"></h2>
        <div class="section-description">
          <span v-html="$t('maxbet.content.finalThoughts.description.part1')"></span>
          <router-link :to="getLocalePath('/')" class="hengongbet-link" v-html="$t('maxbet.content.finalThoughts.description.linkText')"></router-link>
          <span v-html="$t('maxbet.content.finalThoughts.description.part2')"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the SVG icons
import openIcon from '@/assets/open-icon.svg'
import closeIcon from '@/assets/close-icon.svg'
import maxbetBanner from '@/assets/maxbet-banner.jpg'

export default {
  name: 'Maxbet',
  data() {
    return {
      // Make icons available to template
      openIcon,
      closeIcon,
      maxbetBanner,
      openFaqItems: { 0: true },
      whyChooseItems: [
        { key: 'extensiveMarkets' },
        { key: 'liveBetting' },
        { key: 'secureTransactions' },
        { key: 'fastPayouts' }
      ],
      sportsItems: [
        { key: 'football' },
        { key: 'basketball' },
        { key: 'otherSports' }
      ],
      betTypeItems: [
        { key: 'oneXTwo' },
        { key: 'asianHandicap' },
        { key: 'overUnder' },
        { key: 'correctScore' },
        { key: 'parlay' },
        { key: 'inPlay' }
      ],
      liveBettingItems: [
        { key: 'betterValue' },
        { key: 'hedging' },
        { key: 'interactive' }
      ],
      securityItems: [
        { key: 'encryption' },
        { key: 'monitoring' },
        { key: 'licensed' },
        { key: 'instantPayouts' }
      ],
      strategyItems: [
        { key: 'research' },
        { key: 'bankroll' },
        { key: 'handicap' },
        { key: 'parlays' },
        { key: 'liveOdds' }
      ],
      userExperienceItems: [
        { key: 'mobileFriendly' },
        { key: 'multiLanguage' },
        { key: 'customerSupport' },
        { key: 'clearInterface' }
      ],
      paymentItems: [
        { key: 'bankTransfers' },
        { key: 'eWallets' },
        { key: 'cards' },
        { key: 'crypto' }
      ],
      responsibleGamblingItems: [
        { key: 'depositLimits' },
        { key: 'selfExclusion' },
        { key: 'awarenessResources' }
      ],
      faqItems: [
        { key: 'what' },
        { key: 'payouts' },
        { key: 'liveBetting' },
        { key: 'safety' }
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
}
</style>