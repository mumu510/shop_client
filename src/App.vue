<template>
  <div id="app">
    <Header></Header>
    <!-- 所有的一级路由都在这显示 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  // 注册组件
  components: {
    Header,
    Footer,
  },
}
</script>

<style></style>
