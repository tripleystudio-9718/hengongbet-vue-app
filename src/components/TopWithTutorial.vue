<template>
  <div class="tutorial-overall">
    <!-- Tab Navigation -->
    <div class="tabs-container">
      <div class="tabs">
        <button 
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-button"
          :class="{ active: activeTab === tab.id }"
          @click="setActiveTab(tab.id)"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- Content Area -->
    <div class="content-wrapper">
      <!-- Mobile Carousel -->
      <div class="mobile-carousel" v-show="isMobile">
        <div class="carousel-container">
          <div 
            class="image-slider-window"
            @mousedown="startSliderDrag"
            @mousemove="onSliderDrag"
            @mouseup="endSliderDrag"
            @mouseleave="endSliderDrag"
            @touchstart="startSliderDrag"
            @touchmove="onSliderDrag"
            @touchend="endSliderDrag"
          >
            <div 
              ref="sliderTrack"
              class="image-slider-track"
              :style="{
                transform: `translateX(-${sliderIndex * 100}%)`,
                transitionDuration: sliderTransitionSpeed
              }"
              @transitionend="handleSliderTransitionEnd"
            >
              <div 
                v-for="(image, index) in sliderLoopedImages" 
                :key="index"
                class="image-slide"
              >
                <div class="phone-mockup">
                  <img :src="image.src" :alt="image.alt" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Steps for Mobile -->
        <div class="mobile-steps">
          <div class="steps-header">
            <h3>{{ currentTabData.title }} <span class="highlight">{{ currentTabData.subtitle.split(' ')[0] }} {{ currentTabData.subtitle.split(' ')[1] }} {{ currentTabData.subtitle.split(' ')[2] }}</span> {{ currentTabData.subtitle.split(' ').slice(3).join(' ') }}</h3>
          </div>
          
          <div class="steps-list">
            <div 
              v-for="(step, index) in visibleSteps" 
              :key="step.id"
              class="step-item"
              :class="{ 
                active: index === currentStep,
                'opacity-hint': index !== currentStep 
              }"
              @click="setCurrentStep(index)"
            >
              <div class="step-number">Step {{ step.id }}</div>
              <div class="step-content">{{ step.content }}</div>
            </div>
          </div>

          <!-- Step Navigation -->
          <div class="step-navigation">
            <button 
              class="step-nav-btn" 
              @click="prevStep"
              :disabled="currentStep === 0"
            >
              <ChevronUpIcon class="w-5 h-5" />
            </button>
            <button 
              class="step-nav-btn" 
              @click="nextStep"
              :disabled="currentStep === visibleSteps.length - 1"
            >
              <ChevronDownIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="desktop-layout" v-show="!isMobile">
        <div class="left-section">
          <div 
            class="desktop-slider-window"
            @mousedown="startSliderDrag"
            @mousemove="onSliderDrag"
            @mouseup="endSliderDrag"
            @mouseleave="endSliderDrag"
            @touchstart="startSliderDrag"
            @touchmove="onSliderDrag"
            @touchend="endSliderDrag"
          >
            <div 
              class="desktop-slider-track"
              :style="{
                transform: `translateX(-${sliderIndex * 100}%)`,
                transitionDuration: sliderTransitionSpeed
              }"
              @transitionend="handleSliderTransitionEnd"
            >
              <div 
                v-for="(image, index) in sliderLoopedImages" 
                :key="index"
                class="desktop-slide"
              >
                <div class="phone-mockup-desktop">
                  <img :src="image.src" :alt="image.alt" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="right-section">
          <div class="tutorial-header">
            <h2>{{ currentTabData.title }} <span class="highlight">Instant Top Up</span> {{ currentTabData.subtitle.split('Instant Top Up')[1] }}</h2>
          </div>

          <div class="steps-container">
            <div 
              v-for="(step, index) in currentTabData.steps" 
              :key="step.id"
              class="step-item-desktop"
              :class="{ 
                active: index === currentStep,
                'opacity-hint': index > currentStep 
              }"
              @click="setCurrentStep(index)"
            >
              <div class="step-indicator">
                <div class="step-circle">{{ step.id }}</div>
                <div class="step-line" v-if="index < currentTabData.steps.length - 1"></div>
              </div>
              <div class="step-details">
                <h4>Step {{ step.id }}</h4>
                <p>{{ step.content }}</p>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <div class="desktop-navigation">
            <button 
              class="nav-arrow" 
              @click="prevStep"
              :disabled="currentStep === 0"
            >
              <ChevronUpIcon class="w-6 h-6" />
            </button>
            <button 
              class="nav-arrow" 
              @click="nextStep"
              :disabled="currentStep === currentTabData.steps.length - 1"
            >
              <ChevronDownIcon class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-vue-next'

const activeTab = ref('topup')
const currentStep = ref(0)
const isMobile = ref(false)

