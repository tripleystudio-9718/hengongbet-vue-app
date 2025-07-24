<template>
  <div class="promotion-container">
    <!-- Header Section -->
    <div class="promotion-header">
      <h1 class="main-title">
        Promotion Galore at <span class="highlight">Heng Ong Bet</span>
      </h1>
      <h2 class="subtitle">Unlock Exclusive Bonuses & Maximize Your Wins</h2>
      <p class="description">
        At HengOngBet, we bring you the ultimate platform for online gaming promotions in Malaysia and Singapore. Our exclusive bonuses are tailored to reward you for every bet you place — from generous cashback offers to tournament-related bonuses and exciting Heng Ong bonuses.
      </p>
    </div>

    <!-- Promotion Cards -->
    <div class="promotion-cards">
      <div 
        v-for="(promo, index) in promotions" 
        :key="index"
        class="promotion-card"
        :class="`card-${index + 1}`"
      >
        <div class="card-content">
            
          <!-- Left Side - Percentage/Bonus -->
          <div class="bonus-section">
            <div class="bonus-label">{{ promo.bonusLabel }}</div>
            <div class="bonus-amount">{{ promo.bonusAmount }}</div>
            <div class="bonus-subtitle">{{ promo.bonusSubtitle }}</div>
        <button 
          class="promo-button"
          :class="`button-${index + 1}`"
          :style="{ backgroundImage: `url(${promo.buttonBg})` }"
          @click="handlePromoClick(promo)"
        >
          {{ promo.buttonText }}
        </button>
          </div>


          <!-- Right Side - Promotion Image -->
          <div class="image-section">
            <img :src="promo.image" :alt="promo.title" class="promo-image" />
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
      promotions: [
        {
          bonusLabel: 'New Bonus',
          bonusAmount: '68%',
          bonusSubtitle: 'Bonus with No Limit!',
          title: 'Top-up Bonus 68%',
          description: 'Get a maximum bonus up to 200',
          buttonText: 'Invite & Earn Now',
          image: new URL('@/assets/promotion1.png', import.meta.url).href,
          buttonBg: new URL('@/assets/button1.png', import.meta.url).href
        },
        {
          bonusLabel: 'Rebate Bonus',
          bonusAmount: '0.5%',
          bonusSubtitle: 'Bonus with No Limit!',
          title: 'Top-up Rebate 0.5%',
          description: 'Bonus with No Limit',
          buttonText: 'Share & Win More',
          image: new URL('@/assets/promotion2.png', import.meta.url).href,
          buttonBg: new URL('@/assets/button2.png', import.meta.url).href
        },
        {
          bonusLabel: 'Sign-up Bonus',
          bonusAmount: '200%',
          bonusSubtitle: '',
          title: 'Top-up Bonus 200%',
          description: 'Get a maximum bonus up to 100',
          buttonText: 'Start Referring Now',
          image: new URL('@/assets/promotion3.png', import.meta.url).href,
          buttonBg: new URL('@/assets/button3.png', import.meta.url).href
        },
        {
          bonusLabel: 'Daily Rebate Up to',
          bonusAmount: '3%',
          bonusSubtitle: '',
          title: 'Daily Rebate Up to 3%!',
          description: 'The more you play, the more you earn!',
          buttonText: 'Get Your Rebate',
          image: new URL('@/assets/promotion4.png', import.meta.url).href,
          buttonBg: new URL('@/assets/button4.png', import.meta.url).href
        },
        {
          bonusLabel: 'Referral Rebate',
          bonusAmount: '10%',
          bonusSubtitle: 'The More You Invite, The More You Bet!',
          title: 'Referral Rebate Up to 10%!',
          description: 'The more you invite, the more you bet, and the more rebates you get!',
          buttonText: 'Get Your Rebate',
          image: new URL('@/assets/promotion5.png', import.meta.url).href,
          buttonBg: new URL('@/assets/button5.png', import.meta.url).href
        }
      ]
    }
  },
  methods: {
    handlePromoClick(promo) {
      console.log('Promotion clicked:', promo.title);
      // Add your click handling logic here
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

/* Header Styles */
.promotion-header {
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.2;
}

.highlight {
  color: #ff8c00;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
}

.description {
  font-size: 0.95rem;
  color: #cccccc;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Promotion Cards */
.promotion-cards {
  width: 60%;
  height:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.promotion-card {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
}



/* Card Themes */
.card-1,.card-2,.card-3,.card-4,.card-5 {
  background: transparent;
}


.card-content {
  display: flex;
  width: 100%;
  height: 200px; /* or adjust based on your actual image height */
  padding: 0;
  gap: 0;
  border-radius: 16px;
  overflow: hidden;
}



.bonus-section {
  width: 30%;
  background-color: #1f1f1f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Stick content top + button bottom */
  align-items: center;
}



.bonus-label {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
  opacity: 0.9;
}

.bonus-amount {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 5px;
}

.bonus-subtitle {
  font-size: 0.8rem;
  opacity: 0.8;
}


.image-section {
  width: 70%;
  height: 100%;
  overflow: hidden;
}



.promo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
}


.promo-button {
  width: 90%;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease;
}


.promo-button:hover {
  transform: scale(1.05);
}

.promo-button:active {
  transform: scale(0.98);
}


/* Responsive Design */
@media (max-width: 1024px) {
  .card-content {
    grid-template-columns: 150px 1fr 200px;
    padding: 25px;
    gap: 20px;
  }
  
  .bonus-amount {
    font-size: 3rem;
  }
  
  .promo-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .promotion-container {
    padding: 20px 15px;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .card-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
  
  .bonus-amount {
    font-size: 2.5rem;
  }
  
  .promo-image {
    height: 120px;
  }
  
  .promo-button {
    position: static;
    margin-top: 15px;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.5rem;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .bonus-amount {
    font-size: 2rem;
  }
  
  .promo-title {
    font-size: 1.1rem;
  }
  
  .feature-logos {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>