<template>
  <div class="home">
    <div>首页</div>
    <button @click="goLogin">前往登录</button>
    <button @click="testPort">测试接口</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      
    }
  },
  created() {
    console.log(this.$route)
    console.log(process.env.NODE_ENV)
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: '/login',
        query: {
          name: 'jjj'
        }
      })
    },
    testPort() {
      this.$axios.get('/api/getData')
    }
  }
}
</script>

<style>

</style>
