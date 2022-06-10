<template>
  <div class="home">
    <test-dialog :msg="testDialogMsg">
      <template #default="{ aaa, index }">
        <div>{{ aaa.name + "-" + index }}</div>
      </template>
    </test-dialog>
    <button @click="showFade = !showFade">缓动动画1</button>
    <transition name="fade">
      <span v-show="showFade" class="fade-test">hello</span>
    </transition>
    <br />
    <button @click="showScale = !showScale">缓动动画2</button>
    <transition name="scale">
      <div v-show="showScale" class="scale-test">world</div>
    </transition>
    <br />
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in list" :key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
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
      showFade: true,
      showScale: true,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    }
  },
  provide() {
    return {
      user: "jjj",
    }
  },
  created() {
    // console.log(this.$route)
    // console.log(process.env)
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.list.length)
    },
    add() {
      this.list.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.list.splice(this.randomIndex(), 1)
    },
  },
}
</script>

<style scoped>
.home {
  height: 2000px;
}
/* .fade-enter-active,
.fade-leave-active {
  transition-property: opacity,color,font-size;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  color: red;
  font-size: 12px;
} */

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity,color 0.5s ease; */
  transition-property: opacity, color, font-size;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  color: red;
  font-size: 12px;
}

.scale-test {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.scale-enter-active {
  animation: scaleIn 0.5s ease-out;
}
.scale-leave-active {
  animation: scaleIn 0.5s reverse ease-out;
}
@keyframes scaleIn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  /* transform: translateY(30px); */
  transform: scale(0);
}
.list-move {
  transition: all 1s ease;
}
</style>
