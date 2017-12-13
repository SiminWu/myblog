// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import api from "./common/api"; // 公共请求/接口
Vue.use(VueRouter)
Vue.use(iView)
Vue.config.productionTip = false;
Vue.prototype.$api = api; // 公共请求

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
