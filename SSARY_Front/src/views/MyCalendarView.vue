<template>
  <div class="my-calendar-view">
    <h1>마이 캘린더</h1>
    <!-- Minical 컴포넌트 사용 -->
    <MiniCalendar />
  </div>
</template>

<script setup>
import MiniCalendar from "@/components/calendar/Minical.vue";
</script>

<style scoped>
.my-calendar-view {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 10rem;
  padding-top: 10rem; /* 헤더 높이만큼 여백 추가 */
}

h1 {
  color: #333;
}
</style>
