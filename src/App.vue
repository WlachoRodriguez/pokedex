<script setup lang="ts">
import { ref } from "vue";
import List from "./assets/list.svg";
import Star from "./assets/star.svg";
import Button from "./components/ui/Button/Button.vue";
import Search from "./components/ui/Input/InputSearch.vue";
import Item from "./components/ui/List/Item.vue";
import Modal from "./components/ui/Modal/Modal.vue";

const search = ref("");
const show = ref(true);
</script>

<template>
  <Button name="Get started" type="default" :icon="List"></Button>
  <Button name="Favorite" type="primary" :icon="Star"></Button>
  <br />
  <Search v-model="search" placeholder="Busqueda"></Search>
  <br />
  <Item name="Pokemon 1" :favorite="true" />
  <br />
  <Item name="Pokemon 2" :favorite="false" />
  <br />
  <Modal
    v-if="show"
    name="Squirtle"
    :weight="20"
    :height="18"
    :types="['Normal', 'Water']"
    @close="show = false"
  />
</template>
