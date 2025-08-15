<template>
  <div class="affiliate-section">
    <!-- Hero Banner -->
    <section class="affiliate-hero-banner">
      <img :src="joinOurAffilateProgram" :alt="$t('affiliate.alt_text.gaming_banner')" class="affiliate-banner-image" />
    </section>
    
    <div class="affiliate-container">
      <!-- Main Title Section -->
      <h1 class="main-title" v-html="$t('affiliate.brand_section.title')"></h1>
      <div class="description-text" v-html="$t('affiliate.brand_section.tagline')"></div>
      
      <!-- Additional paragraph under tagline -->
      <div class="tagline-paragraph" v-html="$t('affiliate.brand_section.description_paragraph')"></div>
      
      <!-- Join Button -->
      <div class="join-button-container">
        <button class="join-button" @click="goToRegisterPage" v-html="$t('affiliate.join_button')"></button>
      </div>
      
      <!-- How It Works Title -->
      <h2 class="how-it-works-title" v-html="$t('affiliate.how_it_works.title')"></h2>
      
      <!-- Join Steps -->
      <div class="join-steps">
        <div class="steps-num" :style="{ backgroundImage: `url(${stepImage})` }">
          <div class="steps-des">
            <img :src="num1Icon" class="num-image" />
            <div class="steps-t">
              <div class="steps-p" v-html="`${$t('affiliate.steps.step')} ${$t('affiliate.steps.step1.number')}`"></div>
              <h3 class="steps-h2" v-html="$t('affiliate.steps.step1.title')"></h3>
              <div class="steps-description" v-html="$t('affiliate.steps.step1.description')"></div>
            </div>
          </div>
        </div>
        <div class="steps-num" :style="{ backgroundImage: `url(${stepImage})` }">
          <div class="steps-des">
            <img :src="num2Icon" class="num-image" />
            <div class="steps-t">
              <div class="steps-p" v-html="`${$t('affiliate.steps.step')} ${$t('affiliate.steps.step2.number')}`"></div>
              <h3 class="steps-h2" v-html="$t('affiliate.steps.step2.title')"></h3>
              <div class="steps-description" v-html="$t('affiliate.steps.step2.description')"></div>
            </div>
          </div>
        </div>
        <div class="steps-num" :style="{ backgroundImage: `url(${stepImage})` }">
          <div class="steps-des">
            <img :src="num3Icon" class="num-image" />
            <div class="steps-t">
              <div class="steps-p" v-html="`${$t('affiliate.steps.step')} ${$t('affiliate.steps.step3.number')}`"></div>
              <h3 class="steps-h2" v-html="$t('affiliate.steps.step3.title')"></h3>
              <div class="steps-description" v-html="$t('affiliate.steps.step3.description')"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Why Choose Us Component -->
      <WhyChooseUs :features="features" />
      
      <!-- Commission Section -->
      <div class="commission-section">
        <h2 class="section-title" v-html="$t('affiliate.commission_section.title')"></h2>
        <div class="section-description" v-html="$t('affiliate.commission_section.description')"></div>
        <div class="commission-cards">
          <div class="commission-card" v-for="(model, index) in commissionModels" :key="index">
            <div class="commission-icon">
              <img :src="model.icon" :alt="model.altText" class="icon-image" />
            </div>
            <h3 class="commission-title" v-html="model.title"></h3>
            <div class="commission-description" v-html="model.description"></div>
          </div>
        </div>
      </div>
      
      <!-- Levels Section -->
      <div class="levels-section">
        <h2 class="section-title" v-html="$t('affiliate.levels_section.title')"></h2>
        
        <!-- Table (responsive for all devices) -->
        <div class="levels-table-container">
          <div class="levels-table">
            <div class="table-header">
              <div class="table-cell" v-html="$t('affiliate.levels_section.table.headers.user_level')"></div>
              <div class="table-cell" v-html="$t('affiliate.levels_section.table.headers.benefits')"></div>
              <div class="table-cell" v-html="$t('affiliate.levels_section.table.headers.rebate')"></div>
            </div>
            <div class="table-row" v-for="(level, index) in userLevels" :key="index">
              <div class="table-cell" v-html="level.name"></div>
              <div class="table-cell" v-html="level.benefits"></div>
              <div class="table-cell" v-html="level.rebate"></div>
            </div>
          </div>
        </div>
        <div class="description-text" v-html="$t('affiliate.levels_section.description')"></div>
      </div>

      <!-- Supported Games Component -->
      <SupportedGames />

      <!-- Who Should Join Section -->
      <div class="who-should-join-section">
        <h2 class="who-should-join-title" v-html="$t('affiliate.who_should_join.title')"></h2>
        <ul class="who-should-join-list">
          <li v-for="(item, index) in whoShouldJoinItems" :key="index" v-html="item"></li>
        </ul>
        <div class="who-should-join-description" v-html="$t('affiliate.who_should_join.description')"></div>
      </div>

      <!-- Final CTA Section -->
      <div class="cta-section">
        <h2 class="cta-title" v-html="$t('affiliate.cta_section.title')"></h2>
        <div class="cta-subtitle" v-html="$t('affiliate.cta_section.subtitle')"></div>
        <div class="cta-description" v-html="$t('affiliate.cta_section.description')"></div>
        <div class="cta-buttons">
          <button class="cta-button primary" @click="goToRegisterPage" v-html="$t('affiliate.cta_section.buttons.register')"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import joinOurAffilateProgram from '@/assets/join-our-affilate-program.png'
