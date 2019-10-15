<template>
  <div id="main">
    <div class="mainheader">
      <el-button type="primary" round @click="dialogFormVisible = true">添加账单</el-button>
      <el-select @change="remoteMethod" clearable v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span class="selecttime">日期：</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      <span>至</span>
      <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
      <el-button class="btnsel" type="primary">搜素</el-button>
    </div>
    <div class="maintable">
      <!-- tableData.slice((currentPage-1)*pagesize,currentPage*pagesize) -->
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width:100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column
          header-align="center"
          sortable
          align="center"
          prop="date"
          label="日期"
          width="180"
        ></el-table-column>
        <el-table-column header-align="center" align="center" prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column
          header-align="center"
          sortable
          align="center"
          prop="moeny"
          label="价格"
          width="180"
        ></el-table-column>
        <el-table-column header-align="center" align="center" prop="ttype" label="类型" width="180"></el-table-column>
        <el-table-column header-align="center" align="center" prop="address" label="地址"></el-table-column>
      </el-table>
      <el-pagination
        class="fly"
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        @current-change="current_change"
        :total="total"
      ></el-pagination>
      <el-dialog title="消费记录" :label-width="formLabelWidth" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="日期" :label-width="formLabelWidth">
            <el-date-picker v-model="form.date" value-format="yyyy-MM-dd" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off" style="width:220px;"></el-input>
          </el-form-item>
          <el-form-item label="消费金额" :label-width="formLabelWidth">
            <el-input v-model="form.moeny" auto-complete="off" style="width:220px;"></el-input>
          </el-form-item>
          <el-form-item label="消费类型" :label-width="formLabelWidth">
            <el-select v-model="form.ttype" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="btnclickOk">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      options: [
        {
          value: "黄金糕",
          label: "黄金糕"
        },
        {
          value: "双皮奶",
          label: "双皮奶"
        },
        {
          value: "蚵仔煎",
          label: "蚵仔煎"
        },
        {
          value: "龙须面",
          label: "龙须面"
        }
      ],
      value: "",
      value1: "",
      value2: "",
      total: 0,
      pagesize: 8,
      currentPage: 1,
      dialogFormVisible: false,
      form: {
        date:"",
        name:"",
        moeny:"",
        ttype:"",
        address:""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
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
    tableinit(src, sel = "", starttime = "", endtime = "") {
      this.$http
        .get(src)
        .then(res => {
          if (sel != "") {
            this.tableData = res.data.filter(element => {
              return element.ttype === sel;
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
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    btnclickOk(){
      this.tableData.push(this.form)
      this.dialogFormVisible = false      
    }
  },
  created() {
    this.tableinit("../../static/mainjson.json");
  }
};
</script>

<style>
#main {
  width: 80%;
  float: left;
}
.el-table .warning-row {
  background: #e6a23c;
}
.el-table {
  left: 10px;
}

.el-table .danger-row {
  background: #f56c6c;
}

.el-button {
  margin: 20px 20px 20px 30px;
}
.mainheader .el-select {
  margin-left: 20px;
}
.selecttime {
  margin-left: 20px;
  /* margin-right: 10px; */
}
.mainheader .el-date-editor {
  margin: 0 10px;
}
.btnsel {
  margin-left: 5px;
}
.fly {
  margin-top: 10px;
  float: right;
}
</style>