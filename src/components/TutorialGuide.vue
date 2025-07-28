<template>
  <section class="tutorial-guide">
    <!-- Header Section -->
    <div class="header-section">
      <h1 class="header-title">
        <span class="title-highlight">Tutorial</span> Guide
      </h1>
      <p class="header-subtitle">Easy To Know & Just follow Step Of Tutorial</p>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- First Tutorial Section -->
      <div class="tutorial-section">
        <h3 class="section-title">
          Easy 3 steps to <span class="highlight">Redeem RM10</span> (new member bonus)
        </h3>
        
        <div class="steps-container steps-3">
          <!-- Step 1 -->
          <div class="step-item">
            <div class="step-icon-wrapper">
              <img :src="tutorialIcon" alt="Tutorial Icon" class="tutorial-bg-icon" />
              <div class="step-number">1</div>
              <div class="step-text-overlay">
                <p>Click on Terms at the bottom left of app</p>
              </div>
            </div>
          </div>

          <!-- Dotted Line 1 -->
          <div class="dotted-line-container">
            <div class="circle"></div>
            <div class="dotted-line"></div>
            <div class="circle"></div>
          </div>

          <!-- Step 2 -->
          <div class="step-item">
            <div class="step-icon-wrapper">
              <img :src="tutorialIcon" alt="Tutorial Icon" class="tutorial-bg-icon" />
              <div class="step-number">2</div>
              <div class="step-text-overlay">
                <p>Click "Claim Now" on the activity page</p>
              </div>
            </div>
          </div>

          <!-- Dotted Line 2 -->
          <div class="dotted-line-container">
            <div class="circle"></div>
            <div class="dotted-line"></div>
            <div class="circle"></div>
          </div>

          <!-- Step 3 -->
          <div class="step-item">
            <div class="step-icon-wrapper">
              <img :src="tutorialIcon" alt="Tutorial Icon" class="tutorial-bg-icon" />
              <div class="step-number">3</div>
              <div class="step-text-overlay">
                <p>Click "Redeem Now" follow the activity instructions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Tutorial Section -->
      <div class="tutorial-section">
        <h3 class="section-title">
          <span class="highlight">Query history</span> Tutorial
        </h3>
        
        <div class="steps-container steps-4">
          <!-- Step 1 -->
          <div class="step-item">
            <div class="step-icon-wrapper">
              <img :src="tutorialIcon" alt="Tutorial Icon" class="tutorial-bg-icon" />
              <div class="step-number">1</div>
              <div class="step-text-overlay">
                <p>Click on "today" at the bottom of the app</p>
              </div>
            </div>
          </div>

          <!-- Dotted Line 1 -->
          <div class="dotted-line-container">
            <div class="circle"></div>
            <div class="dotted-line"></div>
            <div class="circle"></div>
          </div>

          <!-- Step 2 -->
          <div class="step-item">
            <div class="step-icon-wrapper">
              <img :src="tutorialIcon" alt="Tutorial Icon" class="tutorial-bg-icon" />
              <div class="step-number">2</div>
              <div class="step-text-overlay">
                <p>Click on "big fish" at the middle of the app</p>
              </div>
            </div>
          </div>

          <!-- Dotted Line 2 -->
          <div class="dotted-line-container">
            <div class="circle"></div>
            <div class="dotted-line"></div>
            <div class="circle"></div>
          </div>

          <!-- Step 3 -->
          <div class="step-item">
            <div class="step-icon-wrapper">
              <img :src="tutorialIcon" alt="Tutorial Icon" class="tutorial-bg-icon" />
              <div class="step-number">3</div>
              <div class="step-text-overlay">
                <p>Click "Record List" to top right corner</p>
              </div>
            </div>
          </div>

          <!-- Dotted Line 3 -->
          <div class="dotted-line-container">
            <div class="circle"></div>
            <div class="dotted-line"></div>
            <div class="circle"></div>
          </div>

          <!-- Step 4 -->
          <div class="step-item">
            <div class="step-icon-wrapper">
              <img :src="tutorialIcon" alt="Tutorial Icon" class="tutorial-bg-icon" />
              <div class="step-number">4</div>
              <div class="step-text-overlay">
                <p>Choose the history record you want to explore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tutorialIcon from '@/assets/tutorial-icon.png'

export default {
  name: 'TutorialGuide',
  data() {
    return {
      tutorialIcon
    }
  }
}
</script>

