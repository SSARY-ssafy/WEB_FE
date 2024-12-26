<template>
  <main>
    회원가입
    <div class="register-container">
      <!-- 이메일 입력 -->
      <input
        type="text"
        placeholder="이메일 입력"
        v-model.trim="email"
        class="input-field email"
        :readonly="isEmailValid"
      /><br />
      <button class="authEmail" @click="sendAuthCode">인증코드 전송</button
      ><br />

      <!-- 인증 코드 입력 -->
      <input
        type="text"
        placeholder="인증 코드 입력"
        v-model.trim="inputCode"
        class="input-field code"
      /><br />
      <button class="authEmail" @click="authUserEmail">이메일 인증</button>

      <!-- 비밀번호 입력 -->
      <input
        type="password"
        placeholder="비밀번호 입력"
        v-model.trim="registInfo.password"
        class="input-field password"
      /><br />

      <!-- 비밀번호 확인 -->
      <input
        type="password"
        placeholder="비밀번호 확인"
        v-model.trim="registInfo.passwordAgain"
        class="input-field"
      /><br />

      <!-- 이름 입력 -->
      <input
        type="text"
        placeholder="이름"
        v-model.trim="registInfo.name"
        class="input-field"
      /><br />

      <!-- 기수 입력 -->
      <input
        type="number"
        placeholder="기수"
        v-model.trim="registInfo.generate"
        class="input-field"
      /><br />

      <!-- 반 입력 -->
      <input
        type="number"
        placeholder="반"
        v-model.trim="registInfo.classId"
        class="input-field"
      /><br />

      <!-- 생년월일 입력 -->
      <input
        type="text"
        placeholder="생년월일 ex)1999-04-04"
        v-model.trim="registInfo.birth"
        class="input-field"
      /><br />

      <!-- 첨삭 여부 -->
      <label>컨설턴트 첨삭 여부</label>
      <input type="checkbox" v-model="agreeView" class="input-field" /><br />
      <button @click="regist">회원가입</button>
    </div>

    <div class="link-group">
      <RouterLink :to="{ name: 'login' }" class="link"> 로그인 </RouterLink> |
      <RouterLink :to="{ name: 'find' }" class="link">
        아이디, 비밀번호 찾기
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed, ref } from "vue";

const store = useUserStore();
const email = ref("");
const inputCode = ref("");
const isEmailValid = ref(false);
const registInfo = ref({
  email: email.value,
  password: "",
  name: "",
  generate: 0,
  classId: 0,
  birth: "",
});

const agreeView = ref(false);
const agree = computed(() => (agreeView.value ? 1 : 0));
registInfo.value.agree = agree;

const sendAuthCode = () => {
  store.sendAuthCodeToUserEmail(email.value);
};

const authUserEmail = () => {
  console.log(store.authCode);

  if (store.authCode == inputCode.value) {
    isEmailValid.value = true;
    alert("이메일 인증 완료");
    return;
  }
  alert("인증 실패");
};

const regist = () => {
  store.register(registInfo.value);
};
</script>

<style scoped></style>
