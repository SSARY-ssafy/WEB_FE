<template>
  <main>
    <Book />
    <Liquid />
  </main>
</template>

<script setup>
import Book from "@/components/userAuth/Book.vue";
import Liquid from "@/components/Liquid.vue";
</script>

<style scoped>
main {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
