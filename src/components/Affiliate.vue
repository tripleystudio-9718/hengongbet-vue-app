<template>
  <div class="affiliate-section">
    <!-- Hero Banner -->
    <section class="affiliate-hero-banner">
      <img :src="affiliateBanner" alt="Gaming Banner" class="affiliate-banner-image" />
    </section>
    
    <div class="affiliate-container">
      <!-- Main Title Section -->
      <h1 class="main-title">
        {{ content.brandSection.title1 }} 
        <span style="color: #F2B240;">{{ content.brandSection.hengOngBet }}</span> 
        {{ content.brandSection.title2 }}
      </h1>
      <p class="description-text">{{ content.brandSection.tagline }}</p>
      
      <!-- Join Button -->
      <div class="join-button-container">
        <button class="join-button">Join Us</button>
      </div>
      
      <!-- Join Steps -->
      <div class="join-steps">
        <div class="steps-num" :style="{ backgroundImage: `url(${stepImage})` }">
          <div class="steps-des">
            <img :src="num1Icon" class="num-image" />
            <div class="steps-t">
              <p class="steps-p">Step 1</p>
              <h2 class="steps-h2">Register</h2>
            </div>
          </div>
        </div>
        <div class="steps-num" :style="{ backgroundImage: `url(${stepImage})` }">
          <div class="steps-des">
            <img :src="num2Icon" class="num-image" />
            <div class="steps-t">
              <p class="steps-p">Step 2</p>
              <h2 class="steps-h2">Promote</h2>
            </div>
          </div>
        </div>
        <div class="steps-num" :style="{ backgroundImage: `url(${stepImage})` }">
          <div class="steps-des">
            <img :src="num3Icon" class="num-image" />
            <div class="steps-t">
              <p class="steps-p">Step 3</p>
              <h2 class="steps-h2">Earn</h2>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Why Choose Us Component -->
      <WhyChooseUs :features="features" />
      
      <!-- Commission Section -->
      <div class="commission-section">
        <h2 class="section-title">Dual Commission Models</h2>
        <p class="section-description">Switch anytime. Total control over how you earn.</p>
        <div class="commission-cards">
          <div class="commission-card" v-for="(model, index) in commissionModels" :key="index">
            <div class="commission-icon">
              <img :src="model.icon" :alt="model.title" class="icon-image" />
            </div>
            <h3 class="commission-title">{{ model.title }}</h3>
            <p class="commission-description">{{ model.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Levels Section -->
      <div class="levels-section">
        <h2 class="section-title">User Levels & Rebate System</h2>
        
        <!-- Table (responsive for all devices) -->
        <div class="levels-table-container">
          <div class="levels-table">
            <div class="table-header">
              <div class="table-cell">User Level</div>
              <div class="table-cell">Benefits</div>
              <div class="table-cell">Rebate</div>
            </div>
            <div class="table-row" v-for="(level, index) in userLevels" :key="index">
              <div class="table-cell">{{ level.name }}</div>
              <div class="table-cell">{{ level.benefits }}</div>
              <div class="table-cell">{{ level.rebate }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Supported Games Component -->
      <SupportedGames />

      <!-- Final CTA Section -->
      <div class="cta-section">
        <h2 class="cta-title">Final Call To Action</h2>
        <p class="cta-subtitle">Join the <span style="color: #F2B240;">Heng Ong Bet</span> Agent Network and take control of your financial future!</p>
        <p class="cta-description">Start Earning Today. Your Profits, Your Control.</p>
        <div class="cta-buttons">
          <button class="cta-button primary">Register</button>
          <button class="cta-button secondary">Customer Support</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import affiliateBanner from '@/assets/affiliate-banner.png'
import stepImage from '@/assets/step-bg.png'
import num1Icon from '@/assets/num1-icon.png'
import num2Icon from '@/assets/num2-icon.png'
import num3Icon from '@/assets/num3-icon.png'
import dual1Icon from '@/assets/dual1-icon.png'
import dual2Icon from '@/assets/dual2-icon.png'
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
      affiliateBanner,
      stepImage,
      num1Icon,
      num2Icon,
      num3Icon,
      dual1Icon,
      dual2Icon,
      content: {
        brandSection: {
          title1: "Join as a",
          hengOngBet: "Heng Ong Bet",
          title2: "Agent, Shareholder, or Member",
          tagline: "No Win-Loss Worries · Flexible Commissions · Auto Profit Distribution",
        }
      },
      features: [
        {
          icon: '@/assets/icons/feature1.png',
          title: 'High Commission',
          description: 'Up to 50% revenue share'
        },
        {
          icon: '@/assets/icons/feature2.png',
          title: 'Real-time Tracking',
          description: 'Monitor your earnings live'
        },
        {
          icon: '@/assets/icons/feature3.png',
          title: 'Weekly Payouts',
          description: 'Fast and reliable payments'
        },
        {
          icon: '@/assets/icons/feature4.png',
          title: 'Dedicated Support',
          description: '24/7 affiliate assistance'
        },
        {
          icon: '@/assets/icons/feature5.png',
          title: 'Marketing Tools',
          description: 'Professional banners & links'
        }
      ],
      commissionModels: [
        {
          icon: dual1Icon,
          title: 'Revenue Share',
          description: 'Earn percentage of player losses'
        },
        {
          icon: dual2Icon,
          title: 'CPA Model',
          description: 'Fixed amount per qualified player'
        }
      ],
      userLevels: [
        {
          name: 'Shareholder',
          benefits: 'Based on players\' total betting volume + win/loss (Fight + Pool)',
          rebate: '-----'
        },
        {
          name: 'Referrer',
          benefits: '0.3% on player bets',
          rebate: '0.5% on own bets'
        },
        {
          name: 'Player',
          benefits: '-----',
          rebate: '0.5% on every bet placed'
        }
      ]
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

.main-title {
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
  margin: 1rem 0 2rem 0;
  line-height: 1.4;
  text-align: center;
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
  background-size: contain;
  height: 250px;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.steps-h2 {
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
.section-title {
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

.commission-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.2;
  transition: all 0.3s ease;
  word-wrap: break-word;
}

.commission-card:hover .commission-title {
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

/* CTA Section */
.cta-section {
  text-align: center;
  padding-bottom: 40px;
  width: 100%;
}

.cta-title {
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

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .affiliate-container {
    padding: 0 15px;
  }

  .affiliate-banner-image {
    object-fit: cover;
  }

  .main-title {
    font-size: 24px;
    margin: 20px 0 15px 0;
    padding: 0 10px;
  }

  .description-text {
    font-size: 16px;
    margin: 15px 0 25px 0;
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
    height: 180px;
    border-radius: 12px;
    margin: 0;
  }

  .steps-des {
    gap: 15px;
    flex-direction: column;
    text-align: center;
  }

  .steps-h2 {
    font-size: 24px;
  }

  .steps-p {
    font-size: 14px;
  }

  .num-image {
    width: 60px;
  }

  .section-title {
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

  .commission-title {
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

  .cta-title {
    font-size: 26px;
    padding: 0 10px;
  }

  .cta-subtitle {
    font-size: 16px;
    padding: 0 15px;
  }

  .cta-description {
    font-size: 20px;
    padding: 0 15px;
    margin-bottom: 30px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 0 20px;
  }

  .cta-button {
    width: 100%;
    max-width: 280px;
    padding: 15px 30px;
    font-size: 16px;
  }
}

/* Extra small devices */
@media (max-width: 480px) {
  .affiliate-container {
    padding: 0 10px;
  }

  .main-title {
    font-size: 20px;
  }

  .description-text {
    font-size: 14px;
  }

  .section-title {
    font-size: 20px;
  }

  .commission-card {
    max-width: 100%;
  }

  .cta-title {
    font-size: 22px;
  }

  .cta-subtitle {
    font-size: 14px;
  }

  .cta-description {
    font-size: 18px;
  }

  .levels-table {
    min-width: 300px;
  }

  .table-cell {
    padding: 10px 5px;
    font-size: 11px;
  }

  /* Keep steps vertical and full-width on small screens */
  .join-steps {
    gap: 15px;
  }

  .steps-num {
    height: 150px;
  }

  .steps-h2 {
    font-size: 20px;
  }

  .steps-p {
    font-size: 12px;
  }

  .num-image {
    width: 50px;
  }
}

/* Large mobile devices */
@media (min-width: 769px) and (max-width: 1024px) {
  .commission-cards {
    gap: 25px;
    flex-wrap: wrap;
  }

  .commission-card {
    max-width: 300px;
    flex: 0 1 calc(50% - 12.5px);
  }

  .levels-table {
    width: 90%;
  }

  .table-cell {
    padding: 15px;
    font-size: 14px;
  }
}
</style>