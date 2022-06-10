<template>
  <div class="function-test">
    <ul class="list">
      <li class="item">
        <button @click="num++">加一</button>
        <span>num: {{ num }}</span>
      </li>
      <li class="item">
        <button @click="changeObjProperty">改名</button>
        <span>num: {{ myObj.age }}</span>
      </li>
      <li class="item">
        <button @click="addList">加列表</button>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            {{ index + ":" + item }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FunctionTest",
  data() {
    return {
      num: 0,
      myObj: {
        name: "jjj",
      },
      list: ["a", "b", "c"],
    }
  },
  methods: {
    changeObjProperty() {
      // this.myObj.name = 'aaa'
      // this.myObj.age = 27
      this.$set(this.myObj, "age", 27)
    },
    addList() {
      // this.list.push('d')
      // this.list[0] = 'aaa'
      this.$set(this.list, "0", "aaa")
    },
  },
}
</script>

<style lang="scss" scoped>
// $btn-color: red;
// button {
//   color: $btn-color;
// }
</style>
