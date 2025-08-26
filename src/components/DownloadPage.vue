<template>
  <div class="app-download-section">
    <!-- Section 1: App Download -->
    <div class="app-section-with-background">
      <div class="content-overlay">
        <!-- Left Side - App Info and QR Codes -->
        <div class="left-content">
          <div class="app-info">
            <div class="app-title" v-html="$t('app.title')"></div>
            <div class="app-subtitle" v-html="$t('app.subtitle')"></div>
          </div>
                    
          <div class="qr-codes">
            <div class="qr-code-item">
              <div class="qr-placeholder">
                <!-- QR Code placeholder - you can replace with actual QR code -->
                <img :src="iosIcon" alt="ios downlaod qr code" class="platform-icon" />
              </div>
              <div class="download-button ios-button" @click="goToRegisterPage">
                <img src="@/assets/ios-logo.svg" alt="iOS Logo" class="platform-icon" />
                <span v-html="$t('app.iosDownload')"></span>
              </div>
            </div>
                        
            <div class="qr-code-item">
              <div class="qr-placeholder">
                <!-- QR Code placeholder - you can replace with actual QR code -->
                <img :src="androidIcon" alt="android download qr code" class="platform-icon" />
              </div>
              <div class="download-button android-button" @click="goToRegisterPage">
                <img src="@/assets/android-logo.svg" alt="Android Logo" class="platform-icon" />
                <span v-html="$t('app.androidDownload')"></span>
              </div>
            </div>
          </div>
          <hr class="section-divider" />
          <div class="affiliate-section">
            <div class="affiliate-text" v-html="$t('app.affiliateText')"></div>
            <button class="signup-button" @click="goToRegisterPage" v-html="$t('app.signUpButton')"></button>
          </div>
        </div>
        <!-- Center - Phone Image for Mobile -->
        <div class="center-content">
          <img :src="MobileDownloadBanner" alt="mobile download phone frame" class="center-phone-image" />
        </div>
        <!-- Right Side - Features Grid -->
        <div class="right-content">
          <div class="features-grid">
            <!-- Left Column -->
            <div class="left-column">
              <!-- Short Card - Exclusive Bonus -->
              <div class="feature-card short-card">
                <div class="feature-icon-container">
                  <img :src="giftIcon" alt="Exclusive Bonus Icon" class="feature-icon" />
                </div>
                <div class="feature-text">
                  <span class="feature-title" v-html="$t('app.features.exclusive')"></span>
                  <span class="feature-subtitle" v-html="$t('app.features.bonus')"></span>
                </div>
              </div>
                            
              <!-- Tall Card - Affiliate Program -->
              <div class="feature-card tall-card">
                <div class="feature-icon-container">
                  <img :src="yellowHuman" alt="Affiliate Program Icon" class="feature-icon" />
                </div>
                <div class="feature-text">
                  <span class="feature-title" v-html="$t('app.features.affiliate')"></span>
                  <span class="feature-subtitle" v-html="$t('app.features.program')"></span>
                </div>
              </div>
            </div>
            <!-- Right Column -->
            <div class="right-column">
              <!-- Tall Card - Instant Payment -->
              <div class="feature-card tall-card">
                <div class="feature-icon-container">
                  <img :src="yellowClock" alt="Instant Payment Icon" class="feature-icon" />
                </div>
                <div class="feature-text">
                  <span class="feature-title" v-html="$t('app.features.instant')"></span>
                  <span class="feature-subtitle" v-html="$t('app.features.payment')"></span>
                </div>
              </div>
                            
              <!-- Short Card - Seamless Experience -->
              <div class="feature-card short-card">
                <div class="feature-icon-container">
                  <img :src="moneyIcon" alt="Seamless Experience Icon" class="feature-icon" />
                </div>
                <div class="feature-text">
                  <span class="feature-title" v-html="$t('app.features.seamless')"></span>
                  <span class="feature-subtitle" v-html="$t('app.features.experience')"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Section 2: Android Download Guide (No Background) -->
    <div class="download-guide-container">
      <!-- Header Tabs -->
      <div class="header-tabs">
        <button 
          class="tab-button"
          :class="{ active: activeTab === 'android' }"
          @click="switchTab('android')"
        >
          <img src="@/assets/android-icon.svg" alt="Android Logo" class="platform-icon" />
          <span v-html="$t('guide.tabs.android')"></span>
        </button>
        <button 
          class="tab-button"
          :class="{ active: activeTab === 'ios' }"
          @click="switchTab('ios')"
        >
          <img src="@/assets/apple-icon.svg" alt="iOS Logo" class="platform-icon" />
          <span v-html="$t('guide.tabs.ios')"></span>
        </button>
        <button 
          class="tab-button"
          :class="{ active: activeTab === 'desktop' }"
          @click="switchTab('desktop')"
        >
          <img src="@/assets/desktop-icon.svg" alt="Desktop Logo" class="platform-icon" />
          <span v-html="$t('guide.tabs.desktop')"></span>
        </button>
      </div>
      <!-- Download Guide Content -->
      <div v-if="activeTab === 'android'" class="guide-content">
        <!-- Title -->
        <div class="guide-title" v-html="$t('guide.titles.androidDownload')"></div>
        <!-- Step 1 -->
        <div class="step-section">
          <div class="step-badge">1</div>
          <div class="step-title" v-html="$t('guide.steps.android.step1.title')"></div>
          <div class="step-description" v-html="$t('guide.steps.android.step1.description')"></div>
                    
          <!-- Browser Address Bar Mockup -->
          <div class="browser-mockup">
              <img src="@/assets/android-instruction-step-1.webp" alt="Step 1" class="step-image" />
          </div>
          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="Arrow" class="arrow-image" />
        </div> 
        </div>
      <!-- Step 2 -->
        <div class="step-section">
          <div class="step-badge">2</div>
          <div class="step-title" v-html="$t('guide.steps.android.step2.title')"></div>
          <div class="step-description" v-html="$t('guide.steps.android.step2.description')"></div>
                    
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/android-instruction-step-2.webp" alt="Step 2" class="step-image" />
          </div>
          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="Arrow" class="arrow-image" />
        </div> 
        </div>
        <!-- Step 3 -->
        <div class="step-section">
          <div class="step-badge">3</div>
          <div class="step-title" v-html="$t('guide.steps.android.step3.title')"></div>
          <div class="step-description" v-html="$t('guide.steps.android.step3.description')"></div>
                    
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/android-instruction-step-3.webp" alt="Step 3" class="step-image" />
          </div>
        </div>
      </div>
      <!-- iOS Guide Content -->
      <div v-else-if="activeTab === 'ios'" class="guide-content">
        <div class="guide-title" v-html="$t('guide.titles.iosDownload')"></div>
      <!-- Step 1 -->
        <div class="step-section">
          <div class="step-badge">1</div>
          <div class="step-title" v-html="$t('guide.steps.ios.step1.title')"></div>
          <div class="step-description" v-html="$t('guide.steps.ios.step1.description')"></div>
                    
          <!-- Browser Address Bar Mockup -->
          <div class="browser-mockup">
              <img src="@/assets/ios-instruction-step-1.webp" alt="iOS Step 1" class="step-image" />
          </div>
          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="Arrow" class="arrow-image" />
        </div> 
        </div>
        <!-- Step 2 -->
        <div class="step-section">
          <div class="step-badge">2</div>
          <div class="step-title" v-html="$t('guide.steps.ios.step2.title')"></div>
          <div class="step-description" v-html="$t('guide.steps.ios.step2.description')"></div>
                    
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/ios-instruction-step-2.webp" alt="iOS Step 2" class="step-image" />
          </div>
          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="Arrow" class="arrow-image" />
        </div> 
        </div>
        <!-- Step 3 -->
        <div class="step-section">
          <div class="step-badge">3</div>
          <div class="step-title" v-html="$t('guide.steps.ios.step3.title')"></div>
          <div class="step-description" v-html="$t('guide.steps.ios.step3.description')"></div>
                    
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/ios-instruction-step-3.webp" alt="iOS Step 3" class="step-image" />
          </div>
        </div>
              
        </div>
      <!-- Desktop Guide Content -->
      <div v-else-if="activeTab === 'desktop'" class="guide-content">
        <div class="guide-title" v-html="$t('guide.titles.desktopDownload')"></div>
         <!-- Step 1 -->
        <div class="step-section">
          <div class="step-badge">1</div>
          <div class="step-title" v-html="$t('guide.steps.desktop.step1.title')"></div>
          <div class="step-description" v-html="$t('guide.steps.desktop.step1.description')"></div>
                    
          <!-- Browser Address Bar Mockup -->
          <div class="browser-mockup">
              <img src="@/assets/desk-instruction-step-1.webp" alt="Desktop Step 1" class="step-image" />
          </div>
          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="Arrow" class="arrow-image" />
        </div> 
        </div>
        <!-- Step 2 -->
        <div class="step-section">
          <div class="step-badge">2</div>
          <div class="step-title" v-html="$t('guide.steps.desktop.step2.title')"></div>
          <div class="step-description" v-html="$t('guide.steps.desktop.step2.description')"></div>
                    
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/desk-instruction-step-2.webp" alt="Desktop Step 2" class="step-image" />
          </div>
    </div>
           
        </div>
    </div>

    <!-- Section 3: Additional Content - Now as separate component -->
    <AdditionalContent />
  </div>
