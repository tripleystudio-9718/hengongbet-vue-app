<template>
  <div>
    <!-- Title and Subtitle Section (Outside tabs) -->
    <div class="features-header">
      <h2 class="features-main-title">{{ $t('features.header.title') }}</h2>
      <p class="features-subtitle">
        {{ $t('features.header.subtitle1') }}
        <router-link :to="localizedHomePath" class="accent-color">{{ $t('features.header.subtitle2') }} </router-link>
        {{ $t('features.header.subtitle3') }}
      </p>
    </div>

    <div class="features-section">
      <!-- Tab Navigation -->
      <div class="tab-navigation">
        <button
          @click="activeTab = 'safe-secure'"
          :class="['tab-btn', { active: activeTab === 'safe-secure' }]"
        >
          {{ $tm('features.tabs')[0].title }}
        </button>
        <button
          @click="activeTab = 'malaysians'"
          :class="['tab-btn', { active: activeTab === 'malaysians' }]"
        >
          {{ $tm('features.tabs')[1].title }}
        </button>
        <button
          @click="activeTab = 'entertainment'"
          :class="['tab-btn', { active: activeTab === 'entertainment' }]"
        >
          {{ $tm('features.tabs')[2].title }}
        </button>
      </div>
      
      <div class="tab-content">
        <!-- Tab 1: Safe, Licensed & Secure -->
        <div v-if="activeTab === 'safe-secure'" class="tab-content-section">
          <h3 class="tab-content-title">{{ $tm('features.tabs')[0].title }}</h3>
          <p class="section-description">{{ $t('features.safeSecure.description') }}</p>
          <ul class="feature-list">
            <li v-for="(feature, index) in $tm('features.safeSecure.features')" :key="index">
              <strong>{{ feature.title }}:</strong> {{ feature.description }}
            </li>
          </ul>
        </div>
              
        <!-- Tab 2: Designed for Malaysians -->
        <div v-else-if="activeTab === 'malaysians'" class="tab-content-section">
          <h3 class="tab-content-title">{{ $tm('features.tabs')[1].title }}</h3>
          <p class="section-description">{{ $t('features.malaysians.description') }}</p>
          <ul class="feature-list">
            <li v-for="(feature, index) in $tm('features.malaysians.features')" :key="index">
              <strong>{{ feature.title }}:</strong> {{ feature.description }}
            </li>
          </ul>
        </div>
              
        <!-- Tab 3: Value-Driven Entertainment -->
        <div v-else class="tab-content-section">
          <h3 class="tab-content-title">{{ $tm('features.tabs')[2].title }}</h3>
          <p class="section-description">{{ $t('features.entertainment.description') }}</p>
          <ul class="feature-list">
            <li v-for="(feature, index) in $tm('features.entertainment.features')" :key="index">
              <strong>{{ feature.title }}:</strong> {{ feature.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
      
    <!-- Popular Games Section -->
    <div class="platform-section">
      <h2 class="platform-title">{{ $t('features.popularGames.title') }}</h2>
      <ul class="popular-games-list">
        <li v-for="(game, index) in $tm('features.popularGames.games')" :key="index">
          {{ game }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      activeTab: 'safe-secure'
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n?.locale || 'en'
    }
  },
  methods: {
    // Custom method to get localized path using current locale (matching header pattern)
    getLocalePath(path) {
      if (this.currentLocale === 'en') {
        return path
      }
      return `/${this.currentLocale}${path}`
    }
  }
}
</script>

<style scoped>
/* Features Header (Outside tabs) */
.features-header {
  text-align: center;
  margin-bottom: 40px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.features-main-title,
h2.features-main-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
  line-height: 1.2;
}

.features-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  color: #C0BEBE;
  line-height: 1.5;
  margin: 0;
}

/* Features Section */
.features-section {
  display: flex;
  justify-content: center;
  margin: 60px 0;
  width: 1000px;
  background: #242424;
  border-radius: 24px;
  overflow: hidden;
  padding: 15px;
  margin: auto;
  gap: 0;
  box-shadow: 0px 5.528px 5.528px 0px rgba(0, 0, 0, 0.25);
}

.accent-color {
  color: #F2B240;
  text-decoration: none;
}

.accent-color:hover {
  color: #E5A535;
  text-decoration: underline;
}

.tab-navigation {
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 10px;
}

.tab-btn {
  padding: 18px 24px;
  background: #3a3a3a;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 18px;
  border-radius: 50px;
  position: relative;     
  width: 85%;
  text-align: left;
}

.tab-btn:hover {
  background: #4a4a4a;
}

.tab-btn.active {
  background: #F2B240;
  color: #000000;
  font-weight: 600;
}

.tab-content {
  background: #27272A;
  min-height: 200px;
  width: 60%;
  padding: 20px 20px 40px 20px;
  border-radius: 24px;
  max-height: 500px;
  overflow-y: auto;
}

