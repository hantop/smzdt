// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
Vue.prototype.toUrlQuery = function (data, name) {
  let str = ''
  for (var key in data) {
    if (typeof data[key] === 'object') {
      str += this.toUrlQuery(data[key], key)
    } else if (!name) {
      str += `${key}=${data[key]}&`
    } else {
      str += `${name}[${key}]=${data[key]}&`
    }
  }
  if (name) {
    return str
  } else {
    return encodeURI(str.slice(0, -1))
  }
}
