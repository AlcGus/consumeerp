<template>
  <div id="toaddrecord">
    <div id="addrecord">
      <div class="formtable">
        <h3>{{this.$route.params.title}}</h3>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="消费日期" style="width:400px" prop="date">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date"
                value-format="yyyy-MM-dd"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item label="消费人员" style="width:400px" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="消费金额" style="width:400px" prop="moeny">
            <el-input v-model="ruleForm.moeny"></el-input>
          </el-form-item>
          <el-form-item label="消费类型" style="width:400px" prop="ttype">
            <el-select v-model="ruleForm.ttype" style="width:100%" placeholder="请选择消费类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="消费地址" style="width:400px" prop="name">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      ruleForm: {
        "date": "",
        "name": "",
        "moeny": "",
        "ttype": "",
        "address": ""
      },
      rules: {
        name: [{ required: true, message: "请输入消费人员", trigger: "blur" }],
        moeny: [
          {
            required: true,
            message: "请输入消费金额",
            trigger: "blur"
          }
        ],
        ttype: [
          { required: true, message: "请选择消费类型", trigger: "change" }
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择消费日期",
            trigger: "change"
          }
        ],
        address: [
          { required: true, message: "请输入消费地址", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$http
        .get("../../static/mainjson.json")
        .then(res => {
          if (this.$route.params.id === "") {
            res.data.push(this.ruleForm);
          } else {
            res.data.splice(this.$route.params.id, 1, this.ruleForm);
            console.log(res.data);
          }
        })
        .catch(err => {
          console.log("新增消费记录失败" + err);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    addrecordinit() {
      this.$http.get("../../static/selData.json").then(res => {
        this.options = res.data;
      });
    }
  },
  created() {
    this.addrecordinit();
    this.ruleForm = this.$route.params.addform;
  }
};
</script>

<style scoped>
#toaddrecord {
  width: 83%;
  background-color: #f0f0f0;
  float: left;
}
#addrecord {
  float: left;
  margin: 11px;
  width: 98%;
  height: 100%;
  background-color: #fff;
  padding: 30px 0;
}
#addrecord h3 {
  font-size: 20px;
  margin: 10px 0 20px 0;
  margin-left: 20px;
}
.el-form-item {
  /* margin-top: 15px; */
}
.el-input__inner {
  height: 30px;
}
.el-form-item__error {
  padding-top: 0;
}
.formtable {
  border: 1px solid #ebeef5;
  margin-left: 30px;
  padding-bottom: 30px;
  width: 600px;
}
</style>