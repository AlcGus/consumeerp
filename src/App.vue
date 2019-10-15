<template>
  <div id="app">
      <el-header>Header</el-header>
      <checkleft></checkleft>
      <router-view></router-view>
  </div>
</template>

<script>
import checkleft from "./components/CheckLeft";
import mainc from './components/Main';

export default {
  name: "App",
  components: {
    checkleft,
    mainc
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  line-height: 60px;
}
</style>