// Slider state
const sliderOriginalImages = ref([])
const sliderLoopedImages = ref([])
const sliderIndex = ref(1)
const sliderInterval = ref(null)
const sliderTransitionSpeed = ref('0.5s')
const isSliderDragging = ref(false)
const sliderStartX = ref(0)
const sliderDeltaX = ref(0)
const sliderThreshold = ref(50)

const tabs = [
  { id: 'topup', name: 'Instant Top Up' },
  { id: 'transfer', name: 'Bank Transfer' },
  { id: 'withdraw', name: 'Withdraw' }
]

const tabsData = {
  topup: {
    title: 'How to top up via',
    subtitle: 'Instant Top Up in heng ong bet?',
    images: [
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wit8pgaIqElhpJJmyL0j2YqSYxDhEB.png', alt: 'Mobile Frame Step 1' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wit8pgaIqElhpJJmyL0j2YqSYxDhEB.png', alt: 'Mobile Frame Step 2' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wit8pgaIqElhpJJmyL0j2YqSYxDhEB.png', alt: 'Mobile Frame Step 3' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wit8pgaIqElhpJJmyL0j2YqSYxDhEB.png', alt: 'Mobile Frame Step 4' }
    ],
    steps: [
      { id: 1, content: 'Log in HENG ONG BET' },
      { id: 2, content: 'Click "Top Up Button"' },
      { id: 3, content: 'Click "Instant Top Up"' },
      { id: 4, content: 'Select the bank you want to use' }
    ]
  },
  transfer: {
    title: 'Bank Transfer Tutorial',
    subtitle: 'How to transfer money via bank transfer',
    images: [
      { src: '/placeholder.svg?height=600&width=300&text=Bank+Transfer+1', alt: 'Bank Transfer Step 1' },
      { src: '/placeholder.svg?height=600&width=300&text=Bank+Transfer+2', alt: 'Bank Transfer Step 2' }
    ],
    steps: [
      { id: 1, content: 'Select Bank Transfer option' },
      { id: 2, content: 'Enter transfer amount' },
      { id: 3, content: 'Confirm bank details' },
      { id: 4, content: 'Complete transfer' }
    ]
  },
  withdraw: {
    title: 'Withdraw Tutorial',
    subtitle: 'How to withdraw your winnings',
    images: [
      { src: '/placeholder.svg?height=600&width=300&text=Withdraw+1', alt: 'Withdraw Step 1' },
      { src: '/placeholder.svg?height=600&width=300&text=Withdraw+2', alt: 'Withdraw Step 2' }
    ],
    steps: [
      { id: 1, content: 'Go to withdraw section' },
      { id: 2, content: 'Enter withdrawal amount' },
      { id: 3, content: 'Verify your identity' },
      { id: 4, content: 'Confirm withdrawal' }
    ]
  }
}

const currentTabData = computed(() => tabsData[activeTab.value])
const visibleSteps = computed(() => currentTabData.value.steps.slice(0, 4))

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const initializeSliders = () => {
  // Initialize looped images for infinite scroll effect
  sliderOriginalImages.value = currentTabData.value.images
  sliderLoopedImages.value = [
    sliderOriginalImages.value[sliderOriginalImages.value.length - 1],
    ...sliderOriginalImages.value,
    sliderOriginalImages.value[0]
  ]
  
  // Start auto-slide
  startSliderAutoSlide()
}

const setActiveTab = (tabId) => {
  activeTab.value = tabId
  currentStep.value = 0
  sliderIndex.value = 1
  
  // Clear existing interval
  clearInterval(sliderInterval.value)
  
  // Reinitialize slider for new tab
  initializeSliders()
}

const setCurrentStep = (stepIndex) => {
  currentStep.value = stepIndex
  // Sync slider with step
  sliderIndex.value = stepIndex + 1
  resetSliderAutoSlide()
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
    sliderIndex.value = currentStep.value + 1
    resetSliderAutoSlide()
  }
}

const nextStep = () => {
  if (currentStep.value < currentTabData.value.steps.length - 1) {
    currentStep.value++
    sliderIndex.value = currentStep.value + 1
    resetSliderAutoSlide()
  }
}

// Slider methods (adapted from your download page)
const startSliderAutoSlide = () => {
  sliderInterval.value = setInterval(() => {
    sliderIndex.value++
    // Sync step with slider
    const actualIndex = sliderIndex.value - 1
    if (actualIndex < currentTabData.value.steps.length) {
      currentStep.value = actualIndex
    }
  }, 5000) // 5s per image
}

const resetSliderAutoSlide = () => {
  clearInterval(sliderInterval.value)
  startSliderAutoSlide()
}

const handleSliderTransitionEnd = () => {
  if (sliderIndex.value >= sliderLoopedImages.value.length - 1) {
    sliderTransitionSpeed.value = '0s'
    sliderIndex.value = 1
    currentStep.value = 0
    
    setTimeout(() => {
      sliderTransitionSpeed.value = '0.5s'
    }, 50)
    
    // Prevent interval stacking
    clearInterval(sliderInterval.value)
    startSliderAutoSlide()
  } else if (sliderIndex.value <= 0) {
    sliderTransitionSpeed.value = '0s'
    sliderIndex.value = sliderLoopedImages.value.length - 2
    currentStep.value = currentTabData.value.steps.length - 1
    
    setTimeout(() => {
      sliderTransitionSpeed.value = '0.5s'
    }, 50)
  }
}

