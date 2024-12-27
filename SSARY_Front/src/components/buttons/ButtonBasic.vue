<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
button {
  width: 100%;
  background-color: rgb(44, 44, 44);
  color: rgb(255, 255, 255);
  padding: 0.9em;
  border: 1px solid rgb(0, 0, 0);
  font-size: 1em;
  border-radius: 8px;
  margin-bottom: 30px;
}
</style>
