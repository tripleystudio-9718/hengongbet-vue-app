<template>
  <div class="beginner-guide-section">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Introduction -->
      <div class="content-section">
        <h1 class="content-title" v-html="$t('tutorial.guide.introduction.title')"></h1>
        <p class="content-intro">
          <span v-html="$t('tutorial.guide.introduction.subtitle_part1')"></span>
          <router-link :to="getLocalePath('/')" class="hengongbet-link" v-html="$t('tutorial.guide.introduction.subtitle_part2')"></router-link>
          <span v-html="$t('tutorial.guide.introduction.subtitle_part3')"></span>
        </p>
      </div>

      <!-- Step 1: Registration -->
      <div class="content-section">
        <h2 class="step-title" v-html="$t('tutorial.guide.registration.title')"></h2>
        <div class="step-content">
          <ol class="step-list">
            <li>
            {{ $t('tutorial.guide.introduction.visit') }}
            <router-link :to="getLocalePath('/')" class="official-link">www.hengongbet88.com</router-link>
          </li>
            <li v-html="$t('tutorial.guide.registration.steps.1')"></li>
            <li v-html="$t('tutorial.guide.registration.steps.2')"></li>
            <li v-html="$t('tutorial.guide.registration.steps.3')"></li>
          </ol>
          
          <div class="registration-details">
            <div class="details-title" v-html="$t('tutorial.guide.registration.details.title')"></div>
            <ul class="details-list">
              <li v-html="$t('tutorial.guide.registration.details.username')"></li>
              <li v-html="$t('tutorial.guide.registration.details.password')"></li>
              <li v-html="$t('tutorial.guide.registration.details.referral')"></li>
              <li v-html="$t('tutorial.guide.registration.details.phone')"></li>
            </ul>
            <p class="note-text" v-html="$t('tutorial.guide.registration.note')"></p>
            <div class="warning-box">
              <p v-html="$t('tutorial.guide.registration.warning')"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Login -->
      <div class="content-section">
        <h2 class="step-title" v-html="$t('tutorial.guide.login.title')"></h2>
        <div class="step-content">
          <p v-html="$t('tutorial.guide.login.intro')"></p>
          <ul class="step-list">
            <li v-html="$t('tutorial.guide.login.steps.0')"></li>
            <li v-html="$t('tutorial.guide.login.steps.1')"></li>
            <li v-html="$t('tutorial.guide.login.steps.2')"></li>
          </ul>
          <p v-html="$t('tutorial.guide.login.description')"></p>
          <div class="reminder-box">
            <div class="reminder-title" v-html="$t('tutorial.guide.login.reminder.title')"></div>
            <p v-html="$t('tutorial.guide.login.reminder.text')"></p>
          </div>
        </div>
      </div>

      <!-- Step 3: Bonuses Table -->
      <div class="content-section">
        <h2 class="step-title" v-html="$t('tutorial.guide.bonuses.title')"></h2>
        <div class="step-content">
          <p class="bonus-intro" v-html="$t('tutorial.guide.bonuses.intro')"></p>
          
          <!-- Promotions Table -->
          <div class="promotions-table-container">
            <table class="promotions-table">
              <thead>
                <tr>
                  <th v-html="$t('tutorial.guide.bonuses.table.headers.promotion')"></th>
                  <th v-html="$t('tutorial.guide.bonuses.table.headers.details')"></th>
                  <th v-html="$t('tutorial.guide.bonuses.table.headers.claim')"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="promo-name" v-html="$t('tutorial.guide.bonuses.table.rows.deposit.name')"></td>
                  <td v-html="$t('tutorial.guide.bonuses.table.rows.deposit.details')"></td>
                  <td v-html="$t('tutorial.guide.bonuses.table.rows.deposit.claim')"></td>
                </tr>
                <tr>
                  <td class="promo-name" v-html="$t('tutorial.guide.bonuses.table.rows.topup.name')"></td>
                  <td v-html="$t('tutorial.guide.bonuses.table.rows.topup.details')"></td>
                  <td v-html="$t('tutorial.guide.bonuses.table.rows.topup.claim')"></td>
                </tr>
                <tr>
                  <td class="promo-name" v-html="$t('tutorial.guide.bonuses.table.rows.rebate.name')"></td>
                  <td v-html="$t('tutorial.guide.bonuses.table.rows.rebate.details')"></td>
                  <td v-html="$t('tutorial.guide.bonuses.table.rows.rebate.claim')"></td>
                </tr>
                <tr>
                  <td class="promo-name" v-html="$t('tutorial.guide.bonuses.table.rows.daily.name')"></td>
                  <td v-html="$t('tutorial.guide.bonuses.table.rows.daily.details')"></td>
                  <td v-html="$t('tutorial.guide.bonuses.table.rows.daily.claim')"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="table-note">
            <p v-html="$t('tutorial.guide.bonuses.note')"></p>
          </div>
        </div>
      </div>

      <!-- Step 4: Play Games -->
      <div class="content-section">
        <h2 class="step-title" v-html="$t('tutorial.guide.games.title')"></h2>
        <div class="step-content">
          <p v-html="$t('tutorial.guide.games.intro')"></p>
          <ol class="step-list">
            <li v-html="$t('tutorial.guide.games.steps.0')"></li>
            <li>
              <span v-html="$t('tutorial.guide.games.steps.1')"></span>
              <ul class="game-categories">
                <li v-html="$t('tutorial.guide.games.categories.slots')"></li>
                <li v-html="$t('tutorial.guide.games.categories.live')"></li>
                <li v-html="$t('tutorial.guide.games.categories.lottery')"></li>
              </ul>
            </li>
            <li v-html="$t('tutorial.guide.games.steps.2')"></li>
          </ol>
          <p class="game-tip" v-html="$t('tutorial.guide.games.tip')"></p>
        </div>
      </div>

      <!-- Pro Tips Section -->
      <div class="content-section pro-tips-section">
        <h2 class="step-title" v-html="$t('tutorial.guide.proTips.title')"></h2>
        <div class="step-content">
          <p class="tips-intro" v-html="$t('tutorial.guide.proTips.intro')"></p>
          
          <!-- Individual Tips -->
          <div class="tip-item">
            <h3 class="tip-title" v-html="$t('tutorial.guide.proTips.tips.rtp.title')"></h3>
            <p v-html="$t('tutorial.guide.proTips.tips.rtp.description')"></p>
          </div>
          
          <div class="tip-item">
            <h3 class="tip-title" v-html="$t('tutorial.guide.proTips.tips.budget.title')"></h3>
            <p v-html="$t('tutorial.guide.proTips.tips.budget.description')"></p>
          </div>
          
          <div class="tip-item">
            <h3 class="tip-title" v-html="$t('tutorial.guide.proTips.tips.volatility.title')"></h3>
            <p v-html="$t('tutorial.guide.proTips.tips.volatility.description')"></p>
          </div>
          
          <div class="tip-item">
            <h3 class="tip-title" v-html="$t('tutorial.guide.proTips.tips.bonuses.title')"></h3>
            <p v-html="$t('tutorial.guide.proTips.tips.bonuses.description')"></p>
          </div>
          
          <div class="tip-item">
            <h3 class="tip-title" v-html="$t('tutorial.guide.proTips.tips.rules.title')"></h3>
            <p v-html="$t('tutorial.guide.proTips.tips.rules.description')"></p>
          </div>
          
          <div class="quote-box">
            <p class="quote-text" v-html="$t('tutorial.guide.proTips.quote')"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeginnerGuideContent',
  methods: {
    // Custom method to get localized path using current locale
    getLocalePath(path) {
      const locale = this.$i18n?.locale || 'en';
      if (locale === 'en') {
        return path;
      }
      return `/${locale}${path}`;
    }
  }
}
</script>