/* Tab Content Styles */
.tab-content-section {
  color: #C0BEBE;
}

.tab-content-title,
h3.tab-content-title {
  font-size: 18px;
  font-weight: 600;
  color: #F2B240;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.section-description {
  font-size: 14px;
  font-weight: 400;
  color: #C0BEBE;
  margin-bottom: 20px;
  line-height: 1.4;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  font-size: 13px;
  font-weight: 400;
  color: #C0BEBE;
  margin-bottom: 12px;
  padding-left: 16px;
  position: relative;
  line-height: 1.5;
}

.feature-list li::before {
  content: '•';
  color: #C0BEBE;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.feature-list li strong {
  font-weight: 600;
  color: #FFFFFF;
}

/* Popular Games Section */
.platform-section {
  text-align: center;
  margin-top: 60px;
}

.platform-title,
h3.platform-title {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

.popular-games-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
  max-width: 400px;
  justify-content: center;
  gap: 10px;
}

.popular-games-list li {
  font-size: 16px;
  font-weight: 400;
  color: #C0BEBE;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  line-height: 1.5;
}

.popular-games-list li::before {
  content: '•';
  color: #C0BEBE;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Scrollbar Styling */
.tab-content::-webkit-scrollbar {
  width: 6px;
}

.tab-content::-webkit-scrollbar-track {
  background: #3A3A3D;
  border-radius: 3px;
}

.tab-content::-webkit-scrollbar-thumb {
  background: #F2B240;
  border-radius: 3px;
}

.tab-content::-webkit-scrollbar-thumb:hover {
  background: #E5A535;
}

/* Mobile-First Responsive Design */
@media (max-width: 768px) {
  .features-header {
    margin-bottom: 24px;
    padding: 0 16px;
  }

  .features-main-title,
  h2.features-main-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 12px;
  }

  .features-subtitle {
    font-size: clamp(0.9rem, 3vw, 1rem);
  }

  .features-section {
    width: calc(100% - 32px);
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    gap: 20px;
  }
  
  .tab-navigation {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 0;
  }
  
  .tab-btn {
    flex: 1 1 calc(50% - 4px);
    max-width: calc(50% - 4px);
    text-align: center;
    padding: 12px 8px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 25px;
    background: #3a3a3a;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .tab-btn:nth-child(3) {
    flex: 1 1 100%;
    max-width: 100%;
  }
  
  .tab-btn.active {
    background: #F2B240;
    color: #000000;
  }
  
  .tab-content {
    width: 100%;
    padding: 24px 24px;
    border-radius: 16px;
    background: #27272A;
    min-height: auto;
    max-height: 400px;
  }
  
  .tab-content-title,
  h3.tab-content-title {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .section-description {
    font-size: 12px;
    margin-bottom: 16px;
  }
  
  .feature-list li {
    font-size: 11px;
    margin-bottom: 10px;
  }
  
  .platform-section {
    margin-top: 40px;
    padding: 0 16px;
    max-width: 600px;
  }
  
  .platform-title,
  h3.platform-title {
    font-size: 20px;
    margin-bottom: 16px;
  }
  
  .popular-games-list {
    max-width: 300px;
    flex-direction: column;
    align-items: center;
  }
  
  .popular-games-list li {
    font-size: 14px;
    margin-bottom: 6px;
  }
}

@media (max-width: 480px) {
  .features-header {
    margin-bottom: 20px;
    padding: 0 12px;
  }

  .features-section {
    margin: 20px auto;
    padding: 16px;
    border-radius: 12px;
  }
  
  .tab-btn {
    padding: 10px 6px;
    font-size: 11px;
  }
  
  .tab-content {
    padding: 20px 10px;
    border-radius: 12px;
    max-height: 350px;
  }
  
  .tab-content-title,
  h3.tab-content-title {
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  .section-description {
    font-size: 10px;
  }
  
  .feature-list li {
    font-size: 9px;
  }
  
  .platform-section {
    padding: 0;
    margin-top: 30px;
  }
  
  .platform-title,
  h3.platform-title {
    font-size: 16px;
  }
  
  .popular-games-list li {
    font-size: 12px;
    margin-bottom: 4px;
  }
}

@media (max-width: 360px) {
  .features-section {
    width: calc(100% - 20px);
    padding: 12px;
  }
  
  .tab-btn {
    padding: 8px 4px;
    font-size: 10px;
  }
  
  .tab-content {
    padding: 16px 16px;
    max-height: 300px;
  }
}

/* Touch-friendly improvements */
@media (hover: none) and (pointer: coarse) {
  .tab-btn {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .tab-btn:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
}

/* Landscape orientation adjustments */
@media (max-width: 768px) and (orientation: landscape) {
  .features-section {
    margin: 20px auto;
  }
  
  .platform-section {
    margin-top: 20px;
  }
}
</style>