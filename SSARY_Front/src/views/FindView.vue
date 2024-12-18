<template>
    <main>
        <div class="findUserId">
            아이디 찾기
            <br>
            <input 
                type="text" 
                placeholder="기수 입력 ex) 12" 
                v-model.trim="generate" 
                class="input-field"/><br>
            <input 
                type="text" 
                placeholder="   반 입력 ex) 6" 
                v-model.trim="email" 
                class="input-field"/><br>
            <input 
                type="text" 
                placeholder="이름 입력 ex) 김싸피" 
                v-model.trim="email" 
                class="input-field"/><br>
            <input 
                type="text" 
                placeholder="생일 입력 ex) 19990404" 
                v-model.trim="birth" 
                class="input-field"/>
        </div>

        <br><br>
        <div class="findUserPassword">
            비밀번호 찾기
            <br>
            <input 
                type="text" 
                placeholder="이메일 입력" 
                v-model.trim="email" 
                class="input-field"/>
        </div>

        <div class="link-group">
                <RouterLink :to="{ name: 'login' }" class="link">
                    로그인
                </RouterLink> | 
                <RouterLink :to="{ name: 'regist' }" class="link">
                    회원가입
                </RouterLink>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>

</style>