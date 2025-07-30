<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- About Section -->
        <div class="footer-column">
          <h3 class="footer-title">About</h3>
          <p class="footer-description">
            Discover endless excitement at HENG ONG BET. We're dedicated to delivering quality games and a secure, engaging experience.
          </p>
          
          <div class="footer-badge">
            <h4 class="badge-title">Game License</h4>
            <div class="badge-icon license-badge">
              <img :src="gcbIcon" alt="GCB License" />
            </div>
          </div>
        </div>
        
        <!-- Games Section -->
        <div class="footer-column">
          <h3 class="footer-title">Games</h3>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="handleLinkClick">Slots</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">Sports</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">Lottery</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">Casino</a></li>
          </ul>
          
          <div class="footer-badge">
            <h4 class="badge-title">Certification</h4>
            <div class="badge-icon certification-badge">
              <img :src="itechIcon" alt="iTech Certification" />
            </div>
          </div>
        </div>
        
        <!-- Info Section -->
        <div class="footer-column">
          <h3 class="footer-title">Info</h3>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="handleLinkClick">Promotions</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">About Us</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">Contact Us</a></li>
            <li><a href="#" @click.prevent="handleLinkClick">Terms & Conditions</a></li>
          </ul>
          
          <div class="footer-badge">
            <h4 class="badge-title">Security</h4>
            <div class="badge-icon security-badge">
              <img :src="threatMetrixIcon" alt="ThreatMetrix Security" />
            </div>
          </div>
        </div>
        
        <!-- Payment Methods Section -->
        <div class="footer-column">
          <h3 class="footer-title">Payment Methods</h3>
          <div class="payment-methods">
            <div class="payment-icon">
              <img :src="tngIcon" alt="Touch 'n Go" />
            </div>
            <div class="payment-icon">
              <img :src="bankIcon" alt="Bank Transfer" />
            </div>
            <div class="payment-icon">
              <img :src="duItNowIcon" alt="DuitNow" />
            </div>
            <div class="payment-icon">
              <img :src="grabIcon" alt="Grab" />
            </div>
          </div>
          
          <div class="footer-badge">
            <h4 class="badge-title">Follow Us</h4>
            <div class="social-links">
              <a href="#" @click.prevent="handleSocialClick('facebook')" class="social-icon">
                <img :src="fbIcon" alt="Facebook" />
              </a>
              <a href="#" @click.prevent="handleSocialClick('instagram')" class="social-icon">
                <img :src="instagramIcon" alt="Instagram" />
              </a>
              <a href="#" @click.prevent="handleSocialClick('whatsapp')" class="social-icon">
                <img :src="whatsappIcon" alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Divider Line -->
      <div class="footer-divider"></div>
      
      <!-- Copyright Section -->
      <div class="footer-bottom">
        <p class="copyright">Copyright © 2025 HENG ONG BET™. All rights reserved.</p>
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
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 32px;
  }
  
  .footer-column {
    min-height: auto;
    gap: 24px;
  }
  
  .footer-title {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 700;
  }
  
  .footer-description {
    font-size: 14px;
    margin-bottom: 0;
    max-width: 100%;
    flex-grow: 0;
    line-height: 1.6;
  }
  
  .footer-links {
    margin-bottom: 0;
    flex-grow: 0;
  }
  
  .footer-links li {
    margin-bottom: 14px;
  }
  
  .footer-links a {
    font-size: 14px;
    line-height: 1.5;
  }
  
  .payment-methods {
    gap: 16px;
    margin-bottom: 0;
    flex-grow: 0;
    justify-content: flex-start;
  }
  
  .payment-icon {
    width: 36px;
    height: 22px;
  }
  
  .social-links {
    gap: 20px;
    justify-content: flex-start;
  }
  
  .social-icon {
    width: 24px;
    height: 24px;
  }
  
  .footer-badge {
    margin-top: 0;
    align-self: flex-start;
  }
  
  .badge-title {
    font-size: 16px;
    margin-bottom: 12px;
    font-weight: 600;
  }
  
  .license-badge {
    width: 70px;
    height: 56px;
  }
  
  .certification-badge {
    width: 60px;
    height: 48px;
  }
  
  .security-badge {
    width: 120px;
    height: 40px;
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
  
  .footer-grid {
    gap: 32px;
  }
  
  .footer-column {
    gap: 20px;
  }
  
  .footer-title {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .footer-description {
    font-size: 13px;
    line-height: 1.5;
  }
  
  .footer-links li {
    margin-bottom: 12px;
  }
  
  .footer-links a {
    font-size: 13px;
  }
  
  .payment-methods {
    gap: 12px;
    flex-wrap: wrap;
  }
  
  .payment-icon {
    width: 32px;
    height: 20px;
  }
  
  .social-links {
    gap: 16px;
  }
  
  .social-icon {
    width: 20px;
    height: 20px;
  }
  
  .badge-title {
    font-size: 15px;
    margin-bottom: 10px;
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