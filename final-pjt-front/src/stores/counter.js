import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";
import api from "./api"; // 새로 만든 api 인스턴스 import

export const useCalendarStore = defineStore("dateStore", () => {
  // const API_URL = "http://127.0.0.1:8000";

  const selectedDate = ref(""); // 소비한 날짜
  const privacySetting = ref("public"); // 공개 범위
  const categoryId = ref(""); // 카테고리
  const price = ref(""); // 가격
  const content = ref(""); // 내용
  const imageFile = ref(null); // 이미지 파일
  const isPostSubmitted = ref(false); // 게시글 제출 성공 여부

  // 선택된 날짜 설정
  const setSelectedDate = (date) => {
    selectedDate.value = date;
  };

  const submitPost = async ({
    selectedDate,
    privacySetting,
    categoryId,
    price,
    content,
    imageFile,
  }) => {
    try {
      const response = await api.post("/posts/create-post/", {
        selectedDate,
        privacySetting,
        categoryId,
        price,
        content,
        imageFile,
      });

      if (response.status === 200) {
        isPostSubmitted.value = true;
      }
    } catch (error) {
      console.error("게시글 작성 실패:", error);
      isPostSubmitted.value = false;
    }
  };

  return {
    selectedDate,
    privacySetting,
    categoryId,
    price,
    content,
    imageFile,
    isPostSubmitted,
    setSelectedDate,
    submitPost,
  };
});

export const useSavingStore = defineStore("saving", {
  state: () => ({
    API_URL: "/savings",
    products: [],
    recommendedSavings: [],
    loading: false,
    error: null,
    currentSearchParams: {},
    sortField: "max_preference_rate",
    sortOrder: "desc",
    ageBasedRecommendations: [],
    incomeBasedRecommendations: [],
  }),

  actions: {
    async getSavings(params = {}) {
      this.loading = true;
      this.error = null;
      try {
        const searchParams = {
          ...this.currentSearchParams,
          ...params,
          sort_by: params.sort_by || this.sortField,
          sort_order: params.sort_order || this.sortOrder,
        };

        const response = await api.get(`${this.API_URL}/search/`, {
          params: searchParams,
        });
        this.products = response.data;
        this.currentSearchParams = searchParams;
      } catch (error) {
        console.error("Error fetching savings:", error);
        this.error = "적금 상품을 불러오는데 실패했습니다.";
      } finally {
        this.loading = false;
      }
    },

    async toggleLike(savingPk) {
      try {
        const response = await api.post(`${this.API_URL}/likes/${savingPk}/`);
        const productIndex = this.products.findIndex((p) => p.id === savingPk);
        if (productIndex !== -1) {
          this.products[productIndex].is_liked = response.data.is_liked;
        }
      } catch (error) {
        console.error("Error toggling like:", error);
        this.error = "찜하기 처리 중 오류가 발생했습니다.";
        if (error.response && error.response.status === 401) {
          console.log("인증 오류: 로그인이 필요합니다.");
          // 로그인 페이지로 리다이렉트 로직
        }
      }
    },

    async fetchRecommendedSavings() {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.get(`${this.API_URL}/recommend/`);
        this.ageBasedRecommendations = response.data.age_based;
        this.incomeBasedRecommendations = response.data.income_based;
      } catch (error) {
        console.error("Error fetching recommended savings:", error);
        this.error = "추천 적금 상품을 불러오는데 실패했습니다.";
      } finally {
        this.loading = false;
      }
    },
  },
});

export const useAccountStore = defineStore("accountStore", () => {
  const router = useRouter();
  const token = ref(null);
  const user = ref(null);

  const isLogin = computed(() => token.value !== null);

  const signup = async function (payload) {
    try {
      const response = await api.post("/accounts/signup/", payload);
      console.log("회원가입 완료");
      router.push({ name: "MainView" });
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
    }
  };

  const login = async function (payload) {
    try {
      const response = await api.post("/accounts/login/", payload);
      token.value = response.data.token;
      user.value = {
        id: response.data.user.id,
        username: response.data.user.username,
        nickname: response.data.user.nickname,
      };
      localStorage.setItem("token", token.value);
      localStorage.setItem("user", JSON.stringify(user.value));
      console.log("로그인 성공");
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
    }
  };

  const checkLoginStatus = () => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      token.value = storedToken;
      user.value = JSON.parse(storedUser);
      console.log("로그인 상태 유지 중");
    } else {
      console.log("로그인 필요");
    }
  };

  const logOut = async function () {
    try {
      await api.post("/accounts/logout/");
      token.value = null;
      user.value = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push({ name: "MainView" });
    } catch (error) {
      console.error("로그아웃 실패:", error.response?.data || error.message);
    }
  };

  const updateUserInfo = async (payload) => {
    try {
      const response = await api.put("/accounts/update/", payload);
      user.value = { ...user.value, ...response.data };
      console.log("사용자 정보 업데이트 성공");
    } catch (error) {
      console.error(
        "사용자 정보 업데이트 실패:",
        error.response?.data || error.message
      );
    }
  };

  const updateAdditionalInfo = async (payload) => {
    try {
      const response = await api.put("/accounts/additional-info/", payload);
      user.value = { ...user.value, ...response.data };
      console.log("추가 정보 업데이트 성공");
    } catch (error) {
      console.error(
        "추가 정보 업데이트 실패:",
        error.response?.data || error.message
      );
    }
  };

  const deleteAccount = async (password) => {
    try {
      await api.delete("/accounts/delete/", { data: { password } });
      token.value = null;
      user.value = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push({ name: "MainView" });
      console.log("계정 삭제 성공");
    } catch (error) {
      console.error("계정 삭제 실패:", error.response?.data || error.message);
    }
  };

  // 스토어 초기화 시 로그인 상태 확인
  checkLoginStatus();

  return {
    token,
    user,
    isLogin,
    login,
    signup,
    logOut,
    updateUserInfo,
    updateAdditionalInfo,
    deleteAccount,
  };
});
