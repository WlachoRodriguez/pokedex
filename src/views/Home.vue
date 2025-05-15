<script setup lang="ts">
import homeImage from "@/assets/home.png";
import Button from "@/components/ui/Button/Button.vue";
import { View } from "@/types/view";
import { usePokemonStore } from "@/stores/pokemon";
import { PokemonService } from "@/services/PokemonService";

const service = new PokemonService();

const pokemon = usePokemonStore();

const getStarted = async () => {
  pokemon.view = View.LOANDING;
  const pokemons = await service.getAll();
  pokemon.addPokemons(pokemons);
  //Se realiza el timeout solo para visualizar un poco el loanding y la animacion
  setTimeout(() => {
    pokemon.view = View.LIST;
  }, 1500);
};
</script>

<template>
  <div class="content-home">
    <img :src="homeImage" />
    <h1 class="content-home-title">Welcome to Pokédex</h1>
    <p class="content-home-description">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <Button name="Get started" type="primary" @click="getStarted"></Button>
  </div>
</template>

<style scoped>
.content-home {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
}

.content-home-title {
  font-family: "Lato";
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
}

.content-home-description {
  font-family: "Lato";
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  max-width: 570px;
}
</style>
