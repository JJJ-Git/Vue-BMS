<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Hello App!</h1>
    <p>
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/login">Go to About</router-link>
    </p> -->
    <div>首页</div>
    <div class="btn-list">
      <button class="btn" @click="goHome">首页</button>
      <button class="btn" @click="goRegister">注册</button>
      <button class="btn" @click="goLogin">登录</button>
      <button class="btn" @click="testPort">测试接口</button>
      <button class="btn" @click="goMixin">混入</button>
      <button class="btn" @click="goFunctionTest">功能测试</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
  methods: {
    goHome() {
      this.$router.push({
        name: "HomePage",
        query: {
          id: 1111,
        },
      })
    },
    goLogin() {
      this.$router.push({
        path: "/login/aaa",
        query: {
          name: "jjj",
        },
      })
    },
    goRegister() {
      this.$router.push({
        path: "/login/id1/register",
        query: {
          id: 2222,
        },
      })
    },
    testPort() {
      this.$axios.get("/api/getData")
    },
    goMixin() {
      this.$router.push({
        path: "/mixin",
      })
    },
    goFunctionTest() {
      this.$router.push({
        path: "/functionTest",
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.btn-list {
  margin-bottom: 30px;
}
.btn {
  margin-right: 20px;
  /* border-top: none;
  border-left: none; */
}
</style>
