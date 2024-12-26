<template>
  <header :class="{ open: isSubmenuOpen }">
    <div class="gnb">
      <div class="logo">
        <router-link :to="{ name: 'main' }">SSARY</router-link>
      </div>
      <nav
        @mouseenter="isSubmenuOpen = true"
        @mouseleave="isSubmenuOpen = false"
      >
        <ul>
          <li class="menu-item">
            <span>캘린더</span>
            <div class="submenu">
              <ul>
                <li>
                  <router-link :to="{ name: 'calendar' }"
                    >전체 채용</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'myCalendar' }"
                    >마이 캘린더</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <span>다이어리</span>
            <div class="submenu">
              <ul>
                <li>
                  <router-link :to="{ name: 'resume' }">자기소개서</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'myNote' }">마이 노트</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <div class="user-menu" @click.stop="toggleToolbox">
        <AccountCircle />
        <div class="toolbox" v-show="isToolboxOpen" @click.stop ref="toolBox">
          <ul>
            <li><router-link :to="{ name: 'login' }">로그인</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="lnb"
      @mouseenter="isSubmenuOpen = true"
      @mouseleave="isSubmenuOpen = false"
    ></div>
  </header>
</template>

<script setup>
import AccountCircle from "@/components/icons/AccountCircle.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isSubmenuOpen = ref(false);

const toolBox = ref(null);
const isToolboxOpen = ref(false);

const toggleToolbox = () => {
  isToolboxOpen.value = !isToolboxOpen.value;
};

const handleToolBoxClick = (e) => {
  if (
    toolBox.value &&
    !toolBox.value.contains(e.target) &&
    isToolboxOpen.value
  ) {
    isToolboxOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleToolBoxClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleToolBoxClick);
});
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-size: 3rem;
}
</style>
