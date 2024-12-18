<template>
    <main>
        로그인
        <div class="login-container">
            <input 
                type="text" 
                placeholder="이메일 입력" 
                v-model.trim="email" 
                class="input-field"/>
            <input 
                type="password" 
                placeholder="비밀번호 입력" 
                v-model.trim="password" 
                class="input-field"
                @keyup.enter="login"/>
            
            <button class="login-button" type="button" @click="login" >
                Login
            </button>
            <div class="link-group">
                <RouterLink :to="{ name: 'find' }" class="link">
                    이메일,비밀번호 찾기
                </RouterLink> | 
                <RouterLink :to="{ name: 'regist' }" class="link">
                    회원가입
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { useUserStore } from '@/stores/user';
    import { ref } from 'vue';

    const userStore = useUserStore();

    const email = ref('');
    const password = ref('');

    const login = () =>{
        if (!email.value.trim() || !password.value.trim()) {
            alert('이메일와 비밀번호를 입력해주세요.');
            return;
        }
        userStore.login(email.value,password.value);
    }

</script>

<style scoped>

</style>