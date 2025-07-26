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
  padding:20px 20px 40px 20px;
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

/* Responsive Design */
@media (max-width: 768px) {
  .features-section {
    width: 100%;
    margin: 40px auto;
  }
  
  .tab-navigation {
    flex-direction: column;
  }
  
  .tab-btn {
    text-align: center;
    padding: 15px 20px;
    font-size: 0.9rem;
    border-radius: 0 !important;
  }
  
  .tab-btn:first-child {
    border-radius: 16px 16px 0 0 !important;
  }
  
  .tab-content {
    padding: 25px 20px;
  }
  
  .feature-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 12px 0;
    border-bottom: 1px solid #4a4a4a;
  }
  
  .feature-item:last-child {
    border-bottom: none;
  }
  
  .feature-title {
    min-width: auto;
    width: 100%;
  }
  
  .feature-separator {
    display: none;
  }
  
  .feature-description {
    padding-left: 0;
  }
  
  .platform-section {
    margin: 40px 0;
    padding: 0 20px;
  }
  
  .platform-title {
    font-size: 1.3rem;
  }
  
  .platform-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .tab-btn {
    padding: 12px 16px;
    font-size: 0.85rem;
  }
  
  .tab-content {
    padding: 20px 16px;
  }
  
  .feature-title {
    font-size: 0.9rem;
  }
  
  .feature-description {
    font-size: 0.85rem;
  }
  
  .platform-title {
    font-size: 1.2rem;
  }
  
  .platform-description {
    font-size: 0.95rem;
  }
}
</style>