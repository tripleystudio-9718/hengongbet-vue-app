<template>
  <section>
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
  align-items: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
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
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  justify-content: center
}

.provider-description {
  font-size: 0.82rem;
  color: #ffffff;
  margin: 0;
  text-align: center;
  line-height: 1.35;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 400;
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
  .provider-card {
    height: 250px;
    padding: 15px;
  }
}
</style>