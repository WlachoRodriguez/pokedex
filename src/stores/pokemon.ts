import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    favorites: [] as any[],
  }),
  actions: {
    addFavorite(favorite: any) {
      this.favorites.push(favorite);
    },
  },
});
