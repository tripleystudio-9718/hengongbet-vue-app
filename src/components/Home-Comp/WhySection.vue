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
          <div class="card-content">
            <h3 class="why-title">{{ cardContent[0].title }}</h3>
            <p class="why-p">{{ cardContent[0].description }}</p>
          </div>  
        </div>

        <div class="why-card-2">
          <img :src="trustedIcon" alt="Trusted Icon" class="why-image" />
          <div class="card-content">
            <h3 class="why-title">{{ cardContent[1].title }}</h3>
            <p class="why-p">{{ cardContent[1].description }}</p>
          </div>
        </div>

        <div class="why-card-3">
          <img :src="registrationIcon" alt="Registration Icon" class="why-image" />
          <div class="card-content">
            <h3 class="why-title" style="color: black;">{{ cardContent[2].title }}</h3>
            <p class="why-p" style="color: black;">{{ cardContent[2].description }}</p>
          </div>
        </div>

        <div class="why-card-4">
          <img :src="supportIcon" alt="Support Icon" class="why-image" />
          <div class="card-content">
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
          title: "Most Trusted Casino",
          description: "Your privacy and security are our top priority. Heng Ong Bet uses industry-standard protection to safeguard your personal data and strictly follows our privacy policy to ensure a safe and trustworthy gaming environment."
        },
        {
          title: "Simple & Fast Registration",
          description: "Create your Heng Ong Bet account to access 1,000+ games, enjoy exclusive promos, and stay updated with the latest offers."
        },
        {
          title: "Online Support",
          description: "Our Heng Ong Bet support team is available 24/7 via live chat, phone, and email to assist you quickly with any issues."
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
  align-items: stretch;
  max-width: 1600px;
  margin: 0 auto;
  gap: 15px;
}

.why-card-1, .why-card-2, .why-card-3, .why-card-4 {
  width: 25%;
  height: 470px;
  border-radius: 24px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-shadow: 0 2.609px 3.001px 0 rgba(0, 0, 0, 0.13);
}

.why-card-1 {
  background: linear-gradient(to right, #484848 0%, #303033 100%);
}

.why-card-2 {
  background: linear-gradient(180deg, #33DAFF 0%, #033DBC 100%);
}

.why-card-3 {
  background: linear-gradient(180deg, #F9F9F9 0%, #E8E8E8 100%);
}

.why-card-4 {
  background: linear-gradient(0deg, #ED9226 0%, #FFEA00 100%);
}

.why-image {
  width: 200px;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
}

.why-title {
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 20px 0;
  text-align: center;
  line-height: 1.3;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-p {
  color: #ffffff;
  font-size: 15px;
  margin: 0;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  max-width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
    max-width: 100%;
  }
  
  .why-card-1, .why-card-2, .why-card-3, .why-card-4 {
    width: 90%;
    max-width: 400px;
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .why-header-title {
    font-size: 2rem;
  }
  
  .why-container {
    padding: 0 10px;
  }
  
  .why-card-1, .why-card-2, .why-card-3, .why-card-4 {
    width: 95%;
    min-height: 220px;
    padding: 20px 15px;
  }
  
  .why-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  
  .why-p {
    font-size: 14px;
  }
}
</style>