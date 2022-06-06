<template>
  <div class="test-slot">
    <div>{{ msg + '-' + user }}</div>
    <!-- <slot>
      <a href="javascript:;">默认显示内容</a>
    </slot>
    <slot name="a">
      <a href="javascript:;">默认显示内容</a>
    </slot> -->
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        {{ item.name }}
        <slot :aaa="item" :index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TestSlot",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [
        { name: "AAA", id: "111" },
        { name: "BBB", id: "222" },
      ],
    }
  },
  inject: ['user'],
}
</script>

<style scoped></style>
