<template>
  <div class="container" :class="{ regist: props.type == 'regist' }">
    <div class="page left" :class="{ next: isNext }">
      <div class="paper front">
        <!-- 장식 요소 -->
        <ul class="element one">
          <li></li>
          <li></li>
        </ul>

        <LoginForm v-if="props.type == 'login'" />
        <RegistForm
          v-if="props.type == 'regist'"
          @handle-is-next="handleIsNext"
        />
      </div>
      <div v-if="props.type == 'regist'" class="paper back">
        <RegistFormBack @handle-is-next="handleIsNext" />
      </div>
    </div>

    <div class="page right">
      <div class="paper">
        <div class="bookmark"></div>
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
        <ul class="storage">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <BookCard
          :guide="guide"
          :type="type"
          :linkName="linkName"
          :text="text"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from "@/components/userAuth/LoginForm.vue";
import RegistForm from "@/components/userAuth/RegistForm.vue";
import RegistFormBack from "@/components/userAuth/RegistFormBack.vue";
import BookCard from "@/components/userAuth/BookCard.vue";
import { ref, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "login",
  },
});

const isNext = ref(false);
const handleIsNext = (value) => {
  isNext.value = value;
};

const guide = computed(() => {
  if (props.type === "regist") return "Already have account?";
  if (props.type === "login") return "Do not have account?";
  return "";
});
const type = computed(() => {
  if (props.type === "regist") return "blue";
  return "";
});
const linkName = computed(() => {
  if (props.type === "regist") return "login";
  if (props.type === "login") return "regist";
  return "";
});
const text = computed(() => {
  if (props.type === "regist") return "로그인하러 가기";
  if (props.type === "login") return "회원가입하러 가기";
  return "";
});
</script>

<style scoped>
.container {
  width: 100%;
  min-width: var(--min-width);
  max-width: var(--diary-width);
  height: auto;
  min-height: var(--diary-height);
  background-color: rgb(31, 174, 255);
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 10px 26px;
  z-index: 1;
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
  z-index: 1;
  transform-origin: right;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 1s;
  height: auto;
}

.container.regist > .page.left {
  height: 42rem;
}

.container > .page.left.next {
  transform: rotateY(180deg);
}

.container > .page .element {
  position: absolute;
  top: 0;
  z-index: 2;
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

.container > .page.right .element.two {
  left: 0;
  display: flex;
  height: 100%;
  padding: 50px 0;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(-41px);
}
.container > .page.right .element.two ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 33%;
}
.container > .page.right .element.two ul li {
  background-color: rgb(19, 19, 19);
  width: 82px;
  height: 12px;
  border-radius: 20px;
}
.container > .page.right .element.two ul:nth-child(2) li {
  visibility: hidden;
}

.container > .page.left > .paper {
  position: absolute;
  width: calc(100% - 36px);
  height: calc(100% - 66px);
  background-color: rgb(255, 255, 255);
  padding: 30px;
  margin: 33px 18px;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
}

.container > .page.left > .paper.front {
  transform: rotateY(0deg) translateZ(1px);
}

.container > .page.left .paper.back {
  transform: rotateY(180deg) translateZ(1px);
}

.container > .page.right .paper {
  height: 100%;
  padding: 0 20px 0 35px;
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
  .container.regist > .page.left {
    flex: 1;
  }
  .container > .page.right {
    flex: 1;
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
    flex: unset;
    border-radius: 30px;
    background: transparent;
    height: 37.5rem;
  }

  .container.regist > .page.left {
    height: 42.5rem;
    flex: unset;
  }

  .container.regist > .page.left.next {
    left: -100%;
  }

  .container > .page.left {
    transition: transform 0s;
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
  .container > .page .element {
    display: none !important;
  }
}
</style>
