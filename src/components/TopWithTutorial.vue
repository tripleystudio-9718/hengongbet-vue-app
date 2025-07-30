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
          {{ $t(`tutorialTabs.tabs.${tab.id}`) }}
        </button>
      </div>
    </div>
            
    <!-- Tab Content -->
    <div class="tab-content-wrapper">
      <!-- Main Title with separated colors -->
      <h1>
        <span class="highlight">{{ $t('tutorialTabs.titleH1') }}</span>
        <span class="regular-text">{{ ' ' + $t('tutorialTabs.titleH1Part2') }}</span>
      </h1>
      
      <!-- Dynamic Tab Content -->
      <div v-if="currentTabData" class="tab-content">
        <div class="content-container">
          <!-- Image Slider Section -->
          <div class="image-section">
            <div class="image-slider-window"
              @mousedown="startSliderDrag(activeTab, $event)"
              @mousemove="onSliderDrag(activeTab, $event)"
              @mouseup="endSliderDrag(activeTab)"
              @mouseleave="endSliderDrag(activeTab)"
              @touchstart="startSliderDrag(activeTab, $event)"
              @touchmove="onSliderDrag(activeTab, $event)"
              @touchend="endSliderDrag(activeTab)">
                                          
              <div
                class="image-slider-track"
                :style="{
                  transform: `translateX(-${sliders[activeTab].index * 100}%)`,
                  transitionDuration: sliders[activeTab].transitionSpeed
                }"
                @transitionend="handleSliderTransitionEnd(activeTab)"
              >
                <div
                  class="image-slide"
                  v-for="(img, index) in sliders[activeTab].images"
                  :key="index"
                >
                  <img :src="img" :alt="$t('tutorialTabs.alt.stepImage', { step: index + 1 })" />
                </div>
              </div>
            </div>
          </div>
                              
          <!-- Guide Section -->
          <div class="guide-section">
            <!-- Title with separated colors -->
            <h2>
              <span class="regular-text">{{ $t(`tutorialTabs.titles.${activeTab}.prefix`) }}</span>
              <span class="highlight">{{ ' ' + $t(`tutorialTabs.titles.${activeTab}.highlight`) + ' ' }}</span>
              <span class="regular-text">{{ $t(`tutorialTabs.titles.${activeTab}.suffix`) }}</span>
            </h2>
                                    
            <div class="steps-container">
              <template v-for="(step, index) in currentTabData.steps" :key="index">
                <div                   
                  class="step-item"
                  v-if="showAllSteps || index < 4"
                  :class="{
                     hidden: !showAllSteps && index >= 4,
                    'is-last': index === currentTabData.steps.length - 1
                  }"
                >
                  <div class="step-indicator">
                    <div class="step-circle" v-if="index === 0"></div>
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} {{ index + 1 }}</div>
                    <p>{{ $t(`tutorialTabs.steps.${activeTab}.${index}`) }}</p>
                  </div>
                </div>
              </template>
            </div>
                                    
            <!-- Show More Button (only if more than 4 steps) -->
            <button               
              v-if="currentTabData.steps.length > 4"
              class="show-more-btn"               
              @click="toggleSteps"
              :aria-label="showAllSteps ? $t('tutorialTabs.ui.showLess') : $t('tutorialTabs.ui.showMore')"
            >
              <svg                 
                class="toggle-arrow"
                :class="{ rotated: showAllSteps }"
                width="12"                 
                height="8"                 
                viewBox="0 0 12 8"                 
                fill="none"
              >
                <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import mobileFrame from '@/assets/mobile-frame.png'

// Reactive state
const activeTab = ref('topup')
const showAllSteps = ref(false)

// Tab configuration
const tabs = [
  { id: 'topup' },
  { id: 'transfer' },
  { id: 'withdraw' }
]

// Content data structure (steps count for each tab)
const tabsConfig = {
  topup: { stepCount: 9 },
  transfer: { stepCount: 11 },
  withdraw: { stepCount: 10 }
}

// Computed property for current tab data
const currentTabData = computed(() => ({
  steps: Array(tabsConfig[activeTab.value].stepCount).fill().map((_, i) => ({ index: i }))
}))

// Slider configuration
const createSliderConfig = (imageCount) => ({
  originalImages: Array(imageCount).fill(mobileFrame),
  images: [],
  index: 1,
  interval: null,
  transitionSpeed: '0.5s',
  isDragging: false,
  startX: 0,
  deltaX: 0,
  threshold: 50
})

const sliders = reactive({
  topup: createSliderConfig(3),
  transfer: createSliderConfig(4),
  withdraw: createSliderConfig(5)
})

// Methods
const toggleSteps = () => {
  showAllSteps.value = !showAllSteps.value
}

