import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/views/home/index'], resolve),  //组件懒加载
      // children: [
      //   {
      //     path: '/nav',
      //     component: resolve => require(['@/views/home/nav'], resolve),
      //   },
      //   {
      //     path: '/header',
      //     component: resolve => require(['@/views/home/header'], resolve),
      //   },
      // ]
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/views/home/login'], resolve),  //组件懒加载
    },
    {
      path: '/home/search',
      name: 'Search',
      component: resolve => require(['@/views/search/search.vue'], resolve),  //组件懒加载
    },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/dashboard',
    //   children: [{
    //     path: 'dashboard',
    //     name: 'Dashboard',
    //     component: () => import('@/views/dashboard/index'),
    //     meta: { title: 'Dashboard', icon: 'dashboard' }
    //   }]
    // },
  ]
})
