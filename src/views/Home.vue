<template>
  <div class="home-page">
    <HomeBanner 
      :images="carouselImages" 
      :auto-play="true" 
      :auto-play-interval="3000" 
    />
        
    <div class="home-container">
      <PromotionSection />
            
      <section class="main-content">
        <div class="content-container">
          <!-- Hero Section -->
          <div class="section-wrapper">
            <div class="main-title" style="color: #FFFFFF;">{{ $t('home.hero.title') }}</div>
            <p class="subtitle-text">{{ $t('home.hero.subtitle') }}</p>
            <p class="description-text">{{ $t('home.hero.description') }}</p>
            
            <div class="cta-buttons">
              <button class="cta-btn" @click="handleRegisterClick">{{ $t('home.hero.registerNow') }}</button>
              <button class="cta-btn" @click="handlePromotionClick">{{ $t('home.hero.unlockBonus') }}</button>
              <button class="cta-btn" @click="handleDownloadClick">{{ $t('home.hero.downloadApp') }}</button>
            </div>
          </div>

          <!-- About Section -->
          <div class="section-wrapper">
            <div class="main-title" style="color: #F2B240;">{{ $t('home.about.title') }}</div>
            <p class="description-text">{{ $t('home.about.description1') }} <strong>{{ $t('home.about.platformType') }}</strong></p>
            <div class="text-content">
              <p>{{ $t('home.about.description2') }}</p>
              <p>{{ $t('home.about.description3') }}</p>
              <p>{{ $t('home.about.description4') }}</p>
            </div>
          </div>

          <!-- Games Explore Section -->
          <div class="section-wrapper">
            <div class="main-title" style="color: #F2B240;">{{ $t('home.games.title') }}</div>
            <p class="description-text">{{ $t('home.games.description') }}</p>

            <!-- Slot Games -->
            <div class="games-subsection">
              <div class="subsection-title">{{ $t('home.games.slots.title') }}</div>
              <p class="text-content">{{ $t('home.games.slots.description') }}</p>
              <p class="text-content">{{ $t('home.games.slots.providers') }}</p>
              
              <div class="subsection-subtitle">{{ $t('home.games.slots.whatToExpected') }}</div>
              <ul class="feature-list">
                <li v-for="(feature, index) in $tm('home.games.slots.features')" :key="index">
                  • {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Live Casino -->
            <div class="games-subsection">
              <div class="subsection-title">{{ $t('home.games.liveCasino.title') }}</div>
              <p class="text-content">{{ $t('home.games.liveCasino.description') }}</p>
              <p class="text-content">{{ $t('home.games.liveCasino.games') }}</p>
              
              <div class="subsection-subtitle">{{ $t('home.games.liveCasino.whyPlayersLove') }}</div>
              <ul class="feature-list">
                <li v-for="(feature, index) in $tm('home.games.liveCasino.features')" :key="index">
                  • {{ feature }}
                </li>
              </ul>
              <p class="text-content">{{ $t('home.games.liveCasino.guarantee') }}</p>
            </div>

            <!-- Sports Betting -->
            <div class="games-subsection">
              <div class="subsection-title">{{ $t('home.games.sports.title') }}</div>
              <p class="text-content">{{ $t('home.games.sports.description') }}</p>
              
              <div class="subsection-subtitle">{{ $t('home.games.sports.highlights') }}</div>
              <ul class="feature-list">
                <li v-for="(feature, index) in $tm('home.games.sports.features')" :key="index">
                  • {{ feature }}
                </li>
              </ul>
            </div>

            <!-- 4D Lottery -->
            <div class="games-subsection">
              <div class="subsection-title">{{ $t('home.games.lottery.title') }}</div>
              <p class="text-content">{{ $t('home.games.lottery.description') }}</p>
              <p class="text-content">{{ $t('home.games.lottery.ekor') }}</p>
              
              <div class="subsection-subtitle">{{ $t('home.games.lottery.howItWorks') }}</div>
              <ul class="feature-list">
                <li v-for="(feature, index) in $tm('home.games.lottery.steps')" :key="index">
                  • {{ feature }}
                </li>
              </ul>
            </div>

            <div class="text-content">
              <p>{{ $t('home.games.lookingMore') }} 
                <a @click="handleGamesClick" class="accent-color" style="cursor: pointer;">{{ $t('home.games.gamesLinkText') }}</a>
                {{ $t('home.games.exploreMore') }}
              </p>
            </div>
          </div>
                    
          <FeaturesSection />
        </div>
      </section>
            
      <GamesSection />
      <StepsSection />
      <AppGuide />
      <WhySection />
            
      <!-- Become Affiliate Section -->
      <div class="two-column-section">
        <div class="column-image">
          <img :src="becomeImg" alt="HengOngBet Logo" class="responsive-image" />
        </div>
        <div class="column-text">
          <div class="main-title affiliate-main-title">
            {{ $t('home.affiliate.becomeText') }} <span class="accent-color">{{ $t('home.affiliate.brand') }}</span> {{ $t('home.affiliate.affiliateToday') }}
          </div>
          <p class="subtitle-text-affiliate affiliate-description">{{ $t('home.affiliate.description') }}</p>
                    
          <ul class="feature-list-1 affiliate-features-list">
            <li v-for="(benefit, index) in $tm('home.affiliate.benefits')" :key="index">
              • {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
            
      <ProviderSection />
      <ReviewSection />
      <FaqSection />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { getCurrentLocale } from '@/router'
import HomeBanner from '@/components/Home-Comp/HomeBanner.vue'
import PromotionSection from '@/components/Home-Comp/PromotionSection.vue'
import FeaturesSection from '@/components/Home-Comp/FeaturesSection.vue'
import GamesSection from '@/components/Home-Comp/GamesSection.vue'
import StepsSection from '@/components/Home-Comp/StepsSection.vue'
import AppGuide from '@/components/Home-Comp/AppGuide.vue'
import WhySection from '@/components/Home-Comp/WhySection.vue'
import ProviderSection from '@/components/Home-Comp/ProviderSection.vue'
import ReviewSection from '@/components/Home-Comp/ReviewSection.vue'
import FaqSection from '@/components/Home-Comp/FaqSection.vue'
import homeBanner from '@/assets/home-banner.png'
import homeBanner1 from '@/assets/home-banner1.png'
import homeBanner2 from '@/assets/home-banner2.png'
import homeBanner3 from '@/assets/home-banner3.png'
import becomeImg from '@/assets/become-img.png'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    PromotionSection,
    FeaturesSection,
    GamesSection,
    StepsSection,
    AppGuide,
    WhySection,
    ProviderSection,
    ReviewSection,
    FaqSection
  },
  setup() {
    const route = useRoute()
    
    return {
      route,
      getCurrentLocale
    }
  },
  data() {
    return {
      becomeImg,
      // Carousel images for the hero banner
      carouselImages: [
        homeBanner,
        homeBanner1,
        homeBanner2,
        homeBanner3,
      ]
    }
  },
  computed: {
    currentLocale() {
      return this.getCurrentLocale(this.route)
    }
  },
  watch: {
    '$route'() {
      // Force reactivity when route changes
      this.$forceUpdate()
    }
  },
  methods: {
    handleRegisterClick() {
      const locale = this.$i18n?.locale || 'en'

      let targetUrl = 'https://hengongbet.com/en-my?regRef=player'
      if (locale === 'zh') {
        targetUrl = 'https://hengongbet.com/zh-my?regRef=player'
      } else if (locale === 'ms') {
        targetUrl = 'https://hengongbet.com/ms-my?regRef=player'
      }

      window.location.href = targetUrl
    },
    handlePromotionClick() {
      const locale = this.$i18n?.locale || 'en'
      this.$router.push(`/${locale}/promotion`)
    },
    handleDownloadClick() {
      const locale = this.$i18n?.locale || 'en'
      this.$router.push(`/${locale}/download`)
    },
    handleGamesClick() {
      const locale = this.$i18n?.locale || 'en'
      this.$router.push(`/${locale}/games`)
    }
  }
}
</script>

