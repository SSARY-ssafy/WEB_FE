<template>
  <div class="big-calendar">
    <!-- 달 변경 버튼 및 헤더 -->
    <div class="calendar-header">
      <button @click="prevMonth" class="nav-button">&lt;</button>
      <button @click="nextMonth" class="nav-button">&gt;</button>
      <span class="month-year">
        {{ currentYear }}.{{ String(currentMonth).padStart(2, "0") }}
      </span>
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
        :class="{
          hovered: hoverDate === index,
          gray: date.isOtherMonth,
        }"
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
const currentMonth = ref(currentDate.getMonth() + 1); // 월은 1부터 시작
const hoverDate = ref(null);

const days = ["일", "월", "화", "수", "목", "금", "토"];
const dates = ref([]);

const companiesList = [
  "삼성증권",
  "미래에셋증권",
  "NH투자증권",
  "KB증권",
  "대신증권",
  "신한투자증권",
  "유안타증권",
  "키움증권",
  "메리츠증권",
  "교보증권",
  "한국예탁결제원",
  "한국거래소",
  "한국자산관리공사",
  "한국산업은행",
  "한국기업평가",
  "신용보증기금",
  "기술보증기금",
  "한국은행",
  "한국무역보험공사",
  "한국벤처투자",
];

let companyIndex = 0; // 기업 리스트 순회용 인덱스
const companyPattern = [2, 3, 1, 0]; // 기업 배치 패턴

const calculateDates = () => {
  const firstDayOfMonth = new Date(
    currentYear.value,
    currentMonth.value - 1,
    1
  ).getDay(); // 해당 월 1일의 요일
  const totalDaysInMonth = new Date(
    currentYear.value,
    currentMonth.value,
    0
  ).getDate(); // 현재 월의 총 일 수
  const previousMonthDaysCount = firstDayOfMonth; // 이전 달의 마지막 날짜를 표시할 개수
  const totalVisibleCells = 42; // 6행 7열 = 42칸

  const previousMonthLastDate = new Date(
    currentYear.value,
    currentMonth.value - 1,
    0
  ).getDate();

  const previousMonthDays = Array.from(
    { length: previousMonthDaysCount },
    (_, i) => ({
      day: previousMonthLastDate - previousMonthDaysCount + i + 1,
      isOtherMonth: true,
      companies: [], // 이전 달 날짜에는 기업 없음
    })
  );

  const currentMonthDays = Array.from({ length: totalDaysInMonth }, (_, i) => {
    const companyCount = companyPattern[i % companyPattern.length]; // 패턴에 따라 기업 수 설정
    const companies = Array.from({ length: companyCount }, () => {
      const company = companiesList[companyIndex % companiesList.length];
      companyIndex++;
      return { name: company, favorite: false };
    });

    return {
      day: i + 1,
      isOtherMonth: false,
      companies: companies, // 기업 리스트 추가
    };
  });

  const nextMonthDaysCount =
    totalVisibleCells - (previousMonthDays.length + currentMonthDays.length);
  const nextMonthDays = Array.from({ length: nextMonthDaysCount }, (_, i) => ({
    day: i + 1,
    isOtherMonth: true,
    companies: [], // 다음 달 날짜에는 기업 없음
  }));

  // 최종 dates 배열 생성
  dates.value = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
};

// 이전 달로 이동
const prevMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12; // 월이 1월에서 이전으로 가면 12월로 변경
    currentYear.value--; // 연도 감소
  } else {
    currentMonth.value--;
  }
  calculateDates(); // 날짜 다시 계산
};

// 다음 달로 이동
const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1; // 월이 12월에서 다음으로 가면 1월로 변경
    currentYear.value++; // 연도 증가
  } else {
    currentMonth.value++;
  }
  calculateDates(); // 날짜 다시 계산
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
  padding: 1rem;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

/* 헤더 */
.calendar-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
}

.nav-button {
  border: none;
  background: transparent;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0 1rem;
  color: var(--neutral-dark);
}

.month-year {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;
  color: var(--neutral-dark);
}

/* 요일 헤더 */
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #ddf0f5;
  text-align: center;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.5rem 0;
}

/* 날짜 그리드 */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  overflow-y: auto;
}

.date-cell {
  min-height: 6rem;
  border: 1px solid var(--neutral-light);
  padding: 0.2rem;
  background-color: var(--background-color);
  position: relative;
  font-size: 0.59rem;
}

.date-cell.hovered {
  background-color: #ddf0f5;
}

.date-cell.gray {
  color: var(--neutral-dark);
}

/* 날짜 숫자 */
.date-number {
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  z-index: 2; /* 날짜가 위에 표시되도록 설정 */
  margin-bottom: 0.5rem; /* 날짜 아래 여백 추가 */
}

.list-item {
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: space-between; /* 내용과 하트를 양쪽 끝으로 배치 */
  gap: 0.1rem;
  font-size: 0.59rem; /* 글자 크기 */
  margin-top: 1rem; /* 첫 번째 기업 이름과 날짜 사이 여백 */
  width: 100%; /* 셀의 전체 너비 사용 */
  position: relative;
}

.heart {
  margin-left: auto; /* 하트를 오른쪽 끝으로 밀어내기 */
  cursor: pointer; /* 클릭 가능하도록 설정 */
}

.list-item:nth-of-type(1) {
  margin-top: 0.8rem; /* 날짜 숫자와 첫 번째 기업 사이 간격 */
}
</style>
