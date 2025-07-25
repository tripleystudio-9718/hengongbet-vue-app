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
        <div class="dotted-line-container">
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
        <div class="dotted-line-container">
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
        <div class="dotted-line-container">
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
/* Header Section */
.header-section {
  text-align: center;
  padding: 60px 0 40px 0;
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
  
  .steps-container {
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }
  
  .dotted-line-container {
    transform: rotate(90deg);
    width: 80px;
    margin-top: 0;
  }
  
  .step-item {
    max-width: 100%;
    align-items: center;
  }
  
  .step-content {
    justify-content: center;
    text-align: center;
  }
  
  .steps-desc {
    text-align: center;
  }
  
  .steps-img {
    width: 120px;
    height: 120px;
  }
  
  .num-img {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 2rem;
  }
  
  .header-subtitle {
    font-size: 1rem;
  }
}
</style>