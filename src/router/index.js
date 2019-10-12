import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUi)

const Home = () => import('../components/Home.vue')

export default new Router({
  routes: [{
    path: '/home',
    components: Home
  }],
  mode:'history'
})
