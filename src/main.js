import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import cssVars from "css-vars-ponyfill";
import './assets/index.css'


cssVars({
  // DEMO: Process only demo.css file
  include: 'style[id*="index.css"]',
  // DEMO: Treat modern browsers as legacy
  onlyLegacy: false,

  // DEMO: Toggles to see results
  // ----------------------------------------
  // preserveStatic: false,
  // preserveVars: true,
  // updateURLs: false,
  // variables: { '--color': 'purple' },
  // ----------------------------------------
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
