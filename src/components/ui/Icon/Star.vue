<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";

const props = defineProps<{
  name: string;
  icon: string;
  favorite: boolean;
}>();

const pokemon = usePokemonStore();

const addFavorite = () => {
  pokemon.addFavorite(props.name, !props.favorite);
};
</script>

<template>
  <div class="content-icon" @click="addFavorite">
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
  cursor: pointer;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
