import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

const REST_API_URL = import.meta.env.VITE_REST_API_URL;

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const token = ref("");

  const login = function (email, password) {
    axios
      .post(`${REST_API_URL}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        user.value = res.value;
        token.value = res.headers["authorization"];
        sessionStorage.setItem("session", token.value);
        router.push({ name: "main" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = function () {
    user.value = {};
    token.value = "";
    sessionStorage.removeItem("session");
    router.push({ name: "login" });
  };

  const findUserEmail = function (name, generate, classId, birth) {
    axios
      .post(`${REST_API_URL}/user/findEmail`, {
        name: name,
        generate: generate,
        classId: classId,
        birth: new Date(birth).toISOString(),
      })
      .then((res) => {
        alert("이메일 : " + res.data);
      })
      .catch((err) => {
        alert("이메일을 찾을 수 없습니다.");
      });
  };

  const findUserPassword = function (email) {
    axios
      .patch(`${REST_API_URL}/user/changeUserPassword`, {
        email: email,
      })
      .then((res) => {
        alert("해당 메일로 변경된 비밀번호를 전송했습니다.");
      })
      .catch((err) => {
        alert("이메일을 확인해주세요");
      });
  };

  const authCode = ref("");
  const sendAuthCodeToUserEmail = function (email) {
    axios
      .post(`${REST_API_URL}/user/authEmail`, {
        email: email,
      })
      .then((res) => {
        alert("이메일 전송이 완료되었습니다. 인증을 완료해주세요");
        console.log(res.data);
        authCode.value = res.data;
      })
      .catch((err) => {
        alert("에러가 발생했습니다. 잠시 후 다시 시도하세요");
      });
  };

  const register = function (userInfo) {
    axios
      .post(`${REST_API_URL}/user/register`, {
        email: userInfo.email,
        password: userInfo.password,
        name: userInfo.name,
        generate: userInfo.generate,
        classId: userInfo.classId,
        birth: new Date(userInfo.birth).toISOString(),
        agree: userInfo.agree,
      })
      .then((res) => {
        console.log("회원가입 성공");
      })
      .catch((err) => {
        console.log("회원가입 실패");
      });
  };

  return {
    login,
    logout,
    findUserEmail,
    findUserPassword,
    sendAuthCodeToUserEmail,
    authCode,
    register,
  };
});
