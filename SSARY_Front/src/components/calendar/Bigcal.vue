<template>
  <div class="big-calendar">
    <!-- 달 변경 버튼 및 헤더 -->
    <div class="calendar-header">
      <button @click="prevMonth" class="nav-button">&lt;</button>
      <span class="month-year">{{ currentYear }}년 {{ currentMonth }}월</span>
      <button @click="nextMonth" class="nav-button">&gt;</button>
    </div>

    <!-- 요일 헤더 -->
    <div class="weekdays">
      <div v-for="day in days" :key="day" class="weekday">{{ day }}</div>
    </div>

    <!-- 날짜 그리드 -->
    <div class="calendar-grid">
      <div
        v-for="(date, index) in dates"
        :key="index"
        class="date-cell"
        @mouseover="hoverDate = index"
        @mouseleave="hoverDate = null"
        :class="{ hovered: hoverDate === index }"
      >
        <!-- 날짜 -->
        <div class="date-number">{{ date.day }}</div>
        <!-- 기업 리스트 -->
        <div
          v-for="(company, idx) in date.companies"
          :key="idx"
          class="list-item"
        >
          <span class="emoji">🚀</span>
          <span class="company-name">{{ company.name }}</span>
          <span class="emoji">🏁</span>
          <span @click="toggleFavorite(date.day, idx)" class="heart">{{
            company.favorite ? "❤️" : "🤍"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentDate = new Date();
const currentYear = ref(currentDate.getFullYear());
const currentMonth = ref(currentDate.getMonth() + 1);
const hoverDate = ref(null);

const days = ["일", "월", "화", "수", "목", "금", "토"];
const dates = ref([]);

// 더미 데이터 생성
const generateDummyData = () => {
  return Array.from({ length: 42 }, (_, i) => ({
    day: i < 31 ? i + 1 : "",
    companies: [
      { name: "기업 A", favorite: false },
      { name: "기업 B", favorite: true },
    ],
  }));
};

const calculateDates = () => {
  dates.value = generateDummyData();
};

const prevMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
  calculateDates();
};

const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
  calculateDates();
};

const toggleFavorite = (day, index) => {
  const targetDate = dates.value.find((d) => d.day === day);
  if (targetDate) {
    targetDate.companies[index].favorite =
      !targetDate.companies[index].favorite;
  }
};

onMounted(() => {
  calculateDates();
});
</script>

<style scoped>
/* 큰 캘린더 전체 */
.big-calendar {
  background-color: var(--background-color);
  border: 1px solid var(--neutral-light);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 0.5rem var(--neutral-light);
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

/* 헤더 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.nav-button {
  background-color: var(--secondary-color);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  color: var(--primary-color);
}

.month-year {
  font-size: 1.25rem;
  font-weight: bold;
}

/* 요일 헤더 */
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: var(--secondary-color);
  text-align: center;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.5rem 0;
}

/* 날짜 그리드 */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.3rem;
  overflow-y: auto;
}

.date-cell {
  min-height: 5rem;
  border: 1px solid var(--neutral-light);
  border-radius: 0.5rem;
  padding: 0.2rem;
  background-color: var(--background-color);
  position: relative;
  font-size: 0.75rem;
}

.date-cell.hovered {
  background-color: var(--secondary-color);
}

/* 날짜 숫자 */
.date-number {
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
}

/* 리스트 아이템 스타일 */
.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  font-size: 0.5rem; /* 글자 크기 */
  white-space: nowrap;
  overflow: hidden;
  padding: 0.1rem;
}

/* 기업 이름 스타일 */
.company-name {
  font-size: 0.5rem; /* 기업 이름 크기 */
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 이모티콘 스타일 */
.emoji {
  font-size: 0.5rem; /* 이모티콘 크기 */
  margin: 0;
}

/* 하트 아이콘 스타일 */
.heart {
  font-size: 0.5rem;
  cursor: pointer;
}
</style>
