<template>
  <header class="header-container">
    <!-- Top Header -->
    <div class="top-header bg-gray-800 px-6 py-5">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Mobile: Hamburger Menu -->
        <button @click="toggleMobileMenu" class="mobile-hamburger">
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
        </button>
        
        <!-- Logo Section - Now clickable and links to homepage -->
        <router-link :to="getLocalePath('/')" class="logo-link">
          <div class="flex items-center space-x-2">
            <div class="logo-container">
              <img :src="logoImage" alt="HengOngBet Logo" class="logo-image" />
            </div>
          </div>
        </router-link>
        
        <!-- Right Side - Desktop: Login/Register, Mobile: Language -->
        <div class="auth-buttons flex items-center space-x-2">
          <!-- Desktop Login/Register -->
          <button @click="goToLogin" class="login-btn desktop-only">{{ $t('auth.login') }}</button>
          <button @click="goToRegister" class="register-btn desktop-only">{{ $t('auth.register') }}</button>
                              
          <!-- Mobile Language Selector -->
          <div class="mobile-language-selector">
            <button @click="toggleLanguageDropdown" class="mobile-language-btn">
              <img :src="selectedLanguage.flag" :alt="selectedLanguage.code" class="mobile-flag" />
            </button>
                                    
            <!-- Mobile Language Dropdown -->
            <div v-if="showLanguageDropdown" class="mobile-language-dropdown">
              <div
                v-for="language in availableLanguages"
                :key="language.code"
                @click.stop="selectLanguage(language)"
                class="mobile-language-item"
                :class="{ 'selected': language.code === selectedLanguage.code }"
              >
                <img :src="language.flag" :alt="language.code" class="dropdown-flag-mobile" />
                <span>{{ language.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Navigation Header - Desktop Only -->
    <div class="nav-header bg-gray-700 px-6 py-2 desktop-only">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <nav class="flex items-center space-x-8">
          <router-link :to="getLocalePath('/')" class="nav-item home-icon">
            <img :src="homeIcon" alt="Home" class="home-icon-image" />
          </router-link>
          <router-link :to="getLocalePath('/affiliate')" class="nav-item">{{ $t('nav.affiliate') }}</router-link>
          <router-link :to="getLocalePath('/promotion')" class="nav-item">{{ $t('nav.promotion') }}</router-link>
          <router-link :to="getLocalePath('/download')" class="nav-item">{{ $t('nav.download') }}</router-link>
          <router-link :to="getLocalePath('/games')" class="nav-item">{{ $t('nav.games') }}</router-link>
          <router-link :to="getLocalePath('/4d-results')" class="nav-item">{{ $t('nav.4d_results') }}</router-link>
          <router-link :to="getLocalePath('/faqs')" class="nav-item">{{ $t('nav.faq') }}</router-link>
                    
          <!-- Help Dropdown -->
          <div class="help-dropdown-container" @mouseenter="showHelpDropdown = true" @mouseleave="showHelpDropdown = false">
            <a href="#" class="nav-item help-item" @click.prevent>
              {{ $t('nav.help') }}
              <svg class="help-arrow" :class="{ 'help-arrow-rotated': showHelpDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
                        
            <!-- Help Dropdown Menu -->
            <div v-if="showHelpDropdown" class="help-dropdown-menu">
              <router-link :to="getLocalePath('/beginner-tutorial')" class="help-dropdown-item">
                <span>{{ $t('nav.tutorial') }}</span>
              </router-link>
              <router-link :to="getLocalePath('/topup-withdraw-tutorial')" class="help-dropdown-item">
                <span>{{ $t('nav.topup_tutorial') }}</span>
              </router-link>
            </div>
          </div>

          <router-link :to="getLocalePath('/blog')" class="nav-item">{{ $t('nav.blog') }}</router-link>
        </nav>
        
        <div class="header-right-section">
          <div class="date-time-display">{{ currentDateTime }}</div>
          <div class="separator-line">|</div>
                              
          <div class="language-selector-container">
            <div class="language-selector-button" @click="toggleLanguageDropdown">
              <img :src="selectedLanguage.flag" :alt="selectedLanguage.code" class="flag-image" />
              <span class="language-label">{{ selectedLanguage.name }}</span>
              <svg 
                class="dropdown-arrow"
                :class="{ 'arrow-rotated': showLanguageDropdown }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
                                          
              <div v-if="showLanguageDropdown" class="language-dropdown-menu">
                <div
                  v-for="language in availableLanguages"
                  :key="language.code"
                  @click.stop="selectLanguage(language)"
                  class="language-dropdown-item"
                  :class="{ 'selected-language': language.code === selectedLanguage.code }"
                >
                  <img :src="language.flag" :alt="language.code" class="dropdown-flag" />
                  <span class="dropdown-text">{{ language.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Mobile Header Component -->
    <MobileHeader 
      :show-mobile-menu="showMobileMenu"
      :current-locale="currentLocale"
      @close-mobile-menu="closeMobileMenu"
      @toggle-help-menu="onHelpMenuToggle"
    />
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { switchLocale, getCurrentLocale, localePath } from '@/router'
import logoImage from '@/assets/hengongbet.png'
import homeIcon from '@/assets/home_icon.svg'
import MobileHeader from './MobileHeader.vue'
import malaysiaFlag from '@/assets/malaysia-flag.svg'
import ukFlag from '@/assets/uk-flag.svg'
import chinaFlag from '@/assets/china-flag.svg'

export default {
  name: 'Header',
  components: {
    MobileHeader
  },
  emits: ['login', 'register', 'language-changed'],
  setup() {
    const { locale } = useI18n()
    const router = useRouter()
    const route = useRoute()
        
    return {
      locale,
      router,
      route,
      switchLocale,
      getCurrentLocale,
      localePath
    }
  },
  data() {
    return {
      logoImage,
      homeIcon,
      malaysiaFlag,
      ukFlag,
      chinaFlag,
      currentDateTime: '',
      showMobileMenu: false,
      showHelpDropdown: false,
      showLanguageDropdown: false,
      currentLocale: 'en', // Track current locale in component state
      selectedLanguage: {
        code: 'en',
        name: 'English',
        flag: ukFlag
      },
      availableLanguages: [
        {
          code: 'en',
          name: 'English',
          flag: ukFlag
        },
        {
          code: 'ms',
          name: 'Bahasa Malaysia',
          flag: malaysiaFlag
        },
        {
          code: 'zh',
          name: '中文',
          flag: chinaFlag
        }
      ]
    }
  },
  watch: {
    '$route.meta.locale': {
      handler(newLocale) {
        if (newLocale) {
          this.currentLocale = newLocale
          this.updateSelectedLanguage(newLocale)
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.updateDateTime()
    setInterval(this.updateDateTime, 1000)
    document.addEventListener('click', this.closeLanguageDropdown)
        
    // Initialize selected language based on current route
    const currentLocale = this.getCurrentLocale(this.$route)
    this.currentLocale = currentLocale
    this.updateSelectedLanguage(currentLocale)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeLanguageDropdown)
  },
  methods: {
    updateDateTime() {
      const now = new Date()
      const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kuala_Lumpur'
      }
      const formatted = now.toLocaleString('en-GB', options)
      this.currentDateTime = `${formatted} (GMT +8)`
    },
    updateSelectedLanguage(localeCode) {
      const language = this.availableLanguages.find(lang => lang.code === localeCode)
      if (language) {
        this.selectedLanguage = language
      }
    },
    // Custom method to get localized path using current locale
    getLocalePath(path) {
      if (this.currentLocale === 'en') {
        return path
      }
      return `/${this.currentLocale}${path}`
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
      if (this.showMobileMenu) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMobileMenu() {
      this.showMobileMenu = false
      document.body.style.overflow = ''
    },
    onHelpMenuToggle(isOpen) {
      // Handle help menu toggle from mobile component if needed
      // This can be used for additional logic when help menu is toggled
    },
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown
    },
    async selectLanguage(language) {
      // Update component state immediately
      this.currentLocale = language.code
      this.selectedLanguage = language
      this.showLanguageDropdown = false
      
      // Emit language change event
      this.$emit('language-changed', language)
      
      // Wait for next tick to ensure state is updated
      await this.$nextTick()
      
      // Switch locale and navigate
      this.switchLocale(this.router, language.code)
      
      // Close mobile menu after navigation
      setTimeout(() => {
        if (this.showMobileMenu) {
          this.closeMobileMenu()
        }
      }, 150)
    },
    goToRegister() {
  const locale = this.$i18n?.locale || 'en';

  let targetUrl = 'https://hengongbet.com/en-my?regRef=player';
  if (locale === 'zh') {
    targetUrl = 'https://hengongbet.com/zh-my?regRef=player';
  } else if (locale === 'ms') {
    targetUrl = 'https://hengongbet.com/ms-my?regRef=player';
  }

  // Create link with nofollow attributes (same tab)
  const link = document.createElement('a');
  link.href = targetUrl;
  link.rel = 'nofollow noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
},

goToLogin() {
  const locale = this.$i18n?.locale || 'en';

  let targetUrl = 'https://hengongbet.com/en-my';
  if (locale === 'zh') {
    targetUrl = 'https://hengongbet.com/zh-my';
  } else if (locale === 'ms') {
    targetUrl = 'https://hengongbet.com/ms-my';
  }

  // Create link with nofollow attributes (same tab)
  const link = document.createElement('a');
  link.href = targetUrl;
  link.rel = 'nofollow noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
},
    closeLanguageDropdown(event) {
      if (!event.target.closest('.language-selector-container') && !event.target.closest('.mobile-language-selector')) {
        this.showLanguageDropdown = false
      }
    }
  }
}
</script>

<style scoped>
/* Header Container */
.header-container {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.top-header {
  background-color: #242424;
}

.nav-header {
  background-color: #615F5C;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  height: 40px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
}

/* Mobile Hamburger */
.mobile-hamburger {
  display: none;
  flex-direction: column;
  gap: 3px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger-line {
  width: 20px;
  height: 3px;
  background-color: #F1AE3D;
  transition: all 0.3s ease;
}

/* Mobile Language Selector */
.mobile-language-selector {
  display: none;
  position: relative;
}

.mobile-language-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-flag {
  width: 24px;
  height: 24px;
  border-radius: 2px;
  object-fit: cover;
}

.mobile-language-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  min-width: 160px;
  overflow: hidden;
}

.mobile-language-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  color: #e2e8f0;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 13px;
}

.mobile-language-item:hover {
  background: #4a5568;
  color: #F1AE3D;
}

.mobile-language-item.selected {
  background: rgba(237, 137, 54, 0.1);
  color: #F1AE3D;
}

.dropdown-flag-mobile {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  object-fit: cover;
}

/* Desktop Help Dropdown */
.help-dropdown-container {
  position: relative;
}

.help-dropdown-container::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 4px;
  background: transparent;
  z-index: 999;
}

.help-dropdown-menu {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  background: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  min-width: 220px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.help-dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  color: #e2e8f0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.help-dropdown-item:hover {
  background: #4a5568;
  color: #F1AE3D;
}

/* Desktop styles */
.header-right-section {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #e2e8f0;
  font-weight: 500;
}

.date-time-display {
  color: #cbd5e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.3px;
}

.separator-line {
  color: #718096;
  font-weight: 300;
  margin: 0 4px;
}

.language-selector-container {
  position: relative;
}

.language-selector-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  user-select: none;
}

.language-selector-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(237, 137, 54, 0.3);
  transform: translateY(-1px);
}

.flag-image {
  width: 18px;
  height: 18px;
  border-radius: 2px;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.language-label {
  color: #e2e8f0;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.2px;
}

.dropdown-arrow {
  width: 14px;
  height: 14px;
  color: #a0aec0;
  transition: transform 0.2s ease;
}

.arrow-rotated {
  transform: rotate(180deg);
}

.language-dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  min-width: 160px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.language-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  color: #e2e8f0;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 13px;
  font-weight: 500;
}

.language-dropdown-item:hover {
  background: #4a5568;
  color: #F1AE3D;
}

.language-dropdown-item.selected-language {
  background: rgba(237, 137, 54, 0.1);
  color: #F1AE3D;
}

.dropdown-flag {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  object-fit: cover;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.dropdown-text {
  letter-spacing: 0.2px;
}

.login-btn {
  padding: 6px 14px;
  border: 1px solid #F1AE3D;
  color: #F1AE3D;
  background: transparent;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 100px;
}

.login-btn:hover {
  background: #F1AE3D;
  color: #1a202c;
  transform: translateY(-1px);
}

.register-btn {
  padding: 6px 16px;
  background: linear-gradient(#F2B240 0%, #ED9226 100%);
  color: #1a202c;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(237, 137, 54, 0.2);
  width: 100px;
}

.register-btn:hover {
  background: linear-gradient(135deg, #F2B240 0%, #ED9226 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(237, 137, 54, 0.3);
}

.nav-item {
  color: #e2e8f0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  margin-bottom: 3px;
}

.nav-item:hover {
  color: #F1AE3D;
}

.nav-item.router-link-active {
  color: #F1AE3D;
}

.nav-item.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -11px;     
  left: 50%;
  transform: translateX(-50%);
  width: 80%;     
  height: 3px;
  background: linear-gradient(90deg, #F2B240 0%, #ED9226 100%);
  border-radius: 2px;
}

.home-icon {
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
}

.home-icon-image {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
  transition: filter 0.2s ease;
}

.home-icon:hover .home-icon-image {
  filter: brightness(0) saturate(100%) invert(63%) sepia(78%) saturate(2834%) hue-rotate(14deg) brightness(95%) contrast(87%);
}

.home-icon.router-link-active .home-icon-image {
  filter: brightness(0) saturate(100%) invert(63%) sepia(78%) saturate(2834%) hue-rotate(14deg) brightness(95%) contrast(87%);
}

.home-icon.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;     
  height: 3px;
  background: linear-gradient(90deg, #F2B240 0%, #ED9226 100%);
  border-radius: 2px;
}

.help-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  margin-left: 6px;
  flex-shrink: 0;
}

.help-arrow-rotated {
  transform: rotate(180deg);
}

.help-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }
      
  .mobile-hamburger {
    display: flex;
  }
      
  .mobile-language-selector {
    display: block;
  }
      
  .logo-image {
    height: 32px;
    max-width: 150px;
  }
      
  .top-header {
    padding: 12px 16px;
  }
}

@media (max-width: 480px) {
  .logo-image {
    height: 28px;
    max-width: 120px;
  }

  .py-5 {
    padding: 0px 5px !important;
  }

  .bg-gray-800 {
  box-shadow: 0 2px 9.3px 0 rgba(0, 0, 0, 0.25);
}
}

/* Utility classes */
.max-w-7xl { max-width: 80rem; margin-left: auto; margin-right: auto; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-x-4 > * + * { margin-left: 1rem; }
.space-x-8 > * + * { margin-left: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
.bg-gray-700 { background-color: #615F5C; }
.bg-gray-800 { background-color: #27272A; }
</style>