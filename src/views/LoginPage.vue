<template>
  <div class="login">
    <div>登录页</div>
    <button @click="goHome">前往首页</button>
    <button @click="goRegister">前往注册</button>
    <button class="test-btn" @click="forgetPassword">忘记密码</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    goHome() {
      this.$router.push({
        name: 'HomePage',
        query: {
          id: 1111
        }
      });
    },
    goRegister() {
      this.$router.push({
        path: '/login/id1/register',
        query: {
          id: 2222
        }
      });
    },
    forgetPassword() {
      this.$router.push({
        path: '/login/id2/forgetPassword',
        query: {
          id: 3333
        }
      });
    },
  }
}
</script>

<style scoped>
.login {
  height: 3000px;
}
.test-btn {
  animation: aaa 1s;
}
@keyframes aaa {
  from {
    /* margin-left: 0; */
    transform: translateX(0);
    perspective: 0;
  }
  to {
    /* margin-left: 100px; */
    transform: translateX(100px);
    perspective: 200px;
  }
}
</style>
