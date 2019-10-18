<template>
  <div class=".checkleft">
    <div class="checkleftmenu">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :default-active="$route.path"
      >
        <template v-for="(item, index) in sider_menu_data">
          <el-menu-item :key="index" :index="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <!-- <div class="content">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      sider_menu_data: [
        {
          path: "/home",
          title: "消费统计",
          icon: "el-icon-menu"
        },
        {
          path: "/main",
          title: "消费账单",
          icon: "el-icon-location"
        },
        // {
        //   path: "",
        //   title: "导航三",
        //   icon: "el-icon-setting"
        // }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>

