<template>
  <div class="form">
    <div class="logo">
      <router-link :to="{ name: 'main' }">로고~<br /><br /></router-link>
      <p>회원가입</p>
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
      <InputField
        :labelText="'Password Confirm'"
        :type="'password'"
        :placeholder="'비밀번호 재입력'"
        :required="true"
        v-model.trim="passwordConfirm"
      />
      <button-basic type="button" @click="goNext">Next</button-basic>
    </div>
    <div class="or">
      <div>OR</div>
    </div>
    <div class="simple">간편회원가입 넣기</div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import InputField from "@/components/InputField.vue";
import ButtonBasic from "@/components/buttons/ButtonBasic.vue";

const emit = defineEmits(["handle-is-next"]);

const goNext = () => {
  emit("handle-is-next", true);
};

const userStore = useUserStore();

const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const login = () => {
  if (!email.value.trim() || !password.value.trim()) {
    alert("이메일와 비밀번호를 입력해주세요.");
    return;
  }
  userStore.login(email.value, password.value);
};
</script>

<style scoped></style>
