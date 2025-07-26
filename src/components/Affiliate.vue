<template>
  <div class="affiliate-section">
    <!-- Your existing design - unchanged -->
    <section class="affiliate-hero-banner">
      <img :src="affiliateBanner" alt="Gaming Banner" class="affiliate-banner-image" />
    </section>
    <div class="affiliate-container">
      <h1 class="main-title">{{ content.brandSection.title1 }} <span style="color: #F2B240;">{{ content.brandSection.hengOngBet }}</span> {{ content.brandSection.title2 }}</h1>
      <p class="description-text">{{ content.brandSection.tagline }}</p>
      <!-- Join Button -->
      <div class="join-button-container">
        <button class="join-button">Join Us</button>
      </div>
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
      <WhyChooseUs :features="features" />
      <div class="commission-section">
        <h2 class="section-title">Dual Commission Models</h2>
        <p class="section-description">Switch anytime. Total control over how you earn. </p>
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
      <div class="levels-section">
        <h2 class="section-title">User Levels & Rebate System</h2>
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

      <SupportedGames />

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
      // Commission models
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
      // Removed gameTypes array - now handled by SupportedGames component
    }
  }
}
</script>

<style>
.affiliate-section {
  background: #27272A;
  min-height: 100vh;
}

.affiliate-hero-banner {
  position: relative;
  overflow: hidden;
  background: #0a0e1a;
}

.affiliate-banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.affiliate-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-title {
  font-size: 40px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 1rem 0;
  line-height: 1.2;
  text-align: center;
}

.description-text {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  margin: 1rem 0 2rem 0;
  line-height: 1.4;
  text-align: center;
}

.join-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.steps-des {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

.steps-num {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 250px;
  width: 33%;
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
}

.join-button-container {
  text-align: center;
}

.join-button {
  border-radius: 59px;
    background: linear-gradient(180deg, #F2B341 0%, #ED8F23 100%);
  color: #000;
  border: none;
  padding: 10px 60px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
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
}

.section-description {
    font-size: 16px;
  font-weight: 400;
  color: #F2B240;
  text-align: center;
  margin-bottom: 20px;
}

.commission-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

/* Updated Commission Card with Feature Card Styling */
.commission-card {
  background: linear-gradient(135deg, #F2B240 0%, #E6A635 100%);
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 100%;
  max-width: 220px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
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

/* Removed transform on hover, only shadow changes */
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
  backdrop-filter: blur(10px);
}

.commission-card:hover .commission-icon {
  transform: scale(1.15) rotate(5deg);
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.commission-icon .icon-image {
  width: 100px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
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
}

.commission-card:hover .commission-description {
  color: #2a2a2a;
  transform: translateY(-1px);
}

/* Levels Table */
.levels-table {
  background: #333;
  border-radius: 36px;
  overflow: hidden;
  margin: 0 auto;
  width: 1000px;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-radius: 36px 36px 0 0;
  background: linear-gradient(180deg, #F1AF3E 52.88%, #ED8F23 100%);
  box-shadow: 0 3.466px 3.466px 0 rgba(0, 0, 0, 0.25);
  font-weight: 700;
  color: #000;
  border: none;
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
  padding-bottom: 20px;
}

.cta-title {
  font-size: 40px;
  font-weight: 500;
  color: #F2B240;
  margin-bottom: 20px;
}

.cta-subtitle {
  font-size: 20px;
  color: #FFF;
  margin-bottom: 15px;
  font-weight: 400;
}

.cta-description {
  font-size: 26px;
  color: #FFFFFF;
  margin-bottom: 40px;
  font-weight: 700;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-button {
  padding: 10px 60px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid #F2B240;
}

.cta-button.primary {
  border-radius: 13.142px;
  background: linear-gradient(180deg, #F2B341 0%, #ED8F23 100%);
  color: black;
}

.cta-button.secondary {
    border-radius: 13.142px;
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
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
  }
  
  .table-header,
  .table-row {
    grid-template-columns: 1fr;
    text-align: left;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 200px;
  }
  
  .commission-cards {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .commission-card {
    max-width: 200px;
  }
}
</style>
