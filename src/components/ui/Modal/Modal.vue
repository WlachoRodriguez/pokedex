<script setup lang="ts">
import starActive from "@/assets/starActive.svg";
import closeIcon from "@/assets/close.svg";
import Button from "@/components/ui/Button/Button.vue";
import Star from "@/components/ui/Icon/Star.vue";

const props = defineProps<{
  name: string;
  weight: number;
  height: number;
  types: string[];
}>();

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>

<template>
  <div class="container" @click.self="close">
    <div class="modal">
      <img :src="closeIcon" class="modal-close" @click="close" />
      <div class="modal-header">
        <img src="@/assets/background.png" />
      </div>

      <div class="modal-body">
        <p><strong>Name:</strong> {{ props.name }}</p>
        <p><strong>Weight:</strong> {{ props.weight }}</p>
        <p><strong>Height:</strong> {{ props.height }}</p>
        <p><strong>Types:</strong> {{ props.types.join(", ") }}</p>
      </div>

      <div class="modal-footer">
        <Button name="Share to my friends" type="primary"></Button>
        <Star :icon="starActive" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background: #fff;
  border-radius: 12px;
  width: 315px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.modal-header {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  padding: 12px 16px;
  font-size: 14px;
  font-family: "Lato";
}

.modal-body > p {
  border-bottom: 1px solid #e8e8e8;
  margin: 0px;
  padding: 10px 0px;
  text-align: left;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
}

.star-icon {
  width: 24px;
  height: 24px;
}
</style>