<style scoped>
.tutorial-guide {
  background-color: #27272A;
  padding: 40px 0;
  position: relative;
  background-image: url('@/assets/tutorial-guide-bg.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto;
}

.header-section {
  text-align: center;
  padding: 40px 0 60px 0;
}

.header-title {
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.title-highlight {
  color: #F2B240;
}

.header-subtitle {
  color: #cccccc;
  font-size: 18px;
  margin: 0;
  font-weight: 400;
}

/* Utility Classes */
.max-w-7xl {
  max-width: 80rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Tutorial Sections */
.tutorial-section {
  margin-bottom: 80px;
}

.section-title {
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 40px;
  font-weight: 500;
}

.highlight {
  color: #F2B240;
}

/* Steps Container */
.steps-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 0;
}

.steps-3 {
  max-width: 900px;
}

.steps-4 {
  max-width: 1200px;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 320px;
  position: relative;
}

/* Step Icon Styling */
.step-icon-wrapper {
  position: relative;
  width: 300px;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.tutorial-bg-icon {
  width: 300px;
  height: 80px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
}

.step-number {
  position: absolute;
  z-index: 2;
  left: 20px;
  color: #242424;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
}

.step-text-overlay {
  position: absolute;
  z-index: 2;
  left: 100px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.step-text-overlay p {
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  font-weight: 400;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
}

/* Dotted Line Styling */
.dotted-line-container {
  display: flex;
  align-items: center;
  width: 100px;
  flex-shrink: 0;
  margin: 0 20px;
  position: relative;
  top: -10px; /* Align with step icons */
}

.circle {
  width: 8px;
  height: 8px;
  background-color: #ED8F23;
  border-radius: 50%;
  z-index: 2;
  flex-shrink: 0;
}

.dotted-line {
  flex: 1;
  height: 2px;
  background-image: repeating-linear-gradient(
    to right,
    #ED8F23 0px,
    #ED8F23 6px,
    transparent 6px,
    transparent 12px
  );
  margin: 0 -2px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .steps-container {
    gap: 10px;
  }
  
  .dotted-line-container {
    width: 80px;
    margin: 0 10px;
  }
  
  .step-item {
    max-width: 280px;
  }
  
  .step-icon-wrapper {
    width: 260px;
    height: 70px;
  }
  
  .tutorial-bg-icon {
    width: 260px;
    height: 70px;
  }
  
  .step-number {
    width: 30px;
    height: 30px;
    font-size: 16px;
    left: 12px;
  }
  
  .step-text-overlay {
    left: 50px;
  }
  
  .step-text-overlay p {
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .header-title {
    font-size: 36px;
  }
  
  .header-subtitle {
    font-size: 16px;
  }
  
  .section-title {
    font-size: 20px;
    margin-bottom: 30px;
  }
  
  .steps-container {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  
  .step-item {
    max-width: 300px;
    margin-bottom: 0;
  }
  
  .dotted-line-container {
    width: 60px;
    transform: rotate(90deg);
    margin: 10px 0;
    top: 0;
  }
  
  .step-icon-wrapper {
    width: 250px;
    height: 60px;
    margin-bottom: 15px;
  }
  
  .tutorial-bg-icon {
    width: 250px;
    height: 60px;
  }
  
  .step-number {
    width: 28px;
    height: 28px;
    font-size: 14px;
    left: 10px;
  }
  
  .step-text-overlay {
    left: 45px;
    right: 15px;
  }
  
  .step-text-overlay p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .tutorial-guide {
    padding: 20px 0;
  }
  
  .header-section {
    padding: 20px 0 20px 0;
  }
  
  .header-title {
    font-size: 28px;
  }
  
  .header-subtitle {
    font-size: 14px;
  }
  
  .section-title {
    font-size: 18px;
    padding: 0 20px;
  }
  
  .tutorial-section {
    margin-bottom: 60px;
  }
  
  .px-6 {
    padding: 0;
  }
  
  .step-icon-wrapper {
    width: 220px;
    height: 55px;
  }
  
  .tutorial-bg-icon {
    width: 225px;
    height: 55px;
  }
  
  .step-number {
    width: 25px;
    height: 25px;
    font-size: 16px;
    left: 16px;
  }
  
  .step-text-overlay {
    left: 70px;
    right: 12px;
  }
  
  .step-text-overlay p {
    font-size: 11px;
  }
  
  .dotted-line-container {
    width: 40px;
  }
  
  .circle {
    width: 6px;
    height: 6px;
  }
}
</style>