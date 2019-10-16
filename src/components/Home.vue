<template>
  <div id="tohome">
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="home"></div>
    <el-row style="margin-bottom: 16px;">
      <el-col :span="24" style="padding-bottom: 8px;">
        <el-card>
          <div slot="header">网站访客来源分析</div>
           <div id="main" style="width: 600px;height: 400px;"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding-right: 4px;">
        <el-card>
          <div slot="header">某站点用户访问来源（纯属虚构）</div>
          <div id="main1" style="width: 600px;height: 400px;"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding-left: 4px;">
        <el-card>
          <div slot="header">未来一周天气变化</div>
         <div id="main2" style="width: 600px;height: 400px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      charts: "",
      opinion: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      opinionData: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 548, name: "搜索引擎" }
      ]
    };
  },
  methods: {
    drawPie(id) {
      this.charts = this.$echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          x: "left",
          data: this.opinion
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "blod"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.opinionData
          }
        ]
      });
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      this.drawPie("main");
      this.drawPie("main1");
      this.drawPie("main2");
    });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
/* overflow:auto; */
}
#tohome {
  width: 83%;
  float: left;
  background-color: #f0f0f0;
  /* border: 1px solid red;  */
}
#main {
  width: 98%;
  margin: 10px auto;
  padding-bottom: 10px;
  background-color: #fff;
  /* border: 1px solid red; */
  /* box-shadow:5px 2px 6px #000 */
}
</style>