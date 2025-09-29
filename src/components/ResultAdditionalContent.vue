<template>
  <div class="additional-content-section">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="main-section-title" v-html="$t('4d_results.hero.title')"></h1>
      <div class="section-description">
        {{ $t('4d_results.hero.description_part1') }}<strong>{{ $t('4d_results.hero.description_part2') }}</strong>{{ $t('4d_results.hero.description_part3') }}
        <router-link :to="getLocalePath('/')" class="hengongbet-link">{{ $t('4d_results.hero.description_part4') }}</router-link>{{ $t('4d_results.hero.description_part5') }}
      </div>
    </div>

    <!-- What Is 4D Section -->
    <div class="what-is-section">
      <h2 class="section-title" v-html="$t('4d_results.what_is_4d.title')"></h2>
      <div class="section-description" v-html="$t('4d_results.what_is_4d.description')"></div>
      <div class="definition-box">
        <p v-html="$t('4d_results.what_is_4d.definition')"></p>
      </div>
    </div>

    <!-- Why 4D Results Matter Section -->
    <div class="why-matters-section">
      <h2 class="section-title" v-html="$t('4d_results.why_matters.title')"></h2>
      <div class="section-description" v-html="$t('4d_results.why_matters.description')"></div>
      <ul class="feature-list">
        <li v-html="$t('4d_results.why_matters.reasons.verification')"></li>
        <li v-html="$t('4d_results.why_matters.reasons.tracking')"></li>
        <li v-html="$t('4d_results.why_matters.reasons.strategies')"></li>
      </ul>
    </div>

    <!-- How to Check Section -->
    <div class="how-to-check-section">
      <h2 class="section-title" v-html="$t('4d_results.how_to_check.title')"></h2>
      <div class="section-description" v-html="$t('4d_results.how_to_check.description')"></div>
      <h3 class="brand-tagline" v-html="$t('4d_results.how_to_check.subtitle')"></h3>
      <ul class="feature-list">
        <li v-html="$t('4d_results.how_to_check.steps.step1')"></li>
        <li v-html="$t('4d_results.how_to_check.steps.step2')"></li>
        <li v-html="$t('4d_results.how_to_check.steps.step3')"></li>
        <li v-html="$t('4d_results.how_to_check.steps.step4')"></li>
      </ul>
      <div class="definition-box">
        <p v-html="$t('4d_results.how_to_check.note')"></p>
      </div>
    </div>

    <!-- Prize Categories Section with Table -->
    <div class="prize-categories-section">
      <h2 class="section-title-2" v-html="$t('4d_results.prize_categories.title')"></h2>
      <div class="section-description" v-html="$t('4d_results.prize_categories.description')"></div>
      
      <div class="benefits-table-container">
        <div class="benefits-table">
          <div class="table-header">
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.headers.type')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.headers.description')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.headers.example')"></div>
          </div>
          <div class="table-row">
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.first.type')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.first.description')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.first.example')"></div>
          </div>
          <div class="table-row">
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.second.type')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.second.description')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.second.example')"></div>
          </div>
          <div class="table-row">
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.third.type')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.third.description')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.third.example')"></div>
          </div>
          <div class="table-row">
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.special.type')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.special.description')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.special.example')"></div>
          </div>
          <div class="table-row">
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.consolation.type')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.consolation.description')"></div>
            <div class="table-cell" v-html="$t('4d_results.prize_categories.table.rows.consolation.example')"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Example Listing Section -->
    <div class="example-listing-section">
      <h2 class="section-title-2" v-html="$t('4d_results.example_listing.title')"></h2>
      <div class="section-description" v-html="$t('4d_results.example_listing.description')"></div>
      <div class="results-box">
        <p v-html="$t('4d_results.example_listing.draw_date')"></p>
        <ul class="game-list">
          <li v-html="$t('4d_results.example_listing.results.first')"></li>
          <li v-html="$t('4d_results.example_listing.results.second')"></li>
          <li v-html="$t('4d_results.example_listing.results.third')"></li>
          <li v-html="$t('4d_results.example_listing.results.special')"></li>
          <li v-html="$t('4d_results.example_listing.results.consolation')"></li>
        </ul>
      </div>
      <div class="section-description" v-html="$t('4d_results.example_listing.footer')"></div>
    </div>

    <!-- Reading Tips Section -->
    <div class="reading-tips-section">
      <h2 class="section-title-2" v-html="$t('4d_results.reading_tips.title')"></h2>
      <ul class="feature-list">
        <li v-html="$t('4d_results.reading_tips.tips.exact_match')"></li>
        <li v-html="$t('4d_results.reading_tips.tips.prize_tiers')"></li>
        <li v-html="$t('4d_results.reading_tips.tips.track_trends')"></li>
      </ul>
    </div>

    <!-- Strategies Section -->
    <div class="strategies-section">
      <h2 class="section-title-2" v-html="$t('4d_results.strategies.title')"></h2>
      <div class="section-description">
        {{ $t('4d_results.strategies.description_part1') }}
        <router-link :to="getLocalePath('/games')" class="hengongbet-link">{{ $t('4d_results.strategies.description_part2') }}</router-link>{{ $t('4d_results.strategies.description_part3') }}
      </div>

      <h3 class="step-title" v-html="$t('4d_results.strategies.hot_cold.title')"></h3>
      <ul class="feature-list">
        <li v-html="$t('4d_results.strategies.hot_cold.hot')"></li>
        <li v-html="$t('4d_results.strategies.hot_cold.cold')"></li>
      </ul>

      <h3 class="step-title" v-html="$t('4d_results.strategies.patterns.title')"></h3>
      <div class="section-description" v-html="$t('4d_results.strategies.patterns.description')"></div>
      <ul class="feature-list">
        <li v-html="$t('4d_results.strategies.patterns.consecutive')"></li>
        <li v-html="$t('4d_results.strategies.patterns.mirrored')"></li>
        <li v-html="$t('4d_results.strategies.patterns.meaningful')"></li>
      </ul>

      <h3 class="step-title" v-html="$t('4d_results.strategies.statistical.title')"></h3>
      <div class="section-description" v-html="$t('4d_results.strategies.statistical.description')"></div>

      <div class="definition-box">
        <p v-html="$t('4d_results.strategies.reminder')"></p>
      </div>
    </div>

    <!-- Why Hengongbet Section -->
    <div class="why-hengongbet-section">
      <h2 class="section-title-2" v-html="$t('4d_results.why_hengongbet.title')"></h2>
      <ul class="feature-list">
        <li v-html="$t('4d_results.why_hengongbet.reasons.accuracy')"></li>
        <li v-html="$t('4d_results.why_hengongbet.reasons.convenience')"></li>
        <li v-html="$t('4d_results.why_hengongbet.reasons.historical')"></li>
        <li v-html="$t('4d_results.why_hengongbet.reasons.trusted')"></li>
      </ul>
    </div>

    <!-- Responsible Play Section -->
    <div class="responsible-play-section">
      <h2 class="section-title-2" v-html="$t('4d_results.responsible_play.title')"></h2>
      <div class="section-description" v-html="$t('4d_results.responsible_play.description')"></div>
      <ul class="feature-list">
        <li v-html="$t('4d_results.responsible_play.guidelines.budget')"></li>
        <li v-html="$t('4d_results.responsible_play.guidelines.entertainment')"></li>
        <li v-html="$t('4d_results.responsible_play.guidelines.moderate')"></li>
      </ul>
      <div class="definition-box">
        <p v-html="$t('4d_results.responsible_play.expert_note')"></p>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="faq-section">
      <h2 class="section-title-2" v-html="$t('4d_results.faq.title')"></h2>
      
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

    <!-- Summary Section -->
    <div class="summary-section">
      <h2 class="section-title-2" v-html="$t('4d_results.summary.title')"></h2>
      <div class="section-description" v-html="$t('4d_results.summary.description')"></div>
    </div>
  </div>
