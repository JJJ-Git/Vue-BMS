<template>
  <div class="login">
    <div>登录页</div>
    <button @click="goHome">前往首页</button>
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
  methods: {
    goHome() {
      this.$router.push({
        name: 'HomePage',
        query: {
          id: 1111
        }
      });
    }
  }
}
</script>

<style>

</style>
