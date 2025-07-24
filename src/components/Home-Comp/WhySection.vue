<template>
  <section>
    <div class="max-w-7xl mx-auto px-6 py-8">

      <div class="why-container">
        <div class="why-card-1">
            <h2></h2>
        </div>

        <div class="why-card-2">

        </div>

        <div class="why-card-3">

        </div>

        <div class="why-card-4">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import accountIcon from '@/assets/account_icon.png'
import depositIcon from '@/assets/deposit_icon.png'
import winningIcon from '@/assets/winning_icon.png'
import rewardIcon from '@/assets/reward_icon.png'

export default {
  name: 'HowItWorksSteps',
  data() {
    return {
      accountIcon,
      depositIcon,
      winningIcon,
      rewardIcon
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
}

.why-card-1, .why-card-2, .why-card-3, .why-card-4 {
    width: 25%;
}

.why-card-1 {
    background: linear-gradient(to right, #484848 0%, #303033 100%);
    height: 200px;
}
</style>