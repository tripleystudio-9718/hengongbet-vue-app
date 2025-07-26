<template>
  <div class="app-download-section">
    <!-- Section 1: App Download with Background -->
    <div class="app-section-with-background">
      <div class="content-overlay">
        <!-- Left Side - App Info and QR Codes -->
        <div class="left-content">
          <div class="app-info">
            <h1 class="app-title">Heng Ong Bet App</h1>
            <p class="app-subtitle">For IOS & Android</p>
          </div>
          
          <div class="qr-codes">
            <div class="qr-code-item">
              <div class="qr-placeholder">
                <!-- QR Code placeholder - you can replace with actual QR code -->
                <img :src="iosIcon" alt="iOS" class="platform-icon" />
              </div>
              <div class="download-button ios-button">
                <img src="@/assets/ios-logo.svg" alt="iOS Logo" class="platform-icon" />
                <span>iOS Download</span>
              </div>
            </div>
            
            <div class="qr-code-item">
              <div class="qr-placeholder">
                <!-- QR Code placeholder - you can replace with actual QR code -->
                <img :src="androidIcon" alt="Android" class="platform-icon" />
              </div>
              <div class="download-button android-button">
                <img src="@/assets/android-logo.svg" alt="Android Logo" class="platform-icon" />
                <span>Android Download</span>
              </div>
            </div>
          </div>
          <hr class="section-divider" />
          <div class="affiliate-section">
            <p class="affiliate-text">Sign Up And Join Our Affiliate Program!</p>
            <button class="signup-button">Sign Up Now !</button>
          </div>
        </div>

        <!-- Center - Empty space for phone visibility -->
        <div class="center-content">
          <!-- This space allows the background phone to be visible -->
        </div>

        <!-- Right Side - Features Grid -->
        <div class="right-content">
          <div class="features-grid">
            <!-- Left Column -->
            <div class="left-column">
              <!-- Short Card - Exclusive Bonus -->
              <div class="feature-card short-card">
                <div class="feature-icon-container">
                  <img :src="giftIcon" alt="Exclusive Bonus" class="feature-icon" />
                </div>
                <div class="feature-text">
                  <span class="feature-title">Exclusive</span>
                  <span class="feature-subtitle">Bonus</span>
                </div>
              </div>
              
              <!-- Tall Card - Affiliate Program -->
              <div class="feature-card tall-card">
                <div class="feature-icon-container">
                  <img :src="yellowHuman" alt="Affiliate Program" class="feature-icon" />
                </div>
                <div class="feature-text">
                  <span class="feature-title">Affiliate</span>
                  <span class="feature-subtitle">Program</span>
                </div>
              </div>
            </div>
            <!-- Right Column -->
            <div class="right-column">
              <!-- Tall Card - Instant Payment -->
              <div class="feature-card tall-card">
                <div class="feature-icon-container">
                  <img :src="yellowClock" alt="Instant Payment" class="feature-icon" />
                </div>
                <div class="feature-text">
                  <span class="feature-title">Instant</span>
                  <span class="feature-subtitle">Payment</span>
                </div>
              </div>
              
              <!-- Short Card - Seamless Experience -->
              <div class="feature-card short-card">
                <div class="feature-icon-container">
                  <img :src="moneyIcon" alt="Seamless Experience" class="feature-icon" />
                </div>
                <div class="feature-text">
                  <span class="feature-title">Seamless</span>
                  <span class="feature-subtitle">Experience</span>
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
          <img src="@/assets/android-icon.svg" alt="iOS Logo" class="platform-icon" />
          Android
        </button>
        <button 
          class="tab-button"
          :class="{ active: activeTab === 'ios' }"
          @click="switchTab('ios')"
        >
          <img src="@/assets/apple-icon.svg" alt="iOS Logo" class="platform-icon" />
          iOS
        </button>
        <button 
          class="tab-button"
          :class="{ active: activeTab === 'desktop' }"
          @click="switchTab('desktop')"
        >
          <img src="@/assets/desktop-icon.svg" alt="iOS Logo" class="platform-icon" />
          Desktop
        </button>
      </div>

      <!-- Download Guide Content -->
      <div v-if="activeTab === 'android'" class="guide-content">
        <!-- Title -->
        <h1 class="guide-title">Android Download</h1>

        <!-- Step 1 -->
        <div class="step-section">
          <div class="step-badge">1</div>
          <h2 class="step-title">Step 1</h2>
          <p class="step-description">
          Tap dotted setting icon at top right of the address bar.
          </p>
          
          <!-- Browser Address Bar Mockup -->
          <div class="browser-mockup">
              <img src="@/assets/step1-image.webp" alt="iOS Logo" class="platform-icon" />
          </div>

          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="iOS Logo" class="platform-icon" />
        </div>
 </div>
      <!-- Step 2 -->
        <div class="step-section">
          <div class="step-badge">2</div>
          <h2 class="step-title">Step 2</h2>
          <p class="step-description">
            Tap Add to Home Screen to pop up installation for HENG ONG BET App.

          </p>
          
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/step2-image.webp" alt="iOS Logo" class="platform-icon" />
          </div>
          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="iOS Logo" class="platform-icon" />
        </div>
 </div>
        <!-- Step 3 -->
        <div class="step-section">
          <div class="step-badge">3</div>
          <h2 class="step-title">Step 3</h2>
          <p class="step-description">
