<template>
  <button
    :class="['btn', buttonTypeClass, buttonSizeClass]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed, defineEmits } from "vue";

const props = defineProps({
  buttonTypeClass: {
    type: String,
    default: "primary",
  },
  buttonSizeClass: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();

const handleClick = () => {
  if (!props.disabled) {
    emit("click");
  }
};
</script>

<style scoped></style>