</template>

<script>
// Import the SVG icons
import openIcon from '@/assets/open-icon.svg'
import closeIcon from '@/assets/close-icon.svg'

export default {
  name: '4DResults',
  data() {
    return {
      openFaqItems: { 0: true },
      openIcon,
      closeIcon
    }
  },
  computed: {
    faqItems() {
      return [
        {
          question: this.$t('4d_results.faq.items.frequency.question'),
          answer: this.$t('4d_results.faq.items.frequency.answer')
        },
        {
          question: this.$t('4d_results.faq.items.past_results.question'),
          answer: this.$t('4d_results.faq.items.past_results.answer')
        },
        {
          question: this.$t('4d_results.faq.items.minimum_bet.question'),
          answer: this.$t('4d_results.faq.items.minimum_bet.answer')
        },
        {
          question: this.$t('4d_results.faq.items.guarantee.question'),
          answer: this.$t('4d_results.faq.items.guarantee.answer')
        }
      ]
    }
  },
  methods: {
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
/* ===== SECTION: 4D RESULTS CONTENT ===== */
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

/* Definition and Results Box */
.definition-box,
.results-box {
  background: rgba(242, 178, 64, 0.1);
  border-left: 4px solid #F2B240;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 8px;
}

.definition-box p,
.results-box p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: #FFFFFF;
}

.results-box .game-list {
  margin-top: 15px;
  margin-bottom: 0;
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
  grid-template-columns: 1fr 2fr 2fr;
  background: linear-gradient(180deg, #F1AF3E 52.88%, #ED8F23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  font-weight: 700;
  color: #000;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
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
  padding: 0 1.25rem;
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

  .accordion-trigger {
    padding: 0 0.875rem;
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
    padding: 0 1rem;
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

  .definition-box,
  .results-box {
    padding: 15px;
    margin: 15px 10px;
  }

  .definition-box p,
  .results-box p {
    font-size: 15px;
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

  .definition-box,
  .results-box {
    padding: 12px;
    margin: 12px 5px;
  }

  .definition-box p,
  .results-box p {
    font-size: 10px;
  }
}
</style>