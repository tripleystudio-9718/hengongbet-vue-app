<template>
  <div class="section-container">
    <!-- FAQ Header Section -->
    <div class="header-section">
      <h2 class="header-label">{{ $t('faqSec.header.label') }}</h2>
      <div class="main-title">{{ $t('faqSec.header.title') }}</div>
      <p class="header-description">{{ $t('faqSec.header.description') }}</p>
      <button class="cta-button" @click="goToFaqPage">
        {{ $t('faqSec.header.button_text') }}
      </button>
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
            <h3 
              class="trigger-text"
              :class="{ 'text-active': openItems[index] }"
            >
              {{ item.question }}
            </h3>

            <div class="trigger-icon-wrapper">
              <div class="trigger-icon-circle">
                <img 
                  v-if="openItems[index]" 
                  :src="closeIcon"
                  :alt="$t('faqSec.alt_text.close')"
                  class="trigger-icon-image"
                />
                <img 
                  v-else 
                  :src="openIcon"
                  :alt="$t('faqSec.alt_text.open')"
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
import { localePath } from '@/router'

export default {
  name: 'FAQ',
  data() {
    return {
      openItems: { 0: true }, // First item open by default
      openIcon,
      closeIcon,
      faqData: []
    }
  },
  created() {
    console.log('FAQ Component created');
    console.log('$i18n available:', !!this.$i18n);
    console.log('Current locale:', this.$i18n?.locale);
    
    // Load FAQ data using translation keys
    this.loadFaqData();
  },
  mounted() {
    console.log('FAQ Component mounted');
    console.log('FAQ data:', this.faqData);
    
    // If faqData is empty, try loading again
    if (this.faqData.length === 0) {
      this.$nextTick(() => {
        this.loadFaqData();
      });
    }
  },
  methods: {
    loadFaqData() {
      console.log('Loading FAQ data...');
      
      // Test if translations work
      const testLabel = this.$t('faqSec.header.label');
      const testQuestion = this.$t('faqSec.questions.q1.question');
      
      console.log('Test label:', testLabel);
      console.log('Test question:', testQuestion);
      
      // Check if translations are working
      if (testQuestion && testQuestion !== 'faqSec.questions.q1.question') {
        // Translations are working, load data using faqSec keys
        this.faqData = [
          {
            question: this.$t('faqSec.questions.q1.question'),
            answer: this.$t('faqSec.questions.q1.answer')
          },
          {
            question: this.$t('faqSec.questions.q2.question'),
            answer: this.$t('faqSec.questions.q2.answer')
          },
          {
            question: this.$t('faqSec.questions.q3.question'),
            answer: this.$t('faqSec.questions.q3.answer')
          },
          {
            question: this.$t('faqSec.questions.q4.question'),
            answer: this.$t('faqSec.questions.q4.answer')
          },
          {
            question: this.$t('faqSec.questions.q5.question'),
            answer: this.$t('faqSec.questions.q5.answer')
          },
          {
            question: this.$t('faqSec.questions.q6.question'),
            answer: this.$t('faqSec.questions.q6.answer')
          }
        ];
        
        console.log('FAQ data loaded successfully:', this.faqData);
      } else {
        console.error('Translations not working. Using fallback data.');
        
        // Fallback data for testing
        this.faqData = [
          {
            question: "How Do I Register on Heng Ong Bet?",
            answer: "Simply click the 'Register' button, fill in your details, and verify your phone number to get started"
          },
          {
            question: "Is Heng Ong Bet Legal and Safe to Use?",
            answer: "Yes, Heng Ong Bet operates under proper licensing and uses advanced security measures to protect your data and transactions."
          },
          {
            question: "How can I Deposit or Withdraw money?",
            answer: "You can deposit and withdraw money through various secure payment methods including bank transfers, e-wallets, and cryptocurrency."
          },
          {
            question: "What games are available on Heng Ong Bet?",
            answer: "We offer a wide variety of games including live casino games, slot machines, sports betting, lottery games, and more."
          },
          {
            question: "Are there any Welcome Bonuses or Promotions?",
            answer: "Yes! We offer generous welcome bonuses for new players, as well as ongoing promotions, loyalty rewards, and special bonuses."
          },
          {
            question: "What should I do if I forget my login details?",
            answer: "If you forget your login details, simply click on the 'Forgot Password' link on the login page."
          }
        ];
      }
    },
    
    toggleItem(index) {
      this.openItems = {
        ...this.openItems,
        [index]: !this.openItems[index]
      };
    },

    goToFaqPage() {
    const currentLocale = this.$route.meta?.locale || 'en';
    const path = localePath('/faqs', currentLocale);
    this.$router.push(path);
  }
  },
  
  watch: {
    '$i18n.locale'() {
      console.log('Locale changed to:', this.$i18n.locale);
      this.loadFaqData();
    }
  },
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
  padding-bottom: 10px;
}

/* Global Typography Classes */
.header-label,
h2.header-label {
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

.trigger-text,
h3.trigger-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 1.125rem;
  padding-right: 1rem;
  line-height: 1.4;
  transition: color 0.2s ease;
  margin: 0;
  text-align: left;
}

.text-active,
h3.text-active {
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
  
  .trigger-text,
  h3.trigger-text {
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
  
  .trigger-text,
  h3.trigger-text {
    font-size: 0.95rem;
  }
  
  .content-body {
    padding: 0.875rem;
  }
  
  .content-text {
    font-size: 0.9rem;
    text-align: left;
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
  
  .header-label,
  h2.header-label {
    font-size: 16px;
    margin: 0;
  }

  .header-description {
    font-size: 10px;
  }
}
</style>