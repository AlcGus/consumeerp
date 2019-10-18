<template>
  <div id="tomain">
    <div id="main">
      <div class="mainheader">
        <!-- dialogFormVisible = true -->
        <el-button type="primary" round @click="linktoAdd()">添加账单</el-button>
        <el-select @change="remoteMethod" clearable v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span class="selecttime">日期：</span>
        <el-date-picker v-model="value1" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
        <span>至</span>
        <el-date-picker v-model="value2" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
        <el-button class="btnsel" @click="selOK" type="primary">搜素</el-button>
      </div>
      <div class="maintable">
        <!-- tableData.slice((currentPage-1)*pagesize,currentPage*pagesize) -->
        <el-table
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width:100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column type="index" width="50" label="序号"></el-table-column>
          <el-table-column header-align="center" sortable align="center" prop="date" label="日期"></el-table-column>
          <el-table-column header-align="center" align="center" prop="name" label="姓名"></el-table-column>
          <el-table-column header-align="center" sortable align="center" prop="moeny" label="价格"></el-table-column>
          <el-table-column header-align="center" align="center" prop="ttype" label="类型"></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="address"
            label="地址"
            width="300"
          ></el-table-column>
          <el-table-column fixed="right" header-align="center" align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="linktoAdd(scope.$index)" size="small">编辑</el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >移除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="dpage">
          <el-pagination
            class="fly"
            background
            layout="total, prev, pager, next, jumper"
            :page-size="pagesize"
            @current-change="current_change"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      options: [],
      value: "",
      value1: null,
      value2: null,
      total: 0,
      pagesize: 11,
      currentPage: 1,
      form: {
        date: "",
        name: "",
        moeny: "",
        ttype: "",
        address: ""
      },
    };
  },
  methods: {
    linktoAdd(index = "") {
      let addtitle = "";
      let addform = {};
      if (index === "") {
        addtitle = "新增消费记录";
      } else {
        addtitle = "修改消费记录";
        addform = this.tableData[index];
      }
      this.$router.push({
        name: "addrecord",
        params: { title: addtitle, addform: addform ,id:index}
      });
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.moeny < 300) {
        return "";
      } else if (row.moeny >= 300 && row.moeny < 500) {
        return "warning-row";
      } else if (row.moeny >= 500) {
        return "danger-row";
      }
    },
    remoteMethod(tableData) {
      this.tableinit("../../static/mainjson.json", this.value);
    },
    tableinit(src, sel = "", starttime = null, endtime = null) {
      this.$http
        .get(src)
        .then(res => {
          if (sel != "") {
            this.tableData = res.data.filter(element => {
              return element.ttype === sel;
            });
          } else if (starttime != null && endtime != null) {
            this.tableData = res.data.filter(element => {
              let nowdate = new Date(element.date).getTime();
              let startdate = new Date(starttime).getTime();
              let enddate = new Date(endtime).getTime();
              return nowdate >= startdate && nowdate <= enddate;
            });
          } else {
            this.tableData = res.data;
          }
          this.total = this.tableData.length;
        })
        .catch(err => {
          console.log("请求接口错误" + err);
        });
    },
    selOK() {
      if (this.value1 == null || this.value2 == null) {
        this.$message({
          message: "时间未选择",
          type: "warning"
        });
      } else {
        this.tableinit(
          "../../static/mainjson.json",
          "",
          this.value1,
          this.value2
        );
      }
    },
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  created() {
    this.tableinit("../../static/mainjson.json");
    this.$http
      .get("../../static/selData.json")
      .then(res => {
        this.options = res.data;
      })
      .catch(err => {
        console.log("获取下拉菜单数据失败" + err);
      });
  }
};
</script>

<style>
#main {
  width: 98%;
  margin: 10px auto;
  padding-bottom: 10px;
  background-color: #fff;
}
.el-table {
  padding-left: 5px;
  padding-right: 5px;
}
.el-table .warning-row {
  background: #e6a23c;
}

.el-table .danger-row {
  background: #f56c6c;
}
.el-table td {
  padding: 8px 0;
}
.mainheader {
  width: 100%;
  margin-left: 10px;
}
.mainheader .el-button {
  margin: 20px 20px 20px 10px;
}
.mainheader .el-select {
  margin-left: 20px;
}
.selecttime {
  margin-left: 20px;
}
.mainheader .el-date-editor {
  margin: 0 10px;
}
.btnsel {
  margin-left: 5px;
}
.dpage {
  height: 30px;
}
.fly {
  margin-top: 5px;
  float: right;
}
</style>