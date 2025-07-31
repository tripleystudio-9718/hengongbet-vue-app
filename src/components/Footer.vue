<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- About Section -->
        <div class="footer-column">
          <h3 class="footer-title">{{ $t('footer.about') }}</h3>
          <p class="footer-description">
            {{ $t('footer.description') }}
          </p>
          
          <div class="footer-badge desktop-only">
            <h4 class="badge-title">{{ $t('footer.game_license') }}</h4>
            <div class="badge-icon license-badge">
              <img :src="gcbIcon" :alt="$t('footer.gcb_license_alt')" />
            </div>
          </div>
        </div>
        
        <!-- Games Section -->
        <div class="footer-column">
          <h3 class="footer-title">{{ $t('footer.games') }}</h3>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.slots') }}</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.sports') }}</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.lottery') }}</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.casino') }}</a></li>
          </ul>
          
          <div class="footer-badge desktop-only">
            <h4 class="badge-title">{{ $t('footer.certification') }}</h4>
            <div class="badge-icon certification-badge">
              <img :src="itechIcon" :alt="$t('footer.itech_certification_alt')" />
            </div>
          </div>
        </div>
        
        <!-- Info Section -->
        <div class="footer-column">
          <h3 class="footer-title">{{ $t('footer.info') }}</h3>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.promotions') }}</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.about_us') }}</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.contact_us') }}</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.terms_conditions') }}</a></li>
          </ul>
          
          <div class="footer-badge desktop-only">
            <h4 class="badge-title">{{ $t('footer.security') }}</h4>
            <div class="badge-icon security-badge">
              <img :src="threatMetrixIcon" :alt="$t('footer.threatmetrix_security_alt')" />
            </div>
          </div>
        </div>
        
        <!-- Payment Methods Section -->
        <div class="footer-column">
          <h3 class="footer-title">{{ $t('footer.payment_methods') }}</h3>
          <div class="payment-methods">
            <div class="payment-icon">
              <img :src="tngIcon" :alt="$t('footer.touch_n_go_alt')" />
            </div>
            <div class="payment-icon">
              <img :src="bankIcon" :alt="$t('footer.bank_transfer_alt')" />
            </div>
            <div class="payment-icon">
              <img :src="duItNowIcon" :alt="$t('footer.duitnow_alt')" />
            </div>
            <div class="payment-icon">
              <img :src="grabIcon" :alt="$t('footer.grab_alt')" />
            </div>
          </div>
          
          <div class="footer-badge desktop-only">
            <h4 class="badge-title">{{ $t('footer.follow_us') }}</h4>
            <div class="social-links">
              <a href="#" @click.prevent="handleSocialClick('facebook')" class="social-icon">
                <img :src="fbIcon" :alt="$t('footer.facebook_alt')" />
              </a>
              <a href="#" @click.prevent="handleSocialClick('instagram')" class="social-icon">
                <img :src="instagramIcon" :alt="$t('footer.instagram_alt')" />
              </a>
              <a href="#" @click.prevent="handleSocialClick('whatsapp')" class="social-icon">
                <img :src="whatsappIcon" :alt="$t('footer.whatsapp_alt')" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile Only Layout -->
      <div class="mobile-footer-layout">
        <!-- Row 1: About -->
        <div class="mobile-about-section">
          <h3 class="footer-title">{{ $t('footer.about') }}</h3>
          <p class="footer-description">
            {{ $t('footer.description') }}
          </p>
        </div>
        
        <!-- Row 2: Games and Info -->
        <div class="mobile-row">
          <div class="mobile-column">
            <h3 class="footer-title">{{ $t('footer.games') }}</h3>
            <ul class="footer-links">
              <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.slots') }}</a></li>
              <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.sports') }}</a></li>
              <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.lottery') }}</a></li>
              <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.casino') }}</a></li>
            </ul>
          </div>
          
          <div class="mobile-column">
            <h3 class="footer-title">{{ $t('footer.info') }}</h3>
            <ul class="footer-links">
              <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.promotions') }}</a></li>
              <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.about_us') }}</a></li>
              <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.contact_us') }}</a></li>
              <li><a href="#" @click.prevent="handleLinkClick">{{ $t('footer.terms_conditions') }}</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Row 3: Game License, Security, Certification -->
        <div class="mobile-badges-row">
          <div class="mobile-badge-item">
            <h4 class="badge-title">{{ $t('footer.game_license') }}</h4>
            <div class="badge-icon license-badge">
              <img :src="gcbIcon" :alt="$t('footer.gcb_license_alt')" />
            </div>
          </div>
          
          <div class="mobile-badge-item">
            <h4 class="badge-title">{{ $t('footer.security') }}</h4>
            <div class="badge-icon security-badge">
              <img :src="threatMetrixIcon" :alt="$t('footer.threatmetrix_security_alt')" />
            </div>
          </div>
          
          <div class="mobile-badge-item">
            <h4 class="badge-title">{{ $t('footer.certification') }}</h4>
            <div class="badge-icon certification-badge">
              <img :src="itechIcon" :alt="$t('footer.itech_certification_alt')" />
            </div>
          </div>
        </div>
        
        <!-- Row 4: Payment Methods -->
        <div class="mobile-payment-section">
          <h3 class="footer-title">{{ $t('footer.payment_methods') }}</h3>
          <div class="payment-methods">
            <div class="payment-icon">
              <img :src="tngIcon" :alt="$t('footer.touch_n_go_alt')" />
            </div>
            <div class="payment-icon">
              <img :src="bankIcon" :alt="$t('footer.bank_transfer_alt')" />
            </div>
            <div class="payment-icon">
              <img :src="duItNowIcon" :alt="$t('footer.duitnow_alt')" />
            </div>
            <div class="payment-icon">
              <img :src="grabIcon" :alt="$t('footer.grab_alt')" />
            </div>
          </div>
        </div>
        
        <!-- Row 5: Social Links -->
        <div class="mobile-social-section">
          <h3 class="footer-title">{{ $t('footer.follow_us') }}</h3>
          <div class="social-links">
            <a href="#" @click.prevent="handleSocialClick('facebook')" class="social-icon">
              <img :src="fbIcon" :alt="$t('footer.facebook_alt')" />
            </a>
            <a href="#" @click.prevent="handleSocialClick('instagram')" class="social-icon">
              <img :src="instagramIcon" :alt="$t('footer.instagram_alt')" />
            </a>
            <a href="#" @click.prevent="handleSocialClick('whatsapp')" class="social-icon">
              <img :src="whatsappIcon" :alt="$t('footer.whatsapp_alt')" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- Divider Line -->
      <div class="footer-divider"></div>
      
      <!-- Copyright Section -->
      <div class="footer-bottom">
        <p class="copyright">{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import gcbIcon from '@/assets/gcb_icon.svg'
import itechIcon from '@/assets/itech_icon.svg'
import threatMetrixIcon from '@/assets/threat-metrix_icon.svg'
import tngIcon from '@/assets/tng_icon.svg'
import bankIcon from '@/assets/bank_icon.svg'
import duItNowIcon from '@/assets/duitnow_icon.svg'
import grabIcon from '@/assets/grab_icon.svg'
import fbIcon from '@/assets/fb_icon.svg'
import instagramIcon from '@/assets/instagram_icon.svg'
import whatsappIcon from '@/assets/whatsapps_icon.svg'

export default {
  name: 'Footer',
  data() {
    return {
      gcbIcon,
      itechIcon,
      threatMetrixIcon,
      tngIcon,
      bankIcon,
      duItNowIcon,
      grabIcon,
      fbIcon,
      instagramIcon,
      whatsappIcon
    }
  },
  methods: {
    handleLinkClick() {
      // All footer links redirect to registration
      this.goToRegisterPage();
    },
    
    handleSocialClick(platform) {
      console.log(`Social link clicked: ${platform}`);
      // Social media links also redirect to registration
      this.goToRegisterPage();
    },
    
    goToRegisterPage() {
      // Get current language from parent component or store
      const locale = this.$parent?.currentLanguage || this.$store?.state?.language || 'en';
      
      let targetUrl = 'https://hengongbet.com/en-my?regRef=player';
      
      if (locale === 'zh') {
        targetUrl = 'https://hengongbet.com/zh-my?regRef=player';
      } else if (locale === 'ms') {
        targetUrl = 'https://hengongbet.com/ms-my?regRef=player';
      }
      
      console.log('Redirecting to registration from footer');
      window.location.href = targetUrl;
    }
  }
}
</script>

<style scoped>
/* Footer Base Styles */
.footer-section {
  background: #242424;
  box-shadow: 0 2px 9.3px 0 rgba(0, 0, 0, 0.25);
  padding: 48px 0 24px;
  color: white;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.3fr;
  gap: 60px;
  margin-bottom: 32px;
  align-items: start;
}

/* Hide mobile layout on desktop */
.mobile-footer-layout {
  display: none;
}

/* Column Styles */
.footer-column {
  display: flex;
  flex-direction: column;
  min-height: 280px;
}

.footer-title {
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.footer-description {
  font-size: 14px;
  color: #9CA3AF;
  line-height: 1.5;
  margin-bottom: auto;
  max-width: 250px;
  text-align: left;
  flex-grow: 1;
}

/* Links Styles */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  margin-bottom: auto;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  font-size: 14px;
  color: #9CA3AF;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  line-height: 1.4;
}

.footer-links a:hover {
  color: #F1AE3D;
  transform: translateX(4px);
}

/* Badge Styles */
.footer-badge {
  margin-top: 0;
  align-self: flex-start;
}

.badge-title {
  font-size: 15px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.badge-icon {
  display: flex;
  align-items: center;
}

.license-badge {
  width: 60px;
  height: 48px;
}

.certification-badge {
  width: 50px;
  height: 40px;
}

.security-badge {
  width: 100px;
  height: 32px;
}

.badge-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.9);
  transition: filter 0.3s ease;
}

