<template>
  <div>
    <h1>로그인</h1>
    <form @submit.prevent="login">
      <label for="username">ID : </label>
      <input type="text" v-model.trim="username" id="username">
  
      <label for="password">PW : </label>
      <input type="password" v-model.trim="password" id="password">
      <input type="submit" value="로그인">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAccountStore } from '@/stores/counter'

const accountStore = useAccountStore()

const username = ref(null)
const password = ref(null)

const emit = defineEmits(['closeModal'])

const login = async function() {
  const payload = {
    username: username.value,
    password: password.value
  }
  
  // 로그인 액션 호출
  await accountStore.login(payload)

  // 로그인 성공 시 모달 닫기
  if (accountStore.isLogin) {
    emit('closeModal')
  }
}
</script>

<style scoped>

</style>