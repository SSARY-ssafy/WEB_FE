import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_API_URL=import.meta.env.VITE_REST_API_URL

export const useUserStore = defineStore('user', () => {

  const user = ref({});
  const token = ref('');

  const login = function (email, password){
    axios
      .post(`${REST_API_URL}/user/login`,{
        email: email,
        password: password,
      })
      .then((res)=>{
        user.value = res.value;
        token.value = res.headers['authorization'];
        sessionStorage.setItem('session', token.value);
        router.push({name:"main"});
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  const logout = function(){
    user.value = {};
    token.value = '';
    sessionStorage.removeItem("session");
    router.push({name: "login"});
  }

  const checkEmailVerification = function(){
    
  }

  const regist = function(){

  }

  const findUserEmail = function(){

  }

  const findUserPassword = function(){

  }

  return { login, logout, }
})