const setActiveTab = (tabId) => {
  // Clear all intervals
  Object.values(sliders).forEach(slider => {
    if (slider.interval) {
      clearInterval(slider.interval)
      slider.interval = null
    }
  })
      
  activeTab.value = tabId
  showAllSteps.value = false
      
  // Start auto-slide for new tab
  setTimeout(() => startAutoSlide(tabId), 100)
}

const initializeSliders = () => {
  Object.entries(sliders).forEach(([key, slider]) => {
    slider.images = [
      slider.originalImages[slider.originalImages.length - 1],
      ...slider.originalImages,
      slider.originalImages[0]
    ]
  })
  startAutoSlide(activeTab.value)
}

const startAutoSlide = (sliderId) => {
  const slider = sliders[sliderId]
  if (!slider) return
      
  slider.interval = setInterval(() => {
    slider.index++
  }, 4000)
}

const handleSliderTransitionEnd = (sliderId) => {
  const slider = sliders[sliderId]
  if (!slider || slider.index < slider.images.length - 1) return
      
  slider.transitionSpeed = '0s'
  slider.index = 1
      
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      slider.transitionSpeed = '0.5s'
    })
  })
      
  clearInterval(slider.interval)
  startAutoSlide(sliderId)
}

const getEventX = (e) => e.type.includes('mouse') ? e.clientX : e.touches[0].clientX

const startSliderDrag = (sliderId, e) => {
  const slider = sliders[sliderId]
  if (!slider) return
      
  clearInterval(slider.interval)
  slider.isDragging = true
  slider.startX = getEventX(e)
  slider.transitionSpeed = '0s'
}

const onSliderDrag = (sliderId, e) => {
  const slider = sliders[sliderId]
  if (!slider?.isDragging) return
      
  slider.deltaX = getEventX(e) - slider.startX
}

const endSliderDrag = (sliderId) => {
  const slider = sliders[sliderId]
  if (!slider?.isDragging) return
      
  slider.isDragging = false
  slider.transitionSpeed = '0.5s'
      
  if (Math.abs(slider.deltaX) > slider.threshold) {
    slider.index += slider.deltaX > 0 ? -1 : 1
  }
      
  slider.deltaX = 0
  setTimeout(() => startAutoSlide(sliderId), 3000)
}

// Lifecycle
onMounted(initializeSliders)

onUnmounted(() => {
  Object.values(sliders).forEach(slider => {
    if (slider.interval) clearInterval(slider.interval)
  })
})
</script>

