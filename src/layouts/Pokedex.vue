<script setup lang="ts">
import Home from "@/views/Home.vue";
import Loanding from "@/views/Loanding.vue";
import List from "@/views/List.vue";
import { View } from "@/types/view";

import { usePokemonStore } from "@/stores/pokemon";

const pokemon = usePokemonStore();
</script>

<template>
  <Home v-if="pokemon.view === View.HOME"></Home>
  <Loanding v-if="pokemon.view === View.LOANDING"></Loanding>
  <List v-if="pokemon.view === View.LIST"></List>
</template>
