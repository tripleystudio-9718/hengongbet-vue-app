<template>
  <div class="clean-faq-section">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Removed entire header section with titles and button -->

      <div class="faq-content-wrapper">
        <div class="faq-accordion-container">
          <div 
            v-for="(item, index) in faqData" 
            :key="index" 
            class="faq-accordion-item"
          >
            <button
              @click="toggleItem(index)"
              class="faq-accordion-trigger"
            >
              <span 
                class="faq-trigger-text"
                :class="{ 'faq-text-active': openItems[index] }"
              >
                {{ item.question }}
              </span>

              <div class="faq-trigger-icon-wrapper">
                <div class="faq-trigger-icon-circle">
                  <img 
                    v-if="openItems[index]" 
                    :src="closeIcon"
                    :alt="$t('faqSec.alt_text.close')"
                    class="faq-trigger-icon-image"
                  />
                  <img 
                    v-else 
                    :src="openIcon"
                    :alt="$t('faqSec.alt_text.open')"
                    class="faq-trigger-icon-image"
                  />
                </div>
              </div>
            </button>
            
            <transition name="faq-fade-slide">
              <div v-if="openItems[index]" class="faq-accordion-content">
                <div class="faq-content-body">
                  <p class="faq-content-text">{{ item.answer }}</p>
                </div>
              </div>
            </transition>
          </div>
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
  name: 'CleanFaqSection',
  data() {
    return {
      openIcon,
      closeIcon,
      openItems: { 0: true }, // First FAQ item open by default
      faqData: []
    }
  },
  created() {
    console.log('FAQ Component created');
    console.log('$i18n available:', !!this.$i18n);
    console.log('Current locale:', this.$i18n?.locale);
    
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
          },
          {
            question: this.$t('faqSec.questions.q7.question'),
            answer: this.$t('faqSec.questions.q7.answer')
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
          },
          {
            question: "Is there a mobile app for Heng Ong Bet?",
            answer: "Yes, we have a mobile app available for both iOS and Android devices."
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
      try {
        const currentLocale = this.$route.meta?.locale || this.$i18n?.locale || 'en';
        const path = localePath('/faqs', currentLocale);
        this.$router.push(path);
      } catch (error) {
        console.error('Error navigating to FAQ page:', error);
        // Fallback navigation
        this.$router.push('/faqs');
      }
    }
  },

  watch: {
    '$i18n.locale'() {
      console.log('Locale changed to:', this.$i18n.locale);
      this.loadFaqData();
    }
  }
}
</script>

<style scoped>
/* ===== CLEAN FAQ SECTION ===== */
.clean-faq-section {
  margin-top: 60px;
  padding: 0;
  color: white;
}

.faq-content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 10px;
}

/* Updated accordion styling to match second file's card design */
.faq-accordion-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.faq-accordion-item {
  background-color: #242424;
  border-radius: 0.5rem;
  overflow: hidden;
}

.faq-accordion-item:last-child {
  margin-bottom: 0;
}

.faq-accordion-trigger {
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

.faq-accordion-trigger:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.faq-accordion-trigger:focus {
  outline: none;
}

.faq-trigger-text {
  color: #ffffff;
  font-weight: 500;
  font-size: 1.125rem;
  padding-right: 1rem;
  line-height: 1.4;
  transition: color 0.2s ease;
  flex: 1;
}

.faq-text-active {
  color: #F2B240;
}

.faq-trigger-icon-wrapper {
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq-trigger-icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transition: transform 0.2s ease;
}

.faq-accordion-trigger:hover .faq-trigger-icon-circle {
  transform: scale(1.1);
}

.faq-trigger-icon-image {
  width: 25px;
  height: 25px;
  transition: transform 0.2s ease;
}

/* Updated content styling to match second file */
.faq-accordion-content {
  padding: 0 1.25rem 0.5rem 1.25rem;
}

.faq-content-body {
  border-radius: 0.5rem;
  padding: 1rem;
}

.faq-content-text {
  color: #D1D5DB;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

/* FAQ Transition animations */
.faq-fade-slide-enter-active {
  transition: all 0.3s ease-out;
}

.faq-fade-slide-leave-active {
  transition: all 0.3s ease-in;
}

.faq-fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.faq-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.faq-fade-slide-enter-to,
.faq-fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
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

/* Responsive Design */
@media (max-width: 768px) {
  .clean-faq-section {
    padding: 0;
  }
  
  .faq-accordion-trigger {
    padding: 1.25rem 1rem;
  }
  
  .faq-accordion-content {
    padding: 0 1rem 1.25rem 1rem;
  }
  
  .faq-trigger-text {
    font-size: 1rem;
    padding-right: 0.75rem;
  }
  
  .faq-trigger-icon-circle {
    width: 25px;
    height: 25px;
  }
  
  .faq-trigger-icon-image {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 640px) {
  .faq-accordion-trigger {
    padding: 1rem 0.875rem;
  }
  
  .faq-accordion-content {
    padding: 0 0.875rem 1rem 0.875rem;
  }
  
  .faq-trigger-text {
    font-size: 0.95rem;
  }
  
  .faq-content-body {
    padding: 0.875rem;
  }
  
  .faq-content-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .faq-accordion-trigger {
    padding: 0.5rem;
  }
  
  .faq-trigger-text {
    font-size: 0.9rem;
  }
  
  .faq-content-text {
    font-size: 0.85rem;
  }
  
  .faq-accordion-item {
    margin-bottom: 0.75rem;
  }
}

/* FAQ Focus accessibility */
.faq-accordion-trigger:focus-visible {
  outline: 2px solid #F2B240;
  outline-offset: 2px;
  border-radius: 4px;
}

/* FAQ Loading state */
.faq-accordion-container:empty::after {
  content: 'Loading FAQ...';
  display: block;
  text-align: center;
  color: #CBD5E1;
  padding: 2rem;
  font-style: italic;
}

/* Touch-friendly improvements */
@media (hover: none) and (pointer: coarse) {
  .faq-accordion-trigger:active .faq-trigger-text {
    color: #F2B240;
  }
}
</style>
