<template>
  <div class="faq-container">
    <!-- Header -->
    <div class="faq-header">
      <div class="main-title">
        <span class="highlight">{{ $t('faq.appName') }}</span> {{ $t('faq.title') }}
      </div>
            
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
            {{ $t('faq.search.button') }}
          </button>
        </div>
        <input 
          type="text"
          :placeholder="$t('faq.search.placeholder')"
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
        <div class="section-title">
          <span class="highlight">{{ $t('faq.sections.gettingStarted').split(' ')[0] }} </span>{{ $t('faq.sections.gettingStarted').split(' ').slice(1).join(' ') }}
        </div>
                
        <div 
          class="faq-item"
          :class="{ open: item.isOpen }"
          v-for="(item, index) in filteredGettingStartedFAQs"
          :key="`getting-${item.originalIndex}`"
          :ref="`getting-${item.originalIndex}`"
        >
          <div class="faq-question" @click="toggleFAQ('getting', item.originalIndex)">
            <span class="question-text" :class="{ 'highlighted': item.isOpen }">
              {{ $t(`faq.gettingStarted.${item.originalIndex}.question`) }}
            </span>
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
            <p>{{ $t(`faq.gettingStarted.${item.originalIndex}.answer`) }}</p>
          </div>
        </div>
      </div>

      <!-- Login & Account Security Section -->
      <div class="faq-section" v-if="filteredLoginSecurityFAQs.length > 0">
        <div class="section-title">
          <span class="highlight">{{ $t('faq.sections.loginSecurity').split(' ')[0] }} {{ $t('faq.sections.loginSecurity').split(' ')[1] }} {{ $t('faq.sections.loginSecurity').split(' ')[2] }} </span>{{ $t('faq.sections.loginSecurity').split(' ').slice(3).join(' ') }}
        </div>
                
        <div 
          class="faq-item"
          :class="{ open: item.isOpen }"
          v-for="(item, index) in filteredLoginSecurityFAQs"
          :key="`login-${item.originalIndex}`"
          :ref="`login-${item.originalIndex}`"
        >
          <div class="faq-question" @click="toggleFAQ('login', item.originalIndex)">
            <span class="question-text" :class="{ 'highlighted': item.isOpen }">
              {{ $t(`faq.loginSecurity.${item.originalIndex}.question`) }}
            </span>
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
            <p>{{ $t(`faq.loginSecurity.${item.originalIndex}.answer`) }}</p>
          </div>
        </div>
      </div>

      <!-- Bonuses & Promotions Section -->
      <div class="faq-section" v-if="filteredBonusPromotionsFAQs.length > 0">
        <div class="section-title">
          <span class="highlight">{{ $t('faq.sections.bonusPromotions').split(' ')[0] }} </span>{{ $t('faq.sections.bonusPromotions').split(' ').slice(1).join(' ') }}
        </div>
                
        <div 
          class="faq-item"
          :class="{ open: item.isOpen }"
          v-for="(item, index) in filteredBonusPromotionsFAQs"
          :key="`bonus-${item.originalIndex}`"
          :ref="`bonus-${item.originalIndex}`"
        >
          <div class="faq-question" @click="toggleFAQ('bonus', item.originalIndex)">
            <span class="question-text" :class="{ 'highlighted': item.isOpen }">
              {{ $t(`faq.bonusPromotions.${item.originalIndex}.question`) }}
            </span>
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
            <p>{{ $t(`faq.bonusPromotions.${item.originalIndex}.answer`) }}</p>
          </div>
        </div>
      </div>

      <!-- Final Note Section -->
      <div class="faq-section" v-if="!searchQuery">
        <h2 class="section-title">
          <span class="highlight">{{ $t('faq.sections.finalNote').split(' ')[0] }} </span>{{ $t('faq.sections.finalNote').split(' ').slice(1).join(' ') }}
        </h2>
        <div class="final-note-content">
          <p><strong>{{ $t('faq.finalNote.title') }}</strong></p>
          <p>{{ $t('faq.finalNote.content') }}</p>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-if="searchQuery && filteredGettingStartedFAQs.length === 0 && filteredLoginSecurityFAQs.length === 0 && filteredBonusPromotionsFAQs.length === 0" class="no-results-message">
        <p>{{ $t('faq.search.noResults', { query: searchQuery }) }}</p>
        <p>{{ $t('faq.search.tryDifferent') }}</p>
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
      // FAQ data structure with isOpen state
      gettingStartedFAQs: [
        { isOpen: false },
        { isOpen: false },
        { isOpen: false }
      ],
      loginSecurityFAQs: [
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false }
      ],
      bonusPromotionsFAQs: [
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false }
      ]
    }
  },
  computed: {
    // Get current locale for dynamic styling
    currentLocale() {
      return this.$i18n?.locale || this.$route?.meta?.locale || 'en'
    },
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
        .filter((item, index) => {
          const question = this.$t(`faq.gettingStarted.${index}.question`).toLowerCase()
          const answer = this.$t(`faq.gettingStarted.${index}.answer`).toLowerCase()
          return question.includes(query) || answer.includes(query)
        })
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
        .filter((item, index) => {
          const question = this.$t(`faq.loginSecurity.${index}.question`).toLowerCase()
          const answer = this.$t(`faq.loginSecurity.${index}.answer`).toLowerCase()
          return question.includes(query) || answer.includes(query)
        })
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
        .filter((item, index) => {
          const question = this.$t(`faq.bonusPromotions.${index}.question`).toLowerCase()
          const answer = this.$t(`faq.bonusPromotions.${index}.answer`).toLowerCase()
          return question.includes(query) || answer.includes(query)
        })
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
  justify-content: center;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  flex-shrink: 0; /* Prevent shrinking */
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #242424;
  z-index: 10;
}

