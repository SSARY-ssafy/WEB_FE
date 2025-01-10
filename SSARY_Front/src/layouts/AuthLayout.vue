<template>
  <div id="body">
    <RouterView />
  </div>
</template>

<script setup></script>

<style scoped>
#body main {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  background-color: var(--primary-color);
}
</style>
