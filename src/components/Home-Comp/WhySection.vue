<template>
  <section>
    <!-- Header Section -->
    <div class="why-header-section">
      <h2 class="why-header-title">
        {{ headerContent.prefix }} <span class="accent-color">{{ headerContent.brand }}</span> {{ headerContent.suffix }}
      </h2>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="why-container">
        <div class="why-card-1">
          <img :src="computerIcon" alt="Computer Icon" class="why-image" />
          <div>
            <h3 class="why-title">{{ cardContent[0].title }}</h3>
            <p class="why-p">{{ cardContent[0].description }}</p>
          </div>  
        </div>

        <div class="why-card-2">
          <img :src="trustedIcon" alt="Trusted Icon" class="why-image" />
          <div>
            <h3 class="why-title">{{ cardContent[1].title }}</h3>
            <p class="why-p">{{ cardContent[1].description }}</p>
          </div>
        </div>

        <div class="why-card-3">
          <img :src="registrationIcon" alt="Registration Icon" class="why-image" />
          <div>
            <h3 class="why-title" style="color: black;">{{ cardContent[2].title }}</h3>
            <p class="why-p" style="color: black;">{{ cardContent[2].description }}</p>
          </div>
        </div>

        <div class="why-card-4">
          <img :src="supportIcon" alt="Support Icon" class="why-image" />
          <div>
            <h3 class="why-title">{{ cardContent[3].title }}</h3>
            <p class="why-p">{{ cardContent[3].description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import computerIcon from '@/assets/computer_icon.png'
import trustedIcon from '@/assets/trusted_icon.png'
import registrationIcon from '@/assets/registration_icon.png'
import supportIcon from '@/assets/support_icon.png'

export default {
  name: 'WhySection',
  data() {
    return {
      computerIcon,
      trustedIcon,
      registrationIcon,
      supportIcon,
      headerContent: {
        prefix: "Why Choose",
        brand: "Heng Ong Bet",
        suffix: "?"
      },
      cardContent: [
        {
          title: "What Makes Heng Ong Bet Different?",
          description: "Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play."
        },
        {
          title: "What Makes Heng Ong Bet Different?",
          description: "Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play."
        },
        {
          title: "What Makes Heng Ong Bet Different?",
          description: "Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play."
        },
        {
          title: "What Makes Heng Ong Bet Different?",
          description: "Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play."
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Header Section */
.why-header-section {
  text-align: center;
  padding: 40px 0 40px 0;
}

.why-header-title {
  font-size: 40px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.2;
}

.accent-color {
  color: #F2B240;
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

/* Why Container */
.why-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.why-card-1, .why-card-2, .why-card-3, .why-card-4 {
  width: 25%;
}

.why-card-1 {
  background: linear-gradient(to right, #484848 0%, #303033 100%);
  box-shadow: 0 2.609px 3.001px 0 rgba(0, 0, 0, 0.13);
  height: 450px;
  width: 450px;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.why-card-2 {
  background: linear-gradient(180deg, #33DAFF 0%, #033DBC 100%);
  box-shadow: 0 2.609px 3.001px 0 rgba(0, 0, 0, 0.13);
  height: 450px;
  width: 450px;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.why-card-3 {
  background: linear-gradient(180deg, #F9F9F9 0%, #E8E8E8 100%);
  box-shadow: 0 2.609px 3.001px 0 rgba(0, 0, 0, 0.13);
  height: 450px;
  width: 450px;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.why-card-4 {
  background: linear-gradient(0deg, #ED9226 0%, #FFEA00 100%);
  box-shadow: 0 2.609px 3.001px 0 rgba(0, 0, 0, 0.13);
  height: 450px;
  width: 450px;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.why-image {
  width: 80%;
  height: auto;
}

.why-title {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
  margin: 0;
  text-align: center;
}

.why-p {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 0.5rem;
  font-weight: 400;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .why-header-section {
    padding: 40px 20px 30px 20px;
  }
  
  .why-header-title {
    font-size: 2.5rem;
  }
  
  .why-container {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .why-card-1, .why-card-2, .why-card-3, .why-card-4 {
    width: 90%;
    max-width: 350px;
  }
}

@media (max-width: 480px) {
  .why-header-title {
    font-size: 2rem;
  }
  
  .why-card-1, .why-card-2, .why-card-3, .why-card-4 {
    width: 95%;
    height: 350px;
    padding: 15px;
  }
  
  .why-title {
    font-size: 0.9rem;
  }
  
  .why-p {
    font-size: 0.75rem;
  }
}
</style>