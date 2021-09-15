import Vue from 'vue'
import App from './App.vue'
import router from './router'

//浏览器控制台不显示非生产环境的打包
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router, //注册路由器
}).$mount('#app')
