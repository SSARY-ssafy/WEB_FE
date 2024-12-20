<template>
  <div class="calendar-view">
    <h1>전체 캘린더</h1>
    <!-- 캘린더 컨테이너 -->
    <div class="calendars-container">
      <!-- 왼쪽: 작은 캘린더 -->
      <div class="mini-calendar-container">
        <MiniCalendar />
      </div>
      <!-- 가운데: 큰 캘린더 -->
      <div class="big-calendar-container">
        <BigCalendar />
      </div>
    </div>
  </div>
</template>

<script setup>
import MiniCalendar from "@/components/calendar/Minical.vue";
import BigCalendar from "@/components/calendar/Bigcal.vue";
</script>

<style scoped>
.calendar-view {
  font-family: Arial, sans-serif;
  padding: 2rem;
  background-color: var(--background-color);
  width: 100%;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

/* 캘린더 컨테이너: Flexbox를 사용해 전체 배치 */
.calendars-container {
  display: flex;
  gap: 2rem;
}

/* 1/6: 작은 캘린더 */
.mini-calendar-container {
  flex: 1; /* 작은 캘린더는 비율 1 */
  max-width: 16.66%; /* 1/6 비율 */
  min-width: 12rem; /* 고정 최소 너비 (192px) */
}

/* 나머지 영역: 큰 캘린더 */
.big-calendar-container {
  flex: 5; /* 남은 여백을 모두 차지 */
  max-width: 83.33%; /* 전체 비율에서 나머지를 차지 */
}
</style>
