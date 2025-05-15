<script setup lang="ts">
import StarDefault from "@/assets/starDefault.svg";
import StarActive from "@/assets/starActive.svg";
import Star from "@/components/ui/Icon/Star.vue";
import type { Pokemon } from "@/types/Pokemon";

const props = defineProps<{
  pokemon: Pokemon;
}>();

const emit = defineEmits(["open"]);
const handleClick = () => {
  emit("open", props.pokemon);
};
</script>

<template>
  <div class="item" @click="handleClick">
    <span class="item-name">{{ props.pokemon.name }}</span>
    <Star
      @click="
        (e) => {
          e.stopPropagation();
        }
      "
      :icon="props.pokemon.favorite ? StarActive : StarDefault"
      :name="props.pokemon.name"
      :favorite="props.pokemon.favorite"
    />
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
  height: 100%;
  display: block;
}
</style>
