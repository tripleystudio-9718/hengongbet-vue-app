<template>
  <div class="faq-container">
    <!-- Header -->
    <div class="faq-header">
      <h1 class="main-title">
        <span class="highlight">Heng Ong Bet</span> Frequently Asked Question (FAQ)
      </h1>
      
      <!-- Search Bar -->
      <div class="search-container">
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <button 
            class="search-input"
            @click="focusSearchInput"
          >
            Search
          </button>
        </div>
        <input 
          type="text" 
          placeholder="Type your search keyword here..." 
          v-model="searchQuery"
          class="search-container-input"
          ref="searchInput"
        />
      </div>
    </div>

    <!-- FAQ Sections -->
    <div class="faq-content">
      <!-- Getting Started Section -->
      <div class="faq-section" v-if="filteredGettingStartedFAQs.length > 0">
        <h2 class="section-title"><span class="highlight">Getting </span>Started</h2>
        
        <div 
          class="faq-item"
          :class="{ open: item.isOpen }"
          v-for="(item, index) in filteredGettingStartedFAQs"
          :key="`getting-${item.originalIndex}`"
          :ref="`getting-${item.originalIndex}`"
        >
          <div class="faq-question" @click="toggleFAQ('getting', item.originalIndex)">
            <span class="question-text" :class="{ 'highlighted': item.isOpen }">{{ item.question }}</span>
            <button class="toggle-btn">
              <svg v-if="item.isOpen" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div v-if="item.isOpen" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Login & Account Security Section -->
      <div class="faq-section" v-if="filteredLoginSecurityFAQs.length > 0">
        <h2 class="section-title"><span class="highlight">Login & Account </span>Security</h2>
        
        <div 
          class="faq-item"
          :class="{ open: item.isOpen }"
          v-for="(item, index) in filteredLoginSecurityFAQs"
          :key="`login-${item.originalIndex}`"
          :ref="`login-${item.originalIndex}`"
        >
          <div class="faq-question" @click="toggleFAQ('login', item.originalIndex)">
            <span class="question-text" :class="{ 'highlighted': item.isOpen }">{{ item.question }}</span>
            <button class="toggle-btn">
              <svg v-if="item.isOpen" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div v-if="item.isOpen" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Bonuses & Promotions Section -->
      <div class="faq-section" v-if="filteredBonusPromotionsFAQs.length > 0">
        <h2 class="section-title"><span class="highlight">Bonuses & </span>Promotions</h2>
        
        <div 
          class="faq-item"
          :class="{ open: item.isOpen }"
          v-for="(item, index) in filteredBonusPromotionsFAQs"
          :key="`bonus-${item.originalIndex}`"
          :ref="`bonus-${item.originalIndex}`"
        >
          <div class="faq-question" @click="toggleFAQ('bonus', item.originalIndex)">
            <span class="question-text" :class="{ 'highlighted': item.isOpen }">{{ item.question }}</span>
            <button class="toggle-btn">
              <svg v-if="item.isOpen" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div v-if="item.isOpen" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Final Note Section -->
      <div class="faq-section" v-if="!searchQuery">
        <h2 class="section-title"><span class="highlight">Final </span>Note</h2>
        <div class="final-note-content">
          <p><strong>Still have questions?</strong></p>
          <p>Visit our Help Center or speak with a support agent anytime. HengOngBet is committed to providing safe, transparent, and rewarding online gaming for all players.</p>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-if="searchQuery && filteredGettingStartedFAQs.length === 0 && filteredLoginSecurityFAQs.length === 0 && filteredBonusPromotionsFAQs.length === 0" class="no-results-message">
        <p>No FAQ questions found for "{{ searchQuery }}"</p>
        <p>Try searching with different keywords or browse all questions above.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQPage',
  data() {
    return {
      searchQuery: '',
      gettingStartedFAQs: [
        {
          question: 'Is HengOngBet legal in Malaysia and Singapore?',
          answer: 'While online betting regulations vary, HengOngBet operates under international licensing and provides secure access to entertainment for users in both countries. It is your responsibility to ensure you are of legal age and that online betting is allowed in your region.',
          isOpen: false
        },
        {
          question: 'How do I create an account on HengOngBet?',
          answer: 'Visit https://hengongbet88.net, click "Register," fill in your mobile number, username, password, and verification code. Make sure to enter a valid referral code to claim your welcome bonus.',
          isOpen: false
        },
        {
          question: 'Can I register using someone else\'s phone number?',
          answer: 'No. You must use your own mobile number to complete SMS verification and ensure your account security.',
          isOpen: false
        }
      ],
      loginSecurityFAQs: [
        {
          question: 'I didn\'t receive my SMS verification code. What should I do?',
          answer: 'Check your phone signal, make sure you entered the correct number, and try resending the code. If the issue persists, contact live support.',
          isOpen: false
        },
        {
          question: 'I forgot my password. How can I reset it?',
          answer: 'Click the "Forgot Password" link on the login page and follow the instructions to reset via your registered phone number.',
          isOpen: false
        },
        {
          question: 'Can I have more than one account?',
          answer: 'No. Multiple accounts by the same user are not allowed and may result in all related accounts being suspended.',
          isOpen: false
        },
        {
          question: 'What is the minimum deposit on HengOngBet?',
          answer: 'The minimum deposit varies depending on the payment method, but it typically starts at RM30.',
          isOpen: false
        },
        {
          question: 'How do I deposit funds?',
          answer: 'Log in to your account, go to "Deposit," select a payment method (e.g. FPX, DuitNow, bank transfer), and follow the instructions.',
          isOpen: false
        },
        {
          question: 'How fast are withdrawal processed?',
          answer: 'Most withdrawals are processed within 5-15 minutes during operational hours. Delays may occur during high traffic.',
          isOpen: false
        },
        {
          question: 'Can I withdraw the RM10 Welcome Bonus directly?',
          answer: 'No. The bonus must be used to place bets. Winnings from the bonus can be withdrawn once wagering requirements are met.',
          isOpen: false
        },
        {
          question: 'Is there a mobile app for HengOngBet?',
          answer: 'Yes. Android users can download the APK from the official website. iOS users can install a web app shortcut through Safari.',
          isOpen: false
        },
        {
          question: 'Is the HengOngBet app safe to use?',
          answer: 'Yes. Always download the app from the official website to avoid third-party clones. The app uses secure encryption and follows all data protection standards.',
          isOpen: false
        }
      ],
      bonusPromotionsFAQs: [
        {
          question: 'How do I claim the RM10 welcome bonus?',
          answer: 'Register a new account using your real mobile number and enter a valid referral code. The RM10 bonus will be credited after successful verification.',
          isOpen: false
        },
        {
          question: 'Are there daily bonuses or reload promotions?',
          answer: 'Yes. Visit the Promotions Page regularly to see all active offers, including daily reload, cashback, and VIP rewards.',
          isOpen: false
        },
        {
          question: 'Do bonuses have wagering requirements?',
          answer: 'Yes. All bonuses come with specific terms. Be sure to read the conditions before activating any offer.',
          isOpen: false
        },
        {
          question: 'The website won\'t load on my phone. What should I do?',
          answer: 'Try clearing your browser cache, switch to a different browser, or use the app version for better performance.',
          isOpen: false
        },
        {
          question: 'A game froze or crashed during play. Will I lose my bet?',
          answer: 'Your bet result is still recorded by the game provider. You can re-enter the game or contact support to verify the outcome.',
          isOpen: false
        },
        {
          question: 'How do I contact customer support?',
          answer: 'Yes. Our live agents are trained to assist you in English, Chinese, and Malay.',
          isOpen: false
        },
        {
          question: 'Can I speak to a real person?',
          answer: 'Live chat support is available 24/7 through the website or mobile app.',
          isOpen: false
        },
        {
          question: 'Where can I get updates about new features or events?',
          answer: 'Follow our official Telegram channel or check the Blog section for announcements.',
          isOpen: false
        }
      ]
    }
  },
  computed: {
    filteredGettingStartedFAQs() {
      if (!this.searchQuery) {
        return this.gettingStartedFAQs.map((item, index) => ({
          ...item,
          originalIndex: index
        }))
      }
      
      const query = this.searchQuery.toLowerCase()
      return this.gettingStartedFAQs
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter(item => 
          item.question.toLowerCase().includes(query) || 
          item.answer.toLowerCase().includes(query)
        )
    },
    filteredLoginSecurityFAQs() {
      if (!this.searchQuery) {
        return this.loginSecurityFAQs.map((item, index) => ({
          ...item,
          originalIndex: index
        }))
      }
      
      const query = this.searchQuery.toLowerCase()
      return this.loginSecurityFAQs
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter(item => 
          item.question.toLowerCase().includes(query) || 
          item.answer.toLowerCase().includes(query)
        )
    },
    filteredBonusPromotionsFAQs() {
      if (!this.searchQuery) {
        return this.bonusPromotionsFAQs.map((item, index) => ({
          ...item,
          originalIndex: index
        }))
      }
      
      const query = this.searchQuery.toLowerCase()
      return this.bonusPromotionsFAQs
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter(item => 
          item.question.toLowerCase().includes(query) || 
          item.answer.toLowerCase().includes(query)
        )
    }
  },
  methods: {
    toggleFAQ(section, index) {
      if (section === 'getting') {
        this.gettingStartedFAQs[index].isOpen = !this.gettingStartedFAQs[index].isOpen;
      } else if (section === 'login') {
        this.loginSecurityFAQs[index].isOpen = !this.loginSecurityFAQs[index].isOpen;
      } else if (section === 'bonus') {
        this.bonusPromotionsFAQs[index].isOpen = !this.bonusPromotionsFAQs[index].isOpen;
      }
    },
    focusSearchInput() {
      this.$refs.searchInput.focus();
    }
  }
}
</script>

