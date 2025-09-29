<template>
  <div class="sport-live">
    <iframe
      src="https://4dnum.com"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
  <ResultAdditionalContent />
</template>

<script setup>
import ResultAdditionalContent from './ResultAdditionalContent.vue';
</script>

<style scoped>
.sport-live {
  top: 0;
  left: 0;
  height: 100vh;
  background: black;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sport-live iframe {
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
}
</style>
