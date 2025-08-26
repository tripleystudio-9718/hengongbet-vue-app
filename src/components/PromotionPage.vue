<template>
  <div class="promotion-container">
    <!-- Header Section -->
    <div class="promotion-header">
      <div class="main-title">
        {{ $t('promotion_section.header.title_prefix') }} <span class="highlight">{{ $t('promotion_section.header.brand') }}</span>
      </div>
      <div class="subtitle">{{ $t('promotion_section.header.subtitle') }}</div>
      <p class="description">
        {{ $t('promotion_section.header.description_part1') }}
        <router-link :to="getLocalePath('/')" class="hengongbet-link">{{ $t('promotion_section.header.description_part2') }}</router-link>{{ $t('promotion_section.header.description_part3') }}
      </p>
    </div>

    <!-- Desktop Promotion Cards -->
    <div v-if="!isMobile" class="promotion-cards">
      <div 
        v-for="(promo, index) in promotions" 
        :key="index"
        class="promotion-card"
        :class="`card-${index + 1}`"
      >
        <div 
          class="card-content"
          :style="{ backgroundImage: `url(${promo.image})` }"
        >
          <div class="overlay-left">
            <div class="bonus-label">{{ promo.bonusLabel }}</div>
            <div class="bonus-amount">{{ promo.bonusAmount }}</div>
            <div class="bonus-subtitle">{{ promo.bonusSubtitle }}</div>
            <button 
              class="promo-button"
              :class="`button-${index + 1}`"
              @click="handlePromoClick(promo)"
            >
              {{ promo.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Promotion Cards with Text Overlays -->
    <div v-if="isMobile" class="mobile-promotion-grid">
      <div 
        v-for="(promo, index) in promotions" 
        :key="index"
        class="mobile-promo-card"
        :class="`mobile-card-${index + 1}`"
        @click="handlePromoClick(promo)"
      >
        <div 
          class="mobile-card-content"
          :style="{ backgroundImage: `url(${promo.mobileImage})` }"
        >
          <div class="mobile-overlay">
            <div class="mobile-text-content">
              <div class="mobile-bonus-header">
                <div class="mobile-bonus-label">{{ promo.bonusLabel }}</div>
                <div class="mobile-bonus-amount">{{ promo.bonusAmount }}</div>
              </div>
              <div class="mobile-bonus-subtitle">{{ promo.bonusSubtitle }}</div>
            </div>
            <div class="mobile-button-container">
              <button 
                class="mobile-promo-button"
                :class="`mobile-button-${index + 1}`"
              >
                {{ promo.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromotionSection',
  data() {
    return {
      isMobile: false,
      basePromotions: [
        {
          translationKey: 'promo1',
          image: new URL('@/assets/top-up-bonus-68-promotion.png', import.meta.url).href,
          mobileImage: new URL('@/assets/mobile-top-up-bonus-68.png', import.meta.url).href,
          desktopAltText: 'Top up bonus 68% promotion - Desktop banner for special deposit bonus offer',
          mobileAltText: 'Top up bonus 68% promotion - Mobile banner for special deposit bonus offer'
        },
        {
          translationKey: 'promo2',
          image: new URL('@/assets/top-up-rebate-05-promotion.png', import.meta.url).href,
          mobileImage: new URL('@/assets/mobile-top-up-rebate-05.png', import.meta.url).href,
          desktopAltText: 'Top up rebate 0.5% promotion - Desktop banner for cashback rebate offer',
          mobileAltText: 'Top up rebate 0.5% promotion - Mobile banner for cashback rebate offer'
        },
        {
          translationKey: 'promo3',
          image: new URL('@/assets/top-up-bonus-200-promotion.png', import.meta.url).href,
          mobileImage: new URL('@/assets/mobile-top-up-bonus-200.png', import.meta.url).href,
          desktopAltText: 'Top up bonus 200% promotion - Desktop banner for maximum deposit bonus offer',
          mobileAltText: 'Top up bonus 200% promotion - Mobile banner for maximum deposit bonus offer'
        },
        {
          translationKey: 'promo4',
          image: new URL('@/assets/daily-rebate-up-to-3-promotion.png', import.meta.url).href,
          mobileImage: new URL('@/assets/mobile-daily-rebate-up-to-3.png', import.meta.url).href,
          desktopAltText: 'Daily rebate up to 3% promotion - Desktop banner for daily cashback rewards',
          mobileAltText: 'Daily rebate up to 3% promotion - Mobile banner for daily cashback rewards'
        },
        {
          translationKey: 'promo5',
          image: new URL('@/assets/referral-rebate-up-to-10-promotion.png', import.meta.url).href,
          mobileImage: new URL('@/assets/mobile-referral-rebate-up-to-10.png', import.meta.url).href,
          desktopAltText: 'Referral rebate up to 10% promotion - Desktop banner for friend referral rewards',
          mobileAltText: 'Referral rebate up to 10% promotion - Mobile banner for friend referral rewards'
        }
      ]
    }
  },
  computed: {
    promotions() {
      return this.basePromotions.map(promo => ({
        ...promo,
        bonusLabel: this.$t(`promotion_section.promotions.${promo.translationKey}.bonus_label`),
        bonusAmount: this.$t(`promotion_section.promotions.${promo.translationKey}.bonus_amount`),
        bonusSubtitle: this.$t(`promotion_section.promotions.${promo.translationKey}.bonus_subtitle`),
        title: this.$t(`promotion_section.promotions.${promo.translationKey}.title`),
        description: this.$t(`promotion_section.promotions.${promo.translationKey}.description`),
        buttonText: this.$t(`promotion_section.promotions.${promo.translationKey}.button_text`)
      }))
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    },
    
    // Custom method to get localized path using current locale
    getLocalePath(path) {
      const locale = this.$i18n?.locale || 'en';
      if (locale === 'en') {
        return path;
      }
      return `/${locale}${path}`;
    },
    
    handlePromoClick(promo) {
      const locale = this.$i18n?.locale || 'en';

      let targetUrl = 'https://hengongbet.com/en-my?regRef=player';
      if (locale === 'zh') {
        targetUrl = 'https://hengongbet.com/zh-my?regRef=player';
      } else if (locale === 'ms') {
        targetUrl = 'https://hengongbet.com/ms-my?regRef=player';
      }

      // Create link with nofollow attributes (same tab)
      const link = document.createElement('a');
      link.href = targetUrl;
      link.rel = 'nofollow noopener';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>

<style scoped>
.promotion-container {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Rubik', sans-serif;
}

/* Header Section */
.promotion-header {
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.main-title {
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.2;
}

.highlight {
  color: #F2B240;
}

.subtitle {
  font-size: 40px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 14px 0;
}

.description {
  font-size: 0.95rem;
  color: #cccccc;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
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

/* Desktop Promotion Cards */
.promotion-cards {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.promotion-card {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
}

.card-1,
.card-2,
.card-3,
.card-4,
.card-5 {
  background: transparent;
}

/* Card Content with Background Image */
.card-content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 250px;
  border-radius: 16px;
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.overlay-left {
  width: 30%;
  height: 100%;
  padding: 0 10px;
  display: grid;
  place-items: center;
  text-align: center;
  grid-template-rows: auto auto auto auto;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}

.bonus-label {
  margin-top: 12px;
  font-size: 0.9rem;
  opacity: 0.8;
  color: inherit;
}

.bonus-amount {
  font-size: 100px;
  font-weight: 900;
  line-height: 1;
}

.bonus-subtitle {
  font-size: 0.9rem;
  opacity: 0.85;
  color: inherit;
}

.card-1 .bonus-label,
.card-1 .bonus-subtitle {
  color: #14C570;
}

.card-2 .bonus-label,
.card-2 .bonus-subtitle {
  color: #FAC701;
}

.card-3 .bonus-label,
.card-3 .bonus-subtitle {
  color: #DC60DF;
}

.card-4 .bonus-label,
.card-4 .bonus-subtitle {
  color: #0BE7FF;
}

.card-5 .bonus-label,
.card-5 .bonus-subtitle {
  color: #8A64FF;
}

/* CTA Button */
.promo-button {
  background-color: transparent;
  border: none;
  padding: 32px 16px;
  font-size: 26px;
  font-weight: 100;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  transition: background 0.3s ease;
}

.promo-button:active {
  transform: scale(0.98);
}

/* Button Shape Styling */
.button-1,
.button-2,
.button-3,
.button-4,
.button-5 {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px));
}

/* Mobile Promotion Cards with Text Overlays */
.mobile-promotion-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
}

.mobile-promo-card {
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease;
  position: relative;
  min-height: 200px;
}

.mobile-promo-card:hover {
  transform: scale(1.02);
}

.mobile-promo-card:active {
  transform: scale(0.98);
}

.mobile-card-content {
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  position: relative;
  display: flex;
  align-items: center;
}

.mobile-overlay {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-top: -18px;
}

.mobile-text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  margin-top: 70px;
}

.mobile-bonus-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
}

.mobile-button-container {
  align-self: stretch;
  margin-top: -50px;
}

.mobile-bonus-label {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 5px;
  color: #ffffff;
}

.mobile-bonus-amount {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 5px;
}

.mobile-bonus-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 15px;
  color: #ffffff;
}

.mobile-promo-button {
  background-color: transparent;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: 100%;
  text-align: center;
}

/* Mobile Color Schemes - Amount gets specific colors */
.mobile-card-1 .mobile-bonus-amount {
  color: #14C570;
}

.mobile-card-2 .mobile-bonus-amount {
  color: #FAC701;
}

.mobile-card-3 .mobile-bonus-amount {
  color: #DC60DF;
}

.mobile-card-4 .mobile-bonus-amount {
  color: #0BE7FF;
}

.mobile-card-5 .mobile-bonus-amount {
  color: #8A64FF;
}

/* Mobile Button Colors */
.mobile-button-1 { color: #ffffff; }
.mobile-button-2 { color: #ffffff; }
.mobile-button-3 { color: #ffffff; }
.mobile-button-4 { color: #ffffff; }
.mobile-button-5 { color: #ffffff; }

@media (min-width: 1441px) and (max-width: 1680px) {
  .card-content {
    height: 220px;
  }

  .bonus-amount {
    font-size: 75px;
  }
}

@media (max-width: 1440px) {
  .card-content {
    height: 180px;
  }

  .bonus-amount {
    font-size: 45px;
  }
}

/* Small PC/Laptop Optimization */
@media (min-width: 769px) and (max-width: 1200px) {
  .promotion-cards {
    width: 75%;
  }
  
  .card-content {
    height: 190px;
  }
  
  .overlay-left {
    width: 32%;
    padding: 0 15px;
    gap: 8px;
  }
  
  .bonus-label {
    font-size: 0.8rem;
    margin-top: 8px;
  }
  
  .bonus-amount {
    font-size: 64px;
    line-height: 0.9;
  }
  
  .bonus-subtitle {
    font-size: 0.8rem;
    margin-bottom: 8px;
  }
  
  .promo-button {
    padding: 20px 12px;
    font-size: 16px;
    font-weight: 500;
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .card-content {
    padding: 25px;
    gap: 20px;
  }

  .bonus-amount {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .promotion-container {
    padding: 20px 15px;
  }

  .promotion-header {
    margin-bottom: 30px;
  }

  .main-title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 28px;
  }

  .description {
    font-size: 14px;
    padding: 0 10px;
  }

  .mobile-promotion-grid {
    gap: 16px;
    padding: 0 16px;
  }

  .mobile-card-content {
    height: 250px;
  }

  .mobile-overlay {
    padding: 15px;
  }

  .mobile-bonus-amount {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .promotion-container {
    padding: 16px 12px;
  }

  .main-title {
    font-size: 20px;
  }

  .subtitle {
    font-size: 24px;
  }

  .description {
    font-size: 13px;
    padding: 0 8px;
  }

  .mobile-promotion-grid {
    gap: 12px;
    padding: 0 12px;
  }

  .mobile-card-content {
    height: 245px;
  }

  .mobile-overlay {
    padding: 12px;
  }

  .mobile-bonus-amount {
    font-size: 2.5rem;
  }

  .mobile-bonus-label,
  .mobile-bonus-subtitle {
    font-size: 0.9rem;
  }

  .mobile-promo-button {
    font-size: 1rem;
    padding: 12px 24px;
  }

  .mobile-button-container {
    margin-top: -40px;
  }
}

@media (max-width: 360px) {
  .main-title {
    font-size: 18px;
  }

  .subtitle {
    font-size: 20px;
  }

  .description {
    font-size: 12px;
  }

  .mobile-promotion-grid {
    gap: 10px;
    padding: 0 8px;
  }

  .mobile-card-content {
    height: 245px;
  }

  .mobile-overlay {
    padding: 10px;
  }

  .mobile-bonus-amount {
    font-size: 2rem;
  }

  .mobile-bonus-label,
  .mobile-bonus-subtitle {
    font-size: 0.8rem;
  }

  .mobile-promo-button {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  .mobile-button-container {
    margin-top: -35px;
  }
}
</style>