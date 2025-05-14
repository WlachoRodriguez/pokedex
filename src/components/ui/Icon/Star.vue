<script setup lang="ts">
const props = defineProps<{
  icon: string;
}>();
</script>

<template>
  <div class="content-icon">
    <img :src="props.icon" class="icon" />
  </div>
</template>

<style scoped>
.content-icon {
  width: 36px;
  height: 36px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