<style scoped>
.faq-container {
  background: #2a2a2a;
  min-height: 100vh;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #ffffff;
}

.faq-header {
  text-align: center;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.main-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.3;
}

.highlight {
  color: #F2B240;
}

.search-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  background-color: #242424;
  padding: 6px;
  border-radius: 10px;
  position: relative;
}

.search-box {
  position: relative;
  width: 115px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
}

.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #242424;
  z-index: 10;
}

.search-input {
  width: 50%;
  padding: 10px 70px 10px 52px;
  background: linear-gradient(180deg, #F0AD3C 0%, #ED9326 100%);
  border: none;
  border-radius: 10px;
  color: #242424;
  font-size: 18px;
  outline: none;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.search-input:hover {
  transform: translateY(-1px);
}

.search-input:active {
  transform: scale(0.98);
}

.search-container-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 15px;
  font-weight: 400;
}

.search-container-input::placeholder {
  color: #888;
  opacity: 1;
}

.faq-content {
  max-width: 800px;
  margin: 0 auto;
}

.faq-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 26px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: 0.4px;;
}

.faq-item {
  margin-bottom: 15px;
}

.faq-item.active {
  background-color: #242424 !important;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.faq-question:hover {
  border-radius: 4px;
}

.question-text {
  font-size: 18px;
  color: #ffffff;
  flex: 1;
  margin-right: 15px;
  line-height: 1.4;
}

