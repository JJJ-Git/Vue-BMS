<template>
  <div class="login">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "LoginChildren",
  data() {
    return {
      msg: "登录页子路由",
    }
  },
  mounted() {
    console.log(this.$el.textContent)
    this.msg = "aaa"
    console.log(this.$el.textContent)
    console.log(this.$el.textContent === "aaa")
    this.$nextTick(() => {
      console.log(this.$el.textContent)
      console.log(this.$el.textContent === "aaa")
    })
  },
  methods: {},
}
</script>

<style></style>
