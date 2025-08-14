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
                              
          <!-- Guide Section with Dynamic Content -->
          <div class="guide-section">
            <!-- Top-up Content -->
            <div v-if="activeTab === 'topup'" class="tab-guide-content">
              <h2>
                <span class="highlight">{{ $t('tutorialTabs.guides.topup.title.highlight') }}</span>
                <span class="regular-text">{{ $t('tutorialTabs.guides.topup.title.regular') }}</span>
              </h2>
              
              <div class="steps-container">
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-circle"></div>
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 1</div>
                    <p v-html="$t('tutorialTabs.guides.topup.steps.0')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 2</div>
                    <p v-html="$t('tutorialTabs.guides.topup.steps.1')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 3</div>
                    <p v-html="$t('tutorialTabs.guides.topup.steps.2')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 4</div>
                    <p v-html="$t('tutorialTabs.guides.topup.steps.3')"></p>
                  </div>
                </div>
                
                <div class="step-item" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 5</div>
                    <p v-html="$t('tutorialTabs.guides.topup.steps.4')"></p>
                  </div>
                </div>
                
                <div class="step-item" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 6</div>
                    <p v-html="$t('tutorialTabs.guides.topup.steps.5')"></p>
                  </div>
                </div>
                
                <div class="step-item" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 7</div>
                    <p v-html="$t('tutorialTabs.guides.topup.steps.6')"></p>
                  </div>
                </div>
                
                <div class="step-item is-last" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 8</div>
                    <p v-html="$t('tutorialTabs.guides.topup.steps.7')"></p>
                  </div>
                </div>
              </div>
              
              <div class="important-note" v-if="showAllSteps">
                <p v-html="$t('tutorialTabs.guides.topup.note')"></p>
              </div>
              
              <button class="show-more-btn" @click="toggleSteps">
                <svg class="toggle-arrow" :class="{ rotated: showAllSteps }" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <!-- Transfer Content -->
            <div v-if="activeTab === 'transfer'" class="tab-guide-content">
              <h2>
                <span class="highlight">{{ $t('tutorialTabs.guides.transfer.title.highlight') }}</span>
                <span class="regular-text">{{ $t('tutorialTabs.guides.transfer.title.regular') }}</span>
              </h2>
              
              <div class="steps-container">
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-circle"></div>
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 1</div>
                    <p v-html="$t('tutorialTabs.guides.transfer.steps.0')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 2</div>
                    <p v-html="$t('tutorialTabs.guides.transfer.steps.1')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 3</div>
                    <p v-html="$t('tutorialTabs.guides.transfer.steps.2')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 4</div>
                    <p v-html="$t('tutorialTabs.guides.transfer.steps.3')"></p>
                  </div>
                </div>
                
                <div class="step-item" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 5</div>
                    <p v-html="$t('tutorialTabs.guides.transfer.steps.4')"></p>
                  </div>
                </div>
                
                <div class="step-item is-last" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 6</div>
                    <p v-html="$t('tutorialTabs.guides.transfer.steps.5')"></p>
                  </div>
                </div>
              </div>
              
              <div class="important-note" v-if="showAllSteps">
                <p v-html="$t('tutorialTabs.guides.transfer.note')"></p>
              </div>
              
              <button class="show-more-btn" @click="toggleSteps">
                <svg class="toggle-arrow" :class="{ rotated: showAllSteps }" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <!-- Withdraw Content -->
            <div v-if="activeTab === 'withdraw'" class="tab-guide-content">
              <h2>
                <span class="highlight">{{ $t('tutorialTabs.guides.withdraw.title.highlight') }}</span>
                <span class="regular-text">{{ $t('tutorialTabs.guides.withdraw.title.regular') }}</span>
              </h2>
              
              <div class="steps-container">
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-circle"></div>
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 1</div>
                    <p v-html="$t('tutorialTabs.guides.withdraw.steps.0')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 2</div>
                    <p v-html="$t('tutorialTabs.guides.withdraw.steps.1')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 3</div>
                    <p v-html="$t('tutorialTabs.guides.withdraw.steps.2')"></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 4</div>
                    <p v-html="$t('tutorialTabs.guides.withdraw.steps.3')"></p>
                  </div>
                </div>
                
                <div class="step-item" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 5</div>
                    <p v-html="$t('tutorialTabs.guides.withdraw.steps.4')"></p>
                  </div>
                </div>
                
                <div class="step-item" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 6</div>
                    <p v-html="$t('tutorialTabs.guides.withdraw.steps.5')"></p>
                  </div>
                </div>
                
                <div class="step-item is-last" v-if="showAllSteps">
                  <div class="step-indicator">
                    <div class="step-line"></div>
                  </div>
                  <div class="step-content">
                    <div class="step-number">{{ $t('tutorialTabs.ui.step') }} 7</div>
                    <p v-html="$t('tutorialTabs.guides.withdraw.steps.6')"></p>
                  </div>
                </div>
              </div>
              
              <div class="withdrawal-reminders" v-if="showAllSteps">
                <h4>{{ $t('tutorialTabs.guides.withdraw.reminders.title') }}</h4>
                <ul>
                  <li v-for="(reminder, index) in withdrawalReminders" :key="index" v-html="reminder"></li>
                </ul>
              </div>
              
              <button class="show-more-btn" @click="toggleSteps">
                <svg class="toggle-arrow" :class="{ rotated: showAllSteps }" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import topupTutorialStepsFrame from '@/assets/topup-tutorial-steps-frame.png'

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