<style scoped>
.tutorial-overall {
  width: 100%;
  background-color: #27272A;
  padding: 40px 0;
  position: relative;
  background-image: url('@/assets/tutorial-guide-bg.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: white;
  padding-bottom: 2rem;
}

/* Tab Navigation */
.tabs-container {
  padding: 1.25rem;
  display: flex;
  justify-content: center;
}

.tabs {
  display: flex;
  gap: 0.25rem;
  background-color: #333;
  border-radius: 1.5rem;
  padding: 0.25rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tabs::-webkit-scrollbar {
  display: none;
}

.tab-button {
  background: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  border-radius: 1.25rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.tab-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.tab-button.active {
  background: linear-gradient(135deg, #F0AD3C 0%, #ED9326 100%);
  color: #000;
  font-weight: 600;
}

/* Content Layout */
.tab-content-wrapper {
  padding: 0 1.25rem;
  width: 100%;
  box-sizing: border-box;
}

.tab-content-wrapper h1 {
  font-size: 40px;
  font-weight: 500;
  text-align: center;
}

.tab-content {
  max-width: 75rem;
  margin: 0 auto;
  width: 100%;
}

.content-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
  width: 100%;
}

/* Image Section */
.image-section {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.image-slider-window {
  width: 100%;
  max-width: 20rem;
  overflow: hidden;
  border-radius: 0.9375rem;
  padding: 0;
  cursor: grab;
  user-select: none;
  box-sizing: border-box;
}

.image-slider-window:active {
  cursor: grabbing;
}

.image-slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.image-slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-slide img {
  width: 100%;
  max-width: 16.25rem;
  height: auto;
  border-radius: 0.625rem;
  pointer-events: none;
  display: block;
}

/* Guide Section */
.guide-section {
  padding: 1.25rem 0;
}

.guide-section h2 {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 1.875rem;
  color: white;
  line-height: 1.4;
}

/* Color Classes */
.highlight {
  color: #F0AD3C;
}

.regular-text {
  color: white;
}

/* Steps */
.steps-container {
  margin-bottom: 1.25rem;
}

.step-item {
  display: flex;
  align-items: flex-start;
  padding: 0.9375rem 0;
  position: relative;
}

.step-item.hidden {
  display: none;
}

/* Step Indicators */
.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.25rem;
  position: relative;
  flex-shrink: 0;
  width: 1.75rem;
}

.step-circle {
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 50%;
  background: #F0AD3C;
  position: relative;
  z-index: 2;
}

.step-line {
  width: 0.125rem;
  background: repeating-linear-gradient(
    to bottom,
    #F0AD3C 0,
    #F0AD3C 0.25rem,
    transparent 0.25rem,
    transparent 0.5rem
  );
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 3.125rem;
  top: 0;
  z-index: 1;
}

/* Step Content */
.step-content {
  flex: 1;
  padding-top: 0.125rem;
}

.step-number {
  color: #F0AD3C;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3125rem;
}

.step-content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* Show More Button */
.show-more-btn {
  background: none;
  border: none;
  color: #F0AD3C;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.show-more-btn:hover {
  background-color: rgba(240, 173, 60, 0.1);
  transform: scale(1.1);
}

.show-more-btn:focus {
  outline: 2px solid #F0AD3C;
  outline-offset: 2px;
}

.toggle-arrow {
  transition: transform 0.3s ease;
}

.toggle-arrow.rotated {
  transform: rotate(180deg);
}

/* Mobile Responsive Design */
@media (max-width: 1024px) {
  .content-container {
    gap: 2rem;
  }
      
  .guide-section h2 {
    font-size: 1.375rem;
  }
}

@media (max-width: 768px) {
  .tutorial-overall {
    padding-bottom: 1.5rem;
  }
    
  .tabs-container {
    padding: 1rem 0.5rem;
  }
    
  .tab-button {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
  }
    
  .content-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }
    
  .tab-content-wrapper {
    padding: 0 0.75rem;
  }
    
  .image-section {
    order: 1;
    width: 100%;
    max-width: 100%;
  }
    
  .image-slider-window {
    max-width: 18rem;
    margin: 0 auto;
    padding: 1rem;
  }
    
  .image-slide img {
    max-width: 14rem;
    width: 100%;
    height: auto;
  }
    
  .guide-section {
    order: 2;
    padding: 0;
    width: 100%;
  }
    
  .guide-section h2 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }
    
  .step-item {
    padding: 0.75rem 0;
  }
    
  .step-indicator {
    margin-right: 0.9375rem;
    width: 1.5rem;
  }
    
  .step-line {
    height: 2.8125rem;
  }
    
  .step-number {
    font-size: 0.875rem;
  }
    
  .step-content p {
    font-size: 0.875rem;
  }
    
  .show-more-btn {
    margin-left: 1.8125rem;
  }
}

@media (max-width: 480px) {
  .tabs-container {
    padding: 0.75rem 0.5rem;
  }
    
  .tab-content-wrapper {
    padding: 0 0.5rem;
  }

  .tab-content-wrapper h1 {
    font-size: 1.2rem;
  }
    
  .content-container {
    gap: 1.25rem;
  }
    
  .image-slider-window {
    max-width: 16rem;
    padding: 0.75rem;
  }
    
  .image-slide img {
    max-width: 12rem;
  }
    
  .guide-section h2 {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
    
  .step-item {
    padding: 0.625rem 0;
  }
    
  .step-indicator {
    margin-right: 0.75rem;
    width: 1.375rem;
  }
    
  .step-circle {
    width: 0.8125rem;
    height: 0.8125rem;
  }
    
  .step-line {
    height: 2.5rem;
  }
    
  .step-number {
    font-size: 0.8125rem;
  }
    
  .step-content p {
    font-size: 0.8125rem;
    line-height: 1.5;
  }
    
  .show-more-btn {
    width: 2.25rem;
    height: 2.25rem;
    margin-left: 1.625rem;
  }
}

@media (max-width: 360px) {
  .tabs-container {
    padding: 0.75rem 0.25rem;
  }
    
  .tab-content-wrapper {
    padding: 0 0.25rem;
  }
    
  .tab-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.6875rem;
  }
    
  .image-slider-window {
    max-width: 14rem;
    padding: 0.5rem;
  }
    
  .image-slide img {
    max-width: 10rem;
  }
    
  .guide-section h2 {
    font-size: 1rem;
  }
    
  .step-content p {
    font-size: 0.75rem;
  }
    
  .step-number {
    font-size: 0.75rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .image-slider-track,
  .toggle-arrow,
  .show-more-btn,
  .tab-button {
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .step-line,
  .step-circle {
    background: #FFD700;
  }
      
  .highlight,
  .step-number,
  .show-more-btn {
    color: #FFD700;
  }
}
</style>
