import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Default from './layouts/default'
import Sidebar from './layouts/sidebar'
import Fluid from './layouts/fluid'
import Tung from './layouts/tung'
import 'babel-polyfill'
import './assets/index.css'

Vue.component('default', Default)
Vue.component('sidebar', Sidebar)
Vue.component('fluid', Fluid)
Vue.component('tung', Tung)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
