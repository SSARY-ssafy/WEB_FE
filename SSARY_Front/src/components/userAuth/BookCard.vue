<template>
  <div class="card">
    <div>Do not have account?</div>
    <div class="go">
      <div></div>
      <div>
        <p>
          <router-link :to="{ name: 'regist' }">회원 가입하러 가기</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  width: 100%;
}

.card > div:nth-child(1) {
  margin: 15px;
  padding: 0 1.4em;
  font-weight: bold;
  height: 55px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px 20px 0 0;
  transform: translateY(40px);
  display: flex;
  align-items: center;
}

.card > div:nth-child(2) {
  height: 200px;
  background-color: rgb(63, 63, 63);
  border-radius: 20px;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
}
.card > div:nth-child(2) > div:nth-child(1) {
  width: 100px;
  height: 100px;
  background-color: rgb(217, 217, 217);
  border-radius: 5px;
}
.card.blue > div:nth-child(2) > div:nth-child(1) {
  background-color: #32baff;
}
.card .go > div:nth-child(2) {
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.card .go > div:nth-child(2) a {
  color: rgb(255, 255, 255);
  font-size: 0.9em;
}

/******************************************************
*************************반응형*************************
******************************************************/

@media (max-width: 900px) {
  .card > div:nth-child(2) > div:nth-child(1) {
    display: none;
  }
}

@media (max-width: 640px) {
  .card {
    margin-top: -40px;
    margin-bottom: 30px;
  }
  .card > div:nth-child(1) {
    border: 1px solid rgb(0, 0, 0);
  }
  .card > div:nth-child(2) {
    padding: 40px 20px;
  }

  .card > div:nth-child(2) > div:nth-child(1) {
    width: 80px;
    height: 80px;
    display: block;
  }
}
</style>
