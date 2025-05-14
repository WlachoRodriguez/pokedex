<script setup lang="ts">
import StarDefault from "@/assets/starDefault.svg";
import StarActive from "@/assets/starActive.svg";
import Star from "@/components/ui/Icon/Star.vue";

const props = defineProps<{
  name: string;
  favorite: boolean;
}>();
</script>

<template>
  <div class="item">
    <span class="item-name">{{ props.name }}</span>
    <Star :icon="props.favorite ? StarActive : StarDefault" />
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.item-name {
  font-family: "Lato";
  font-size: 22px;
  font-weight: 500;
  color: #333;
}
</style>
