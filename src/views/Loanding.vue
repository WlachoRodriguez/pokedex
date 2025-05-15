<script setup lang="ts">
import pokebolaImage from "@/assets/pokebola.png";
</script>

<template>
  <div class="content-loanding">
    <img :src="pokebolaImage" />
  </div>
</template>

<style scoped>
.content-loanding {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

img {
  animation: spin 1s infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
