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
  </div>
</template>

<script>
export default {
  name: 'PromotionSection',
  data() {
    return {
      promotions: [
        {
          bonusLabel: 'Top-up Bonus',
          bonusAmount: '68%',
          bonusSubtitle: 'Get a Maximum Bonus Up To 200',
          title: 'Top-up Bonus 68%',
          description: 'Get a maximum bonus up to 200',
          buttonText: 'Invite & Earn Now',
          image: new URL('@/assets/promotion1.png', import.meta.url).href,
        },
        {
          bonusLabel: 'Top-up Rebate',
          bonusAmount: '0.5%',
          bonusSubtitle: 'Bonus with No Limit',
          title: 'Top-up Rebate 0.5%',
          description: 'Bonus with No Limit',
          buttonText: 'Share & Win More',
          image: new URL('@/assets/promotion2.png', import.meta.url).href,
        },
        {
          bonusLabel: 'Top-up Bonus',
          bonusAmount: '200%',
          bonusSubtitle: 'Get a Maximum Bonus Up To 100',
          title: 'Top-up Bonus 200%',
          description: 'Get a maximum bonus up to 100',
          buttonText: 'Start Referring Now',
          image: new URL('@/assets/promotion3.png', import.meta.url).href,
        },
        {
          bonusLabel: 'Daily Rebate Up To',
          bonusAmount: '3%',
          bonusSubtitle: 'The More You Play, The More You Earn!',
          title: 'Daily Rebate Up to 3%!',
          description: 'The more you play, the more you earn!',
          buttonText: 'Get Your Rebate',
          image: new URL('@/assets/promotion4.png', import.meta.url).href,
        },
        {
          bonusLabel: 'Referral Rebate Up To',
          bonusAmount: '10%',
          bonusSubtitle: 'The More You Invite, The More You Bet!',
          title: 'Referral Rebate Up to 10%!',
          description: 'The more you invite, the more you bet, and the more rebates you get!',
          buttonText: 'Get Your Rebate',
          image: new URL('@/assets/promotion5.png', import.meta.url).href,
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

/* Promotion Cards */
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
  color: inherit; /* <-- Use color from parent .card-X */
}

.bonus-amount {
  font-size: 100px;
  font-weight: 900;
  line-height: 1;
}

.bonus-subtitle {
  font-size: 0.9rem;
  opacity: 0.85;
  color: inherit; /* <-- Use color from parent .card-X */
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

/* Responsive Design */
@media (max-width: 1024px) {
  .card-content {
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
    flex-direction: column;
    text-align: center;
    height: auto;
  }

  .overlay-left {
    width: 100%;
    padding: 30px 20px;
  }

  .bonus-amount {
    font-size: 2.5rem;
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
}
</style>
