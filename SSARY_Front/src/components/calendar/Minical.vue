<template>
  <div class="mini-calendar">
    <!-- 상단: 이전 달, 현재 연도/월, 다음 달 버튼 -->
    <div class="calendar-header">
      <button @click="goToPreviousMonth">&lt;</button>
      <span>{{ currentYear }}.{{ currentMonthString }}</span>
      <button @click="goToNextMonth">&gt;</button>
    </div>

    <!-- 요일 표시 -->
    <div class="weekdays">
      <div v-for="day in weekDays" :key="day" class="weekday">{{ day }}</div>
    </div>

    <!-- 날짜 표시 -->
    <div class="days">
      <!-- 이전 달의 날짜 -->
      <div
        v-for="day in previousMonthDays"
        :key="'prev-' + day"
        class="day gray"
      >
        {{ day }}
      </div>

      <!-- 현재 달의 날짜 -->
      <div v-for="day in currentMonthDays" :key="'current-' + day" class="day">
        {{ day }}
      </div>

      <!-- 다음 달의 날짜 -->
      <div v-for="day in nextMonthDays" :key="'next-' + day" class="day gray">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCalendar",
  data() {
    return {
      currentDate: new Date(),
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      weekDays: ["일", "월", "화", "수", "목", "금", "토"],
    };
  },
  computed: {
    currentMonthString() {
      return String(this.currentMonth + 1).padStart(2, "0");
    },
    firstDayOfMonth() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    totalDaysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    previousMonthDays() {
      const lastDayOfPreviousMonth = new Date(
        this.currentYear,
        this.currentMonth,
        0
      ).getDate();
      const visibleDays = this.firstDayOfMonth;
      return Array.from(
        { length: visibleDays },
        (_, i) => lastDayOfPreviousMonth - visibleDays + i + 1
      );
    },
    currentMonthDays() {
      return Array.from({ length: this.totalDaysInMonth }, (_, i) => i + 1);
    },
    nextMonthDays() {
      const remainingDays =
        7 -
        ((this.previousMonthDays.length + this.currentMonthDays.length) % 7);
      return remainingDays < 7
        ? Array.from({ length: remainingDays }, (_, i) => i + 1)
        : [];
    },
  },
  methods: {
    goToPreviousMonth() {
      if (this.currentMonth === 0) {
        this.currentYear--;
        this.currentMonth = 11;
      } else {
        this.currentMonth--;
      }
    },
    goToNextMonth() {
      if (this.currentMonth === 11) {
        this.currentYear++;
        this.currentMonth = 0;
      } else {
        this.currentMonth++;
      }
    },
  },
};
</script>

<style scoped>
/* 전체 캘린더 스타일 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 0.5rem; /* 여백 조정 */
}

.calendar-header button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem; /* 버튼 글씨 크기 줄임 */
  color: #333;
}

.calendar-header span {
  font-size: 1rem; /* 연/월 표시 크기 줄임 */
}

/* 요일 스타일 */
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 0.875rem; /* 요일 글씨 크기 줄임 */
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* 날짜 스타일 */
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
}

.day {
  padding: 0.25rem 0; /* 날짜 셀 패딩 줄임 */
  font-size: 0.875rem; /* 날짜 글씨 크기 줄임 */
}

.gray {
  color: var(--neutral-dark); /* 이전/다음 달 색상 */
}

/* 최상단 요소에만 마진 적용 */
.mini-calendar {
  margin-top: 2rem; /* 상단 여백 */
  min-width: 10rem;
}
</style>
