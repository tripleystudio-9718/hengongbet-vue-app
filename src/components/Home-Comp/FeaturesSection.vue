<template>
  <div class="features-section">
    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <!-- Games Library Tab with bullet points -->
      <div v-if="activeTab === 'games-library'" class="games-library-content">
        <p class="library-header">We've partnered with top providers including:</p>
        <ul class="providers-list">
          <li><strong>Live Casinos:</strong> PEGASUS LIVE, CTG855, AE SEXY, ASIA GAMING, EVOLUTION & more</li>
          <li><strong>Slots:</strong> 918KISS, PUSSY888, NAGA GAMES, JILI, PLAYTECH, and many others</li>
          <li><strong>Sports Betting:</strong> SBOBET, SBOVS, BET33</li>
        </ul>
      </div>
            
      <!-- Secure & Rewarding Tab with bullet points -->
      <div v-else-if="activeTab === 'secure-rewarding'" class="secure-content">
        <p class="secure-header">With over 10 years in the industry, Heng Ong Bet is known for:</p>
        <ul class="secure-list">
          <li>Game fairness</li>
          <li>SSL-encrypted security</li>
          <li>Regular deposit bonuses and free credit offers</li>
          <li>A private, stable, and trusted environment</li>
        </ul>
      </div>
            
      <!-- Why Choose tab with original format -->
      <div v-else class="features-list">
        <div
          v-for="feature in currentTabFeatures"
          :key="feature.id"
          class="feature-item"
        >
          <div class="feature-title">{{ feature.title }}</div>
          <div class="feature-separator" v-if="feature.description">–</div>
          <div class="feature-description">{{ feature.description }}</div>
        </div>
      </div>
    </div>
  </div>
    
  <!-- Platform Section -->
  <div class="platform-section">
    <h3 class="platform-title">{{ platformContent.title }}</h3>
    <p class="platform-description">{{ platformContent.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      activeTab: 'why-choose',
      tabs: [
        {
          id: 'why-choose',
          title: 'Why Choose Heng Ong Bet?'
        },
        {
          id: 'games-library',
          title: "Malaysia's Largest Game Library"
        },
        {
          id: 'secure-rewarding',
          title: 'Proven, Secure & Rewarding'
        }
      ],
      tabFeatures: {
        'why-choose': [
          {
            id: 1,
            title: 'Expert Team',
            description: 'Constantly improving games and user experience'
          },
          {
            id: 2,
            title: 'Secure Platform',
            description: 'Advanced encryption for data protection'
          },
          {
            id: 3,
            title: '24/7 Support',
            description: 'Help available anytime'
          },
          {
            id: 4,
            title: 'Responsible Gaming',
            description: 'Promoting safe and healthy play'
          },
          {
            id: 5,
            title: 'Community Focused',
            description: 'Supporting local welfare initiatives'
          }
        ],
        'games-library': [
          // This tab now uses a different format with bullet points
        ],
        'secure-rewarding': [
          // This tab now uses bullet points format
        ]
      },
      platformContent: {
        title: "Play Anywhere, Anytime",
        description: "With the Heng Ong Bet mobile app (iOS & Android supported), you can enjoy all your favorite games on the go — from slots and sportsbook to live dealer and 4D games. Join Heng Ong Bet today and experience Malaysia's most reliable and exciting online gaming platform!"
      }
    }
  },
  computed: {
    currentTabFeatures() {
      return this.tabFeatures[this.activeTab] || []
    }
  }
}
</script>

<style scoped>
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
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.feature-title {
  color: #C0BEBE;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.feature-separator {
  color: #888888;
  font-weight: 300;
  font-size: 1rem;
}

.feature-description {
  color: #C0BEBE;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 400;
  flex: 1;
}

/* Games Library and Secure tabs styles */
.games-library-content,
.secure-content {
  color: #C0BEBE;
}

.library-header,
.secure-header {
  font-size: 18px;
  font-weight: 400;
  color: #C0BEBE;
  margin-bottom: 20px;
}

.providers-list,
.secure-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.providers-list li,
.secure-list li {
  font-size: 18px;
  font-weight: 400;
  color: #C0BEBE;
  margin-bottom: 16px;
  padding-left: 20px;
  position: relative;
}

.providers-list li::before,
.secure-list li::before {
  content: '•';
  color: #C0BEBE;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.providers-list li strong {
  font-weight: 700;
}

/* Platform Section */
.platform-section {
  text-align: center;
}

.platform-title {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

.platform-description {
  color: #C0BEBE;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  margin: 0 auto;
}

/* Mobile-First Responsive Design */
@media (max-width: 768px) {
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
    flex: 1 1 calc(50% - 4px); /* Two tabs per row with gap */
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
  
  /* Third tab takes full width on second row */
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
  }
  
  .features-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 100%;
  }
  
  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 0;
    width: 100%;
  }
  
  .feature-title {
    font-size: 16px;
    font-weight: 700;
    color: #C0BEBE;
    flex-shrink: 0;
    min-width: fit-content;
  }
  
  .feature-separator {
    color: #888888;
    font-weight: 300;
    font-size: 16px;
    flex-shrink: 0;
  }
  
  .feature-description {
    font-size: 16px;
    color: #C0BEBE;
    line-height: 1.5;
    flex: 1;
  }
  
  /* Mobile bullet point content */
  .library-header,
  .secure-header {
    font-size: 16px;
    margin-bottom: 16px;
    color: #C0BEBE;
  }
  
  .providers-list li,
  .secure-list li {
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 1.5;
  }
  
  .platform-section {
    margin: 40px auto 20px auto;
    padding: 0 16px;
    max-width: 600px;
  }
  
  .platform-title {
    font-size: 20px;
    margin-bottom: 16px;
    color: #ffffff;
  }
  
  .platform-description {
    font-size: 16px;
    line-height: 1.6;
    color: #C0BEBE;
  }
}

@media (max-width: 480px) {
  .features-section {
    margin: 0 auto;
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
  }
  
  .feature-item {
    gap: 8px;
  }
  
  .feature-title {
    font-size: 10px;
  }
  
  .feature-description {
    font-size: 10px;
    text-align: left;
  }
  
  .feature-separator {
    font-size: 14px;
  }
  
  .library-header,
  .secure-header {
    font-size: 12px;
  }
  
  .providers-list li,
  .secure-list li {
    font-size: 10px;
    text-align: left;
  }
  
  .platform-section {
    padding: 0;
    margin: 30px auto 15px auto;
  }
  
  .platform-title {
    font-size: 16px;
  }
  
  .platform-description {
    font-size: 10px;
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
  }
  
  .feature-title {
    font-size: 13px;
  }
  
  .feature-description {
    font-size: 13px;
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
    margin: 20px auto 10px auto;
  }
}
</style>