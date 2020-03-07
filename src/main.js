// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入jquery
import $ from 'jquery'
// 引入公共js
import commonFun from '@/commonFun/common.js'
Vue.prototype.$pubFuc = commonFun

// 引入图标
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