<style scoped>
/* ===== CLEAN BEGINNER GUIDE CONTENT SECTION ===== */
.beginner-guide-section {
  padding: 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-section {
  max-width: 800px;
  width: 100%;
}

/* H1 - Main Title */
.content-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #ffffff;
}

.content-intro {
  font-size: 1.1rem;
  text-align: center;
  color: #cccccc;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hengongbet-link {
  color: #F2B240;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

.hengongbet-link:hover {
  color: #E5A535;
  text-decoration: underline;
}

/* H2 - Section Titles */
.step-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #F2B240;
  margin-bottom: 20px;
  padding-left: 20px;
  text-align: left;
}

.step-content {
  padding: 0;
}

.step-list {
  padding-left: 20px;
  margin: 20px 0;
  list-style: decimal;
  text-align: left;
  counter-reset: step-counter;
}

.step-list li {
  margin-bottom: 12px;
  line-height: 1.6;
  color: #ffffff;
  text-align: left;
  padding-left: 8px;
  position: relative;
}

.step-list li::marker {
  color: #F2B240;
  font-weight: bold;
  font-size: 1.1em;
}

.official-link {
  color: #F2B240;
  text-decoration: underline;
}

.official-link:hover {
  color: #ED8F23;
}

.registration-details {
  padding: 20px 0;
  margin-top: 20px;
}

