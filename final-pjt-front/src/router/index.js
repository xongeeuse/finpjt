import AdditionalInfo from "@/components/mypage/AdditionalInfo.vue";
import { useAccountStore } from "@/stores/accountStore";
import CalendarView from "@/views/CalendarView.vue";
import FortuneView from "@/views/FortuneView.vue";
import MainView from "@/views/MainView.vue";
import MyPageView from "@/views/MyPageView.vue";
import PostPageView from "@/views/PostPageView.vue";
import QuizView from "@/views/QuizView.vue";
import SavingView from "@/views/SavingView.vue";
import SignupView from "@/views/SignupView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainView",
    component: MainView,
  },
  {
    path: "/signup",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/money-calendar",
    name: "CalendarView",
    component: CalendarView,
  },
  {
    path: "/saving",
    name: "SavingView",
    component: SavingView,
  },
  {
    path: "/fortune",
    name: "FortuneView",
    component: FortuneView,
  },
  {
    path: "/quiz",
    name: "QuizView",
    component: QuizView,
  },
  {
    path: "/mypage",
    name: "MyPageView",
    component: () => import("@/views/MyPageView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/post-page",
    name: "PostPageView",
    component: PostPageView,
  },
  {
    path: "/additional-info",
    name: "AdditionalInfo",
    component: AdditionalInfo,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const accountStore = useAccountStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!accountStore.isLogin) {
      next({ name: "Login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
