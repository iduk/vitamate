import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'babel-polyfill'
import './assets/index.css'
import './assets/global.scss'

import Default from './layouts/Default'
import Sidebar from './layouts/Sidebar'
import Fluid from './layouts/Fluid'
import Tung from './layouts/Tung'

Vue.component('layout-default', Default)
Vue.component('layout-sidebar', Sidebar)
Vue.component('layout-fluid', Fluid)
Vue.component('layout-tung', Tung)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
