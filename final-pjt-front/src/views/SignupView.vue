<template>
  <div class="signup-container">
    <h1 class="form-title">회원가입</h1>
    <form @submit.prevent="signup" class="signup-form">
      <div class="form-group">
        <label for="username">아이디</label>
        <input type="text" id="username" v-model.trim="username" required>
      </div>

      <div class="form-group">
        <label for="password1">비밀번호</label>
        <input type="password" id="password1" v-model.trim="password1" required>
      </div>

      <div class="form-group">
        <label for="password2">비밀번호 확인</label>
        <input type="password" id="password2" v-model.trim="password2" required>
      </div>

      <div class="form-group">
        <label for="nickname">닉네임</label>
        <input type="text" id="nickname" v-model.trim="nickname" required>
      </div>

      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model.trim="email" required>
      </div>

      <button type="submit" class="submit-button">회원가입</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { useAccountStore } from "@/stores/accountStore";

const accountStore = useAccountStore()

const username = ref(null)
const password1 = ref(null)
const password2 = ref(null)
const nickname = ref(null)
const email = ref(null)

const signup = function () {
  const payload = {
    username: username.value,
    password1: password1.value,
    password2: password2.value,
    nickname: nickname.value,
    email: email.value
  }

  accountStore.signup(payload)
}
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
}

.form-title {
  color: #2E8B57;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
}

.signup-form {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #2E8B57;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #2E8B57;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #2E8B57;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: #1a5235;
  transform: translateY(-2px);
}
</style>