import stepImage from '@/assets/step-bg.png'
import num1Icon from '@/assets/num1-icon.png'
import num2Icon from '@/assets/num2-icon.png'
import num3Icon from '@/assets/num3-icon.png'
import revenueShareIcon from '@/assets/revenue-share-icon.png'
import cpaModelIcon from '@/assets/cpa-model-icon.png'
import WhyChooseUs from '@/components/Affiliate-Comp/WhyChooseUs.vue'
import SupportedGames from '@/components/Affiliate-Comp/SupportedGames.vue'

export default {
  name: 'Affiliate',
  components: {
    WhyChooseUs,
    SupportedGames
  },
  data() {
    return {
      joinOurAffilateProgram,
      stepImage,
      num1Icon,
      num2Icon,
      num3Icon,
      revenueShareIcon,
      cpaModelIcon
    }
  },
  computed: {
    features() {
      return [
        {
          icon: '@/assets/icons/feature1.png',
          title: this.$t('affiliate.features.high_commission.title'),
          description: this.$t('affiliate.features.high_commission.description')
        },
        {
          icon: '@/assets/icons/feature2.png',
          title: this.$t('affiliate.features.real_time_tracking.title'),
          description: this.$t('affiliate.features.real_time_tracking.description')
        },
        {
          icon: '@/assets/icons/feature3.png',
          title: this.$t('affiliate.features.weekly_payouts.title'),
          description: this.$t('affiliate.features.weekly_payouts.description')
        },
        {
          icon: '@/assets/icons/feature4.png',
          title: this.$t('affiliate.features.dedicated_support.title'),
          description: this.$t('affiliate.features.dedicated_support.description')
        },
        {
          icon: '@/assets/icons/feature5.png',
          title: this.$t('affiliate.features.marketing_tools.title'),
          description: this.$t('affiliate.features.marketing_tools.description')
        }
      ]
    },
    commissionModels() {
  return [
    {
      icon: this.revenueShareIcon,
      title: this.$t('affiliate.commission_section.models.revenue_share.title'),
      description: this.$t('affiliate.commission_section.models.revenue_share.description'),
      altText: 'Revenue share model - Earn percentage of player losses with ongoing passive income'
    },
    {
      icon: this.cpaModelIcon,
      title: this.$t('affiliate.commission_section.models.cpa_model.title'),
      description: this.$t('affiliate.commission_section.models.cpa_model.description'),
      altText: 'CPA model - Cost per acquisition with fixed payout for each qualified player'
    }
  ]
},
    userLevels() {
      return [
        {
          name: this.$t('affiliate.levels_section.table.levels.shareholder.name'),
          benefits: this.$t('affiliate.levels_section.table.levels.shareholder.benefits'),
          rebate: this.$t('affiliate.levels_section.table.levels.shareholder.rebate')
        },
        {
          name: this.$t('affiliate.levels_section.table.levels.referrer.name'),
          benefits: this.$t('affiliate.levels_section.table.levels.referrer.benefits'),
          rebate: this.$t('affiliate.levels_section.table.levels.referrer.rebate')
        },
        {
          name: this.$t('affiliate.levels_section.table.levels.player.name'),
          benefits: this.$t('affiliate.levels_section.table.levels.player.benefits'),
          rebate: this.$t('affiliate.levels_section.table.levels.player.rebate')
        }
      ]
    },
    whoShouldJoinItems() {
      return [
        this.$t('affiliate.who_should_join.items.online_marketers'),
        this.$t('affiliate.who_should_join.items.social_media_influencers'),
        this.$t('affiliate.who_should_join.items.telegram_whatsapp_admins'),
        this.$t('affiliate.who_should_join.items.forum_owners'),
        this.$t('affiliate.who_should_join.items.gaming_enthusiasts'),
        this.$t('affiliate.who_should_join.items.earn_from_home')
      ]
    }
  },
  methods: {
    goToRegisterPage() {
      const locale = this.$i18n?.locale || 'en';

      let targetUrl = 'https://hengongbet.com/en-my?regRef=player';
      if (locale === 'zh') {
        targetUrl = 'https://hengongbet.com/zh-my?regRef=player';
      } else if (locale === 'ms') {
        targetUrl = 'https://hengongbet.com/ms-my?regRef=player';
      }

      console.log('Redirecting to affiliate registration:', targetUrl);
      window.location.href = targetUrl;
    }
  }
}
</script>

