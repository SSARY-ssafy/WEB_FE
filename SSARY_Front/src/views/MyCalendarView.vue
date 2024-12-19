<template>
  <div class="my-calendar-view">
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
      <!-- 오른쪽: 추가 컴포넌트 (Placeholder) -->
      <div class="additional-container">
        <p>추가 컴포넌트 영역</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import MiniCalendar from "@/components/calendar/Minical.vue";
import BigCalendar from "@/components/calendar/Bigcal.vue";
</script>

<style scoped>
.my-calendar-view {
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

/* 캘린더 컨테이너: Flexbox를 사용해 6등분 */
.calendars-container {
  display: flex;
  justify-content: space-between; /* 각 항목을 균등하게 배치 */
  align-items: flex-start;
  gap: 2rem;
}

/* 1/6: 작은 캘린더 */
.mini-calendar-container {
  flex: 1; /* 전체 비율의 1/6 */
  max-width: 16.66%; /* 1/6 비율 */
}

/* 4/6: 큰 캘린더 */
.big-calendar-container {
  flex: 4; /* 전체 비율의 4/6 */
  max-width: 66.66%; /* 4/6 비율 */
}

/* 1/6: 추가 컴포넌트 영역 */
.additional-container {
  flex: 1; /* 전체 비율의 1/6 */
  max-width: 16.66%; /* 1/6 비율 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--neutral-blue);
  color: #333;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid var(--neutral-light);
  border-radius: 0.5rem;
  height: 100%;
  margin-top: 1rem;
}
</style>
