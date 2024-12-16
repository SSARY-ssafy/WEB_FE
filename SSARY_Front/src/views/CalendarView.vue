<template>
  <div class="calendar-view">
    <h1>전체 캘린더</h1>
    <MiniCalendar />
    <BigCalendar />
  </div>
</template>

<script setup>
import MiniCalendar from "@/components/calendar/Minical.vue";
import BigCalendar from "@/components/calendar/Bigcal.vue";
</script>

<style scoped>
.calendar-view {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 8rem; /* MyCalendarView와 구분하기 위해 다르게 설정 */
  padding-top: 8rem; /* 헤더 높이만큼 여백 추가 */
}

h1 {
  color: #333; /* 다른 색상으로 구분 */
}
</style>
