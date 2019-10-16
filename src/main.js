import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// echarts插件
import echarts from 'echarts'

// import 'echarts/lib/chart/pie'

// 引入需要的 echarts的交互组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/visualMap';
// import 'echarts/lib/component/toolbox';

// import 'src/assets/styles/variable.scss';
// import 'src/assets/styles/base.scss';
// import 'src/assets/styles/common.scss';
// import 'src/assets/styles/iconfont.css';

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.filter("forthSet", function (dataStr, pattern = '') {

  // 根据给定的时间字符串，得到特定的时间
  var dt = new Date(dateStr)
  //   yyyy-mm-dd
  var y = dt.getFullYear()
  var m = (dt.getMonth() + 1).toString().padStart(2, '0')
  var d = dt.getDate().toString().padStart(2, '0')
  if (pattern.toLowerCase() === 'yyyy-mm-dd') {
    return `${y}-${m}-${d}`
  } else {
    var hh = dt.getHours().toString().padStart(2, '0')
    var mm = dt.getMinutes().toString().padStart(2, '0')
    var ss = dt.getSeconds().toString().padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