<style scoped>
/* Global Layout */
.home-page {
  background: #27272A;
  min-height: 100vh;
  overflow-x: hidden;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Global Typography Classes */
.main-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 500;
  color: #FFFFFF;
  margin: 1rem 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.subsection-title {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 500;
  color: #F2B240;
  margin: 1.5rem 0 1rem 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.subsection-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 400;
  color: #FFFFFF;
  margin: 1rem 0 0.5rem 0;
  line-height: 1.3;
}

.accent-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  color: #F2B240;
  margin: 1rem 0;
  line-height: 1.2;
}

.section-title {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  font-weight: 400;
  color: #D5D3CF;
  margin: 1rem 0;
  line-height: 1.3;
}

.subtitle-text {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: #FFFFFF;
  margin: 0.5rem 0;
  line-height: 1.4;
}

.subtitle-text-affiliate {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  font-weight: 400;
  color: #FFFFFF;
  margin: 0.5rem 0;
  line-height: 1.4;
}

.description-text {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  font-weight: 600;
  color: #ffffff;
  margin: 1rem 0 2rem 0;
  line-height: 1.4;
  text-align: center;
}

.text-content {
  font-size: clamp(0.9rem, 2.2vw, 1.125rem);
  color: #C0BEBE;
  line-height: 1.8;
  margin: 1rem 0;
  text-align: center;
}

