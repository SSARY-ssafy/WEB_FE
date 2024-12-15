import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import MainView from "../views/MainView.vue";
import CalendarView from "../views/CalendarView.vue";
import MyCalendarView from "../views/MyCalendarView.vue";
import ResumeView from "../views/ResumeView.vue";
import MyNoteView from "../views/MyNoteView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "main",
          component: MainView,
        },
        {
          path: "calendar",
          name: "calendar",
          component: CalendarView,
        },
        {
          path: "my-calendar",
          name: "myCalendar",
          component: MyCalendarView,
        },
        {
          path: "resume",
          name: "resume",
          component: ResumeView,
        },
        {
          path: "my-note",
          name: "myNote",
          component: MyNoteView,
        },
      ],
    },
    {
      path: "/login",
      component: AuthLayout,
      children: [
        {
          path: "",
          name: "login",
          component: LoginView,
        },
      ],
    },
    {
      path: "/register",
      component: AuthLayout,
      children: [
        {
          path: "",
          name: "register",
          component: RegisterView,
        },
      ],
    },
  ],
});

export default router;
