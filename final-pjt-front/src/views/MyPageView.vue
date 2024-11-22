<!-- views/MyPageView.vue -->
<template>
  <div class="mypage-container">
    <nav class="side-nav">
      <div class="nav-profile">
        <div class="profile-image">
          <!-- <img :src="getImageUrl(profile?.previewImage)" alt="프로필" /> -->
        </div>
        <!-- <span class="profile-name">{{ profile?.nickname }}님</span> -->
      </div>
      
      <div class="nav-links">
        <RouterLink :to="{ name: 'MyPageView' }" class="nav-link">
          <i class="bi bi-person"></i>내 정보
        </RouterLink>
        <RouterLink :to="{ name: 'LikedSavings' }" class="nav-link">
          <i class="bi bi-heart"></i>찜한 적금
        </RouterLink>
        <RouterLink :to="{ name: 'AdditionalInfo' }" class="nav-link">
          <i class="bi bi-pencil"></i>추가 정보 입력
        </RouterLink>
      </div>
    </nav>

    <div class="content-area">
      <Profile />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAccountStore } from "@/stores/accountStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Profile from "@/components/mypage/Profile.vue";

const accountStore = useAccountStore();
const router = useRouter();

onMounted(() => {
  if (!accountStore.isLogin) {
    // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
    router.push({ name: "Login" });
  }
});
</script>

<style scoped>
.mypage-container {
  display: flex;
  min-height: calc(100vh - 60px);
}

.side-nav {
  width: 250px;
  background-color: white;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
  position: fixed;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.nav-profile {
  text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 20px;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 10px;
  overflow: hidden;
  border: 3px solid #2E8B57;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  color: #2E8B57;
  font-weight: 500;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #666;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link i {
  margin-right: 10px;
  font-size: 1.2em;
}

.nav-link:hover, .nav-link.router-link-active {
  background-color: #2E8B57;
  color: white;
}

.content-area {
  flex: 1;
  margin-left: 250px;
  padding: 20px;
}

@media (max-width: 768px) {
  .side-nav {
    width: 100%;
    height: auto;
    position: relative;
  }

  .content-area {
    margin-left: 0;
  }

  .mypage-container {
    flex-direction: column;
  }
}
</style>