// Computed property for withdrawal reminders
const withdrawalReminders = computed(() => {
  // Try to get from translation first, fallback to hardcoded
  try {
    return [
      "Withdrawals must follow any <strong>bonus turnover rules</strong> if applicable.",
      "Make sure your <strong>bank details are correct and updated</strong> in your profile.", 
      "Use the same method <strong>(bank account)</strong> that you used to deposit for faster processing.",
      "If you've forgotten your <strong>PIN</strong>, use the reset option or contact support."
    ]
  } catch (e) {
    return [
      "Withdrawals must follow any <strong>bonus turnover rules</strong> if applicable.",
      "Make sure your <strong>bank details are correct and updated</strong> in your profile.", 
      "Use the same method <strong>(bank account)</strong> that you used to deposit for faster processing.",
      "If you've forgotten your <strong>PIN</strong>, use the reset option or contact support."
    ]
  }
})

// Slider configuration
const createSliderConfig = (imageCount) => ({
  originalImages: Array(imageCount).fill(topupTutorialStepsFrame),
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
  align-items: center;
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
  margin-top: 1rem;
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
    margin-top: 0.75rem;
  }
  
  .important-note {
    padding: 0 10px !important;
  }
  
  .important-note p {
    font-size: 10px !important;
  }
  
  .withdrawal-reminders {
    padding: 0 10px !important;
  }
  
  .withdrawal-reminders li {
    font-size: 10px !important;
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

/* Updated styles for dynamic PDF content section */
.pdf-content-section {
  margin-top: 3rem;
  padding: 60px 20px;
  background: transparent;
  color: #ffffff;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.pdf-content-section .content-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: transparent;
  padding: 0;
}

.guide-content {
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pdf-title {
  font-size: 36px;
  font-weight: 700;
  color: #F2B240;
  text-align: center;
  margin: 0 0 40px 0;
  line-height: 1.2;
}

.guide-block {
  background: transparent;
  padding: 0;
  margin-bottom: 40px;
}

.guide-block:last-child {
  margin-bottom: 0;
}

.guide-block h2 {
  font-size: 28px;
  font-weight: 600;
  color: #F2B240;
  margin-bottom: 20px;
  line-height: 1.3;
}

.guide-block h3 {
  font-size: 24px;
  font-weight: 600;
  color: #F2B240;
  margin-bottom: 15px;
  line-height: 1.3;
}

.guide-steps {
  margin: 0 0 20px 0;
  padding-left: 20px;
  color: #D1D5DB;
  display: inline-block;
  text-align: left;
}

.guide-steps li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 8px;
  color: #D1D5DB;
}

.guide-steps li strong {
  color: #F2B240;
}

.important-note {
  font-size: 16px;
  color: #D1D5DB;
  line-height: 1.6;
  margin: 20px 0 0 0;
  font-style: italic;
}

.important-note strong {
  color: #F2B240;
}

.step-section {
  background: transparent;
  padding: 0;
  margin-bottom: 30px;
  text-align: left;
}

.step-section h4 {
  font-size: 20px;
  font-weight: 600;
  color: #F2B240;
  margin-bottom: 10px;
  line-height: 1.3;
}

.step-section ul {
  margin: 0 0 15px 0;
  padding-left: 20px;
}

.step-section li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 6px;
  color: #D1D5DB;
}

.step-section li strong {
  color: #F2B240;
}

.note {
  font-size: 16px;
  color: #D1D5DB;
  line-height: 1.6;
  margin: 15px 0 0 0;
  font-style: italic;
}

.note strong {
  color: #F2B240;
}

.reminders-section {
  background: transparent;
  padding: 0;
  margin-top: 30px;
  text-align: left;
}

.reminders-section h4 {
  font-size: 20px;
  font-weight: 600;
  color: #F2B240;
  margin-bottom: 10px;
  line-height: 1.3;
}

.reminders-section ul {
  margin: 0;
  padding-left: 20px;
}

.reminders-section li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 6px;
  color: #D1D5DB;
}

.reminders-section li strong {
  color: #F2B240;
}

/* Additional styles for new content structure */
.tab-guide-content {
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.important-note {
  margin-top: 1.5rem;
  text-align: left;
}

.important-note p {
  color: #D1D5DB;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-style: normal;
}

.important-note strong {
  color: #F0AD3C;
}

.withdrawal-reminders {
  margin-top: 1.5rem;
  text-align: left;
}

.withdrawal-reminders h4 {
  color: #F0AD3C;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.withdrawal-reminders ul {
  margin: 0;
  padding-left: 1.25rem;
}

.withdrawal-reminders li {
  color: #D1D5DB;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.withdrawal-reminders li strong {
  color: #F0AD3C;
}
</style>