.question-text.highlighted {
  color: #EFA939;
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.icon {
  width: 20px;
  height: 20px;
  color: #ffffff;
  border:2px solid #ffff;
  border-radius: 50px;
}

.faq-answer {
  padding: 0 20px 20px 20px;
}

.faq-answer p {
  font-size: 14px;
  color: #D5D3CF;
  line-height: 1.5;
  margin: 0;
}

.final-note-content p {
  font-size: 18px;
  color: #cccccc;
  line-height: 1.5;
  margin-bottom: 10px;
  font-weight:100;
}

.final-note-content strong {
  color: #ffffff;
}

.faq-item.open {
  background-color: #242424;
  border-radius: 8px;
  padding: 0 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.highlight{
    color: #F1AF3E;
}

.no-results-message {
  text-align: center;
  padding: 40px 20px;
  color: #888;
}

.no-results-message p {
  font-size: 16px;
  margin-bottom: 10px;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .faq-container {
    padding: 20px 15px;
  }

  .main-title {
    font-size: 1.5rem;
  }

  .search-box {
    width: 150px;
  }

  .question-text {
    font-size: 13px;
  }

  .faq-answer p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 28px;
  }

  .section-title {
    font-size: 16px;
  }

  .final-note-content p{
    font-size: 10px;
  }

  .search-box {
    width: 120px;
  }

  .search-container-input {
    font-size: 12px;
  }

  .search-container {
    padding: 0;
  }
}
</style>
