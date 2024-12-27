<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-md-10">
          <div
            class="card shadow-sm"
            id="list1"
            style="border-radius: 1rem; background-color: #f8f9fa"
          >
            <div class="card-body py-4 px-4 px-md-5">
              <!-- Title -->
              <p class="h1 text-center mt-3 mb-4 text-primary fw-bold">
                <i class="fas fa-check-square me-2"></i>
                My Todo-s
              </p>

              <!-- Add Todo -->
              <div class="pb-4">
                <div class="card border-0 bg-light">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <input
                        type="text"
                        class="form-control form-control-lg me-3"
                        placeholder="Add new todo..."
                        v-model="newTodo.title"
                      />
                      <button
                        type="button"
                        class="btn btn-primary px-4"
                        @click="addTodo"
                      >
                        Add Todo
                      </button>
                    </div>
                    <div class="row g-3 align-items-center mt-3">
                      <div class="col-6">
                        <input
                          type="date"
                          class="form-control"
                          v-model="newTodo.startDate"
                          placeholder="Start Date"
                        />
                      </div>
                      <div class="col-6">
                        <input
                          type="date"
                          class="form-control"
                          v-model="newTodo.endDate"
                          placeholder="End Date"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="my-4" />

              <!-- Filter -->
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <div>
                  <span class="me-2 fw-bold text-muted"></span>
                  <select
                    class="form-select d-inline-block w-auto"
                    v-model="filter"
                  >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="active">Active</option>
                    <option value="dueDate">Has due date</option>
                  </select>
                </div>
              </div>

              <!-- Todo List -->
              <div v-if="filteredTodos.length">
                <ul
                  v-for="(todo, index) in filteredTodos"
                  :key="todo.id"
                  class="list-group mb-3"
                >
                  <li class="list-group-item">
                    <!-- 체크박스 -->
                    <input
                      type="checkbox"
                      class="form-check-input me-3"
                      v-model="todo.completed"
                    />

                    <!-- Todo 텍스트 -->
                    <p
                      class="lead fw-normal mb-0 flex-grow-1"
                      :class="{
                        'text-decoration-line-through': todo.completed,
                      }"
                    >
                      {{ todo.title }}
                    </p>

                    <!-- Edit 버튼 -->
                    <button
                      class="btn btn-sm btn-info me-2"
                      @click="editTodo(todo)"
                    >
                      Edit
                    </button>

                    <!-- Delete 버튼 -->
                    <button
                      class="btn btn-sm btn-danger"
                      @click="deleteTodo(todo.id)"
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
              <p v-else class="text-center text-muted">No todos found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Todo 데이터 관리
const todos = ref([
  {
    id: 1,
    title: "Buy groceries for next week",
    completed: true,
    startDate: "2024-12-01",
    endDate: "2024-12-07",
  },
  {
    id: 2,
    title: "Renew car insurance",
    completed: false,
    startDate: "2024-12-05",
    endDate: "2024-12-10",
  },
  {
    id: 3,
    title: "Sign up for online course",
    completed: false,
    startDate: "2024-12-15",
    endDate: "2024-12-20",
  },
]);

const newTodo = ref({
  title: "",
  completed: false,
  startDate: "",
  endDate: "",
});
const filter = ref("all");

// 필터링된 Todo 목록
const filteredTodos = computed(() => {
  if (filter.value === "completed") {
    return todos.value.filter((todo) => todo.completed);
  } else if (filter.value === "active") {
    return todos.value.filter((todo) => !todo.completed);
  } else if (filter.value === "dueDate") {
    return todos.value.filter((todo) => todo.startDate && todo.endDate);
  }
  return todos.value;
});

// Todo 추가
const addTodo = () => {
  if (newTodo.value.title.trim()) {
    todos.value.push({
      id: Date.now(),
      ...newTodo.value,
    });
    newTodo.value = { title: "", completed: false, startDate: "", endDate: "" };
  }
};

// Todo 수정
const editTodo = (todo) => {
  const updatedTitle = prompt("Edit your todo:", todo.title);
  if (updatedTitle) {
    todo.title = updatedTitle.trim();
  }
};

// Todo 삭제
const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>

<style scoped>
#list1 {
  border-color: transparent;
}

/* 공통 폰트 스타일 */
.list-group-item {
  display: flex; /* 한 줄로 정렬 */
  align-items: center; /* 세로 정렬 */
  justify-content: space-between; /* 양 끝 정렬 */
  border-radius: 0.5rem;
  font-size: 0.85rem; /* 리스트 항목 폰트 크기 축소 */
  color: #444; /* 글자 색상 연하게 */
}

/* 체크박스와 텍스트 정렬 */
.list-group-item .form-check-input {
  margin-right: 1rem; /* 체크박스와 텍스트 사이 간격 */
}

/* 버튼 그룹 정렬 */
.list-group-item button {
  margin-left: 0.5rem; /* 버튼들 사이 간격 */
}

.list-group-item .lead {
  flex-grow: 1; /* 텍스트가 남은 공간 차지 */
  margin: 0; /* 기본 여백 제거 */
}

/* 텍스트박스 및 날짜 선택 요소 스타일 */
#list1 .form-control {
  border: 1px solid #ccc; /* 얇은 테두리 */
  border-radius: 0.5rem; /* 모서리 둥글게 */
  font-size: 0.9rem; /* 텍스트 크기 조정 */
  color: #555; /* 글자 색상 */
  background-color: #f9f9f9; /* 부드러운 배경색 */
  box-shadow: none; /* 불필요한 그림자 제거 */
}

#list1 .form-control:focus {
  border-color: #999; /* 포커스 시 테두리 색상 변경 */
  background-color: #fff; /* 포커스 시 배경색 변경 */
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1); /* 부드러운 포커스 그림자 효과 */
}

/* 버튼 스타일 */
#list1 .btn {
  border-radius: 0.5rem; /* 모서리 둥글게 */
  font-size: 0.85rem; /* 버튼 폰트 크기 */
  font-weight: 400; /* 버튼 글자 두께 */
  color: #000000; /* 버튼 텍스트 색상 */
  border: 1px solid #ccc; /* 얇은 테두리 */
  background-color: #e7e7e7; /* 부드러운 배경색 */
}

#list1 .btn:hover {
  border-color: #999; /* 마우스 오버 시 테두리 색상 변경 */
  background-color: #dcdcdc; /* 마우스 오버 시 배경색 변경 */
}

/* 제목 스타일 (My Todo-s 제외) */
#list1 p {
  font-size: 0.9rem; /* 일반 텍스트 폰트 크기 축소 */
  font-weight: 400; /* 글자 두께 완화 */
  color: #666; /* 글자 색상 연하게 */
}

/* My Todo-s 제목 스타일 */
#list1 .h1 {
  font-size: 1.5rem; /* 크기 유지 */
  font-weight: bold; /* 진함 유지 */
  color: #347789; /* 기본 파란색 유지 */
  margin-bottom: 1rem; /* 제목과 나머지 요소 사이의 간격 추가 */
}

/* 제목과 다음 요소 간 간격 추가 */
#list1 .card-body > *:not(:first-child) {
  margin-top: 0.3rem; /* 첫 번째 요소 제외, 나머지 요소와의 간격 */
}
</style>
