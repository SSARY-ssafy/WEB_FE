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
      <div v-for="day in weekDays" :key="day">{{ day }}</div>
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
/* 루트 폰트 크기 기준으로 rem 단위 사용 */
.mini-calendar {
  width: 15.625rem; /* 250px => 15.625rem */
  font-family: Arial, sans-serif;
  border: 0.0625rem solid #ddd; /* 1px => 0.0625rem */
  border-radius: 0.3125rem; /* 5px => 0.3125rem */
  padding: 0.625rem; /* 10px => 0.625rem */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* 2px, 4px => rem 변환 */
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 0.625rem; /* 10px => 0.625rem */
}

.calendar-header button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem; /* 기본 폰트 크기 */
  color: #333;
}

.weekdays,
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
}

.day {
  padding: 0.3125rem 0; /* 5px => 0.3125rem */
}

.gray {
  color: #ccc;
}
</style>