</template>

<script>
// Import images properly
import iosIcon from '@/assets/ios-code.png'
import androidIcon from '@/assets/android-code.png'
import desktopIcon from '@/assets/desktop-icon.svg'
import downloadBackground from '@/assets/download-background.png'
import MobileDownloadBanner from '@/assets/mobile-download-banner.png'
import yellowClock from '@/assets/yellow-clock.png'
import giftIcon from '@/assets/gift-icon.png'
import moneyIcon from '@/assets/money-icon.png'
import yellowHuman from '@/assets/yellow-human.png'

// Import the new separate component
import AdditionalContent from './AdditionalContent.vue'

export default {
  name: 'AppDownloadSection',
  components: {
    AdditionalContent
  },
  data() {
    return {
      // Make images available in template
      iosIcon,
      androidIcon,
      yellowClock,
      giftIcon,
      moneyIcon,
      yellowHuman,
      downloadBackground,
      MobileDownloadBanner,
      // Download guide state
      activeTab: 'android'
    }
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
    goToRegisterPage() {
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
}
  },
  mounted() {
    // You can add any initialization logic here
  }
}
</script>

<style scoped>
/* Main Container - No Background */
.app-download-section {
  width: 100%;
  position: relative;
}

/* Section 1: App Section */
.app-section-with-background {
  background: #1a1a1a;
  min-height: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

/* Desktop: Background Image */
@media (min-width: 1025px) {
  .app-section-with-background {
    background-image: url('@/assets/download-background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.content-overlay {
  padding: 60px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 900px;
  position: relative;
  z-index: 2;
}

/* Left Content */
.left-content {
  width: 40%;
  color: white;
  z-index: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 600px;
}

.app-title {
  font-size: 56px;
  font-weight: 700;
  color: #F0AD3C;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.app-subtitle {
  font-size: 36px;
  color: #ffffff;
  margin: 0 0 30px 0;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.qr-codes {
  display: flex;
  gap: 24px;
  margin: 0 0 0px -34px;
}

.qr-code-item {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;
}

.qr-placeholder {
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.qr-placeholder img {
  width: 150px;
  height: 150px;
}

.download-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  border: none;
}

.download-button:hover {
  transform: translateY(-2px);
}

.ios-button {
  background: white;
  color: black;
}

.android-button {
  background: #99CC00;
  color: white;
}

.platform-icon {
  width: 20px;
  height: 20px;
}

.section-divider {
  width: 60%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px 0;
  border: none;
}

.affiliate-section {
  text-align: left;
  width: 57%;
}

.affiliate-text {
  font-size: 18px;
  color: #cccccc;
  margin: 0 0 15px 0;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.signup-button {
  background: linear-gradient(to bottom, #F2B341, #ED8F23);
  color: #000;
  border: none;
  padding: 14px 30px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.signup-button:hover {
  transform: translateY(-2px);
}

/* Center Content - Phone Image */
.center-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-height: 600px;
}

.center-phone-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  display: none; /* Hidden on desktop */
}

@media (min-width: 1441px) and (max-width: 1680px) {
  .affiliate-section {
    width: 65%;
  }

  .section-divider {
    width: 65%;
  }
}

@media (max-width: 1440px) {
  .affiliate-section {
    width: 75%;
  }

  .section-divider {
    width: 75%;
  }
}

/* Mobile: Show center phone image */
@media (max-width: 1024px) {
  .center-phone-image {
    display: block;
    max-width: 300px;
    width: 100%;
  }
}

/* Right Content - Features Grid */
.right-content {
  width: 38%;
  display: flex;
  justify-content: center;
  z-index: 3;
  height: 600px;
}

.features-grid {
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 500px;
  height: 500px;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 45px 50px;
  background: rgba(0, 0, 0, 0.5);
  border: 3px solid #F0AD3C;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  width: 30%;
}

/* Short cards */
.short-card {
  min-height: 160px;
}

/* Tall cards */
.tall-card {
  min-height: 160px;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(240, 173, 60, 0.08) 0%, rgba(240, 173, 60, 0.03) 100%);
  border-radius: 17px;
  pointer-events: none;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 15px 30px rgba(0, 0, 0, 0.5),
    0 0 25px rgba(240, 173, 60, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.feature-icon-container {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  margin-bottom: 10px;
}

.feature-icon {
  width: 100px;
  height: 100px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
}

.feature-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
}

.feature-title {
  font-size: 24px;
  font-weight: 700;
  color: #F0AD3C;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.5px;
}

.feature-subtitle {
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  opacity: 0.95;
}

.left-column {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
}

.right-column {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

/* ===== SECTION 2: DOWNLOAD GUIDE (NO BACKGROUND) ===== */
.download-guide-container {
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: white;
  position: relative;
  z-index: 1;
}

/* Header Tabs */
.header-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 40px;
}

.tab-button {
  background: #1a1a1a;
  border: none;
  padding: 12px 40px;
  color: #cccccc;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  border-radius: 0;
}

.tab-button:first-child {
  border-radius: 8px 0 0 8px;
}

.tab-button:last-child {
  border-radius: 0 8px 8px 0;
}

.tab-button.active {
  background: linear-gradient(to bottom, #F2B341, #ED8F23);
  color: white;
  border-radius: 10px;
}

.tab-button:hover:not(.active) {
  background: #333333;
  color: white;
  border-radius: 10px;
}

.tab-icon {
  font-size: 20px;
}

/* Guide Content */
.guide-content {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.guide-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #F2B240, #ED9225);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;
  text-align: center;
}

.coming-soon {
  font-size: 1.2rem;
  color: #cccccc;
  text-align: center;
  margin-top: 50px;
}

/* Step Sections */
.step-section {
  width: 100%;
  margin-bottom: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-badge {
  width: 70px;
  height: 70px;
  background: linear-gradient(to bottom, #F2B341, #ED8F23);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  font-weight: 700;
  color: #141414;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(90deg, #F2B240, #ED9225);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0px;
  text-align: center;
}

.step-description {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 400px;
}

/* Browser Mockup */
.browser-mockup {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.step-image {
  width: 80%;
  height: auto;
  margin: 0 auto;
  max-width: 400px;
}

/* Dotted Arrow */
.dotted-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrow-image {
  width: 50%;
  height: auto;
  max-width: 200px;
}

/* Mobile Dialog */
.mobile-dialog {
  background: white;
  border-radius: 12px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.mobile-dialog img {
  width: 70%;
  height: auto;
}

.tab-button .platform-icon {
  width: 20px;
  height: 20px;
  color: white;
  transition: color 0.3s ease;
}

/* Style active tab icon and text color */
.tab-button.active {
  color: #081521;
}

.tab-button.active .platform-icon {
  filter: brightness(0) invert(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-overlay {
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px;
    min-height: auto;
  }
  
  .left-content {
    width: 100%;
    max-width: 100%;
    height: auto;
    text-align: center;
    order: 1;
  }
  
  .center-content {
    width: 100%;
    order: 2;
    min-height: 300px;
  }
  
  .right-content {
    width: 100%;
    max-width: 100%;
    height: auto;
    order: 3;
  }
  
  .features-grid {
    max-width: 400px;
    gap: 15px;
    height: auto;
    margin: 0 auto;
  }
  
  .qr-codes {
    margin: 0;
    justify-content: center;
  }
  
  .affiliate-section {
    width: 100%;
    text-align: center;
  }
  
  .download-guide-container {
    padding: 40px 15px;
  }
}

@media (max-width: 768px) {
  .app-section-with-background {
    background-image: url('@/assets/mobile-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .left-content {
    order: 3;
  }
  .center-content {
    order: 1;
  }
  .right-content {
    order: 2
  }
  .app-title {
    font-size: 2.5rem;
    text-align: center;
  }
  
  .app-subtitle {
    font-size: 1.8rem;
    text-align: center;
  }
  
  .qr-codes {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0;
    flex-wrap: wrap;
  }
  
  .qr-code-item {
    align-items: center;
  }
  
  .qr-placeholder img {
    width: 120px;
    height: 120px;
  }
  
  .features-grid {
    max-width: 350px;
    gap: 15px;
  }
  
  .feature-card {
    padding: 20px 15px;
    min-height: auto;
  }
  
  .short-card {
    min-height: 120px;
  }
  
  .tall-card {
    min-height: 120px;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
  }
  
  .feature-title {
    font-size: 1.2rem;
  }
  
  .feature-subtitle {
    font-size: 1rem;
  }
  
  .guide-title {
    font-size: 2rem;
  }
  
  .header-tabs {
    width: 100%;
    max-width: 400px;
    gap: 8px;
  }
  
  .tab-button {
    flex: 1;
    justify-content: center;
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 8px !important;
  }
  
  .browser-mockup {
    max-width: 350px;
  }
  
  .mobile-dialog {
    max-width: 300px;
  }
  
  .step-image {
    width: 90%;
    max-width: 300px;
  }
  
  .arrow-image {
    width: 60%;
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .content-overlay {
    padding: 20px 15px;
    gap: 30px;
  }
  
  .app-title {
    font-size: 2rem;
    text-align: center;
  }
  
  .app-subtitle {
    font-size: 1.3rem;
    text-align: center;
  }
  
  .qr-codes {
    align-items: center;
    gap: 20px;
  }
  
  .qr-placeholder img {
    width: 100px;
    height: 100px;
  }
  
  .download-button {
    padding: 8px 12px;
    font-size: 14px;
  }
  
  .features-grid {
    max-width: 280px;
    gap: 12px;
  }
  
  .left-column,
  .right-column {
    gap: 12px;
  }
  
  .feature-card {
    padding: 15px 10px;
    min-height: 100px;
    width: 100%;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
  }
  
  .feature-title {
    font-size: 1rem;
  }
  
  .feature-subtitle {
    font-size: 0.9rem;
  }
  
  .affiliate-section {
    width: 100%;
    text-align: center;
  }
  
  .affiliate-text {
    font-size: 16px;
  }
  
  .signup-button {
    padding: 12px 24px;
    font-size: 16px;
  }
  
  .guide-title {
    font-size: 1.8rem;
  }
  
  .tab-button {
    padding: 10px 12px;
    font-size: 14px;
  }
  
  .step-badge {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
  
  .step-title {
    font-size: 1.2rem;
  }
  
  .step-description {
    font-size: 14px;
    max-width: 280px;
  }
  
  .browser-mockup {
    max-width: 280px;
  }
  
  .mobile-dialog {
    max-width: 250px;
  }
  
  .step-image {
    width: 95%;
    max-width: 250px;
  }
  
  .arrow-image {
    width: 70%;
    max-width: 120px;
  }
}

/* Touch-friendly improvements */
@media (hover: none) and (pointer: coarse) {
  .download-button:active {
    transform: scale(0.98);
  }
  
  .signup-button:active {
    transform: scale(0.98);
  }
  
  .tab-button:active {
    transform: scale(0.98);
  }
  
  .feature-card:active {
    transform: translateY(-4px);
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .center-phone-image,
  .step-image,
  .arrow-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}
</style>