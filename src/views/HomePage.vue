<template>
  <div class="home">
    <div>首页</div>
    <button @click="goLogin">前往登录</button>
    <button @click="testPort">测试接口</button>
    <test-dialog :msg="testDialogMsg">
      <template #default="{ aaa, index }">
        <div>{{ aaa.name + "-" + index }}</div>
      </template>
    </test-dialog>
  </div>
</template>

<script>
import TestDialog from "@/components/TestDialog.vue"
export default {
  name: "HomePage",
  components: {
    TestDialog,
  },
  data() {
    return {
      slotMsg: "插槽数据",
      testDialogMsg: "对话框测试内容",
    }
  },
  provide() {
    return {
      user:  'jjj'
    }
  },
  created() {
    console.log(this.$route)
    console.log(process.env)
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: "/login/aaa",
        query: {
          name: "jjj",
        },
      })
    },
    testPort() {
      this.$axios.get("/api/getData")
    },
  },
}
</script>

<style scoped>
.home {
  height: 2000px;
}
</style>
