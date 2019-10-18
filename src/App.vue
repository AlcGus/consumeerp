<template>
  <div id="app">
    <el-container>
      <el-header>
        <img src="../static/logo.jpg" alt srcset />
        <p>熊猫记账</p>
      </el-header>
      <el-container>
        <el-aside style="width: 17%;">
          <checkleft></checkleft>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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
#app {
  overflow: auto;
}
.el-header {
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
}
.el-header img {
  width: 50px;
  height: 50px;
  margin-left: 50px;
  margin-top: 10px;
  border-radius: 50%;
  float: left;
}
.el-header p {
  float: right;
  margin: 0;
  margin-right: 20px;
}
.el-aside {
  float: left;
}
.el-main {
  padding: 0px;
  background-color: #f0f0f0;
}
</style>
