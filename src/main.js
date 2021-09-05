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

Vue.component('default', Default)
Vue.component('sidebar', Sidebar)
Vue.component('fluid', Fluid)
Vue.component('tung', Tung)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
