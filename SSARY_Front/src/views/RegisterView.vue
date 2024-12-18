<template>
    <main>
        회원가입

        <div class="link-group">
                <RouterLink :to="{ name: 'login' }" class="link">
                    로그인
                </RouterLink> | 
                <RouterLink :to="{ name: 'find' }" class="link">
                    아이디, 비밀번호 찾기
                </RouterLink>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>

</style>