.accent-color {
  color: #F2B240;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.cta-btn {
  background: #F2B240;
  color: #000;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  flex: 1 1 auto;
  max-width: 200px;
}

.cta-btn:hover {
  background: #E5A535;
  transform: translateY(-2px);
}

/* Games Subsections */
.games-subsection {
  margin: 2rem 0;
  padding: 1.5rem 0;
  border-bottom: 1px solid #3A3A3D;
}

.games-subsection:last-child {
  border-bottom: none;
}

/* Global Layout Classes */
.section-wrapper {
  text-align: center;
  padding: 2rem 0;
}

.two-column-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  gap: 40px;
}

.column-image {
  width: 40%;
  flex-shrink: 0;
}

.column-text {
  width: 60%;
  flex-shrink: 1;
}

.responsive-image {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.limited-width {
  max-width: 900px;
  margin: 0 auto;
}

/* Global List Styles */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list-1 {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
  max-width: 100%;
}

.feature-list li,
.feature-list-1 li {
  margin-bottom: 0.8rem;
  color: #C0BEBE;
  font-size: clamp(0.9rem, 2.2vw, 1.125rem);
  line-height: 1.6;
  font-weight: 400;
  word-wrap: break-word;
  hyphens: auto;
}

/* Content Specific */
.main-content {
  padding: 0;
}

.content-container {
  color: white;
}

/* Affiliate Section Specific Styles */
.affiliate-main-title {
  /* Specific styling for affiliate title */
}

.affiliate-description {
  /* Specific styling for affiliate description */
}

.affiliate-features-list {
  /* Specific styling for affiliate features list */
}

/* Mobile First Responsive Design */
@media (max-width: 768px) {
  .home-container {
    padding: 0 16px;
    text-align: center;
  }

  .section-wrapper {
    padding: 1.5rem 0;
    text-align: center;
  }

  /* Mobile Typography */
  .main-title {
    font-size: 24px !important;
    margin: 1rem 0;
  }

  .subsection-title {
    font-size: 20px !important;
    margin: 1.5rem 0 1rem 0;
  }

  .subsection-subtitle {
    font-size: 18px !important;
    margin: 1rem 0 0.5rem 0;
  }

  .subtitle-text {
    font-size: 16px !important;
    margin: 0.5rem 0;
  }

  .description-text {
    font-size: 14px !important;
    margin: 1rem 0 2rem 0;
  }

  .text-content {
    font-size: 12px !important;
    padding: 0 10px;
    text-align: center;
  }

  /* CTA Buttons Mobile */
  .cta-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 2rem 0;
    flex-wrap: wrap;
  }

  .cta-btn {
    flex: 1 1 auto;
    max-width: 120px;
    padding: 12px 8px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 6px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .games-subsection {
    margin: 1.5rem 0;
    padding: 1rem 0;
  }

  .two-column-section {
    flex-direction: column;
    gap: 24px;
    padding: 40px 0;
    text-align: center;
  }

  .column-image,
  .column-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .column-text {
    text-align: center;
  }

  .feature-list-1 {
    text-align: center;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .feature-list li,
  .feature-list-1 li {
    font-size: 12px !important;
    margin-bottom: 0.8rem;
  }

  /* Affiliate Mobile Specific Fixes */
  .affiliate-main-title {
    font-size: 24px !important;
    margin: 16px 0 !important;
  }

  .affiliate-description {
    font-size: 14px !important;
    margin: 16px 0 !important;
  }

  .affiliate-features-list {
    margin: 16px 0 !important;
  }

  .affiliate-features-list li {
    font-size: 12px !important;
    margin-bottom: 8px !important;
    line-height: 1.4 !important;
  }

  .main-content,
  .content-container {
    text-align: center;
  }

  .responsive-image {
    display: block;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 0 12px;
    text-align: center;
  }

  /* Small Mobile Typography */
  .main-title {
    font-size: 22px !important;
    margin: 0.8rem 0;
  }

  .subsection-title {
    font-size: 18px !important;
    margin: 1.2rem 0 0.8rem 0;
  }

  .subsection-subtitle {
    font-size: 16px !important;
    margin: 0.8rem 0 0.4rem 0;
  }

  .subtitle-text {
    font-size: 14px !important;
    margin: 0.4rem 0;
  }

  .subtitle-text-affiliate {
    font-size: 12px !important;
    margin: 0.4rem 0;
  }

  .description-text {
    font-size: 12px !important;
    margin: 0.8rem 0 1.5rem 0;
  }

  .text-content {
    font-size: 10px !important;
    padding: 0 8px;
  }

  .section-wrapper {
    padding: 1rem 0;
    text-align: center;
  }

  /* CTA Buttons Small Mobile */
  .cta-buttons {
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin: 1.5rem 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .cta-btn {
    flex: 1 1 auto;
    max-width: 110px;
    padding: 10px 6px;
    font-size: 11px;
    min-height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .two-column-section {
    padding: 20px 0;
    gap: 20px;
    text-align: center;
  }

  .feature-list li,
  .feature-list-1 li {
    font-size: 10px !important;
    margin-bottom: 0.6rem;
    padding: 0 4px;
  }

  /* Enhanced Affiliate Mobile Fixes for Small Screens */
  .affiliate-main-title {
    font-size: 20px !important;
    margin: 12px 0 !important;
  }

  .affiliate-description {
    font-size: 11px !important;
    margin: 12px 0 !important;
    line-height: 1.3 !important;
  }

  .affiliate-features-list {
    margin: 12px 0 !important;
  }

  .affiliate-features-list li {
    font-size: 10px !important;
    margin-bottom: 6px !important;
    line-height: 1.3 !important;
    padding: 2px 0 !important;
  }

  .affiliate-features-list {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
}

@media (max-width: 360px) {
  .home-container {
    padding: 0 10px;
    text-align: center;
  }

  /* Extra Small Mobile Typography */
  .main-title {
    font-size: 20px !important;
    margin: 0.6rem 0;
  }

  .subsection-title {
    font-size: 16px !important;
    margin: 1rem 0 0.6rem 0;
  }

  .subsection-subtitle {
    font-size: 14px !important;
    margin: 0.6rem 0 0.3rem 0;
  }

  .subtitle-text {
    font-size: 12px !important;
    margin: 0.3rem 0;
  }

  .description-text {
    font-size: 10px !important;
    margin: 0.6rem 0 1rem 0;
  }

  .text-content {
    font-size: 9px !important;
    padding: 0 5px;
  }

  .section-wrapper {
    padding: 0.8rem 0;
    text-align: center;
  }

  /* CTA Buttons Extra Small Mobile */
  .cta-buttons {
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .cta-btn {
    flex: 1 1 auto;
    max-width: 100px;
    padding: 8px 4px;
    font-size: 10px;
    min-height: 36px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .two-column-section {
    padding: 20px 0;
    gap: 16px;
    text-align: center;
  }

  .feature-list li,
  .feature-list-1 li {
    font-size: 9px !important;
    margin-bottom: 0.4rem;
    padding: 0 3px;
  }

  .affiliate-main-title {
    font-size: 18px !important;
    margin: 10px 0 !important;
  }

  .affiliate-description {
    font-size: 10px !important;
    margin: 10px 0 !important;
  }

  .affiliate-features-list {
    margin: 10px 0 !important;
  }

  .affiliate-features-list li {
    font-size: 9px !important;
    margin-bottom: 4px !important;
    line-height: 1.2 !important;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .section-wrapper {
    padding: 1rem 0;
    text-align: center;
  }

  .home-container {
    text-align: center;
  }
}

@media (hover: none) and (pointer: coarse) {
  .feature-list li,
  .feature-list-1 li {
    padding: 8px 4px;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .affiliate-features-list li {
    padding: 4px 2px !important;
    margin-bottom: 6px !important;
  }
}
</style>