.badge-icon img:hover {
  filter: brightness(1.1);
}

/* Payment Methods */
.payment-methods {
  display: flex;
  gap: 12px;
  margin-bottom: auto;
  flex-wrap: wrap;
  flex-grow: 1;
}

.payment-icon {
  width: 32px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.9);
  transition: all 0.3s ease;
}

.payment-icon:hover img {
  filter: brightness(1.1);
  transform: scale(1.05);
}

/* Social Links */
.social-links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.social-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 50%;
}

.social-icon:hover {
  transform: scale(1.15);
}

.social-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.9);
  transition: filter 0.3s ease;
}

.social-icon:hover img {
  filter: brightness(1.1);
}

/* Footer Divider */
.footer-divider {
  width: 100%;
  height: 1px;
  background-color: #4B5563;
  margin: 24px 0;
}

/* Footer Bottom */
.footer-bottom {
  text-align: left;
}

.copyright {
  font-size: 14px;
  color: #9CA3AF;
  margin: 0;
  font-weight: 400;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  .footer-description {
    max-width: none;
    margin-bottom: 40px;
  }
  
  .footer-links {
    margin-bottom: 40px;
  }
  
  .payment-methods {
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 40px 0 20px;
  }
  
  .footer-container {
    padding: 0 20px;
  }
  
  /* Hide desktop layout */
  .footer-grid {
    display: none;
  }
  
  .desktop-only {
    display: none;
  }
  
  /* Show mobile layout */
  .mobile-footer-layout {
    display: block;
    margin-bottom: 32px;
  }
  
  /* Mobile Row Styles */
  .mobile-about-section {
    margin-bottom: 32px;
  }
  
  .mobile-about-section .footer-title {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 700;
  }
  
  .mobile-about-section .footer-description {
    font-size: 14px;
    color: #9CA3AF;
    line-height: 1.6;
    max-width: 100%;
    margin-bottom: 0;
  }
  
  .mobile-row {
    display: flex;
    gap: 32px;
    margin-bottom: 32px;
  }
  
  .mobile-column {
    flex: 1;
  }
  
  .mobile-column .footer-title {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 700;
  }
  
  .mobile-column .footer-links {
    margin-bottom: 0;
  }
  
  .mobile-column .footer-links li {
    margin-bottom: 14px;
  }
  
  .mobile-column .footer-links a {
    font-size: 14px;
    line-height: 1.5;
  }
  
  /* Mobile Badges Row */
  .mobile-badges-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }
  
  .mobile-badge-item {
    flex: 1;
    min-width: 90px;
    text-align: left;
  }
  
  .mobile-badge-item .badge-title {
    font-size: 14px;
    margin-bottom: 12px;
    font-weight: 600;
    text-align: left;
  }
  
  .mobile-badge-item .license-badge {
    width: 60px;
    height: 48px;
    margin: 0;
  }
  
  .mobile-badge-item .certification-badge {
    width: 50px;
    height: 40px;
    margin: 0;
  }
  
  .mobile-badge-item .security-badge {
    width: 80px;
    height: 28px;
    margin: 0;
  }
  
  /* Mobile Payment Section */
  .mobile-payment-section {
    margin-bottom: 32px;
  }
  
  .mobile-payment-section .footer-title {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 700;
  }
  
  .mobile-payment-section .payment-methods {
    gap: 16px;
    margin-bottom: 0;
    justify-content: flex-start;
  }
  
  .mobile-payment-section .payment-icon {
    width: 36px;
    height: 22px;
  }
  
  /* Mobile Social Section */
  .mobile-social-section {
    margin-bottom: 0;
  }
  
  .mobile-social-section .footer-title {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 700;
  }
  
  .mobile-social-section .social-links {
    gap: 20px;
    justify-content: flex-start;
  }
  
  .mobile-social-section .social-icon {
    width: 24px;
    height: 24px;
  }
  
  .footer-divider {
    margin: 32px 0 24px 0;
  }
  
  .copyright {
    font-size: 13px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 32px 0 16px;
  }
  
  .footer-container {
    padding: 0 16px;
  }
  
  .mobile-about-section {
    margin-bottom: 28px;
  }
  
  .mobile-about-section .footer-title {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .mobile-about-section .footer-description {
    font-size: 13px;
    line-height: 1.5;
  }
  
  .mobile-row {
    gap: 24px;
    margin-bottom: 28px;
  }
  
  .mobile-column .footer-title {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .mobile-column .footer-links li {
    margin-bottom: 12px;
  }
  
  .mobile-column .footer-links a {
    font-size: 13px;
  }
  
  .mobile-badges-row {
    gap: 12px;
    margin-bottom: 28px;
  }
  
  .mobile-badge-item .badge-title {
    font-size: 13px;
    margin-bottom: 10px;
  }
  
  .mobile-badge-item .license-badge {
    width: 50px;
    height: 40px;
  }
  
  .mobile-badge-item .certification-badge {
    width: 42px;
    height: 34px;
  }
  
  .mobile-badge-item .security-badge {
    width: 70px;
    height: 24px;
  }
  
  .mobile-payment-section,
  .mobile-social-section {
    margin-bottom: 28px;
  }
  
  .mobile-payment-section .footer-title,
  .mobile-social-section .footer-title {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .mobile-payment-section .payment-methods {
    gap: 12px;
  }
  
  .mobile-payment-section .payment-icon {
    width: 32px;
    height: 20px;
  }
  
  .mobile-social-section .social-links {
    gap: 16px;
  }
  
  .mobile-social-section .social-icon {
    width: 20px;
    height: 20px;
  }
  
  .footer-divider {
    margin: 24px 0 20px 0;
  }
  
  .copyright {
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
  }
}

/* Focus States for Accessibility */
.footer-links a:focus,
.social-icon:focus {
  outline: 2px solid #F1AE3D;
  outline-offset: 2px;
}
</style>