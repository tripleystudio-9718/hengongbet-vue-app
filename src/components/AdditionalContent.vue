<template>
  <div class="additional-content-section">
    <!-- Why Download Section -->
    <div class="why-download-section">
      <h1 class="main-section-title" v-html="$t('download.why_download.title')"></h1>
      <div class="section-description" v-html="$t('download.why_download.description')"></div>
      <h3 class="brand-tagline" v-html="$t('download.why_download.title2')"></h3>
      <ul class="feature-list">
        <li v-for="(feature, index) in whyDownloadFeatures" :key="index" v-html="feature"></li>
      </ul>
      <div class="section-description" v-html="$t('download.why_download.tagline')"></div>
    </div>

    <!-- Android Installation Steps Section -->
    <div class="installation-section">
      <h2 class="section-title" v-html="$t('download.steps.title')"></h2>
      <h3 class="step-title" v-html="$t('download.steps.step1')"></h3>
      <div class="section-description" v-html="$t('download.steps.step1Description')"></div>
      <h3 class="step-title" v-html="$t('download.steps.step2')"></h3>
      <div class="section-description" v-html="$t('download.steps.step2Description')"></div>
      <h3 class="step-title" v-html="$t('download.steps.step3')"></h3>
      <div class="section-description" v-html="$t('download.steps.step3Description')"></div>
    </div>
    
    <!-- iOS Installation Steps Section -->
    <div class="installation-section">
      <h2 class="section-title" v-html="$t('download.steps.ios_title')"></h2>
      <h3 class="step-title" v-html="$t('download.steps.ios_step1')"></h3>
      <div class="section-description" v-html="$t('download.steps.ios_step1Description')"></div>
      <h3 class="step-title" v-html="$t('download.steps.ios_step2')"></h3>
      <div class="section-description" v-html="$t('download.steps.ios_step2Description')"></div>
      <h3 class="step-title" v-html="$t('download.steps.ios_step3')"></h3>
      <div class="section-description" v-html="$t('download.steps.ios_step3Description')"></div>
      <h3 class="step-title" v-html="$t('download.steps.ios_step4')"></h3>
      <div class="section-description" v-html="$t('download.steps.ios_step4Description')"></div>
    </div>

    <!-- Start Playing Section -->
    <div class="start-playing-section">
      <h2 class="section-title" v-html="$t('download.start_playing.title')"></h2>
      <div class="section-description" v-html="$t('download.start_playing.description')"></div>
      <ul class="game-list">
        <li v-for="(game, index) in startPlayingGames" :key="index" v-html="game"></li>
      </ul>
    </div>

    <!-- Benefits Comparison Table Section -->
    <div class="benefits-section">
      <h2 class="section-title-2" v-html="$t('download.benefits.title')"></h2>
      
      <div class="benefits-table-container">
        <div class="benefits-table">
          <div class="table-header">
            <div class="table-cell" v-html="$t('download.benefits.table.headers.feature')"></div>
            <div class="table-cell" v-html="$t('download.benefits.table.headers.app')"></div>
            <div class="table-cell" v-html="$t('download.benefits.table.headers.website')"></div>
          </div>
          <div class="table-row" v-for="(benefit, index) in benefitsComparison" :key="index">
            <div class="table-cell" v-html="benefit.feature"></div>
            <div class="table-cell" v-html="benefit.app"></div>
            <div class="table-cell" v-html="benefit.website"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Safety Section -->
    <div class="safety-section">
      <h2 class="section-title-2" v-html="$t('download.safety.title')"></h2>
      <div class="section-description" v-html="$t('download.safety.description')"></div>
    </div>

    <!-- FAQ Section -->
    <div class="faq-section">
      <h2 class="section-title-2" v-html="$t('download.faq.title')"></h2>
      
      <div class="accordion-container">
        <div 
          v-for="(faq, index) in faqItems" 
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
              v-html="faq.question"
            ></h3>

            <div class="trigger-icon-wrapper">
              <!-- Use imported SVG icons -->
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
                <p class="content-text" v-html="faq.answer"></p>
              </div>
            </div>
          </transition>
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
  name: 'AdditionalContent',
  data() {
    return {
      openFaqItems: { 0: true }, // First FAQ item open by default
      // Make icons available to template
      openIcon,
      closeIcon
    }
  },
  computed: {
    whyDownloadFeatures() {
      return [
        this.$t('download.why_download.features.mobile_first'),
        this.$t('download.why_download.features.one_tap_login'),
        this.$t('download.why_download.features.exclusive_promotions'),
        this.$t('download.why_download.features.secure_updates')
      ]
    },
    startPlayingGames() {
      return [
        this.$t('download.start_playing.games.slots'),
        this.$t('download.start_playing.games.live_casino'),
        this.$t('download.start_playing.games.sports_racing'),
        this.$t('download.start_playing.games.lottery'),
        this.$t('download.start_playing.games.real_time')
      ]
    },
    benefitsComparison() {
      return [
        {
          feature: this.$t('download.benefits.table.rows.touchscreen.feature'),
          app: this.$t('download.benefits.table.rows.touchscreen.app'),
          website: this.$t('download.benefits.table.rows.touchscreen.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.biometric.feature'),
          app: this.$t('download.benefits.table.rows.biometric.app'),
          website: this.$t('download.benefits.table.rows.biometric.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.notifications.feature'),
          app: this.$t('download.benefits.table.rows.notifications.app'),
          website: this.$t('download.benefits.table.rows.notifications.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.exclusive_promotions.feature'),
          app: this.$t('download.benefits.table.rows.exclusive_promotions.app'),
          website: this.$t('download.benefits.table.rows.exclusive_promotions.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.home_screen.feature'),
          app: this.$t('download.benefits.table.rows.home_screen.app'),
          website: this.$t('download.benefits.table.rows.home_screen.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.rebate_alerts.feature'),
          app: this.$t('download.benefits.table.rows.rebate_alerts.app'),
          website: this.$t('download.benefits.table.rows.rebate_alerts.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.affiliate_tools.feature'),
          app: this.$t('download.benefits.table.rows.affiliate_tools.app'),
          website: this.$t('download.benefits.table.rows.affiliate_tools.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.gameplay.feature'),
          app: this.$t('download.benefits.table.rows.gameplay.app'),
          website: this.$t('download.benefits.table.rows.gameplay.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.offline_preview.feature'),
          app: this.$t('download.benefits.table.rows.offline_preview.app'),
          website: this.$t('download.benefits.table.rows.offline_preview.website')
        },
        {
          feature: this.$t('download.benefits.table.rows.wallet_integration.feature'),
          app: this.$t('download.benefits.table.rows.wallet_integration.app'),
          website: this.$t('download.benefits.table.rows.wallet_integration.website')
        }
      ]
    },
    faqItems() {
      return [
        {
          question: this.$t('download.faq.items.safe.question'),
          answer: this.$t('download.faq.items.safe.answer')
        },
        {
          question: this.$t('download.faq.items.both_platforms.question'),
          answer: this.$t('download.faq.items.both_platforms.answer')
        },
        {
          question: this.$t('download.faq.items.latest_apk.question'),
          answer: this.$t('download.faq.items.latest_apk.answer')
        },
        {
          question: this.$t('download.faq.items.permissions.question'),
          answer: this.$t('download.faq.items.permissions.answer')
        },
        {
          question: this.$t('download.faq.items.games_access.question'),
          answer: this.$t('download.faq.items.games_access.answer')
        },
        {
          question: this.$t('download.faq.items.app_promotions.question'),
          answer: this.$t('download.faq.items.app_promotions.answer')
        }
      ]
    }
  },
  methods: {
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
/* ===== SECTION 3: ADDITIONAL CONTENT ===== */
.additional-content-section {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 60px 20px;
  color: white;
}

/* Main Section Title (Largest) */
.main-section-title {
  font-size: 48px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  margin: 0 0 30px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

/* Section Title (Medium) */
.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #F2B240;
  text-align: center;
  margin: 60px 0 20px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.section-title-2 {
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin: 60px 0 20px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

/* Step Title (Smaller for Steps) */
.step-title {
  font-size: 24px;
  font-weight: 600;
  color: #F2B240;
  text-align: center;
  margin: 30px 0 10px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

/* Section Description */
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
  word-wrap: break-word;
}

/* Brand Tagline */
.brand-tagline {
  font-size: 24px;
  font-weight: 600;
  color: #F2B240;
  text-align: center;
  margin: 30px 0;
  line-height: 1.3;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Feature List and Game List */
.feature-list,
.game-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.feature-list li,
.game-list li {
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  line-height: 1.4;
  text-align: left;
  display: block;
  width: 100%;
}

.feature-list li::before,
.game-list li::before {
  content: '•';
  color: #F2B240;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: -2px;
}

/* Benefits Table Styles */
.benefits-table-container {
  width: 100%;
  overflow-x: auto;
  margin: 0 auto 40px auto;
  -webkit-overflow-scrolling: touch;
}

.benefits-table {
  background: #333;
  border-radius: 36px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  min-width: 600px;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  background: linear-gradient(180deg, #F1AF3E 52.88%, #ED8F23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  font-weight: 700;
  color: #000;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid #F1AF3E;
}

.table-row:last-child {
  border-bottom: none;
}

.table-cell {
  padding: 20px;
  text-align: center;
  color: #FFF;
  border-right: 1px solid #F1AF3E;
  background: linear-gradient(180deg, rgba(241, 175, 62, 0.10) 52.88%, rgba(237, 143, 35, 0.10) 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  font-size: 14px;
  line-height: 1.4;
}

.table-cell:last-child {
  border-right: none;
}

.table-header .table-cell {
  color: #000;
  font-weight: 700;
  font-size: 16px;
}

/* FAQ Styles - Accordion Design */
.faq-section {
  margin-bottom: 40px;
}

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
  .additional-content-section {
    padding: 40px 15px;
  }

  .main-section-title {
    font-size: 36px;
    margin: 40px 0 25px 0;
  }

  .section-title {
    font-size: 28px;
    margin: 40px 0 15px 0;
  }

  .section-title-2 {
    font-size: 28px;
    margin: 40px 0 15px 0;
  }

  .step-title {
    font-size: 20px;
    margin: 25px 0 8px 0;
  }

  .section-description {
    font-size: 16px;
    padding: 0 10px;
  }

  .brand-tagline {
    font-size: 20px;
    padding: 0 10px;
  }
}

@media (max-width: 768px) {
  .main-section-title {
    font-size: 28px;
    margin: 30px 0 20px 0;
  }

  .section-title {
    font-size: 24px;
    margin: 30px 0 15px 0;
  }

  .section-title-2 {
    font-size: 24px;
    margin: 30px 0 15px 0;
  }

  .step-title {
    font-size: 18px;
    margin: 20px 0 6px 0;
  }

  .section-description {
    font-size: 15px;
    padding: 0 15px;
  }

  .brand-tagline {
    font-size: 18px;
    padding: 0 15px;
  }

  .feature-list li,
  .game-list li {
    font-size: 15px;
    padding-left: 20px;
  }

  .feature-list li::before,
  .game-list li::before {
    left: 0;
  }

  .faq-question {
    font-size: 14px;
  }

  .faq-answer {
    font-size: 10px;
  }

  .accordion-trigger {
    padding: 1rem 0.875rem;
  }
  
  .accordion-content {
    padding: 0 0.875rem 1rem 0.875rem;
  }
  
  .trigger-text {
    font-size: 0.95rem;
  }
  
  .content-body {
    padding: 0.875rem;
  }
  
  .content-text {
    font-size: 10px;
  }
  
  .trigger-icon-image {
    width: 14px;
    height: 14px;
  }

  .accordion-trigger {
    padding: 1.25rem 1rem;
  }
  
  .accordion-content {
    padding: 0 1rem 1.25rem 1rem;
  }
  
  .trigger-text {
    font-size: 14px;
    padding-right: 0.75rem;
  }
  
  .trigger-icon-image {
    width: 16px;
    height: 16px;
  }

  .benefits-table {
    border-radius: 10px;
  }

  .table-cell {
    padding: 12px 8px;
    font-size: 12px;
  }

  .table-header .table-cell {
    font-size: 13px;
  }

  .benefits-table {
    min-width: 320px;
  }
}

@media (max-width: 480px) {
  .main-section-title {
    font-size: 24px;
    margin: 25px 0 15px 0;
  }

  .section-title {
    font-size: 20px;
    margin: 25px 0 12px 0;
  }

  .section-title-2 {
    font-size: 20px;
    margin: 25px 0 12px 0;
  }

  .step-title {
    font-size: 16px;
    margin: 15px 0 5px 0;
  }

  .section-description {
    font-size: 10px;
    padding: 0 10px;
  }

  .brand-tagline {
    font-size: 16px;
    padding: 0 10px;
  }

  .feature-list li,
  .game-list li {
    font-size: 10px;
    padding-left: 12px;
  }

  .feature-list li::before,
  .game-list li::before {
    left: 0;
  }

  .faq-question {
    font-size: 14px;
  }

  .faq-answer {
    font-size: 10px;
  }

  .table-cell {
    padding: 10px 5px;
    font-size: 11px;
  }

  .table-header .table-cell {
    font-size: 12px;
  }

  .benefits-table {
    min-width: 280px;
  }
}
</style>