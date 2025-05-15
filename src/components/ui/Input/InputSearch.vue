<script setup lang="ts">
import { computed, defineProps } from "vue";
import Search from "@/assets/search.svg";

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val: string) => emit("update:modelValue", val),
});
</script>

<template>
  <div>
    <img :src="Search" />
    <input type="text" :placeholder="props.placeholder" v-model="value" />
  </div>
</template>

<style scoped>
div {
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 16px 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

div > img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  opacity: 0.5;
}

div > input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 22px;
  background-color: transparent;
  color: #333;
  width: 100%;
}

div > input::placeholder {
  color: #aaa;
}
</style>
