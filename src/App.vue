<template>
  <div id="app">
    <el-header>陈孟婷专属记账</el-header>
    <el-aside style="width: 17%;">
      <checkleft></checkleft>
    </el-aside>
    <router-view></router-view>
  </div>
</template>

<script>
import checkleft from "./components/CheckLeft";
import mainc from "./components/Main";

export default {
  name: "App",
  components: {
    checkleft,
    mainc
  }
};
</script>

<style>
*{
  /* overflow-y:hidden; */
}
.el-header {
  background-color: #99cc99;
  color: #fff;
  text-align: left;
  line-height: 60px;
}
.el-aside {
  /* display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  background-color: #545c64;
  border-right-width: 0px; */
  float: left;
}
</style>
