// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/style.scss'

import store from './store'
import Vant, {Dialog} from 'vant';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/index.css';
// Loading
import './components/loading/index.css';
import Loading from './components/loading/index';

Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false
// Vue.prototype.GLOBAL = App
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,    //路由
  store,      //vuex管理store对象
  components: {App}, // 映射组件标签
  template: '<App/>' //指定需要渲染到页面的模板
})
