<template>
  <section>
    <!-- Global Header Section -->
    <div class="global-header-section">
      <h3 class="global-brand">{{ globalContent.brand }}</h3>
      <h2 class="global-title">{{ globalContent.title }}</h2>
      <h4 class="global-subtitle">{{ globalContent.subtitle }}</h4>
      <p class="global-description">{{ globalContent.description }}</p>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="provider-container">
        <div 
          v-for="(provider, index) in providers" 
          :key="index"
          :class="`provider-card provider-card-${index + 1}`"
          :style="{ backgroundImage: `url(${provider.backgroundImage})` }"
        >
          <div class="provider-content">
            <h3 class="provider-title">{{ provider.name }}</h3>
            <p class="provider-description">{{ provider.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slotsBg from '@/assets/slots-bg.png'
import sportsBg from '@/assets/sports-bg.png'
import lotteryBg from '@/assets/lottery-bg.png'
import liveCasinoBg from '@/assets/live-casino-bg.png'

class GameProvider {
  constructor(name, backgroundImage, alt, description) {
    this.name = name
    this.backgroundImage = backgroundImage
    this.alt = alt
    this.description = description
  }
}

export default {
  name: 'ProviderShowcase',
  data() {
    return {
      globalContent: {
        brand: "Heng Ong Bet",
        title: "We Are Global",
        subtitle: "Heng Ong Bet is Now Expanding Globally",
        description: "Heng Ong Bet is now available in Singapore, with our talented global team supporting growth across Malaysia and Singapore. What unites us? A passion for delivering the best gaming experience. We're also actively expanding into Thailand, Vietnam, Indonesia, Cambodia, the UK, and the USA."
      },
      providers: [
        new GameProvider(
          'Slots', 
          slotsBg, 
          'Slots Gaming Provider',
          'Heng Ong Bet offers a wide variety of online slot games powered by top providers like MEGA888, PUSSY888, PUSSY888, VPOWER, NAGA GAMES, JILI, and more. With advanced technology, stunning graphics, and immersive sound effects, our slots deliver exciting gameplay and big win potential.'
        ),
        new GameProvider(
          'Sport Betting', 
          sportsBg, 
          'Sports Betting Provider',
          'Heng Ong Bet offers a complete and professional sports betting experience through top platforms like MAXBET, SBOBET, and RCB788. Bet on popular sports such as football, basketball, tennis, baseball, and ice hockey with various options like handicap, over/under, odd/even, and half-time bets.'
        ),
        new GameProvider(
          '4D Lottery', 
          lotteryBg, 
          '4D Lottery Provider',
          'Heng Ong Bet brings you the most exciting 4D lottery games with a chance to win big prizes every day. Enjoy popular formats like direct selection, group selection, Magnum, Da Ma Cai, Toto, and daily Grand Dragon draws. With high odds and multiple betting options, your winning chances are greater than ever.'
        ),
        new GameProvider(
          'Live Casino', 
          liveCasinoBg, 
          'Live Casino Provider',
          'Heng Ong Bet brings you real-time live casino games at home with top providers like PGCN88 LIVE, AE SEXY, and EVOLUTION. Enjoy smooth HD streams, fair play from pro dealers, and fast, secure transactions—all in one trusted platform.'
        )
      ]
    }
  }
}
</script>

<style scoped>
/* Global Header Section */
.global-header-section {
  text-align: center;
  padding: 40px 20px 40px 20px;
}

.global-brand {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  margin: 0 0 0.5rem 0;
  text-align: center;
}

.global-title {
  color: #F2B240;
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-align: center;
}

.global-subtitle {
  color: #ffffff;
  font-size: 1.3rem;
  margin: 0 0 2rem 0;
  font-weight: normal;
  line-height: 1.3;
  text-align: center;
}

.global-description {
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
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
  padding-bottom: 2rem;
}

/* Provider Container */
.provider-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.provider-card {
  width: 316.564px;
  height: 380px;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
}

.provider-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.8));
  border-radius: 24px;
  pointer-events: none;
}

.provider-card:hover {
  transform: translateY(-5px);
}

.provider-content {
  z-index: 1;
  position: relative;
  width: 100%;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.provider-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #FFD700;
  margin: 0 0 12px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.provider-description {
  font-size: 0.82rem;
  color: #ffffff;
  margin: 0;
  text-align: center;
  line-height: 1.35;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 400;
  width: 100%;
}

/* Responsive design */
@media (max-width: 1024px) {
  .provider-container {
    gap: 15px;
  }
  
  .provider-card {
    width: 280px;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .global-header-section {
    padding: 0px 15px 0px 15px;
  }
  
  .global-title {
    font-size: 2.5rem;
  }
  
  .global-subtitle {
    font-size: 1.2rem;
  }
  
  .global-description {
    font-size: 1rem;
  }
  
  .provider-container {
    flex-direction: column;
    align-items: center;
  }
  
  .provider-card {
    width: 100%;
    max-width: 350px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .global-title {
    font-size: 2rem;
  }
  
  .global-subtitle {
    font-size: 1.1rem;
  }
  
  .global-description {
    font-size: 0.95rem;
  }
  
  .provider-card {
    height: 250px;
    padding: 15px;
  }
}
</style>