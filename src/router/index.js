/* 
  路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 传入配置对象，配置所有路由，所有路由是多个即routers,数组每个元素代表路由的配置
  // 所有路由，数组
  routes: [
    // 对象
    {
      path: '/home',
      // comonent组件
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