.details-title {
  color: #F2B240;
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
}

.details-list {
  list-style: disc;
  padding-left: 20px;
  text-align: left;
}

.details-list li {
  padding: 8px 0;
  position: relative;
  color: #ffffff;
  text-align: left;
  padding-left: 8px;
}

.details-list li::marker {
  color: #F2B240;
  font-size: 1.2em;
}

.note-text {
  margin-top: 15px;
  font-style: italic;
  color: #cccccc;
  text-align: left;
  padding-left: 20px;
}

.warning-box {
  color: #F2B240;
  padding: 15px 0;
  margin-top: 15px;
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
}

.reminder-box {
  padding: 20px 0;
  margin-top: 20px;
}

.reminder-title {
  color: #22c55e;
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
}

.game-categories {
  list-style: circle;
  padding-left: 30px;
  margin: 15px 0;
  text-align: left;
}

.game-categories li {
  padding: 6px 0;
  color: #cccccc;
  text-align: left;
  padding-left: 8px;
}

.game-categories li::marker {
  color: #22c55e;
  font-size: 1.1em;
}

.game-tip {
  color: #F2B240;
  padding: 15px 0;
  margin-top: 20px;
  font-style: italic;
  text-align: left;
  padding-left: 20px;
}

.bonus-intro {
  text-align: left;
  padding-left: 20px;
}

/* ===== ENHANCED PROMOTIONS TABLE DESIGN (AFFILIATE STYLE) ===== */
.promotions-table-container {
  width: 100%;
  overflow-x: auto;
  margin: 30px 0 40px 0;
  -webkit-overflow-scrolling: touch;
}

.promotions-table {
  background: #333;
  border-radius: 36px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  min-width: 600px;
  display: block;
}

.promotions-table thead {
  display: block;
}

