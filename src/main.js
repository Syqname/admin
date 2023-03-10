import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './style.css'

Vue.config.productionTip = false

import http from './http'
// 调用数据提交的路由，http.js
Vue.prototype.$http = http
// 将数据提交的接口加载在vue原型上，方便引用数据提交的接口
Vue.mixin({
  computed:{
    uploadUrl(){
      return this.$http.defaults.baseURL+'/upload'
    }
  },
  methods:{
    getAuthHeaders(){
      return{
        AuTHoriZation:`Bearer ${localStorage.token ||''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
