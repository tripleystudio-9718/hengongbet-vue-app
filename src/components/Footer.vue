<template>
  <footer class="bg-gray-800 py-12 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-bold mb-4 text-white">About</h3>
          <p class="text-sm text-gray-400">
            We are a licensed online casino and sports betting platform dedicated to delivering quality entertainment and engaging experience.
          </p>
          <div class="mt-4">
            <h4 class="font-semibold text-white mb-2">Game License</h4>
            <div class="w-16 h-12 bg-gray-600 rounded flex items-center justify-center">
              <span class="text-xs text-white">GCB</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="font-bold mb-4 text-white">Games</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Slot</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Sports</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Lottery</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Casino</a></li>
          </ul>
          
          <div class="mt-6">
            <h4 class="font-semibold text-white mb-2">Certification</h4>
            <div class="w-16 h-12 bg-gray-600 rounded flex items-center justify-center">
              <span class="text-xs text-white">🛡️</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="font-bold mb-4 text-white">Info</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Promotions</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Contact Us</a></li>
            <li><a href="#" class="hover:text-yellow-500 transition-colors">Terms & Conditions</a></li>
          </ul>
          
          <div class="mt-6">
            <h4 class="font-semibold text-white mb-2">Security</h4>
            <div class="w-16 h-12 bg-gray-600 rounded flex items-center justify-center">
              <span class="text-xs text-white">🔒</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="font-bold mb-4 text-white">Payment Methods</h3>
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="w-12 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span class="text-xs text-white">💳</span>
            </div>
            <div class="w-12 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span class="text-xs text-white">📱</span>
            </div>
            <div class="w-12 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span class="text-xs text-white">💵</span>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold text-white mb-2">Follow Us</h4>
            <div class="flex space-x-2">
              <a href="#" class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <span class="text-xs text-white">f</span>
              </a>
              <a href="#" class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <span class="text-xs text-white">t</span>
              </a>
              <a href="#" class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <span class="text-xs text-white">i</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>Copyright © 2024 HENG ONG BET. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
a:hover {
  transform: translateX(2px);
  transition: all 0.3s ease;
}
</style>