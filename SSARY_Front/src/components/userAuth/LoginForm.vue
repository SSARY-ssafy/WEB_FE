<template>
  <div class="form">
    <div class="logo">
      <router-link :to="{ name: 'main' }">로고~<br /><br /></router-link>
      <p>로그인</p>
    </div>
    <div class="form-box">
      <InputField
        :labelText="'ID'"
        :type="'text'"
        :placeholder="'이메일 입력'"
        :required="true"
        v-model.trim="email"
      />
      <InputField
        :labelText="'Password'"
        :type="'password'"
        :placeholder="'비밀번호 입력'"
        :required="true"
        v-model.trim="password"
      />
      <button-basic type="button" @click="login">Sign In</button-basic>
    </div>
    <p><router-link :to="{ name: 'find' }">ID/PW 찾기</router-link></p>
    <div class="or">
      <div>OR</div>
    </div>
    <div class="simple">간편로그인 넣기</div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import InputField from "@/components/InputField.vue";
import ButtonBasic from "@/components/buttons/ButtonBasic.vue";

const userStore = useUserStore();

const email = ref("");
const password = ref("");

const login = () => {
  if (!email.value.trim() || !password.value.trim()) {
    alert("이메일와 비밀번호를 입력해주세요.");
    return;
  }
  userStore.login(email.value, password.value);
};
</script>

<style scoped></style>
