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
          <!-- Brand Section -->
          <div class="section-wrapper">
            <p class="subtitle-text">{{ content.brandSection.subtitle }}</p>
            <h2 class="main-title" style="color: #F2B240;">{{ content.brandSection.title }}</h2>
            <p class="description-text">{{ content.brandSection.tagline }}</p>
                                  
            <div class="text-content">
              <p v-for="(paragraph, index) in content.brandSection.paragraphs" :key="index">
                {{ paragraph }}
              </p>
                                        
              <ul class="feature-list">
                <li v-for="(feature, index) in content.brandSection.features" :key="index">
                  • {{ feature }}
                </li>
              </ul>
                                        
              <p>{{ content.brandSection.conclusion }}</p>
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
          <h2 class="main-title">
            Become a <span class="accent-color">{{ content.affiliateSection.brand }}</span> Affiliate Today
          </h2>
          <p class="subtitle-text">{{ content.affiliateSection.description }}</p>
                    
          <ul class="feature-list-1" style="flex-direction: column;">
            <li v-for="(benefit, index) in content.affiliateSection.benefits" :key="index">
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
  data() {
    return {
      becomeImg,
      // Carousel images for the hero banner
      carouselImages: [
        homeBanner,
        homeBanner1,
        homeBanner2,
        homeBanner3,
      ],
      content: {
        brandSection: {
          subtitle: "Trusted Online Casino",
          title: "Heng Ong Bet Official",
          tagline: "Heng Ong Bet - Malaysia's Trusted Online Casino Platform",
          paragraphs: [
            "Founded in 2015, Heng Ong Bet is Malaysia's first all-in-one online entertainment platform. With world-class gaming systems and highest technical support team committed to delivering safe, reliable, and high-quality gaming services to all users.",
            "As one of the leading online gaming platforms in Malaysia, we offer a comprehensive range of gaming options including:"
          ],
          features: [
            "Sports betting",
            "Live casino",
            "Slot games",
            "4D lottery and more"
          ],
          conclusion: "Players enjoy a fair, secure, and seamless gaming experience, with fast deposits and withdrawals."
        },
        whySection: {
          brand: "Heng Ong Bet"
        },
        affiliateSection: {
          brand: "Heng Ong Bet",
          description: "Join HengOngBet's official affiliate program and earn high commissions by promoting Malaysia's top online casino platform. Whether you're a seasoned marketer or just getting started, our tools, tracking system, and support team help you succeed",
          benefits: [
            "Real-time tracking & reports",
            "Up to 50% revenue share",
            "Weekly payout system",
            "Custom promotional banners",
            "Telegram bot & link generator",
            "Dedicated affiliate support",
            "Zero cost to join",
            "Trusted by thousands of agents in Malaysia"
          ]
        },
        globalSection: {
          brand: "Heng Ong Bet",
          title: "We Are Global",
          subtitle: "Heng Ong Bet is Now Expanding Globally",
          description: "Heng Ong Bet is now available in Singapore, with our talented global team supporting growth across Malaysia and Singapore. What unites us? A passion for delivering the best gaming experience. We're also actively expanding into Thailand, Vietnam, Indonesia, Cambodia, the UK, and the USA."
        }
      }
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
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  font-weight: 400;
  color: #D5D3CF;
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

  .description-text {
    margin: 0;
  }

  .feature-list-1 {
    text-align: center;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-content {
    padding: 0 10px;
    text-align: center;
  }

  .main-title,
  .accent-title,
  .section-title,
  .subtitle-text,
  .description-text {
    text-align: center;
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

  .main-title {
    margin: 0;
  }

  .subtitle-text {
    font-size: 12px;
    margin: 0;
  }

  .section-wrapper {
    padding: 1rem 0;
    text-align: center;
  }

  .two-column-section {
    padding: 20px 0;
    gap: 20px;
    text-align: center;
  }

  .text-content {
    padding: 0 5px;
    text-align: center;
    font-size: 10px;
  }

  .feature-list,
  .feature-list-1 {
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .feature-list li,
  .feature-list-1 li {
    margin: 0;
    padding: 0 5px;
    text-align: center;
    font-size: 10px;
  }

  * {
    text-align: center !important;
  }

  .feature-list li::before,
  .feature-list-1 li::before {
    text-align: left;
  }
}

@media (max-width: 360px) {
  .home-container {
    padding: 0 10px;
    text-align: center;
  }

  .section-wrapper {
    padding: 0.8rem 0;
    text-align: center;
  }

  .two-column-section {
    padding: 20px 0;
    gap: 16px;
    text-align: center;
  }

  .main-title,
  .accent-title,
  .section-title,
  .subtitle-text,
  .description-text,
  .text-content {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
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
}
</style>