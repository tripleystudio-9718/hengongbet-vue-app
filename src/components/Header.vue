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
        <!-- Logo Section -->
        <div class="flex items-center space-x-2">
          <div class="logo-container">
            <img :src="logoImage" alt="HengOngBet Logo" class="logo-image" />
          </div>
        </div>
        <!-- Right Side - Desktop: Login/Register, Mobile: Language -->
        <div class="auth-buttons flex items-center space-x-2">
          <!-- Desktop Login/Register -->
          <button @click="goToLogin" class="login-btn desktop-only">Login</button>
          <button @click="goToRegister" class="register-btn desktop-only">Register</button>
                    
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
          <router-link to="/" class="nav-item home-icon">
            <img :src="homeIcon" alt="Home" class="home-icon-image" />
          </router-link>
          <router-link to="/affiliate" class="nav-item">Affiliate</router-link>
          <router-link to="/promotion" class="nav-item">Promotion</router-link>
          <router-link to="/download" class="nav-item">Download</router-link>
          <router-link to="/games" class="nav-item">Games</router-link>
          <router-link to="/4d-results" class="nav-item">4D Results</router-link>
          <router-link to="/faqs" class="nav-item">FAQS</router-link>
          
          <!-- Help Dropdown -->
          <div class="help-dropdown-container" @mouseenter="showHelpDropdown = true" @mouseleave="showHelpDropdown = false">
            <router-link to="" class="nav-item help-item">
              Help
              <svg class="help-arrow" :class="{ 'help-arrow-rotated': showHelpDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </router-link>
            
            <!-- Help Dropdown Menu -->
            <div v-if="showHelpDropdown" class="help-dropdown-menu">
              <router-link to="tutorial-guide" class="help-dropdown-item">
                <span>Tutorial Guide</span>
              </router-link>
              <router-link to="/topup-withdraw-tutorial" class="help-dropdown-item">
                <span>Topup & Withdraw Tutorial</span>
              </router-link>
            </div>
          </div>
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
    <!-- Mobile Menu Overlay -->
    <div v-if="showMobileMenu" class="mobile-overlay" @click="closeMobileMenu"></div>
    <!-- Mobile Menu Sidebar -->
    <div class="mobile-sidebar" :class="{ 'mobile-sidebar-open': showMobileMenu }">
      <!-- Mobile Menu Header -->
      <div class="mobile-menu-header">
        <img :src="logoImage" alt="HengOngBet Logo" class="mobile-logo" />
      </div>
      <!-- Mobile Menu Items -->
      <nav class="mobile-nav">
        <!-- Home -->
        <router-link to="/" @click="closeMobileMenu" class="mobile-nav-item home-active">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span>Home</span>
        </router-link>
        <!-- Agent -->
        <router-link to="/agent" @click="closeMobileMenu" class="mobile-nav-item">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
          <span>Agent</span>
        </router-link>
        <!-- Download -->
        <router-link to="/download" @click="closeMobileMenu" class="mobile-nav-item">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
          <span>Download</span>
        </router-link>
        <!-- Promotion -->
        <router-link to="/promotion" @click="closeMobileMenu" class="mobile-nav-item">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
          </svg>
          <span>Promotion</span>
        </router-link>
        <!-- Game -->
        <div class="mobile-game-section">
          <button @click="toggleGameMenu" class="mobile-nav-item game-item" :class="{ 'game-active': showGameMenu }">
            <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path>
            </svg>
            <span>Game</span>
            <svg class="game-arrow" :class="{ 'game-arrow-rotated': showGameMenu }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Game Submenu -->
          <div v-if="showGameMenu" class="game-submenu">
            <router-link to="/games/slot" @click="closeMobileMenu" class="game-sub-item">
              <span>Slot</span>
              <svg class="chevron-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </router-link>
            <router-link to="/games/casino" @click="closeMobileMenu" class="game-sub-item">
              <span>Casino</span>
              <svg class="chevron-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </router-link>
            <router-link to="/games/sports" @click="closeMobileMenu" class="game-sub-item">
              <span>Sports</span>
              <svg class="chevron-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </router-link>
            <router-link to="/games/lottery" @click="closeMobileMenu" class="game-sub-item">
              <span>Lottery</span>
              <svg class="chevron-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </router-link>
          </div>
        </div>
        <!-- FAQ -->
        <router-link to="/faq" @click="closeMobileMenu" class="mobile-nav-item">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
          </svg>
          <span>FAQ</span>
        </router-link>
        <!-- Help with Mobile Dropdown -->
        <div class="mobile-help-section">
          <button @click="toggleHelpMenu" class="mobile-nav-item help-item" :class="{ 'help-active': showHelpMenu }">
            <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-1.106-1.106A6.002 6.002 0 004 10c0 .898.241 1.738.668 2.566l1.49-1.449zm4.259-5.644l-1.227-1.227A5.989 5.989 0 0110 4c.898 0 1.738.241 2.566.668l-1.449 1.49a4.01 4.01 0 00-2.08-.041zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9z" clip-rule="evenodd"></path>
            </svg>
            <span>Help</span>
            <svg class="help-arrow" :class="{ 'help-arrow-rotated': showHelpMenu }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Help Submenu -->
          <div v-if="showHelpMenu" class="help-submenu">
            <router-link to="/help/tutorial-guide" @click="closeMobileMenu" class="help-sub-item">
              <span>Tutorial Guide</span>
              <svg class="chevron-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </router-link>
            <router-link to="/help/topup-withdraw" @click="closeMobileMenu" class="help-sub-item">
              <span>Topup & Withdraw Tutorial</span>
              <svg class="chevron-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import logoImage from '@/assets/hengongbet.png'
