<script setup lang="ts">
import Search from "@/components/ui/Input/InputSearch.vue";
import Item from "@/components/ui/List/Item.vue";
import Button from "@/components/ui/Button/Button.vue";
import Modal from "@/components/ui/Modal/Modal.vue";
import { usePokemonStore } from "@/stores/pokemon";
import { onMounted, ref, watch } from "vue";
import type { Pokemon, PokemonDetail } from "@/types/Pokemon";
import { PokemonService } from "@/services/PokemonService";
import { View } from "@/types/view";
import { toast } from "vue3-toastify";

const service = new PokemonService();
const pokemon = usePokemonStore();
const search = ref("");
const btnActive = ref("all");
const pokemonsList = ref<Pokemon[]>([]);
const pokemonDetail = ref<PokemonDetail>({
  name: "",
  weight: "",
  height: "",
  types: [],
  image: "",
  favorite: false,
});
const modalActive = ref(false);

const updatePokemosList = () => {
  if (btnActive.value === "all") {
    pokemonsList.value = pokemon.pokemons;
  } else if (btnActive.value === "favorite") {
    pokemonsList.value = pokemon.pokemons.filter((p) => p.favorite === true);
    if (pokemonsList.value.length === 0) {
      pokemonsList.value = pokemon.pokemons;
      btnActive.value = "all";
      toast.warning("There are no favorite Pokemons");
    }
  }

  if (pokemonDetail.value.name !== "")
    pokemonDetail.value.favorite =
      pokemonsList.value.find((p) => p.name === pokemonDetail.value.name)
        ?.favorite ?? false;

  if (search.value !== "")
    pokemonsList.value = pokemonsList.value.filter((p) =>
      p.name.includes(search.value)
    );
};

const setBtnActive = (active: string) => {
  btnActive.value = active;
  updatePokemosList();
};

onMounted(() => {
  updatePokemosList();
});

watch(pokemon.pokemons, () => {
  updatePokemosList();
});

watch(search, () => {
  updatePokemosList();
});

const viewDetailPokemon = async (poke: Pokemon) => {
  const result = await service.getPokemon(poke.url);
  pokemonDetail.value.name = result.name;
  pokemonDetail.value.weight = result.weight;
  pokemonDetail.value.height = result.height;
  pokemonDetail.value.types = result.types;
  pokemonDetail.value.image = result.image;
  pokemonDetail.value.favorite = poke.favorite;
  modalActive.value = true;
};

const backHome = () => {
  //Se hace el paso del Loanding para ver la animacion
  pokemon.view = View.LOANDING;
  setTimeout(() => {
    pokemon.view = View.HOME;
  }, 1000);
  //Se finaliza animacion
  search.value = "";
  pokemonsList.value = pokemon.pokemons;
};
</script>

<template>
  <div class="content">
    <Search class="search" v-model="search" placeholder="Search"></Search>
    <div class="items" v-if="pokemonsList.length > 0">
      <Item
        v-for="poke in pokemonsList"
        :key="poke.name"
        :pokemon="poke"
        @open="viewDetailPokemon"
        class="item"
      ></Item>
    </div>
    <div class="list-empty" v-if="pokemonsList.length === 0">
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <Button name="Go back home" type="primary" @click="backHome"></Button>
    </div>
  </div>
  <div class="footer" v-if="pokemonsList.length > 0">
    <Button
      name="All"
      :type="btnActive === 'all' ? 'primary' : 'default'"
      size="medium"
      @click="setBtnActive('all')"
    ></Button>
    <Button
      name="Favorites"
      :type="btnActive === 'favorite' ? 'primary' : 'default'"
      size="medium"
      @click="setBtnActive('favorite')"
    ></Button>
  </div>
  <Modal
    v-if="modalActive"
    :pokemon="pokemonDetail"
    @close="modalActive = false"
  ></Modal>
</template>

<style scoped>
.content {
  height: calc(100% - 112px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 35px 20px 0px 20px;
  overflow: auto;
}

.search {
  margin-bottom: 40px;
  max-width: 570px;
}

.items {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  margin-bottom: 10px;
  max-width: 570px;
  width: calc(100% - 40px);
  cursor: pointer;
}

.list-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-empty > h1 {
  font-family: "Lato";
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  margin: 0px 0px 10px 0px;
  color: #353535;
}

.list-empty > p {
  font-family: "Lato";
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin: 0px 0px 10px 0px;
  color: #5e5e5e;
}

.footer {
  position: sticky;
  bottom: 0;
  background-color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