const startSliderDrag = (e) => {
  clearInterval(sliderInterval.value)
  isSliderDragging.value = true
  sliderStartX.value = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
  sliderTransitionSpeed.value = '0s'
}

const onSliderDrag = (e) => {
  if (!isSliderDragging.value) return
  const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
  sliderDeltaX.value = currentX - sliderStartX.value
}

const endSliderDrag = () => {
  if (!isSliderDragging.value) return
  isSliderDragging.value = false
  sliderTransitionSpeed.value = '0.5s'
  
  if (sliderDeltaX.value > sliderThreshold.value) {
    sliderIndex.value--
    if (currentStep.value > 0) {
      currentStep.value--
    }
  } else if (sliderDeltaX.value < -sliderThreshold.value) {
    sliderIndex.value++
    if (currentStep.value < currentTabData.value.steps.length - 1) {
      currentStep.value++
    }
  }
  
  sliderDeltaX.value = 0
  
  setTimeout(() => {
    startSliderAutoSlide()
  }, 3000)
}

onMounted(() => {
  checkMobile()
  initializeSliders()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  clearInterval(sliderInterval.value)
})
</script>

<style scoped>
.tutorial-overall {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  font-family: 'Inter', sans-serif;
  color: white;
}

/* Tab Navigation */
.tabs-container {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.tabs {
  display: flex;
  gap: 4px;
  background-color: #333;
  border-radius: 25px;
  padding: 4px;
}

.tab-button {
  background: transparent;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tab-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.tab-button.active {
  background: linear-gradient(135deg, #F0AD3C 0%, #ED9326 100%);
  color: #000;
}

/* Content Wrapper */
.content-wrapper {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Mobile Carousel */
.mobile-carousel {
  display: block;
}

.carousel-container {
  margin-bottom: 30px;
}

.image-slider-window {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  cursor: grab;
}

.image-slider-window:active {
  cursor: grabbing;
}

.image-slider-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.image-slide {
  flex: 0 0 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
}

.phone-mockup {
  width: 200px;
  height: 350px;
  background: #000;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-mockup img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

/* Desktop Layout */
.desktop-layout {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.left-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.desktop-slider-window {
  width: 300px;
  height: 600px;
  overflow: hidden;
  border-radius: 30px;
  cursor: grab;
}

.desktop-slider-window:active {
  cursor: grabbing;
}

.desktop-slider-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.desktop-slide {
  flex: 0 0 100%;
  max-width: 100%;
}

.phone-mockup-desktop {
  width: 300px;
  height: 600px;
  background: #000;
  border-radius: 30px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-mockup-desktop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
}

.right-section {
  flex: 1;
  position: relative;
}

.tutorial-header h2 {
  font-size: 22px;
  margin-bottom: 30px;
  color: white;
  line-height: 1.4;
}

.steps-container {
  position: relative;
}

.step-item-desktop {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 15px;
  border-radius: 10px;
}

.step-item-desktop:hover {
  background: rgba(255, 255, 255, 0.05);
}

.step-item-desktop.active {
  background: rgba(240, 173, 60, 0.1);
}

.step-item-desktop.opacity-hint {
  opacity: 0.4;
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.step-circle {
  width: 30px;
  height: 30px;
  background: #F0AD3C;
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
}

.step-line {
  width: 2px;
  height: 40px;
  background: rgba(240, 173, 60, 0.3);
  margin-top: 10px;
}

.step-details h4 {
  font-size: 16px;
  margin-bottom: 5px;
  color: #F0AD3C;
}

.step-details p {
  font-size: 14px;
  color: #ccc;
  line-height: 1.5;
}

.desktop-navigation {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-arrow {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-arrow:hover {
  background: rgba(240, 173, 60, 0.3);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Mobile Steps */
.mobile-steps {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
}

.steps-header h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
  line-height: 1.4;
}

.steps-list {
  margin-bottom: 20px;
}

.step-item {
  padding: 15px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.step-item.active {
  background: rgba(240, 173, 60, 0.2);
  border: 1px solid #F0AD3C;
}

.step-item.opacity-hint {
  opacity: 0.5;
}

.step-number {
  font-size: 12px;
  color: #F0AD3C;
  margin-bottom: 5px;
}

.step-content {
  font-size: 14px;
}

.step-navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.step-nav-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.step-nav-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.step-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.highlight {
  color: #F0AD3C;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-layout {
    display: none;
  }
  
  .tabs {
    overflow-x: auto;
    scrollbar-width: none;
  }
  
  .tabs::-webkit-scrollbar {
    display: none;
  }
  
  .tab-button {
    font-size: 12px;
    padding: 8px 16px;
  }
}

@media (min-width: 769px) {
  .mobile-carousel {
    display: none;
  }
}
</style>