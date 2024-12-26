<template>
  <main>
    <div class="findUserId">
      아이디 찾기
      <br />
      <input
        type="text"
        placeholder="이름 입력 ex) 김싸피"
        v-model.trim="name"
        class="input-field"
      /><br />
      <input
        type="number"
        placeholder="기수 입력 ex) 12"
        v-model.trim="generate"
        class="input-field"
      /><br />
      <input
        type="number"
        placeholder="   반 입력 ex) 6"
        v-model.trim="classId"
        class="input-field"
      /><br />
      <input
        type="text"
        placeholder="생일 입력 ex) 1999-04-04"
        v-model.trim="birth"
        class="input-field"
      /><br />
      <button class="findEmail-button" type="button" @click="findEmail">
        아이디 찾기
      </button>
    </div>

    <br /><br />
    <div class="findUserPassword">
      비밀번호 찾기
      <br />
      <input
        type="text"
        placeholder="이메일 입력"
        v-model.trim="email"
        class="input-field"
      /><br />
      <button class="findPassword-button" type="button" @click="findPassword">
        비밀번호 찾기
      </button>
    </div>

    <div class="link-group">
      <RouterLink :to="{ name: 'login' }" class="link"> 로그인 </RouterLink> |
      <RouterLink :to="{ name: 'regist' }" class="link"> 회원가입 </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed, ref } from "vue";

const store = useUserStore();

const name = ref("");
const generate = ref();
const classId = ref();
const birth = ref("");
const email = ref("");

const findEmail = () => {
  store.findUserEmail(name.value, generate.value, classId.value, birth.value);
};

const findPassword = () => {
  store.findUserPassword(email.value);
};
</script>

<style scoped></style>