import homeIcon from '@/assets/home_icon.svg'

export default {
  name: 'Header',
  emits: ['login', 'register', 'language-changed'],
  data() {
    return {
      logoImage,
      homeIcon,
      currentDateTime: '',
      showMobileMenu: false,
      showGameMenu: false,
      showHelpMenu: false,
      showHelpDropdown: false,
      showLanguageDropdown: false,
      selectedLanguage: {
        code: 'EN',
        name: 'English',
        flag: 'https://flagcdn.com/w20/gb.png'
      },
      availableLanguages: [
        {
          code: 'EN',
          name: 'English',
          flag: 'https://flagcdn.com/w20/gb.png'
        },
        {
          code: 'MY',
          name: 'Bahasa Malaysia',
          flag: 'https://flagcdn.com/w20/my.png'
        },
        {
          code: 'ZH',
          name: '中文',
          flag: 'https://flagcdn.com/w20/cn.png'
        },
        {
          code: 'TH',
          name: 'ไทย',
          flag: 'https://flagcdn.com/w20/th.png'
        }
      ]
    }
  },
  mounted() {
    this.updateDateTime()
    setInterval(this.updateDateTime, 1000)
    document.addEventListener('click', this.closeLanguageDropdown)
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
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
      if (this.showMobileMenu) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
        this.showGameMenu = false
        this.showHelpMenu = false
      }
    },
    closeMobileMenu() {
      this.showMobileMenu = false
      this.showGameMenu = false
      this.showHelpMenu = false
      document.body.style.overflow = ''
    },
    toggleGameMenu() {
      this.showGameMenu = !this.showGameMenu
    },
    toggleHelpMenu() {
      this.showHelpMenu = !this.showHelpMenu
    },
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown
    },
    selectLanguage(language) {
      this.selectedLanguage = language
      this.showLanguageDropdown = false
      this.$emit('language-changed', language)
    },
    goToRegister() {
      this.$router.push('/register')
    },
    goToLogin() {
      this.$router.push('/login')
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
.header-container {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.top-header {
  background-color: #242424;
  border-bottom: 1px solid #4a5568;
}

.nav-header {
  background-color: #615F5C;
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
  height: 16px;
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
  height: 12px;
  border-radius: 2px;
  object-fit: cover;
}

/* Mobile Menu Overlay */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Mobile Sidebar */
.mobile-sidebar {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: auto;
  max-height: 85vh;
  background: #2d3748;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  border-radius: 0 0 16px 0;
}

.mobile-sidebar-open {
  transform: translateX(0);
}

.mobile-menu-header {
  padding: 24px;
  border-bottom: 1px solid #4a5568;
}

.mobile-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.mobile-nav {
  padding: 16px 0;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  color: #F1AE3D;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.mobile-nav-item:hover {
  background: rgba(113, 113, 113, 0.1);
}

.mobile-nav-item.home-active {
  background: #F1AE3D;
  color: #000;
  border-radius: 25px;
  margin: 0 16px;
  width: auto;
}

.mobile-nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* Game Section */
.mobile-game-section {
  position: relative;
}

.game-item {
  justify-content: space-between;
}

.game-active {
  background: #F1AE3D;
  color: #000;
  border-radius: 25px;
  margin: 0 16px;
  width: auto;
}

.game-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  margin-left: auto;
}

.game-arrow-rotated {
  transform: rotate(180deg);
}

.game-submenu {
  background: rgba(0, 0, 0, 0.2);
  margin: 8px 16px;
  border-radius: 8px;
  overflow: hidden;
}

.game-sub-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: #cbd5e0;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.game-sub-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #F1AE3D;
}

.chevron-right {
  width: 14px;
  height: 14px;
}

/* Help Section - Mobile */
.mobile-help-section {
  position: relative;
}

.help-item {
  justify-content: center;
  align-items: center;
}

.help-active {
  background: #F1AE3D;
  color: #000;
  border-radius: 25px;
  margin: 0 16px;
  width: auto;
}

.help-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  margin-left: auto;
}

.help-arrow-rotated {
  transform: rotate(180deg);
}

.help-submenu {
  background: rgba(0, 0, 0, 0.2);
  margin: 8px 16px;
  border-radius: 8px;
  overflow: hidden;
}

.help-sub-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: #cbd5e0;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.help-sub-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #F1AE3D;
}

/* Desktop Help Dropdown */
.help-dropdown-container {
  position: relative;
}

.help-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
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

.help-dropdown-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Desktop styles - keep original */
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
  height: 13px;
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
  height: 12px;
  border-radius: 2px;
  object-fit: cover;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.dropdown-text {
  letter-spacing: 0.2px;
}

.login-btn {
  padding: 6px 16px;
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
    
  .mobile-overlay {
    display: block;
  }
    
  .mobile-sidebar {
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
  .mobile-sidebar {
    width: 260px;
  }
    
  .logo-image {
    height: 28px;
    max-width: 120px;
  }
    
  .mobile-nav-item {
    padding: 14px 20px;
    font-size: 15px;
  }
    
  .mobile-nav-icon {
    width: 18px;
    height: 18px;
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
.bg-gray-700 { background-color: #374151; }
.bg-gray-800 { background-color: #1f2937; }
</style>