Tap Install to own the HENG ONG BET App, launch & enjoy your game!
          </p>
          
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/step3-image.webp" alt="iOS Logo" class="platform-icon" />
          </div>
        </div>
      </div>

      <!-- iOS Guide Content -->
      <div v-else-if="activeTab === 'ios'" class="guide-content">
        <h1 class="guide-title">iOS Download</h1>
      <!-- Step 1 -->
        <div class="step-section">
          <div class="step-badge">1</div>
          <h2 class="step-title">Step 1</h2>
          <p class="step-description">
            Tap share button at the bottom of the address bar.
          </p>
          
          <!-- Browser Address Bar Mockup -->
          <div class="browser-mockup">
              <img src="@/assets/ios-step1-image.webp" alt="iOS Logo" class="platform-icon" />
          </div>

          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="iOS Logo" class="platform-icon" />
        </div>
 </div>
        <!-- Step 2 -->
        <div class="step-section">
          <div class="step-badge">2</div>
          <h2 class="step-title">Step 2</h2>
          <p class="step-description">
            Tap Add to Home Screen to pop up installation for HENG ONG BET App.
          </p>
          
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/ios-step2-image.webp" alt="iOS Logo" class="platform-icon" />
          </div>
          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="iOS Logo" class="platform-icon" />
        </div>
 </div>
        <!-- Step 3 -->
        <div class="step-section">
          <div class="step-badge">3</div>
          <h2 class="step-title">Step 3</h2>
          <p class="step-description">
          Tap Add to own the HENG ONG BET App, launch & enjoy your game!
          </p>
          
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/ios-step3-image.webp" alt="iOS Logo" class="platform-icon" />
          </div>
        </div>
        
      </div>

      <!-- Desktop Guide Content -->
      <div v-else-if="activeTab === 'desktop'" class="guide-content">
        <h1 class="guide-title">Desktop Download</h1>
         <!-- Step 1 -->
        <div class="step-section">
          <div class="step-badge">1</div>
          <h2 class="step-title">Step 1</h2>
          <p class="step-description">
Click desktop download button at right side of the address bar to pop up installation for HENG ONG BET App.
          </p>
          
          <!-- Browser Address Bar Mockup -->
          <div class="browser-mockup">
              <img src="@/assets/desk-step1-image.webp" alt="iOS Logo" class="platform-icon" />
          </div>

          <!-- Dotted Arrow -->
          <div class="dotted-arrow">
           <img src="@/assets/download-arrow.png" alt="iOS Logo" class="platform-icon" />
        </div>
 </div>
        <!-- Step 2 -->
        <div class="step-section">
          <div class="step-badge">2</div>
          <h2 class="step-title">Step 2</h2>
          <p class="step-description">
Click Install to own the HENG ONG BET App, launch & enjoy your game!
          </p>
          
          <!-- Mobile Installation Dialog -->
          <div class="mobile-dialog">
        <img src="@/assets/desk-step2-image.webp" alt="iOS Logo" class="platform-icon" />
          </div>
   
 </div>
     
      </div>
    </div>
  </div>
</template>

<script>
// Import images properly
import iosIcon from '@/assets/ios-code.png'
import androidIcon from '@/assets/android-code.png'
import desktopIcon from '@/assets/desktop-icon.svg'
import downloadBackground from '@/assets/download-background.png'
import yellowClock from '@/assets/yellow-clock.png'
import giftIcon from '@/assets/gift-icon.png'
import moneyIcon from '@/assets/money-icon.png'
import yellowHuman from '@/assets/yellow-human.png'

