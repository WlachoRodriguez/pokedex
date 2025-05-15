import type { Pokemon, PokemonDetail } from "@/types/Pokemon";

export class PokemonRepository {
  async getAll(): Promise<Pokemon[]> {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");

    if (!response.ok) {
      throw new Error("No se pudieron traer los pokemons");
    }

    const data = await response.json();
    const pokemons: Pokemon[] = data.results.map(
      (poke: { name: string; url: string }) => {
        return {
          name: poke.name,
          url: poke.url,
          favorite: false,
        } as Pokemon;
      }
    );
    return pokemons;
  }

  async getPokemon(url: string): Promise<PokemonDetail> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("No se pudieron traer los pokemons");
    }

    const data = await response.json();
    const pokemon: PokemonDetail = {
      name: data.name,
      weight: data.weight,
      height: data.height,
      image: data.sprites.other.dream_world.front_default,
      favorite: false,
      types: data.types.map(
        (type: { type: { name: string } }) => type.type.name
      ),
    } as PokemonDetail;

    return pokemon;
  }
}
