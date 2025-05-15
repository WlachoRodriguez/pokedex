<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  name: string;
  type: "primary" | "default";
  icon?: string;
  size?: "small" | "medium" | "large";
}>();
</script>

<template>
  <button :class="`${props.type} ${props.size}`">
    <img v-if="icon" :src="props.icon" height="22" width="22" />
    <slot>{{ props.name }}</slot>
  </button>
</template>

<style scoped>
button {
  font-family: "Lato";
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 11px 20px;
  color: #fff;
  cursor: pointer;
}

button:focus,
button:hover {
  outline: transparent !important;
  border-color: transparent !important;
}

.primary {
  background: #f22539;
}

.primary:active {
  background: #c00e20;
}

.default {
  background: #bfbfbf;
}

.medium {
  width: 275px;
}
</style>
