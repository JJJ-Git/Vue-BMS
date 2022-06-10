<template>
  <div class="mixin">
    
  </div>
</template>

<script>
import {mixinTest} from '@/common/mixin/mixin'
export default {
  name: 'MixinPage',
  mixins: [mixinTest],
  data() {
    return {
      msg: 'bbb'
    }
  },
  created() {
    console.log(this.text)
    console.log(this.msg)
  },
  methods: {
    hello() {
      console.log('my self text')
    }
  }
}
</script>

<style>

</style>