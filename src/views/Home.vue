<template>
  <div class="home-page">
    <!-- Hero Banner Section -->
    <section class="hero-banner">
      <img :src="homeBanner" alt="Gaming Banner" class="banner-image" />
    </section>

    <PromotionSection />

    <section class="main-content">
      <div class="content-container">
        <div class="brand-section">
          <p class="trust-text">Trusted Online Casino</p>
          <h2 class="brand-title">Heng Ong Bet Official</h2>
          <p class="brand-subtitle">Heng Ong Bet - Malaysia's Trusted Online Casino Platform</p>
          
          <div class="description">
            <p>Founded in 2015, Heng Ong Bet is Malaysia's first all-in-one online entertainment platform. With world-class gaming systems and highest technical support team committed to delivering safe, reliable, and high-quality gaming services to all users.</p>
            <p>As one of the leading online gaming platforms in Malaysia, we offer a comprehensive range of gaming options including:</p>
            
            <ul class="features-list">
              <li>• Sports betting</li>
              <li>• Live casino</li>
              <li>• Slot games</li>
              <li>• 4D lottery and more</li>
            </ul>
            
            <p>Players enjoy a fair, secure, and seamless gaming experience, with fast deposits and withdrawals.</p>
          </div>
        </div>

        <FeaturesSection />

        <div class="platform-section">
          <h3>Play Anywhere, Anytime</h3>
          <p>With the Heng Ong Bet mobile app (iOS & Android supported), you can enjoy all your favorite games on the go — from slots and sportsbook to live dealer and 4D games. Join Heng Ong Bet today and experience Malaysia's most reliable and exciting online gaming platform!</p>
        </div>
      </div>
    </section>

    <!-- Hot Games Section Component -->
    <GamesSection />
  </div>
</template>

<script>
import PromotionSection from '@/components/Home-Comp/PromotionSection.vue'
import FeaturesSection from '@/components/Home-Comp/FeaturesSection.vue'
import GamesSection from '@/components/Home-Comp/GamesSection.vue'
import homeBanner from '@/assets/home-banner.png'

export default {
  name: 'Home',
  components: {
    PromotionSection,
    FeaturesSection,
    GamesSection
  },
  data() {
    return {
      homeBanner
    }
  }
}
</script>

<style scoped>
.home-page {
  background: #27272A;
  min-height: 100vh;
}

/* Hero Banner */
.hero-banner {
  position: relative;
  overflow: hidden;
  background: #0a0e1a;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 600px;
}

/* Main Content */
.main-content {
  padding: 20px 20px;
}

.content-container {
  width: 1400px;
  margin: 0 auto;
  color: white;
}

.brand-section {
  text-align: center;
  margin-bottom: 60px;
}

.trust-text {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.brand-title {
  font-size: 3rem;
  font-weight: bold;
  color: #fbbf24;
  margin-bottom: 1rem;
  margin: 0;
}

.brand-subtitle {
  font-size: 1.2rem;
  color: #e2e8f0;
  margin-bottom: 2rem;
}

.description {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.8;
  color: #cbd5e1;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.features-list li {
  margin-bottom: 0.5rem;
  color: #cbd5e1;
}

/* Platform Section */
.platform-section {
  border-radius: 12px;
  text-align: center;
}

.platform-section h3 {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.platform-section p {
  color: #C0BEBE;
  line-height: 1.8;
  max-width: 1100px;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>