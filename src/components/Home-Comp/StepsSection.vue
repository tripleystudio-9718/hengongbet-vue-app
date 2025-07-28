<template>
  <section>
    <!-- Header Section -->
    <div class="header-section">
      <p class="header-subtitle">{{ headerContent.subtitle }}</p>
      <h2 class="header-title">{{ headerContent.title }}</h2>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- Steps Container -->
      <div class="steps-container">
        <!-- Step 1 -->
        <div class="step-item">
          <img :src="accountIcon" alt="Account Icon" class="steps-img" />
          <div class="step-content">
            <img :src="stepNumbers[0]" alt="Step 1" class="num-img" />
            <div class="steps-desc">
              <h2 class="steps-h2">{{ stepsData[0].title }}</h2>
              <p class="steps-p">{{ stepsData[0].description }}</p>
            </div>
          </div>
        </div>

        <!-- Dotted Line 1 -->
        <div class="dotted-line-container dotted-line-1">
          <div class="circle"></div>
          <div class="dotted-line"></div>
          <div class="circle"></div>
        </div>

        <!-- Step 2 -->
        <div class="step-item">
          <img :src="depositIcon" alt="Deposit Icon" class="steps-img" />
          <div class="step-content">
            <img :src="stepNumbers[1]" alt="Step 2" class="num-img" />
            <div class="steps-desc">
              <h2 class="steps-h2">{{ stepsData[1].title }}</h2>
              <p class="steps-p">{{ stepsData[1].description }}</p>
            </div>
          </div>
        </div>

        <!-- Dotted Line 2 -->
        <div class="dotted-line-container dotted-line-2">
          <div class="circle"></div>
          <div class="dotted-line"></div>
          <div class="circle"></div>
        </div>

        <!-- Step 3 -->
        <div class="step-item">
          <img :src="winningIcon" alt="Winning Icon" class="steps-img" />
          <div class="step-content">
            <img :src="stepNumbers[2]" alt="Step 3" class="num-img" />
            <div class="steps-desc">
              <h2 class="steps-h2">{{ stepsData[2].title }}</h2>
              <p class="steps-p">{{ stepsData[2].description }}</p>
            </div>
          </div>
        </div>

        <!-- Dotted Line 3 -->
        <div class="dotted-line-container dotted-line-3">
          <div class="circle"></div>
          <div class="dotted-line"></div>
          <div class="circle"></div>
        </div>

        <!-- Step 4 -->
        <div class="step-item">
          <img :src="rewardIcon" alt="Reward Icon" class="steps-img" />
          <div class="step-content">
            <img :src="stepNumbers[3]" alt="Step 4" class="num-img" />
            <div class="steps-desc">
              <h2 class="steps-h2">{{ stepsData[3].title }}</h2>
              <p class="steps-p">{{ stepsData[3].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import accountIcon from '@/assets/account_icon.png'
import depositIcon from '@/assets/deposit_icon.png'
import winningIcon from '@/assets/winning_icon.png'
import rewardIcon from '@/assets/reward_icon.png'
import firstIcon from '@/assets/first_icon.png'
import secondIcon from '@/assets/second_icon.png'
import thirdIcon from '@/assets/third_icon.png'
import fourIcon from '@/assets/four_icon.png'

export default {
  name: 'HowItWorksSteps',
  data() {
    return {
      accountIcon,
      depositIcon,
      winningIcon,
      rewardIcon,
      stepNumbers: [firstIcon, secondIcon, thirdIcon, fourIcon],
      headerContent: {
        subtitle: "Welcome to Heng Ong Bet - Trusted Online Casino",
        title: "Start Playing and Earning"
      },
      stepsData: [
        {
          title: 'Create Account',
          description: 'Click Join Now. Fill in your login info'
        },
        {
          title: 'Make a Deposit',
          description: 'Make your first deposit using money or crypto transfer'
        },
        {
          title: 'Start Winning',
          description: 'Start winning while playing on your favourite games'
        },
        {
          title: 'Get Reward',
          description: "Don't forget to claim your bonuses"
        }
      ]
    }
  }
}
</script>

<style scoped>
.header-section {
  text-align: center;
  padding: 40px 0;
}

.header-subtitle {
  color: #ffffff;
  font-weight: 500;
  font-size: 30px;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.header-title {
  font-size: 40px;
  font-weight: 500;
  color: #F2B240;
  margin: 0;
  line-height: 1.2;
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

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Steps Container */
.steps-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 250px;
}

.steps-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.step-content {
  display: flex;
  align-items: flex-start;
  gap: 0;
  width: 100%;
  margin-right: 50px;
}

.num-img {
  width: 60px;
  height: 90px;
  object-fit: contain;
  flex-shrink: 0;
}

.steps-desc {
  flex: 1;
  text-align: left;
}

.steps-h2 {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 0;
  text-align: center;
}

.steps-p {
  font-size: 0.9rem;
  color: #cccccc;
  margin: 0;
  line-height: 1.5;
  text-align: center;
}

.dotted-line-container {
  display: flex;
  align-items: center;
  width: 120px;
  flex-shrink: 0;
  margin-top: 75px; /* Align with center of step icons */
}

.circle {
  width: 12px;
  height: 12px;
  background-color: #ED8F23;
  border-radius: 50%;
  z-index: 2;
  flex-shrink: 0;
}

.dotted-line {
  flex: 1;
  height: 2px;
  background-image: repeating-linear-gradient(
    to right,
    #ED8F23 0px,
    #ED8F23 6px,
    transparent 6px,
    transparent 12px
  );
  margin: 0 -2px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-section {
    padding: 40px 20px 30px 20px;
  }
  
  .header-subtitle {
    font-size: 1.1rem;
  }
  
  .header-title {
    font-size: 2.5rem;
  }

  .py-8 {
    padding: 0;
  }
  
  .steps-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 2rem 0.5rem;
    align-items: center;
    justify-items: center;
    max-width: 100%;
  }
  
  /* Grid positioning for mobile layout with connecting lines */
  .step-item:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  
  .dotted-line-1 {
    grid-column: 2;
    grid-row: 1;
    width: 60px;
    margin-top: 0;
  }
  
  .step-item:nth-child(3) {
    grid-column: 3;
    grid-row: 1;
  }
  
  .step-item:nth-child(5) {
    grid-column: 1;
    grid-row: 3;
  }
  
  .dotted-line-3 {
    grid-column: 2;
    grid-row: 3;
    width: 60px;
    margin-top: 0;
  }
  
  .step-item:nth-child(7) {
    grid-column: 3;
    grid-row: 3;
  }
  
  /* Hide the middle dotted line (between steps 2-3) on mobile */
  .dotted-line-2 {
    display: none;
  }
  
  .step-item {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
  
  .step-content {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    gap: 0.5rem;
  }
  
  .steps-desc {
    text-align: center;
    width: 100%;
  }
  
  .steps-img {
    width: 100px;
    height: 100px;
    margin-bottom: 0.5rem;
  }
  
  .num-img {
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;
  }
  
  .steps-h2 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  .steps-p {
    font-size: 0.8rem;
    line-height: 1.4;
  }
  
  /* Mobile dotted line styling */
  .dotted-line-container .circle {
    width: 8px;
    height: 8px;
  }
  
  .dotted-line-container .dotted-line {
    height: 2px;
    background-image: repeating-linear-gradient(
      to right,
      #ED8F23 0px,
      #ED8F23 4px,
      transparent 4px,
      transparent 8px
    );
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 28px;
  }
  
  .header-subtitle {
    font-size: 16px;
  }
  
  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .steps-container {
    gap: 1.5rem 0.25rem;
  }
  
  .dotted-line-1,
  .dotted-line-3 {
    width: 40px;
  }
  
  .steps-img {
    width: 80px;
    height: 80px;
  }
  
  .num-img {
    width: 35px;
    height: 35px;
  }
  
  .steps-h2 {
    font-size: 1rem;
  }
  
  .steps-p {
    font-size: 0.75rem;
  }
  
  .dotted-line-container .circle {
    width: 6px;
    height: 6px;
  }
}

@media (max-width: 360px) {
  .steps-container {
    gap: 1rem 0.125rem;
  }
  
  .dotted-line-1,
  .dotted-line-3 {
    width: 30px;
  }
  
  .steps-img {
    width: 70px;
    height: 70px;
  }
  
  .num-img {
    width: 30px;
    height: 30px;
  }
  
  .steps-h2 {
    font-size: 0.9rem;
  }
  
  .steps-p {
    font-size: 0.7rem;
  }
  
  .dotted-line-container .circle {
    width: 5px;
    height: 5px;
  }
  
  .dotted-line-container .dotted-line {
    background-image: repeating-linear-gradient(
      to right,
      #ED8F23 0px,
      #ED8F23 3px,
      transparent 3px,
      transparent 6px
    );
  }
}
</style>