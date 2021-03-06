// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VeeValidate from 'vee-validate' //表单验证
import '../static/theme/index.css' //自定义element-ui样式
import 'font-awesome/css/font-awesome.css'

Vue.use(ElementUI)
Vue.use(VeeValidate);
Vue.config.productionTip = false
// Vue.prototype.router = router;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
