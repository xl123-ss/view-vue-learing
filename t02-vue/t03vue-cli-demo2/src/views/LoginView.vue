<template>
  <div class="login">
    <h2>登录页面</h2>
    <RouterLink to="/">去主页</RouterLink>
    <RouterLink to="/reg">没有账号，去注册</RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
.login {
  height: 100vh;
  background-image: url(../assets/vue.jpg);
  background-size: 100% 100%;
  padding: 20px;
}
</style>
