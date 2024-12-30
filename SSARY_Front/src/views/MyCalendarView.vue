<template>
  <div class="my-calendar-view">
    <h1>전체 캘린더</h1>
    <div class="calendars-container">
      <!-- 작은 캘린더 -->
      <div class="mini-calendar-container">
        <MiniCalendar />
      </div>
      <!-- 큰 캘린더 -->
      <div class="big-calendar-container">
        <BigCalendar />
      </div>
      <!-- TodoList 컴포넌트 -->
      <div class="additional-container">
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script setup>
import MiniCalendar from "@/components/calendar/Minical.vue";
import BigCalendar from "@/components/calendar/Bigcal.vue";
import TodoList from "@/components/todo/TodoList.vue";
</script>

<style scoped>
.my-calendar-view {
  font-family: Arial, sans-serif;
  padding: 2rem;
  background-color: var(--background-color);
  width: 100%;
  height: 100%;
}

.calendars-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
}

.mini-calendar-container,
.big-calendar-container {
  margin-top: 2rem; /* 아래로 간격 설정 */
}

.additional-container {
  margin-top: 2rem; /* 동일한 간격 유지 */
}

.mini-calendar-container {
  flex: 1;
  max-width: 16.66%; /* 작은 캘린더는 전체 너비의 1/6 */
}

.big-calendar-container {
  flex: 4; /* 큰 캘린더는 전체 너비의 4/6 */
}
.additional-container {
  flex: 1;
  max-width: 16.66%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  height: 50%;
  overflow-y: auto; /* 세로 스크롤 */
  overflow-x: auto; /* 가로 스크롤 */
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  white-space: nowrap; /* 텍스트 한 줄 유지 */

  margin-top: 3rem; /* 부모 컨테이너의 남는 공간만큼 아래로 이동 */
}

/* 스크롤 스타일 */
.additional-container::-webkit-scrollbar {
  width: 8px; /* 스크롤바 너비 (상하) */
  height: 8px; /* 스크롤바 높이 (좌우) */
}

.additional-container::-webkit-scrollbar-track {
  background: #f1f1f1; /* 스크롤바 트랙 배경 */
  border-radius: 8px;
}

.additional-container::-webkit-scrollbar-thumb {
  background: #c1c1c1; /* 스크롤바 핸들 색상 */
  border-radius: 8px;
}

.additional-container::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0; /* 마우스 오버 시 색상 */
}

/* 자식 요소 스타일 */
.additional-container > * {
  flex-grow: 1; /* 자식 요소가 부모의 남은 공간을 차지하도록 설정 */
  width: 100%; /* 너비를 부모 컨테이너에 맞춤 */
  margin-bottom: 1rem; /* 요소 간 간격 추가 */
  box-sizing: border-box; /* 패딩과 테두리 포함 */
}
</style>
