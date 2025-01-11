<template>
  <main>
    <Book :type="'regist'" />
    <Liquid />
  </main>
</template>

<script setup>
import Book from "@/components/userAuth/Book.vue";
import Liquid from "@/components/Liquid.vue";
</script>

<style scoped></style>
