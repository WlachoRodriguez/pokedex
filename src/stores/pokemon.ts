import { defineStore } from "pinia";
import { View } from "@/types/view";
import type { Pokemon } from "@/types/Pokemon";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [] as Pokemon[],
    view: View.HOME,
  }),
  actions: {
    addPokemons(pokemos: Pokemon[]) {
      this.pokemons = pokemos;
    },
    addFavorite(name: string, favorite: boolean) {
      const pokemon = this.pokemons.find((p) => p.name === name);
      if (pokemon) pokemon.favorite = favorite;
    },
  },
});
