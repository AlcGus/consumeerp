<template>
  <div id="main">
    <div class="mainheader">
      <el-button type="primary" round>添加账单</el-button>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span class="selecttime">日期</span><el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      <span>至</span><el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
      <el-button type="primary">搜素</el-button>
    </div>
    <!-- <div class="maintable"> -->
      <el-table :data="tableData2" style="width:82%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData2: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value1: '',
      value2:''
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  }
};
</script>

<style>

.el-table .warning-row {
  background: oldlace;
}
.el-table{
    left: 10px;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-button {
  margin: 20px 20px 20px 30px;
}
.el-select {
  margin-left: 20px;
}
.selecttime{
    margin-left: 20px;
    /* margin-right: 10px; */
}
.el-date-editor{
    margin: 0 10px;
}
</style>