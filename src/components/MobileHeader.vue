<template>
  <div class="mobile-header-container">
    <!-- Mobile Menu Overlay -->
    <div v-if="showMobileMenu" class="mobile-overlay" @click="closeMobileMenu"></div>
    
    <!-- Mobile Menu Sidebar -->
    <div class="mobile-sidebar" :class="{ 'mobile-sidebar-open': showMobileMenu }">
      <!-- Mobile Menu Header -->
      <div class="mobile-menu-header">
        <router-link :to="getLocalePath('/')" @click="closeMobileMenu">
          <img :src="logoImage" alt="HengOngBet Logo" class="mobile-logo" />
        </router-link>
      </div>
      
      <!-- Mobile Menu Items -->
      <nav class="mobile-nav">
        <!-- Home -->
        <router-link :to="getLocalePath('/')" @click="closeMobileMenu" class="mobile-nav-item" :class="{ 'mobile-nav-active': isCurrentRoute('/') }">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span>{{ $t('nav.home') }}</span>
        </router-link>
        
        <!-- Agent -->
        <router-link :to="getLocalePath('/affiliate')" @click="closeMobileMenu" class="mobile-nav-item" :class="{ 'mobile-nav-active': isCurrentRoute('/affiliate') }">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
          <span>{{ $t('nav.affiliate') }}</span>
        </router-link>
        
        <!-- Download -->
        <router-link :to="getLocalePath('/download')" @click="closeMobileMenu" class="mobile-nav-item" :class="{ 'mobile-nav-active': isCurrentRoute('/download') }">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
          <span>{{ $t('nav.download') }}</span>
        </router-link>
        
        <!-- Promotion -->
        <router-link :to="getLocalePath('/promotion')" @click="closeMobileMenu" class="mobile-nav-item" :class="{ 'mobile-nav-active': isCurrentRoute('/promotion') }">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
          </svg>
          <span>{{ $t('nav.promotion') }}</span>
        </router-link>
        
        <!-- Game -->
        <router-link :to="getLocalePath('/games')" @click="closeMobileMenu" class="mobile-nav-item" :class="{ 'mobile-nav-active': isCurrentRoute('/games') }">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path>
          </svg>
          <span>{{ $t('nav.games') }}</span>
        </router-link>
        
        <!-- 4D Results -->
        <router-link :to="getLocalePath('/4d-results')" @click="closeMobileMenu" class="mobile-nav-item" :class="{ 'mobile-nav-active': isCurrentRoute('/4d-results') }">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
          <span>{{ $t('nav.4d_results') }}</span>
        </router-link>
        
        <!-- FAQ -->
        <router-link :to="getLocalePath('/faqs')" @click="closeMobileMenu" class="mobile-nav-item" :class="{ 'mobile-nav-active': isCurrentRoute('/faqs') }">
          <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
          </svg>
          <span>{{ $t('nav.faq') }}</span>
        </router-link>
        
        <!-- Help with Mobile Dropdown -->
        <div class="mobile-help-section">
          <button @click="toggleHelpMenu" class="mobile-nav-item help-item" :class="{ 'mobile-nav-active': isHelpPageActive() }">
            <svg class="mobile-nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-1.106-1.106A6.002 6.002 0 004 10c0 .898.241 1.738.668 2.566l1.49-1.449zm4.259-5.644l-1.227-1.227A5.989 5.989 0 0110 4c.898 0 1.738.241 2.566.668l-1.449 1.49a4.01 4.01 0 00-2.08-.041zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9z" clip-rule="evenodd"></path>
            </svg>
            <span>{{ $t('nav.help') }}</span>
            <svg class="help-arrow" :class="{ 'help-arrow-rotated': showHelpMenu }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <!-- Help Submenu -->
          <div v-if="showHelpMenu" class="help-submenu">
            <router-link :to="getLocalePath('/beginner-tutorial')" @click="closeMobileMenu" class="help-sub-item" :class="{ 'help-sub-active': isCurrentRoute('/beginner-tutorial') }">
              <span>{{ $t('nav.tutorial') }}</span>
              <svg class="chevron-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </router-link>
            <router-link :to="getLocalePath('/topup-withdraw-tutorial')" @click="closeMobileMenu" class="help-sub-item" :class="{ 'help-sub-active': isCurrentRoute('/topup-withdraw-tutorial') }">
              <span>{{ $t('nav.topup_tutorial') }}</span>
              <svg class="chevron-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { getCurrentLocale } from '@/router'
import logoImage from '@/assets/hengongbet.png'

export default {
  name: 'MobileHeader',
  props: {
    showMobileMenu: {
      type: Boolean,
      default: false
    },
    currentLocale: {
      type: String,
      default: 'en'
    }
  },
  emits: ['close-mobile-menu', 'toggle-help-menu'],
  setup() {
    const { locale } = useI18n()
    const router = useRouter()
    const route = useRoute()
        
    return {
      locale,
      router,
      route,
      getCurrentLocale
    }
  },
  data() {
    return {
      logoImage,
      showHelpMenu: false
    }
  },
  methods: {
    // Custom method to get localized path using current locale
    getLocalePath(path) {
      if (this.currentLocale === 'en') {
        return path
      }
      return `/${this.currentLocale}${path}`
    },
    closeMobileMenu() {
      this.showHelpMenu = false
      document.body.style.overflow = ''
      this.$emit('close-mobile-menu')
    },
    toggleHelpMenu() {
      this.showHelpMenu = !this.showHelpMenu
      this.$emit('toggle-help-menu', this.showHelpMenu)
    },
    // Check if current route matches the given path
    isCurrentRoute(path) {
      const currentPath = this.$route.path
      const localizedPath = this.getLocalePath(path)
      
      // Handle exact match for home page
      if (path === '/') {
        return currentPath === localizedPath
      }
      
      // Handle other routes
      return currentPath === localizedPath || currentPath.startsWith(localizedPath + '/')
    },
    // Check if any help page is currently active
    isHelpPageActive() {
      return this.isCurrentRoute('/beginner-tutorial') || this.isCurrentRoute('/topup-withdraw-tutorial')
    }
  }
}
</script>

<style scoped>
.mobile-header-container {
  position: relative;
}

/* Mobile Menu Overlay */
.mobile-overlay {
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
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: auto;
  max-height: 85vh;
  background: #27272A;
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
  padding: 10px;
  border-bottom: 1px solid #4a5568;
}

.mobile-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.mobile-logo:hover {
  transform: scale(1.05);
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

.mobile-nav-item.mobile-nav-active {
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

.chevron-right {
  width: 14px;
  height: 14px;
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .mobile-sidebar {
    width: 270px;
    height: 80vh;
    overflow-x: hidden;
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
</style>