<style scoped>
/* Global box-sizing and overflow prevention */
* {
  box-sizing: border-box;
}

.affiliate-section {
  background: #27272A;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.affiliate-hero-banner {
  position: relative;
  overflow: hidden;
  background: #0a0e1a;
  width: 100%;
}

.affiliate-banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-width: 100%;
}

.affiliate-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.main-title,
h1.main-title {
  font-size: 40px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 1rem 0;
  line-height: 1.2;
  text-align: center;
  word-wrap: break-word;
}

.description-text {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  margin: 1rem 0;
  line-height: 1.4;
  text-align: center;
  word-wrap: break-word;
}

.tagline-paragraph {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  margin: 1rem 0 2rem 0;
  line-height: 1.5;
  text-align: center;
  word-wrap: break-word;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.how-it-works-title,
h2.how-it-works-title {
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  margin: 40px 0 30px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.join-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 40px;
  width: 100%;
}

.steps-des {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
}

.steps-num {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.steps-h2,
h3.steps-h2 {
  font-size: 40px;
  font-weight: 600;
  color: #F0FF21;
  margin: 0px;
  line-height: 1;
}

.steps-p {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
}

.steps-description {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  margin: 8px 0 0 0;
  line-height: 1.4;
  text-align: left;
  max-width: 200px;
  word-wrap: break-word;
}

.num-image {
  width: 90px;
  height: auto;
  max-width: 100%;
}

.join-button-container {
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
}

.join-button {
  border-radius: 59px;
  background: linear-gradient(180deg, #F2B341 0%, #ED8F23 100%);
  color: #000;
  border: none;
  padding: 12px 60px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-height: 44px;
  max-width: 100%;
}

.join-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(242, 178, 64, 0.3);
}

/* Section Titles */
.section-title,
h2.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  margin: 60px 0 20px 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.section-description {
  font-size: 16px;
  font-weight: 400;
  color: #F2B240;
  text-align: center;
  margin-bottom: 30px;
  word-wrap: break-word;
}

.commission-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  width: 100%;
}

/* Commission Card Styling */
.commission-card {
  background: linear-gradient(135deg, #F2B240 0%, #E6A635 100%);
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 100%;
  max-width: 280px;
  min-width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1;
}

.commission-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.commission-card:hover::before {
  left: 100%;
}

.commission-card:hover {
  box-shadow: 0 15px 35px rgba(242, 178, 64, 0.4);
}

.commission-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.commission-card:hover .commission-icon {
  transform: scale(1.15) rotate(5deg);
}

.commission-icon .icon-image {
  width: 100px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
  max-width: 100%;
}

.commission-card:hover .commission-icon .icon-image {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.commission-title,
h3.commission-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.2;
  transition: all 0.3s ease;
  word-wrap: break-word;
}

.commission-card:hover .commission-title,
.commission-card:hover h3.commission-title {
  color: #1a1a1a;
  transform: translateY(-2px);
}

.commission-description {
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  transition: all 0.3s ease;
  word-wrap: break-word;
}

.commission-card:hover .commission-description {
  color: #2a2a2a;
  transform: translateY(-1px);
}

/* Levels Table Container - Prevent overflow */
.levels-table-container {
  width: 100%;
  overflow-x: auto;
  margin: 0 auto 40px auto;
  -webkit-overflow-scrolling: touch;
}

/* Levels Table - Responsive */
.levels-table {
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
  grid-template-columns: 1fr 2fr 1fr;
  background: linear-gradient(180deg, #F1AF3E 52.88%, #ED8F23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  font-weight: 700;
  color: #000;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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
}

.table-cell:last-child {
  border-right: none;
}

.table-header .table-cell {
  color: #000;
  font-weight: 700;
}

/* Who Should Join Section */
.who-should-join-section {
  margin-top: 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0;
}

.who-should-join-title,
h2.who-should-join-title {
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 30px;
  line-height: 1.2;
}

.who-should-join-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  text-align: left;
  width: 300px;
}

.who-should-join-list li {
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  line-height: 1.4;
}

.who-should-join-list li::before {
  content: '•';
  color: #F2B240;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: -2px;
}

.who-should-join-description {
  font-size: 16px;
  color: #9CA3AF;
  line-height: 1.5;
  margin-top: 20px;
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding-bottom: 40px;
  width: 100%;
}

.cta-title,
h2.cta-title {
  font-size: 40px;
  font-weight: 500;
  color: #F2B240;
  margin-bottom: 20px;
  word-wrap: break-word;
}

.cta-subtitle {
  font-size: 20px;
  color: #FFF;
  margin-bottom: 15px;
  font-weight: 400;
  word-wrap: break-word;
}

.cta-description {
  font-size: 26px;
  color: #FFFFFF;
  margin-bottom: 40px;
  font-weight: 700;
  word-wrap: break-word;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
}

.cta-button {
  padding: 12px 60px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid #F2B240;
  min-height: 44px;
  box-sizing: border-box;
  max-width: 100%;
}

.cta-button.primary {
  background: linear-gradient(180deg, #F2B341 0%, #ED8F23 100%);
  color: black;
}

.cta-button.secondary {
  border: 2.628px solid #F2B240;
  background: linear-gradient(180deg, #F1B03F 0%, #ED9326 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(242, 178, 64, 0.3);
}

.cta-button.secondary:hover {
  color: #000;
  background: linear-gradient(180deg, #F2B341 0%, #ED8F23 100%);
  -webkit-text-fill-color: initial;
}

/* Mobile responsive for Who Should Join */
@media (max-width: 768px) {
  .affiliate-container {
    padding: 0 15px;
  }

  .affiliate-banner-image {
    object-fit: cover;
  }

  .main-title,
  h1.main-title {
    font-size: 24px;
    margin: 20px 0 15px 0;
    padding: 0 10px;
  }

  .description-text {
    font-size: 16px;
    margin: 15px 0;
    padding: 0 10px;
  }

  .tagline-paragraph {
    font-size: 14px;
    margin: 15px 0 25px 0;
    padding: 0 10px;
  }

  .how-it-works-title,
  h2.how-it-works-title {
    font-size: 24px;
    margin: 30px 0 20px 0;
    padding: 0 10px;
  }

  .join-button {
    width: 100%;
    max-width: 280px;
    padding: 15px 30px;
    font-size: 18px;
  }

  .join-steps {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }

  .steps-num {
    width: 100%;
    max-width: 100%;
    height: 200px;
    border-radius: 12px;
    margin: 0;
  }

  .steps-des {
    gap: 15px;
    flex-direction: column;
    text-align: center;
  }

  .steps-h2,
  h3.steps-h2 {
    font-size: 24px;
  }

  .steps-p {
    font-size: 14px;
  }

  .steps-description {
    font-size: 12px;
    max-width: 250px;
    text-align: center;
  }

  .num-image {
    width: 60px;
  }

  .section-title,
  h2.section-title {
    font-size: 24px;
    margin: 40px 0 15px 0;
    padding: 0 10px;
  }

  .section-description {
    font-size: 14px;
    padding: 0 15px;
    margin-bottom: 25px;
  }

  .commission-cards {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .commission-card {
    max-width: 100%;
    width: 100%;
    height: 180px;
    padding: 25px 15px;
  }

  .commission-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  .commission-icon .icon-image {
    width: 70px;
  }

  .commission-title,
  h3.commission-title {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .commission-description {
    font-size: 13px;
  }

  /* Make table more mobile friendly */
  .levels-table-container {
    padding: 0 5px;
  }

  .levels-table {
    border-radius: 20px;
    min-width: 320px;
  }

  .table-header,
  .table-row {
    grid-template-columns: 1fr 2fr 1fr;
  }

  .table-cell {
    padding: 12px 8px;
    font-size: 12px;
    line-height: 1.3;
    text-align: center;
  }

  .table-header .table-cell {
    font-size: 13px;
    font-weight: 700;
  }
}
</style>