.promotions-table thead tr {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background: linear-gradient(180deg, #F1AF3E 52.88%, #ED8F23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
}

.promotions-table thead th {
  padding: 20px;
  text-align: center;
  font-weight: 700;
  color: #000;
  border-right: 1px solid #F1AF3E;
  font-size: 1rem;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.promotions-table thead th:last-child {
  border-right: none;
}

.promotions-table tbody {
  display: block;
}

.promotions-table tbody tr {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-bottom: 1px solid #F1AF3E;
}

.promotions-table tbody tr:last-child {
  border-bottom: none;
}

.promotions-table tbody td {
  padding: 20px;
  text-align: center;
  color: #FFF;
  border-right: 1px solid #F1AF3E;
  background: linear-gradient(180deg, rgba(241, 175, 62, 0.10) 52.88%, rgba(237, 143, 35, 0.10) 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  line-height: 1.5;
  font-size: 0.95rem;
}

.promotions-table tbody td:last-child {
  border-right: none;
}

.promo-name {
  font-weight: 700;
  color: #F2B240 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.table-note {
  color: #fca5a5;
  padding: 15px 0;
  margin-top: 20px;
  font-size: 0.9rem;
  text-align: center;
  opacity: 0.9;
}

.table-note p {
  color: #fca5a5;
  margin: 0;
}

/* ===== CLEAN PRO TIPS SECTION ===== */
.pro-tips-section {
  max-width: 800px;
  margin: 0 auto;
}

.tips-intro {
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.6;
}

.tip-item {
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* H3 - Individual Tips */
.tip-title {
  color: #F2B240;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: left;
  padding-left: 20px;
}

.tip-item p {
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  text-align: left;
  padding-left: 20px;
}

.quote-box {
  color: #F2B240;
  padding: 20px 0;
  text-align: center;
  margin-top: 30px;
}

.quote-text {
  font-size: 1.2rem;
  font-weight: 600;
  font-style: italic;
  margin: 0;
  text-align: center;
}

/* FAQ Section */
.faq-item {
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* H3 - FAQ Questions */
.faq-question {
  color: #F2B240;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: left;
  padding-left: 20px;
}

.faq-answer {
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  text-align: left;
  padding-left: 20px;
}

/* Utility Classes */
.max-w-7xl {
  max-width: 80rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .promotions-table {
    border-radius: 24px;
    min-width: 500px;
  }
  
  .promotions-table thead th,
  .promotions-table tbody td {
    padding: 16px 12px;
    font-size: 0.9rem;
  }
  
  .pro-tips-section {
    padding: 30px 0;
  }
}

/* Mobile responsive - 768px and below */
@media (max-width: 768px) {
  .content-title {
    font-size: 24px !important;
  }
  
  .step-title {
    font-size: 20px !important;
    padding-left: 15px;
    margin: 0;
  }
  
  .tip-title,
  .faq-question {
    font-size: 12px !important;
    padding-left: 15px;
  }
  
  .content-intro,
  .step-list li,
  .details-list li,
  .note-text,
  .warning-box p,
  .reminder-title,
  .reminder-box p,
  .game-categories li,
  .game-tip,
  .bonus-intro,
  .tip-item p,
  .tips-intro,
  .table-note p,
  .faq-answer {
    font-size: 10px !important;
  }
  
  .details-title {
    font-size: 12px !important;
    padding-left: 15px;
  }
  
  .quote-text {
    font-size: 12px !important;
  }
  
  .step-content {
    padding: 20px 0;
  }
  
  .promotions-table-container {
    padding: 0 5px;
  }
  
  .promotions-table {
    border-radius: 20px;
    min-width: 320px;
  }
  
  .promotions-table thead tr,
  .promotions-table tbody tr {
    grid-template-columns: 1fr 2fr 1fr;
  }
  
  .promotions-table thead th,
  .promotions-table tbody td {
    padding: 12px 8px;
    font-size: 10px !important;
    line-height: 1.3;
  }
  
  .promotions-table thead th {
    font-weight: 700;
  }
  
  .step-list,
  .details-list {
    padding-left: 15px;
  }
  
  .game-categories {
    padding-left: 25px;
  }
  
  .step-list li,
  .details-list li,
  .game-categories li {
    padding-left: 5px;
  }
  
  .note-text,
  .warning-box,
  .game-tip,
  .bonus-intro {
    padding-left: 15px;
  }
  
  .reminder-title,
  .reminder-box p,
  .tip-item p,
  .faq-answer {
    padding-left: 15px;
  }
}

/* Extra small mobile - 480px and below */
@media (max-width: 480px) {
  .beginner-guide-section {
    padding: 0;
  }
  
  .content-title {
    font-size: 24px !important;
  }
  
  .step-title {
    font-size: 20px !important;
    padding-left: 10px;
  }
  
  .tip-title,
  .faq-question {
    font-size: 10px !important;
    padding-left: 10px;
  }
  
  .content-intro,
  .step-list li,
  .details-list li,
  .note-text,
  .warning-box p,
  .reminder-title,
  .reminder-box p,
  .game-categories li,
  .game-tip,
  .bonus-intro,
  .tip-item p,
  .tips-intro,
  .table-note p,
  .faq-answer {
    font-size: 10px !important;
  }
  
  .details-title {
    font-size: 10px !important;
    padding-left: 10px;
  }
  
  .quote-text {
    font-size: 10px !important;
  }
  
  .step-content {
    padding: 15px 0;
  }
  
  .promotions-table-container {
    margin: 20px -15px;
  }
  
  .promotions-table {
    min-width: 300px;
    border-radius: 16px;
  }
  
  .promotions-table thead tr,
  .promotions-table tbody tr {
    grid-template-columns: 1fr 2fr 1fr;
  }
  
  .promotions-table thead th,
  .promotions-table tbody td {
    padding: 10px 6px;
    font-size: 10px !important;
  }
  
  .pro-tips-section {
    padding: 0;
    margin-top: 0;
  }
  
  .tip-item,
  .faq-item {
    padding: 15px 0;
    margin-bottom: 15px;
  }
  
  .quote-box {
    padding: 15px 0;
  }
  
  .step-list,
  .details-list {
    padding-left: 10px;
  }
  
  .game-categories {
    padding-left: 20px;
  }
  
  .step-list li,
  .details-list li,
  .game-categories li {
    padding-left: 5px;
  }
  
  .note-text,
  .warning-box,
  .game-tip,
  .bonus-intro {
    padding-left: 10px;
  }
  
  .reminder-title,
  .reminder-box p,
  .tip-item p,
  .faq-answer {
    padding-left: 10px;
  }
  
  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>