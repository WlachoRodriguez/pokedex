import { PokemonRepository } from "@/repositories/PokemonRepository";
import type { Pokemon, PokemonDetail } from "@/types/Pokemon";

export class PokemonService {
  private repository: PokemonRepository;

  constructor() {
    this.repository = new PokemonRepository();
  }

  async getAll(): Promise<Pokemon[]> {
    const pokemons = await this.repository.getAll();
    return pokemons;
  }

  async getPokemon(url: string): Promise<PokemonDetail> {
    const pokemon = await this.repository.getPokemon(url);
    return pokemon;
  }
}
