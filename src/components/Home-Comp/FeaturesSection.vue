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

    <!-- Tab Content -->
    <div class="tab-content">
      <div class="features-list">
        <div 
          v-for="feature in currentTabFeatures" 
          :key="feature.id"
          class="feature-item"
        >
          <div class="feature-title">{{ feature.title }}</div>
          <div class="feature-separator">–</div>
          <div class="feature-description">{{ feature.description }}</div>
        </div>
      </div>
    </div>
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
          {
            id: 1,
            title: 'Extensive Slot Collection',
            description: 'Over 1000+ premium slot games from top providers'
          },
          {
            id: 2,
            title: 'Live Casino Games',
            description: 'Real-time gaming with professional dealers'
          },
          {
            id: 3,
            title: 'Sports Betting',
            description: 'Comprehensive sportsbook with competitive odds'
          },
          {
            id: 4,
            title: '4D Lottery',
            description: 'Traditional Malaysian lottery games'
          },
          {
            id: 5,
            title: 'Regular Updates',
            description: 'New games added weekly to keep experience fresh'
          }
        ],
        'secure-rewarding': [
          {
            id: 1,
            title: 'SSL Encryption',
            description: 'Bank-level security for all transactions'
          },
          {
            id: 2,
            title: 'Licensed & Regulated',
            description: 'Fully licensed gaming platform'
          },
          {
            id: 3,
            title: 'Fast Withdrawals',
            description: 'Quick and secure payout processing'
          },
          {
            id: 4,
            title: 'Loyalty Rewards',
            description: 'Earn points and bonuses for regular play'
          },
          {
            id: 5,
            title: 'Fair Gaming',
            description: 'RNG certified games ensuring fair play'
          }
        ]
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
  background: #242424;
  border-radius: 24px;
  overflow: hidden;
  padding: 15px;
  width: 1100px;
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
  font-weight: 500;
  font-size: 0.95rem;
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
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  min-width: 200px;
  flex-shrink: 0;
}

.feature-separator {
  color: #888888;
  font-weight: 300;
  font-size: 1rem;
}

.feature-description {
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.4;
  flex: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
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
}
</style>