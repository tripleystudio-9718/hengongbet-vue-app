<template>
  <header class="header-container">
    <!-- Top Header -->
    <div class="top-header bg-gray-800 px-6 py-5">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo Section -->
        <div class="flex items-center space-x-2">
          <!-- Logo Image using imported asset -->
          <div class="logo-container">
            <img :src="logoImage" alt="HengOngBet Logo" class="logo-image" />
          </div>
        </div>
        <!-- Right Side - Login/Register -->
        <div class="auth-buttons flex items-center space-x-2">
          <button 
            @click="$emit('login')"
            class="login-btn"
          >
            Login
          </button>
           <button @click="goToRegister" class="register-btn">
            Register
          </button>
        </div>
      </div>
    </div>
    <!-- Navigation Header -->
    <div class="nav-header bg-gray-700 px-6 py-2">
      <div class="max-w-7xl mx-auto flex items-center justify-between">

        <nav class="flex items-center space-x-8">

          <router-link to="/" class="nav-item home-icon">
            <img :src="homeIcon" alt="Home" class="home-icon-image" />
          </router-link>
          <!-- Navigation Links -->
          <router-link to="/affiliate" class="nav-item">Affiliate</router-link>
          <router-link to="/promotion" class="nav-item">Promotion</router-link>
          <router-link to="/download" class="nav-item">Download</router-link>
          <router-link to="/games" class="nav-item">Games</router-link>
          <router-link to="/4d-results" class="nav-item">4D Results</router-link>
          <router-link to="/faqs" class="nav-item">FAQS</router-link>
          <router-link to="/help" class="nav-item">Help</router-link>
        </nav>
        <!-- Right Side - Time and Language -->
        <div class="header-right-section">
          <!-- Date and Time -->
          <div class="date-time-display">
            {{ currentDateTime }}
          </div>
          
          <!-- Separator -->
          <div class="separator-line">|</div>
          
          <!-- Language Selector -->
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
              
              <!-- Language Dropdown -->
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

    closeLanguageDropdown(event) {
      if (!event.target.closest('.language-selector-container')) {
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

/* Language Selector - Redesigned */
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

/* Language Dropdown - Enhanced */
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

/* Auth Buttons */
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

/* Navigation Items with Active Bottom Border */
.nav-item {
  color: #e2e8f0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  /* Add space for the bottom border */
  margin-bottom: 3px;
}

.nav-item:hover {
  color: #F1AE3D;
}

/* Active state with bottom border */
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
  animation: borderSlideIn 0.3s ease-out;
}

/* Home icon specific styling */
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

/* Responsive Design */
@media (max-width: 768px) {
  .top-header .flex {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .nav-header .flex {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .nav-header nav {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .nav-item {
    font-size: 0.75rem;
    padding: 6px 8px;
  }
  
  .nav-item.router-link-active::after,
  .home-icon.router-link-active::after {
    bottom: -8px;
    height: 2px;
  }
  
  .logo-image {
    height: 32px;
  }
  
  .header-right-section {
    font-size: 11px;
    gap: 8px;
  }
  
  .language-selector-button {
    padding: 4px 8px;
  }
  
  .flag-image {
    width: 16px;
    height: 11px;
  }
  
  .language-label {
    font-size: 11px;
  }
  
  .auth-buttons {
    gap: 0.5rem;
  }
  
  .login-btn, .register-btn {
    padding: 4px 12px;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .top-header, .nav-header {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .nav-header .flex {
    align-items: stretch;
  }
  
  .nav-header nav {
    justify-content: space-between;
    width: 100%;
  }
  
  .nav-item {
    font-size: 0.7rem;
    padding: 4px 6px;
  }
  
  .nav-header .flex > div:last-child {
    justify-content: center;
    width: 100%;
  }
  
  .header-right-section {
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  
  .separator-line {
    display: none;
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