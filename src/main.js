import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 导入疯狂的request（axios）
import '@/common/request/request.js'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
