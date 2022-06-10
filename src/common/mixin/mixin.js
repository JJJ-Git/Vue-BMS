export const mixinTest = {
  data() {
    return {
      msg: 'aaa',
      text: '111'
    }
  },
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log("hello from mixin!")
    },
  },
}
