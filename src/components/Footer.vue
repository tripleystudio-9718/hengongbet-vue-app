<template>
  <footer class="bg-gray-800 py-12 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- About Section -->
        <div>
          <h3 class="font-bold mb-4 text-white">About</h3>
          <p class="text-sm text-gray-400 mb-12">
            Discover endless excitement at HENG ONG BET. We're dedicated to delivering quality games and a secure, engaging experience.
          </p>
          
          <div>
            <h4 class="font-bold text-white mb-3">Game License</h4>
            <div class="w-20 h-16">
              <img :src="gcbIcon" alt="GCB License" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="font-bold mb-4 text-white">Games</h3>
          <ul class="space-y-3 text-sm text-gray-400 mb-12">
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Slots</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Sports</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Lottery</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Casino</a></li>
          </ul>
          
          <div>
            <h4 class="font-bold text-white mb-3">Certification</h4>
            <div class="w-16 h-12">
              <img :src="itechIcon" alt="iTech Certification" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        
        <!-- Info Section -->
        <div>
          <h3 class="font-bold mb-4 text-white">Info</h3>
          <ul class="space-y-3 text-sm text-gray-400 mb-12">
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Promotions</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Contact Us</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Terms & Conditions</a></li>
          </ul>
          
          <div>
            <h4 class="font-bold text-white mb-3">Security</h4>
            <div class="w-24 h-12">
              <img :src="threatMetrixIcon" alt="ThreatMetrix Security" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        
        <!-- Payment Methods Section -->
        <div>
          <h3 class="font-bold mb-4 text-white">Payment Methods</h3>
          <div class="flex items-center space-x-4 mb-12">
            <div class="w-10 h-6">
              <img :src="tngIcon" alt="Touch 'n Go" class="w-full h-full object-contain" />
            </div>
            <div class="w-10 h-6">
              <img :src="bankIcon" alt="Bank Transfer" class="w-full h-full object-contain" />
            </div>
            <div class="w-10 h-6">
              <img :src="duItNowIcon" alt="DuitNow" class="w-full h-full object-contain" />
            </div>
            <div class="w-10 h-6">
              <img :src="grabIcon" alt="Grab" class="w-full h-full object-contain" />
            </div>
          </div>
          
          <div>
            <h4 class="font-bold text-white mb-3">Follow Us</h4>
            <div class="flex items-center space-x-6">
              <a href="#" class="w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img :src="fbIcon" alt="Facebook" class="w-full h-full object-contain" />
              </a>
              <a href="#" class="w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img :src="instagramIcon" alt="Instagram" class="w-full h-full object-contain" />
              </a>
              <a href="#" class="w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img :src="whatsappIcon" alt="WhatsApp" class="w-full h-full object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-6 text-left text-sm text-gray-400">
        <p>Copyright © 2025 HENG ONG BET™. All rights reserved.</p>
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
  }
}
</script>

<style scoped>
footer {
  background: #242424;
  box-shadow: 0 2px 9.3px 0 rgba(0, 0, 0, 0.25);
}

a:hover {
  transform: translateX(2px);
  transition: all 0.3s ease;
}

img {
  filter: brightness(0.9);
  transition: filter 0.3s ease;
}

img:hover {
  filter: brightness(1.1);
}

h4 {
  font-weight: 600;
  font-size: 0.95rem;
}
</style>