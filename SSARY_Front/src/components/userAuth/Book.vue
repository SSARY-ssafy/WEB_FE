<template>
  <div class="container">
    <div class="page left">
      <div class="paper">
        <!-- 장식 요소 -->
        <ul class="element one">
          <li></li>
          <li></li>
        </ul>
        <div class="element two">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <LoginForm />
      </div>
    </div>

    <div class="page right">
      <div class="paper">
        <div class="bookmark"></div>
        <ul class="storage">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <BookCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from "@/components/userAuth/LoginForm.vue";
import BookCard from "@/components/userAuth/BookCard.vue";
</script>

<style scoped>
.container {
  width: 100%;
  min-width: 360px;
  width: 100%;
  max-width: var(--diary-width);
  min-height: var(--diary-height);
  height: auto;
  background-color: rgb(31, 174, 255);
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 10px;
}

.container > .page {
  position: relative;
  flex: 1;
  /* height: 100%; */
  padding: 33px 18px;
}
.container > .page.left {
  border-radius: 30px 0 0 30px;
  background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.212), transparent);
}

.container > .page.left .element {
  position: absolute;
  top: 0;
}
.container > .page.left .element.one {
  left: 0;
  transform: translate(-60px, 45px);
}
.container > .page.left .element.one li {
  background-color: rgb(63, 63, 63);
  width: 90px;
  height: 30px;
  margin: 20px;
}

.container > .page.left .element.two {
  right: 0;
  display: flex;
  height: 100%;
  padding: 50px 0;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(32px);
}
.container > .page.left .element.two ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 33%;
}
.container > .page.left .element.two ul li {
  background-color: rgb(19, 19, 19);
  width: 82px;
  height: 12px;
  border-radius: 20px;
}
.container > .page.left .element.two ul:nth-child(2) li {
  visibility: hidden;
}

.container > .page.left > .paper {
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding: 30px;
}

.container > .page.right .paper {
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.container > .page.right .bookmark {
  width: 90px;
  height: 150px;
  background-color: rgb(63, 63, 63);
  border-radius: 5px 5px 20px 20px;
  transform: translate(10px, -45px);
}

.container > .page.right .storage {
  width: 100%;
}
.container > .page.right .storage li {
  height: 20px;
  background-color: rgb(63, 63, 63);
  margin-top: 14px;
  margin-bottom: 14px;
  border-radius: 20px 20px 0 0;
}

/******************************************************
*************************반응형*************************
******************************************************/

@media (max-width: 900px) {
  .container > .page.left {
    flex: 3;
  }
  .container > .page.right {
    flex: 2;
  }
}

@media (max-width: 640px) {
  .container {
    flex-direction: column;
    background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.212),
      transparent
    );
    min-height: var(--diary-height);
    height: unset;
    max-width: 460px;
  }

  .container > .page.left {
    flex: 1;
    border-radius: 30px;
    background: transparent;
  }

  .container > .page.right {
    flex: 1;
    width: 100%;
    padding-top: 0px;
  }

  .container > .page.right .paper {
    background-color: rgb(255, 255, 255);
    margin-top: -36px;
  }

  .container > .page.right .bookmark,
  .container > .page.right .storage,
  .container > .page.left .element {
    display: none !important;
  }
}
</style>
