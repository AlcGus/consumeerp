import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'




Vue.use(Router)
Vue.use(ElementUi)

const routerPush = Router.prototype.push
Router.prototype.push = function push(location){
  return routerPush.call(this,location).catch(error => error)
}

const CheckLeft = () => import('../components/CheckLeft.vue')
const Home = () => import('../components/Home.vue')
const Main = () => import('../components/Main.vue')
const AddRecord = () => import('../components/AddRecord.vue')

export default new Router({
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/main',
      component: Main
    },
    {
      name:'addrecord',
      path:'/main/addrecord',
      component:AddRecord
    }
  ],
  mode: 'history'
})
