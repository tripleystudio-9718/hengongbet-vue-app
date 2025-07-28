<template>
  <div class="section-container">
    <!-- FAQ Header Section -->
    <div class="header-section">
      <h3 class="header-label">{{ headerContent.label }}</h3>
      <h2 class="main-title">{{ headerContent.title }}</h2>
      <p class="header-description">{{ headerContent.description }}</p>
      <button class="cta-button">{{ headerContent.buttonText }}</button>
    </div>

    <div class="content-wrapper">
      <div class="accordion-container">
        <div 
          v-for="(item, index) in faqData" 
          :key="index" 
          class="accordion-item"
        >
          <button
            @click="toggleItem(index)"
            class="accordion-trigger"
          >
            <span 
              class="trigger-text"
              :class="{ 'text-active': openItems[index] }"
            >
              {{ item.question }}
            </span>

            <div class="trigger-icon-wrapper">
              <div class="trigger-icon-circle">
                <img 
                  v-if="openItems[index]" 
                  :src="closeIcon"
                  alt="Close"
                  class="trigger-icon-image"
                />
                <img 
                  v-else 
                  :src="openIcon"
                  alt="Open"
                  class="trigger-icon-image"
                />
              </div>
            </div>
          </button>
          
          <transition name="fade-slide">
            <div v-if="openItems[index]" class="accordion-content">
              <div class="content-body">
                <p class="content-text">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import openIcon from '@/assets/open-icon.svg'
import closeIcon from '@/assets/close-icon.svg'

export default {
  name: 'FAQ',
  data() {
    return {
      openItems: { 0: true }, // First item open by default
      openIcon,
      closeIcon,
      headerContent: {
        label: "FAQ",
        title: "Heng Ong Bet - All You Need To Know",
        description: "Got questions? We've compiled the most common queries from our players to help you get started smoothly on HengOngBet",
        buttonText: "View All FAQs"
      },
      faqData: [
        {
          question: "How Do I Register on Heng Ong Bet ?",
          answer: "Simply click the 'Register' button, fill in your details, and verify your phone number to get started"
        },
        {
          question: "Is Heng Ong Bet Legal and Safe to Use ?",
          answer: "Yes, Heng Ong Bet operates under proper licensing and uses advanced security measures to protect your data and transactions. We are fully compliant with all applicable regulations."
        },
        {
          question: "How can I Deposit or Withdraw money ?",
          answer: "You can deposit and withdraw money through various secure payment methods including bank transfers, e-wallets, and cryptocurrency. All transactions are processed quickly and securely."
        },
        {
          question: "What games are available on Heng Ong Bet ?",
          answer: "We offer a wide variety of games including live casino games, slot machines, sports betting, lottery games, and more. Our platform features games from top providers in the industry."
        },
        {
          question: "Are there any Welcome Bonuses or Promotions ?",
          answer: "Yes! We offer generous welcome bonuses for new players, as well as ongoing promotions, loyalty rewards, and special bonuses. Check our promotions page for the latest offers."
        },
        {
          question: "What should I do if I forget my login details ?",
          answer: "If you forget your login details, simply click on the 'Forgot Password' link on the login page. You can reset your password using your registered email or phone number."
        },
        {
          question: "Is there a mobile app for Heng Ong Bet",
          answer: "Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store, or access our mobile-optimized website directly from your browser."
        }
      ]
    }
  },
  methods: {
    toggleItem(index) {
      this.openItems = {
        ...this.openItems,
        [index]: !this.openItems[index]
      };
    }
  }
}
</script>

<style scoped>
/* Global Layout Classes */
.section-container {
  color: white;
  padding: 1.5rem;
}

.header-section {
  text-align: center;
  padding: 40px 20px;
  margin-bottom: 2rem;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

/* Global Typography Classes */
.header-label {
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: normal;
}

.main-title {
  color: #F2B240;
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.header-description {
  color: #CBD5E1;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem auto;
}

/* Button Components */
.cta-button {
  background: linear-gradient(135deg, #F2B240, #ED9326);
  color: #000000;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(242, 178, 64, 0.3);
}

/* Accordion Components */
.accordion-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.accordion-item {
  background-color: #242424;
  border-radius: 0.5rem;
  overflow: hidden;
}

.accordion-item:last-child {
  margin-bottom: 0;
}

.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.accordion-trigger:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.trigger-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 1.125rem;
  padding-right: 1rem;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.text-active {
  color: #F2B240;
}

.trigger-icon-wrapper {
  flex-shrink: 0;
  margin-left: 1rem;
}

.trigger-icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.trigger-icon-image {
  width: 25px;
  height: 25px;
}

.accordion-content {
  padding: 0 1.25rem 0.5rem 1.25rem;
}

.content-body {
  border-radius: 0.5rem;
  padding: 1rem;
}

.content-text {
  color: #D1D5DB;
  line-height: 1.6;
  margin: 0;
}

/* Transition animations */
.fade-slide-enter-active {
  transition: all 0.3s ease-out;
}

.fade-slide-leave-active {
  transition: all 0.3s ease-in;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-section {
    padding: 0 15px 0 15px;
  }
  
  .section-container {
    padding: 0;
  }
  
  .accordion-trigger {
    padding: 1.25rem 1rem;
  }
  
  .accordion-content {
    padding: 0 1rem 1.25rem 1rem;
  }
  
  .trigger-text {
    font-size: 1rem;
    padding-right: 0.75rem;
  }
  
  .trigger-icon-circle {
    width: 1.75rem;
    height: 1.75rem;
  }
  
  .trigger-icon-image {
    width: 0.875rem;
    height: 0.875rem;
  }
}

@media (max-width: 640px) {
  .main-title {
    font-size: 2rem;
  }
  
  .header-description {
    font-size: 0.95rem;
  }
  
  .accordion-trigger {
    padding: 1rem 0.875rem;
  }
  
  .accordion-content {
    padding: 0 0.875rem 1rem 0.875rem;
  }
  
  .trigger-text {
    font-size: 0.95rem;
  }
  
  .content-body {
    padding: 0.875rem;
  }
  
  .content-text {
    font-size: 0.9rem;
  }
  
  .cta-button {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 28px;
    margin: 0;
  }
  
  .header-label {
    font-size: 16px;
    margin: 0;
  }

  .header-description {
    font-size: 10px;
  }
}
</style>