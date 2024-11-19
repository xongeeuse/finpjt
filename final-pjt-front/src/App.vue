<template>
  <nav>
    <RouterLink :to="{ name: 'MainView' }">메인</RouterLink> | 
    <RouterLink :to="{ name: 'CalendarView' }">가계부</RouterLink> | 
    <RouterLink :to="{ name: 'SavingView' }">적금</RouterLink> | 
    <RouterLink :to="{ name: 'FortuneView' }">운세</RouterLink> | 
    <RouterLink :to="{ name: 'QuizView' }">금융퀴즈</RouterLink> |
    <RouterLink :to="{ name: 'MyPageView' }">마이페이지</RouterLink> | 
    <div>
      <RouterLink :to="{ name: 'SignupView' }">회원가입</RouterLink> | 
      <a href="#" @click.prevent="toggleLoginModal">로그인</a>
    </div>
  </nav>

  <RouterView/>

  <div v-if="isLoginModalOpen" class="modal-overlay" @click="toggleLoginModal">
    <div class="modal-content" @click.stop>
      <Login @closeModal="toggleLoginModal" />
      <button @click="toggleLoginModal">닫기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { RouterLink, RouterView } from "vue-router"
import Login from "./components/accounts/Login.vue"

const isLoginModalOpen = ref(false)

const toggleLoginModal = () => {
  isLoginModalOpen.value = !isLoginModalOpen.value
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}
</style>