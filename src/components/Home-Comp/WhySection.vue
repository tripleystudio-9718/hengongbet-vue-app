<template>
  <section>
    <div class="max-w-7xl mx-auto px-6 py-8">

      <div class="why-container">
        <div class="why-card-1">
          <img :src="computerIcon" alt="HengOngBet Logo" class="why-image" />
          <div>
            <h3 class="why-title">What Makes Heng Ong Bet Different?</h3>
            <p class="why-p">Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play. </p>
          </div>  
        </div>

        <div class="why-card-2">
          <img :src="trustedIcon" alt="HengOngBet Logo" class="why-image" />
          <div>
            <h3 class="why-title">What Makes Heng Ong Bet Different?</h3>
            <p class="why-p">Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play. </p>
          </div>
        </div>

        <div class="why-card-3">
          <img :src="registrationIcon" alt="HengOngBet Logo" class="why-image" />
          <div>
            <h3 class="why-title" style="color: black;">What Makes Heng Ong Bet Different?</h3>
            <p class="why-p" style="color: black;">Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play. </p>
          </div>
        </div>

        <div class="why-card-4">
          <img :src="supportIcon" alt="HengOngBet Logo" class="why-image" />
          <div>
            <h3 class="why-title">What Makes Heng Ong Bet Different?</h3>
            <p class="why-p">Unlike traditional online casinos that rely on agents for deposits and withdrawals, Heng Ong Bet connects you directly—no middlemen involved. Enjoy instant transactions, built-in social and e-wallet features, and a unique commission-sharing system that lets you earn while you play. </p>
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
  name: 'HowItWorksSteps',
  data() {
    return {
      computerIcon,
      trustedIcon,
      registrationIcon,
      supportIcon
    }
  }
}
</script>

<style scoped>
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
    height: 400px;
    width: 310.913px;
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
    height: 400px;
    width: 310.913px;
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
    height: 400px;
    width: 310.913px;
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
    height: 400px;
    width: 310.913px;
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
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 1rem;
    margin: 0;
    text-align: center;
  }

.why-p {
  color: #ffffff;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: center;
}
</style>