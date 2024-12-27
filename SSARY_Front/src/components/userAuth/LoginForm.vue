<template>
  <div id="login-form">
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

<style scoped>
#login-form {
  margin: 0px 45px;
}

.logo {
  text-align: center;
  position: relative;
}
.logo img {
  width: 153px;
}
.logo > p {
  position: absolute;
  bottom: 0;
  margin-bottom: 0.244em;
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
  transform: translateX(0.4em);
  font-size: 0.95em;
}

#login-form .or {
  border-bottom: 3px solid rgb(212, 212, 212);
  text-align: center;
  margin-bottom: 3em;
}
#login-form .or > div {
  width: 2.8em;
  height: 2.8em;
  border: 4px solid rgb(212, 212, 212);
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  transform: translateY(1.4em);
  font-weight: bold;
  color: rgb(212, 212, 212);
}

#login-form .simple {
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid rgb(218, 220, 224);
  border-radius: 20px;
  text-align: center;
}
</style>