.search-input {
  /* Dynamic width based on content and language */
  min-width: 100px;
  max-width: 180px;
  width: auto;
  padding: 12px 20px 12px 48px;
  background: linear-gradient(180deg, #F0AD3C 0%, #ED9326 100%);
  border: none;
  border-radius: 10px;
  color: #242424;
  font-size: 16px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-align: center;
  
  /* Language-specific adjustments */
  letter-spacing: 0.5px;
}

/* Chinese language specific styling */
.search-input:lang(zh),
.search-input:lang(zh-CN),
.search-input:lang(zh-TW) {
  font-size: 15px;
  letter-spacing: 1px;
  min-width: 90px;
  padding: 12px 24px 12px 48px;
}

/* Malay language specific styling */
.search-input:lang(ms) {
  font-size: 14px;
  min-width: 110px;
  padding: 12px 18px 12px 48px;
}

.search-input:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(240, 173, 60, 0.3);
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
  padding: 12px 15px;
  font-weight: 400;
  min-width: 0; /* Allow shrinking */
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
  letter-spacing: 0.4px;
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
  border: 2px solid #ffff;
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
  font-weight: 100;
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
  
  .search-container {
    padding: 8px;
    width: 96%;
  }
  
  .search-box {
    margin-right: 8px;
  }
  
  .search-input {
    padding: 12px 18px 12px 44px;
    font-size: 15px;
    min-width: 100px;
    max-width: 140px;
  }
  
  .search-input:lang(zh),
  .search-input:lang(zh-CN),
  .search-input:lang(zh-TW) {
    font-size: 14px;
    padding: 12px 20px 12px 44px;
    min-width: 85px;
    max-width: 120px;
  }
  
  .search-container-input {
    padding: 12px 15px;
    font-size: 15px;
  }
  
  .search-icon {
    left: 14px;
    width: 15px;
    height: 15px;
  }
  
  .question-text {
    font-size: 16px;
  }
  
  .faq-answer p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.4rem;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .final-note-content p {
    font-size: 16px;
  }
  
  .search-container {
    padding: 6px;
  }
  
  .search-box {
    margin-right: 6px;
  }
  
  .search-input {
    font-size: 14px;
    padding: 10px 16px 10px 40px;
    min-width: 85px;
    max-width: 120px;
  }
  
  .search-input:lang(zh),
  .search-input:lang(zh-CN),
  .search-input:lang(zh-TW) {
    font-size: 13px;
    padding: 10px 18px 10px 40px;
    min-width: 75px;
    max-width: 100px;
  }
  
  .search-container-input {
    font-size: 14px;
    padding: 10px 12px;
  }
  
  .search-icon {
    left: 12px;
    width: 14px;
    height: 14px;
  }
  
  .question-text {
    font-size: 15px;
  }

  .faq-answer {
    padding: 10px 10px;
  }
  
  .faq-answer p {
    font-size: 13px;
  }
}

/* Additional language-specific optimizations */
@media (max-width: 320px) {
  .search-input {
    font-size: 13px;
    padding: 8px 14px 8px 36px;
    min-width: 70px;
    max-width: 90px;
  }
  
  .search-input:lang(zh),
  .search-input:lang(zh-CN),
  .search-input:lang(zh-TW) {
    font-size: 12px;
    padding: 8px 16px 8px 36px;
    min-width: 65px;
    max-width: 80px;
  }
  
  .search-container-input {
    font-size: 13px;
    padding: 8px 10px;
  }
  
  .search-icon {
    left: 10px;
    width: 12px;
    height: 12px;
  }
}

/* High-DPI screen adjustments */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .search-input {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>