export default {
  name: 'AppDownloadSection',
  data() {
    return {
      // Make images available in template
      iosIcon,
      androidIcon,
      yellowClock,
      giftIcon,
      moneyIcon,
      yellowHuman,
      // Download guide state
      activeTab: 'android'
    }
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
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

/* Section 1: App Section with Phone Background */
.app-section-with-background {
  background-image: url('@/assets/download-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
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

/* Center Content - Empty space for phone visibility */
.center-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-height: 600px;
  /* This space allows the background phone image to be visible */
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

.browser-mockup img{
  width: 80%;
  height:auto;
  margin:0 auto;
}

.address-bar {
  background: white;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.url-section {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.protocol {
  font-size: 14px;
}

.url-text {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}

.download-icon {
  margin-right: 12px;
}

.download-button-guide {
  width: 32px;
  height: 32px;
  background: #fee2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.download-button-guide:hover {
  background: #fecaca;
}

.close-button {
  background: none;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}

.close-button:hover {
  background: #f3f4f6;
}

/* Dotted Arrow */
.dotted-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dotted-arrow img{
    width:50%;
    height: 100%;
}

.arrow-line {
  width: 2px;
  height: 40px;
  background: repeating-linear-gradient(
    to bottom,
    #f59e0b 0px,
    #f59e0b 4px,
    transparent 4px,
    transparent 8px
  );
}

.arrow-head {
  color: #f59e0b;
  font-size: 20px;
  margin-top: -2px;
}

/* Mobile Dialog */
.mobile-dialog {
  background: white;
  border-radius: 12px;
  width: 80%;
  height: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
    display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:30px;
}

.mobile-dialog img{
  width: 70%;
  height: 100%;
}

.dialog-header {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
}

.dialog-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.dialog-content {
  padding: 20px;
}

.app-preview {
  display: flex;
  align-items: center;
  gap: 12px;
}

.app-icon {
  width: 48px;
  height: 48px;
  background: #f3f4f6;
  border-radius: 8px;
  flex-shrink: 0;
}

.app-details {
  flex: 1;
}

.app-name-line {
  width: 120px;
  height: 12px;
  background: #e5e7eb;
  border-radius: 6px;
  margin-bottom: 8px;
}

.app-url-line {
  width: 80px;
  height: 10px;
  background: #f3f4f6;
  border-radius: 5px;
}

.dialog-buttons {
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  border-top: 1px solid #e5e7eb;
}

.dialog-button {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.install-button {
  background: #3b82f6;
  color: white;
}

.install-button:hover {
  background: #2563eb;
}

.cancel-button {
  background: #f3f4f6;
  color: #6b7280;
}

.cancel-button:hover {
  background: #e5e7eb;
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
    filter: brightness(0) invert(0)
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-overlay {
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px;
  }
  
  .left-content,
  .right-content {
    width: 100%;
    max-width: 100%;
  }
  
  .features-grid {
    max-width: 400px;
    gap: 15px;
  }
  
  .short-card {
    min-height: 130px;
  }
  
  .tall-card {
    min-height: 180px;
  }
  
  .center-content {
    min-height: 200px;
  }
  
  .download-guide-container {
    padding: 40px 15px;
  }
}

@media (max-width: 768px) {
  .app-title {
    font-size: 1.8rem;
  }
  
  .qr-codes {
    justify-content: center;
  }
  
  .features-grid {
    max-width: 300px;
    gap: 12px;
  }
  
  .short-card {
    min-height: 110px;
  }
  
  .tall-card {
    min-height: 150px;
  }
  
  .feature-icon {
    width: 50px;
    height: 50px;
  }
  
  .feature-title {
    font-size: 1.1rem;
  }
  
  .feature-subtitle {
    font-size: 0.9rem;
  }
  
  .center-content {
    min-height: 150px;
  }
  
  .guide-title {
    font-size: 2rem;
  }
  
  .header-tabs {
    width: 100%;
    max-width: 400px;
  }
  
  .tab-button {
    flex: 1;
    justify-content: center;
    padding: 10px 16px;
    font-size: 13px;
  }
  
  .browser-mockup {
    max-width: 350px;
  }
  
  .mobile-dialog {
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .content-overlay {
    padding: 30px 15px;
  }
  
  .app-title {
    font-size: 1.5rem;
  }
  
  .qr-codes {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .features-grid {
    flex-direction: column;
    max-width: 250px;
    gap: 10px;
  }
  
  .left-column,
  .right-column {
    flex-direction: row;
    gap: 10px;
  }
  
  .feature-card {
    min-height: 100px;
    padding: 15px 10px;
  }
  
  .feature-icon {
    width: 40px;
    height: 40px;
  }
  
  .center-content {
    min-height: 100px;
  }
  
  .guide-title {
    font-size: 1.8rem;
  }
  
  .tab-button {
    padding: 8px 12px;
    font-size: 12px;
  }
  
  .tab-icon {
    font-size: 14px;
  }
  
  .step-badge {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .step-title {
    font-size: 1.3rem;
  }
}
</style>
